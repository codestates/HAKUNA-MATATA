const { post, user, comment } = require('../../models');
const userAuthen = require('../authentication/userAuthen');

module.exports = {
  get: async (req, res) => {
    try {
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

      // 모든 댓글을 조회한다.
      const comments = await comment.findAll({
        where: { post_id: postInfo.id },
        attributes: ['id', 'post_id', 'content', 'created_at', 'updated_at'],
        include: [
          {
            model: user, // users 테이블 조인
            attributes: ['login', 'nickname', 'image']
          }
        ]
      });

      // 모든 댓글을 반환한다.
      res.status(200).json({ comments });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  },
  post: async (req, res) => {
    try {
      // 로그인 인증 검사
      const userInfo = await userAuthen(req, res);

      let { postId } = req.params;

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

      const { content } = req.body;

      // 요청이 잘못된 경우
      if (!content) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      // 새로운 댓글을 생성한다.
      const newComment = await comment.create({
        user_id: userInfo.id,
        post_id: postInfo.id,
        content
      });

      // 게시물의 댓글 수를 + 1 한다.
      const updatePost = await postInfo.update(
        { comments: postInfo.dataValues.comments + 1 },
        { where: { id: postId } }
      );

      // 새로 생성한 댓글의 아이디를 반환한다.
      res.status(201).json({ id: newComment.id });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  },
  patch: async (req, res) => {
    try {
      // 로그인 인증 검사
      const userInfo = await userAuthen(req, res);

      let { postId, commentId } = req.params;

      // 매개 변수가 숫자가 아니면 다음을 리턴한다.
      if (isNaN(postId) || isNaN(commentId)) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      postId = Number(postId);
      commentId = Number(commentId);
      const postInfo = await post.findOne({ where: { id: postId } });
      const commentInfo = await comment.findOne({ where: { id: commentId } });

      // 게시물이나 댓글이 존재하지 않는 경우 다음을 리턴한다.
      if (!postInfo || !commentInfo) {
        return res.status(404).json({ message: 'Not Found!' });
      }

      // 현재 유저가 게시물을 수정할 권한이 없는경우 다음을 리턴한다.
      if (userInfo.id !== commentInfo.user_id && userInfo.role !== 0) {
        return res.status(403).json({ message: 'Not authorized!' });
      }

      const { content } = req.body;

      // 요청이 잘못된 경우
      if (!content) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      // 댓글 내용을 업데이트한다.
      const updateComment = await comment.update(
        { content },
        { where: { id: commentId } }
      );

      // 업데이트한 댓글 정보를 조회한다.
      const newCommentInfo = await comment.findOne({
        where: { id: commentId },
        attributes: ['id', 'post_id', 'content', 'created_at', 'updated_at'],
        include: [
          {
            model: user, // users 테이블 조인
            attributes: ['login', 'nickname', 'image']
          }
        ]
      });

      // 업데이트한 댓글을 반환한다.
      res.status(200).json({ updateComment, newCommentInfo });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  },
  delete: async (req, res) => {
    try {
      // 로그인 인증 검사
      const userInfo = await userAuthen(req, res);

      let { postId, commentId } = req.params;

      // 매개 변수가 숫자가 아니면 다음을 리턴한다.
      if (isNaN(postId) || isNaN(commentId)) {
        return res.status(400).json({ message: 'Bad Request!' });
      }

      postId = Number(postId);
      commentId = Number(commentId);
      const postInfo = await post.findOne({ where: { id: postId } });
      const commentInfo = await comment.findOne({ where: { id: commentId } });

      // 게시물이나 댓글이 존재하지 않는 경우 다음을 리턴한다.
      if (!postInfo || !commentInfo) {
        return res.status(404).json({ message: 'Not Found!' });
      }

      // 현재 유저가 게시물을 수정할 권한이 없는경우 다음을 리턴한다.
      if (userInfo.id !== commentInfo.user_id && userInfo.role !== 0) {
        return res.status(403).json({ message: 'Not authorized!' });
      }

      // 댓글을 삭제한다.
      const deleteCommentCount = await comment.destroy({
        where: { id: commentId }
      });

      // 게시물의 댓글 수를 - 1 한다.
      const updatePost = await postInfo.update(
        { comments: postInfo.dataValues.comments - 1 },
        { where: { id: postId } }
      );

      // 삭제된 댓글 아이디를 반환한다.
      res.status(200).json({ id: commentInfo.id });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  }
};
