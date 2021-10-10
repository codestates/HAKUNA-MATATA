require('dotenv').config();
const axios = require('axios');
const { user } = require('../../models');
const {
  generateAccessToken,
  sendAccessToken,
  checkAccessToken
} = require('../tokenFunction');

const github_Client_ID = process.env.GITHUB_CLIENT_ID;
const github_Client_Secret = process.env.GITHUB_CLIENT_SECRET;

const github_Login_URL = 'https://github.com/login/oauth/access_token';
const github_Info_URL = 'https://api.github.com/user';

module.exports = async (req, res) => {
  try {
    // 이미 로그인 되어있는 경우
    const { accessToken } = req.cookies;
    const accessTokenData = checkAccessToken(accessToken);
    if (accessTokenData) {
      return res.status(400).json({ message: 'Already logged in!' });
    }

    const { authorizationCode } = req.body;

    // 요청이 잘못된 경우
    if (!authorizationCode) {
      return res.status(400).json({ message: 'Bad Request!' });
    }

    // authorizationCode를 이용해 accessToken을 발급 받는다.
    const result = await axios
      .post(
        github_Login_URL,
        {
          client_id: github_Client_ID,
          client_secret: github_Client_Secret,
          code: authorizationCode
        },
        { headers: { accept: 'application/json' } }
      )
      .catch((err) => {
        console.error(err.message);
        res.status(401).json({ message: 'GitHub authorizationCode error!' });
      });

    let { access_token } = result.data;
    //console.log(access_token);

    // accessToken을 통해 로그인한 유저 정보 가져온다.
    const gitHubInfo = await axios
      .get(github_Info_URL, {
        headers: { authorization: `Bearer ${access_token}` }
      })
      .catch((err) => {
        console.error(err.message);
        res.status(401).json({ message: 'GitHub accessToken error!' });
      });

    //console.log(gitHubInfo.data);

    // 유저 정보를 확인하여 미등록 상태면 데이터베이스에 저장한다.
    let userInfo = await user.findOne({
      where: { email: `${gitHubInfo.data.login}@github.com` }
    });

    if (!userInfo) {
      userInfo = await user.create({
        login: gitHubInfo.data.login,
        email: `${gitHubInfo.data.login}@github.com`
      });
    }

    //console.log(userInfo);

    // 회원의 비밀번호와 역할을 삭제한다.
    delete userInfo.dataValues.password;
    delete userInfo.dataValues.role;

    // 토큰을 발급하고 쿠키에 저장한다.
    const newAccessToken = generateAccessToken(userInfo.dataValues);
    sendAccessToken(res, newAccessToken);

    // 회원 정보를 반환한다.
    res.status(200).json({ userInfo });
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: 'GitHub error!' });
  }
};
