const { post, user, category } = require('../../models');
const userAuthen = require('../authentication/userAuthen');

module.exports = {
  get: async (req, res) => {
    try {
      let postId = req.params.postId;

      // 매개 변수가 숫자가 아니면 다음을 리턴한다.
      if (isNaN(postId)) {
        return res.status(400).json({ message: 'Bad Request!' });
      } else {
        postId = Number(postId);
      }

      // 단일 게시물을 조회한다.
      const postInfo = await post.findOne({
        where: { id: postId },
        attributes: [
          'id',
          'title',
          'content',
          'image',
          'comments',
          'likes',
          'views',
          'created_at',
          'updated_at'
        ],
        include: [
          {
            model: category, // categories 테이블 조인
            attributes: ['name']
          },
          {
            model: user, // users 테이블 조인
            attributes: ['login', 'nickname', 'image']
          }
        ]
      });

      // 존재하지 않는 경우 다음을 리턴한다.
      if (!postInfo) return res.status(404).json({ message: 'Not Found!' });

      // 게시물의 조회수를 + 1 한다.
      const updateId = await postInfo.update(
        { views: postInfo.dataValues.views + 1 },
        { where: { id: postId } }
      );

      postInfo.dataValues.views = postInfo.dataValues.views + 1;

      // 단일 게시물을 리턴한다.
      return res.json({ posts: postInfo });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error! ' });
    }
  },
  patch: async (req, res) => {
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

      // 현재 유저가 게시물을 수정할 권한이 없는경우 다음을 리턴한다.
      if (userInfo.id !== postInfo.user_id) {
        return res.status(403).json({ message: 'Not authorized!' });
      }

      const { title, content } = req.body;

      // 게시물 정보를 업데이트한다.
      const updatePost = await post.update(
        {
          title: title !== null ? title : postInfo.title,
          content: content !== null ? content : postInfo.content
        },
        { where: { id: postInfo.id } }
      );

      // 업데이트한 게시물 정보를 조회한다.
      const newPostInfo = await post.findOne({
        where: { id: postInfo.id },
        attributes: [
          'id',
          'title',
          'content',
          'image',
          'comments',
          'likes',
          'views',
          'created_at',
          'updated_at'
        ],
        include: [
          {
            model: category, // categories 테이블 조인
            attributes: ['name']
          },
          {
            model: user, // users 테이블 조인
            attributes: ['login', 'nickname', 'image']
          }
        ]
      });

      // 업데이트한 게시물 정보를 반환한다.
      res.status(200).json({ posts: newPostInfo });
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

      // 현재 유저가 게시물을 삭제할 권한이 없는경우 다음을 리턴한다.
      if (userInfo.id !== postInfo.user_id) {
        return res.status(403).json({ message: 'Not authorized!' });
      }

      // 게시물 삭제한다.
      const deleteCount = await post.destroy({ where: { id: postInfo.id } });

      // 삭제된 게시물 아이디를 반환한다.
      res.status(200).json({ id: postInfo.id });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  }
};
