const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const { user } = require('../../models');
const userAuthen = require('../authentication/userAuthen');

module.exports = {
  get: async (req, res) => {
    try {
      // 로그인 인증 검사
      const userInfo = await userAuthen(req, res);

      // 회원의 비밀번호와 역할을 삭제한다.
      delete userInfo.dataValues.password;
      delete userInfo.dataValues.role;

      // 회원 정보를 반환한다.
      res.status(200).json({ userInfo });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  },
  patch: async (req, res) => {
    try {
      // 로그인 인증 검사
      const userInfo = await userAuthen(req, res);
      const { nickname, userBio, password } = req.body;
      console.log(nickname, userBio);
      // 이미 존재하는 닉네임이면 요청을 거절한다.
      const findUserInfos = await user.findOne({
        where: {
          nickname,
          [Op.not]: [{ id: userInfo.id }]
        }
      });
      if (findUserInfos) {
        return res
          .status(409)
          .json({ message: 'This email information cannot be registered' });
      }

      // 요청 바디에 password가 있다면 새로운 비밀번호를 해싱한다.
      let hash;
      if (password) {
        hash = await bcrypt.hash(password, 12);
      }

      // 회원의 정보를 업데이트한다.
      const updateUserId = await user.update(
        {
          nickname: nickname !== null ? nickname : userInfo.nickname,
          bio: userBio !== null ? userBio : userInfo.bio,
          password: password !== null ? hash : userInfo.password
        },
        { where: { id: userInfo.id } }
      );

      // 업데이트한 회원의 정보를 조회한다.
      const newUserInfo = await user.findOne({ where: { id: userInfo.id } });

      // 회원의 비밀번호와 역할을 삭제한다.
      delete newUserInfo.dataValues.password;
      delete newUserInfo.dataValues.role;

      // 업데이트한 회원의 정보를 반환한다.
      res.status(200).json({ userInfo: newUserInfo });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  },
  delete: async (req, res) => {
    try {
      // 로그인 인증 검사
      const userInfo = await userAuthen(req, res);

      // 계정을 삭제한다.
      const deleteCount = await user.destroy({ where: { id: userInfo.id } });

      // 쿠키를 삭제한다.
      res.cookie('accessToken', null, { maxAge: 0 });

      // 삭제한 회원 아이디를 리턴한다.
      res.status(200).json({ id: userInfo.id });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  }
};
