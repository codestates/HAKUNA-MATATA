const models = require('../../models');
const userAuthen = require('../authentication/userAuthen');

module.exports = async (req, res) => {
  try {
    // 로그인 인증 검사
    const userInfo = await userAuthen(req, res);

    const { category, title, content } = await req.body;

    // 요청이 잘못된 경우
    if (!category || !title || !content) {
      return res.status(400).json({ message: 'Bad Request!' });
    }

    // 카테고리를 조회한다.
    const categoryInfo = await models.category.findOne({
      where: { name: category }
    });

    // 요청이 잘못된 경우
    if (!categoryInfo) {
      return res.status(400).json({ message: 'Bad Request!' });
    }

    let imageName;
    if (categoryInfo.name === '연애') imageName = 'romantic';
    else if (categoryInfo.name === '친구') imageName = 'friends';
    else if (categoryInfo.name === '직장') imageName = 'work';
    else if (categoryInfo.name === '가족') imageName = 'family';

    // 새로운 게시물을 생성한다.
    const newPost = await models.post.create({
      user_id: userInfo.id,
      image: `/images/thumbnail/${imageName}.jpg`,
      title,
      content,
      category_id: categoryInfo.id
    });

    // 새로 생성한 게시물의 아이디를 반환한다.
    res.status(201).json({ id: newPost.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error!' });
  }
};
