const bcrypt = require('bcrypt');
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

      const { userImage, userBio, nickname, password } = req.body;

      // 요청 바디에 password가 있다면 새로운 비밀번호를 해싱한다.
      let hash;
      if (password) {
        hash = await bcrypt.hash(password, 12);
      }

      // 회원의 정보를 업데이트한다.
      const updateUserId = await user.update(
        {
          image: userImage !== null ? userImage : userInfo.image,
          bio: userBio !== null ? userBio : userInfo.bio,
          nickname: nickname !== null ? nickname : userInfo.nickname,
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
