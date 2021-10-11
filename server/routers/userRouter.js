const fs = require('fs');
const path = require('path');
const multer = require('multer');
const { user } = require('../models');
const { checkAccessToken } = require('../controllers/tokenFunction');
const userAuthen = require('../controllers/authentication/userAuthen');

const router = require('express').Router();
const { users, oauth } = require('../controllers');

router.post('/signup', users.signup);
router.post('/signin', users.signin);
router.post('/logout', users.logout);
router.post('/oauth/github', oauth.github);

router
  .route('/userinfo')
  .get(users.userinfo.get)
  .patch(users.userinfo.patch)
  .delete(users.userinfo.delete);

// User Profile Upload
const diskStorage = multer.diskStorage({
  async destination(req, file, done) {
    // 쿠키에 에세스 토큰이 있는지 확인한다.
    const { accessToken } = req.cookies;
    if (!accessToken) done(new Error('Access token not provided!'));

    // 에세스 토큰이 유효한지 확인한다.
    const accessTokenData = checkAccessToken(accessToken);
    if (!accessTokenData) done(new Error('Invalid access token!'));

    // 에세스 토큰 정보가 유효한지 확인한다.
    const { login } = accessTokenData;
    const userInfo = await user.findOne({ where: { login } });
    if (!userInfo) done(new Error('Not authorized!'));

    try {
      fs.readdirSync(`uploads/profile/${userInfo.id}`);
    } catch (err) {
      console.log('user profile 폴더가 없어 user profile 폴더를 생성합니다.');
      fs.mkdirSync(`uploads/profile/${userInfo.id}`);
    }

    done(null, `uploads/profile/${userInfo.id}/`);
  },
  filename(req, file, done) {
    const ext = path.extname(file.originalname);
    done(null, path.basename(Date.now() + '-' + file.originalname, ext) + ext);
  }
});

const uploadProfile = multer({
  storage: diskStorage,
  limits: { fileSize: 5 * 1024 * 1024 }
});

// Profile Upload
router.post('/profile', uploadProfile.single('image'), async (req, res) => {
  try {
    // 로그인 인증 검사
    const userInfo = await userAuthen(req, res);

    console.log(req.file, req.body);
    if (!req.file) {
      return res.status(400).send('oh no~~');
    }

    // 회원의 정보를 업데이트한다.
    const updateUserId = await user.update(
      { image: req.file.path },
      { where: { id: userInfo.id } }
    );

    res.status(200).json({ message: 'ok' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error!' });
  }
});

module.exports = router;
