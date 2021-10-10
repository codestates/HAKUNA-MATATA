const router = require('express').Router();
const { posts } = require('../controllers');

router.route('/').get(posts.multiPost.get).post(posts.addPost);

router
  .route('/:postId')
  .get(posts.singlePost.get)
  .patch(posts.singlePost.patch)
  .delete(posts.singlePost.delete);

router
  .route('/:postId/likes')
  .post(posts.postLikes.post)
  .delete(posts.postLikes.delete);

router
  .route('/:postId/comments')
  .get(posts.comments.get)
  .post(posts.comments.post)
  .patch(posts.comments.patch)
  .delete(posts.comments.delete);

module.exports = router;
