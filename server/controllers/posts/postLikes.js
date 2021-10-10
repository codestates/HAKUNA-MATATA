const { post, user, like } = require('../../models');
const userAuthen = require('../authentication/userAuthen');

module.exports = {
  post: async (req, res) => {
    try {
      // 로그인 인증 검사
      const userInfo = await userAuthen(req, res);

      let postId = req.params.postId;

      // 매개 변수가 숫자가 아니면 다음을 리턴한다.
      if (isNaN(postId)) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      postId = Number(postId);
      const postInfo = await post.findOne({ where: { id: postId } });

      // 게시물이 존재하지 않는 경우 다음을 리턴한다.
      if (!postInfo) {
        return res.status(404).json({ message: 'Not Found!' });
      }

      const likeInfo = await like.findOne({
        where: { user_id: userInfo.id, post_id: postInfo.dataValues.id }
      });

      // 이미 해당 게시물에 해당 유저가 좋아요를 누른 경우 다음을 리턴한다.
      if (likeInfo) {
        return res.status(400).json({ message: 'Already liked it!' });
      }

      // likes 테이블에 레코드 생성한다.
      const newLikeInfo = await like.create({
        user_id: userInfo.id,
        post_id: postInfo.dataValues.id
      });

      // 게시물의 좋아요 수를 + 1 한다.
      const newPostInfo = await post.update(
        { likes: postInfo.dataValues.likes + 1 },
        { where: { id: postId } }
      );

      postInfo.dataValues.likes = postInfo.dataValues.likes + 1;

      // 생성된 좋아요 아이디를 리턴한다.
      return res.json({
        id: newLikeInfo.dataValues.id,
        postInfo,
        message: 'successfully created!'
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error! ' });
    }
  },
  delete: async (req, res) => {
    try {
      // 로그인 인증 검사
      const userInfo = await userAuthen(req, res);

      let postId = req.params.postId;

      // 매개 변수가 숫자가 아니면 다음을 리턴한다.
      if (isNaN(postId)) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      postId = Number(postId);
      const postInfo = await post.findOne({ where: { id: postId } });

      // 게시물이 존재하지 않는 경우 다음을 리턴한다.
      if (!postInfo) {
        return res.status(404).json({ message: 'Not Found!' });
      }

      const likeInfo = await like.findOne({
        where: { user_id: userInfo.id, post_id: postInfo.dataValues.id }
      });

      // 해당 게시물에 해당 유저가 좋아요를 누르지 않은 경우 다음을 리턴한다.
      if (!likeInfo) {
        return res.status(400).json({ message: 'Already liked it!' });
      }

      // likes 테이블에 레코드 삭제한다.
      const deleteCount = await like.destroy({ where: { id: likeInfo.id } });

      // 게시물의 좋아요 수를 - 1 한다.
      const newPostInfo = await post.update(
        { likes: postInfo.dataValues.likes - 1 },
        { where: { id: postId } }
      );

      postInfo.dataValues.likes = postInfo.dataValues.likes - 1;

      // 삭제한 좋아요 아이디를 리턴한다.
      res.status(200).json({
        id: likeInfo.id,
        postInfo,
        message: 'successfully deleted!'
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error! ' });
    }
  }
};
