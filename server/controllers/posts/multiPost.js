const models = require('../../models');
const { Op } = require('sequelize');

module.exports = {
  get: async (req, res) => {
    try {
      let { user, category, offset, limit, order, sort, content } = req.query;

      if (category === '전체') category = null;

      // 정렬 : 기본 값은 id 기준 DESC 이다.
      if (order !== 'views' && order !== 'likes' && order !== 'comments') {
        order = null;
      }
      if (
        sort !== 'DESC' &&
        sort !== 'ASC' &&
        sort !== 'desc' &&
        sort !== 'asc'
      ) {
        sort = 'ASC';
      }

      // 페이지네이션 : 리미트의 기본 조회 값은 9 이다.
      if (isNaN(limit)) limit = 9;
      else {
        if (limit < 1) limit = 1;
        else limit = Number(limit);
      }

      const total = await models.post.count();
      const lastPage = Math.ceil(total / limit);

      // 페이지네이션 : 오프셋은 문자, 음수 조회 시 최소값으로, 페이지 범위 초과 조회 시 최대값으로 적용된다.
      if (isNaN(offset) || Number(offset) < 1) offset = 1;
      else if (Number(offset) > lastPage) offset = lastPage;
      else offset = Number(offset);

      // 모든 게시물 조회한다.
      const posts = await models.post.findAndCountAll({
        where: {
          [Op.and]: [
            content
              ? {
                  [Op.or]: [
                    { title: { [Op.like]: '%' + content + '%' } },
                    { content: { [Op.like]: '%' + content + '%' } }
                  ]
                }
              : null
          ]
        },
        attributes: [
          'id',
          'title',
          'image',
          'comments',
          'likes',
          'views',
          'created_at',
          'updated_at'
        ],
        include: [
          {
            model: models.category, // categories 테이블 조인
            attributes: ['name'],
            where: category ? { name: category } : {}
          },
          {
            model: models.user, // users 테이블 조인
            attributes: ['nickname', 'image'],
            where: user ? { id: Number(user) } : {}
          }
        ],
        order: [order ? [order, 'DESC'] : ['id', 'DESC']],
        offset: (offset - 1) * limit,
        limit: limit
      });

      // 모든 게시물을 반환한다.
      return res.status(200).json({
        posts: { count: posts.count, page: offset, rows: posts.rows }
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error!' });
    }
  }
};
