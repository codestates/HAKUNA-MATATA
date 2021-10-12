const fs = require('fs');
const path = require('path');
const multer = require('multer');
const { user } = require('../models');
const { checkAccessToken } = require('../controllers/tokenFunction');

const storage = multer.diskStorage({
  async destination(req, file, done) {
    try {
      // 쿠키에 에세스 토큰이 있는지 확인한다.
      const { accessToken } = req.cookies;
      if (!accessToken) {
        return done({ code: 401, message: 'Access token not provided!' });
      }

      // 에세스 토큰이 유효한지 확인한다.
      const accessTokenData = checkAccessToken(accessToken);
      if (!accessTokenData) {
        return done({ code: 401, message: 'Access token not provided!' });
      }

      // 에세스 토큰 정보가 유효한지 확인한다.
      const { login } = accessTokenData;
      const userInfo = await user.findOne({ where: { login } });
      if (!userInfo) {
        return done({ code: 403, message: 'Not authorized!' });
      }

      try {
        fs.readdirSync(`uploads/profile/${userInfo.id}`);
      } catch (err) {
        console.log('user profile 폴더가 없어 user profile 폴더를 생성합니다.');
        fs.mkdirSync(`uploads/profile/${userInfo.id}`);
      }

      // 폴더 선택 성공
      done(null, `uploads/profile/${userInfo.id}/`);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  },
  filename(req, file, done) {
    const ext = path.extname(file.originalname);
    done(null, path.basename(Date.now() + '-' + file.originalname, ext) + ext);
  }
});

const uploadProfile = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }
}).single('image');

module.exports = uploadProfile;
