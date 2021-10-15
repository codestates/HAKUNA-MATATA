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

router.get('/profile', users.profile.get);
router.post('/profile', users.profile.errhandle, users.profile.upload);

module.exports = router;
