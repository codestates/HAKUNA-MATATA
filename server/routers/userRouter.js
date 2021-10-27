const router = require('express').Router();
const { users, oauth } = require('../controllers');
const uploadProfile = require('../middlewares/uploadProfile');

router.get('/auth', users.auth);

router
  .route('/userinfo')
  .get(users.userinfo.get)
  .patch(users.userinfo.patch)
  .delete(users.userinfo.delete);

router.post('/signup', users.signup);
router.post('/signin', users.signin);
router.post('/logout', users.logout);
router.post('/oauth/github', oauth.github);

router.post(
  '/profile',
  users.profile.validation,
  uploadProfile.single('image'),
  users.profile.upload
);

module.exports = router;
