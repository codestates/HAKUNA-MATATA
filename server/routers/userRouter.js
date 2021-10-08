const router = require('express').Router();
const { users } = require('../controllers');

router.post('/signup', users.signup);
router.post('/signin', users.signin);
router.post('/logout', users.logout);

router
  .route('/userinfo')
  .get(users.userinfo.get)
  .patch(users.userinfo.patch)
  .delete(users.userinfo.delete);

module.exports = router;
