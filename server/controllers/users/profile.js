const fs = require('fs');
const path = require('path');
const { user } = require('../../models');
const userAuthen = require('../authentication/userAuthen');
const uploadProfile = require('../../middlewares/uploadProfile');

module.exports = {
  get: async (req, res) => {
    try {
      // 로그인 인증 검사
      const userInfo = await userAuthen(req, res);
      // 이미지 파일 존재 확인 후 리턴
      try {
        fs.readFileSync(path.join(__dirname, `../../${userInfo.image}`));
        return res.sendFile(path.join(__dirname, `../../${userInfo.image}`));
      } catch (err) {
        return res.status(404).json({ message: 'Not Found!' });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  },
  errhandle: async (req, res, next) => {
    try {
      uploadProfile(req, res, (err) => {
        // upload 권한이 없는 경우
        if (err) {
          return res.status(400).json({ message: err.message });
        }
        // upload 할 파일이 존재하지 않는 경우
        if (req.file === undefined) {
          return res.status(400).json({ message: 'Bad Request! 존재안함' });
        }
        req.file = req.file;
        next();
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  },
  upload: async (req, res) => {
    try {
      // 로그인 인증 검사
      const userInfo = await userAuthen(req, res);

      // 회원의 프로필 정보를 업데이트한다.
      const updateUserId = await user.update(
        { image: req.file.path },
        { where: { id: userInfo.id } }
      );

      // ok 메세지를 반환한다.
      res.status(200).json({ message: 'ok' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  }
};
