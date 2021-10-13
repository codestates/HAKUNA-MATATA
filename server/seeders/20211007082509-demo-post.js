'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('posts', [
      {
        user_id: 1,
        image: '/images/thumbnail/desert.jpg',
        title: '페어가 힘들게 합니다.',
        content: '페어가 자꾸 저를 힘들게 합니다. 저를...',
        category_id: 2,
        comments: 5,
        likes: 30,
        views: 55
      },
      {
        user_id: 1,
        image: '/images/thumbnail/romantic.jpg',
        title: '연인 관계란... 정말 어렵네요...',
        content:
          '이렇게 까지 어려울 줄 몰랐습니다... 노력하는 제가 이상한가요?',
        category_id: 1,
        comments: 5,
        likes: 5,
        views: 33
      },
      {
        user_id: 2,
        image: '/images/thumbnail/romantic.jpg',
        title: '그래도 힘내 보려고 합니다.',
        content:
          '다른 분들 생각이 궁금합니다. 댓글 남겨 주시면 감사하겠습니다...',
        category_id: 1,
        comments: 5,
        likes: 2,
        views: 5
      },
      {
        user_id: 1,
        image: '/images/thumbnail/desert.jpg',
        title: '친구 사이에 이게 가능하다고 보십니까??',
        content: '제가 예민하게 반응한 건지 궁금합니다. 제가 이상한 건가요????',
        category_id: 2,
        comments: 5,
        likes: 0,
        views: 10
      },
      {
        user_id: 2,
        image: '/images/thumbnail/desert.jpg',
        title: '솔직히 말해서 친구 사이에 어디까지?',
        content: '너무 선 넘는 듯...',
        category_id: 2,
        comments: 1,
        likes: 1,
        views: 4
      },
      {
        user_id: 3,
        image: '/images/thumbnail/desert.jpg',
        title: '친구들이 저를 은근히 무시하네요.',
        content: '저는 친구들이 너무 좋은데 자꾸 저를 소외시키는 것 같아요.',
        category_id: 2,
        comments: 35,
        likes: 5,
        views: 101
      },
      {
        user_id: 2,
        image: '/images/thumbnail/desert.jpg',
        title: '친구가 자꾸 저를 따라합니다. ㅜㅜ',
        content: '저도 진짜 신경 안쓰려고 했는데 한 두번 이여야지... 에휴',
        category_id: 2,
        comments: 5,
        likes: 1,
        views: 16
      },
      {
        user_id: 2,
        image: '/images/thumbnail/desert.jpg',
        title: '이 친구와 손절해야하는지 모르겠습니다.',
        content: '이 친구와 손절해야하는지 모르겠습니다...ㅜㅜ',
        category_id: 2,
        comments: 5,
        likes: 0,
        views: 25
      },
      {
        user_id: 1,
        image: '/images/thumbnail/desert.jpg',
        title: '고등학교 때 친구가 평생갈까요??',
        content: '예전과는 너무 달라진 현실 때문에 막막합니다...ㅜㅠㅠ',
        category_id: 2,
        comments: 5,
        likes: 2,
        views: 46
      },
      {
        user_id: 3,
        image: '/images/thumbnail/desert.jpg',
        title: '제 친구를 응원합니다.',
        content: '제 친구는 열심히 코딩 공부를 합니다. 항상 응원합니다!!!',
        category_id: 2,
        comments: 2,
        likes: 22,
        views: 102
      },
      {
        user_id: 1,
        image: '/images/thumbnail/romantic.jpg',
        title: '제 애인이 바람을 피는 것 같아요.',
        content: '제가 어쩌다 핸드폰을 보게되었는데...',
        category_id: 1,
        comments: 5,
        likes: 22,
        views: 102
      },
      {
        user_id: 1,
        image: '/images/thumbnail/desert.jpg',
        title: '페어가 힘들게 합니다.',
        content: '페어가 자꾸 저를 힘들게 합니다. 저를...',
        category_id: 2,
        comments: 5,
        likes: 30,
        views: 55
      },
      {
        user_id: 1,
        image: '/images/thumbnail/romantic.jpg',
        title: '연인 관계란... 정말 어렵네요...',
        content:
          '이렇게 까지 어려울 줄 몰랐습니다... 노력하는 제가 이상한가요?',
        category_id: 1,
        comments: 5,
        likes: 5,
        views: 33
      },
      {
        user_id: 2,
        image: '/images/thumbnail/romantic.jpg',
        title: '그래도 힘내 보려고 합니다.',
        content:
          '다른 분들 생각이 궁금합니다. 댓글 남겨 주시면 감사하겠습니다...',
        category_id: 1,
        comments: 5,
        likes: 2,
        views: 5
      },
      {
        user_id: 1,
        image: '/images/thumbnail/desert.jpg',
        title: '친구 사이에 이게 가능하다고 보십니까??',
        content: '제가 예민하게 반응한 건지 궁금합니다. 제가 이상한 건가요????',
        category_id: 2,
        comments: 5,
        likes: 0,
        views: 10
      },
      {
        user_id: 2,
        image: '/images/thumbnail/desert.jpg',
        title: '솔직히 말해서 친구 사이에 어디까지?',
        content: '너무 선 넘는 듯...',
        category_id: 2,
        comments: 1,
        likes: 1,
        views: 4
      },
      {
        user_id: 3,
        image: '/images/thumbnail/desert.jpg',
        title: '친구들이 저를 은근히 무시하네요.',
        content: '저는 친구들이 너무 좋은데 자꾸 저를 소외시키는 것 같아요.',
        category_id: 2,
        comments: 35,
        likes: 5,
        views: 101
      },
      {
        user_id: 2,
        image: '/images/thumbnail/desert.jpg',
        title: '친구가 자꾸 저를 따라합니다. ㅜㅜ',
        content: '저도 진짜 신경 안쓰려고 했는데 한 두번 이여야지... 에휴',
        category_id: 2,
        comments: 5,
        likes: 1,
        views: 16
      },
      {
        user_id: 2,
        image: '/images/thumbnail/desert.jpg',
        title: '이 친구와 손절해야하는지 모르겠습니다.',
        content: '이 친구와 손절해야하는지 모르겠습니다...ㅜㅜ',
        category_id: 2,
        comments: 5,
        likes: 0,
        views: 25
      },
      {
        user_id: 1,
        image: '/images/thumbnail/desert.jpg',
        title: '고등학교 때 친구가 평생갈까요??',
        content: '예전과는 너무 달라진 현실 때문에 막막합니다...ㅜㅠㅠ',
        category_id: 2,
        comments: 5,
        likes: 2,
        views: 46
      },
      {
        user_id: 3,
        image: '/images/thumbnail/desert.jpg',
        title: '제 친구를 응원합니다.',
        content: '제 친구는 열심히 코딩 공부를 합니다. 항상 응원합니다!!!',
        category_id: 2,
        comments: 2,
        likes: 22,
        views: 102
      },
      {
        user_id: 1,
        image: '/images/thumbnail/romantic.jpg',
        title: '제 애인이 바람을 피는 것 같아요.',
        content: '제가 어쩌다 핸드폰을 보게되었는데...',
        category_id: 1,
        comments: 5,
        likes: 22,
        views: 102
      },
      {
        user_id: 1,
        image: '/images/thumbnail/desert.jpg',
        title: '페어가 힘들게 합니다.',
        content: '페어가 자꾸 저를 힘들게 합니다. 저를...',
        category_id: 2,
        comments: 5,
        likes: 30,
        views: 55
      },
      {
        user_id: 1,
        image: '/images/thumbnail/romantic.jpg',
        title: '연인 관계란... 정말 어렵네요...',
        content:
          '이렇게 까지 어려울 줄 몰랐습니다... 노력하는 제가 이상한가요?',
        category_id: 1,
        comments: 5,
        likes: 5,
        views: 33
      },
      {
        user_id: 2,
        image: '/images/thumbnail/romantic.jpg',
        title: '그래도 힘내 보려고 합니다.',
        content:
          '다른 분들 생각이 궁금합니다. 댓글 남겨 주시면 감사하겠습니다...',
        category_id: 1,
        comments: 5,
        likes: 2,
        views: 5
      },
      {
        user_id: 1,
        image: '/images/thumbnail/desert.jpg',
        title: '친구 사이에 이게 가능하다고 보십니까??',
        content: '제가 예민하게 반응한 건지 궁금합니다. 제가 이상한 건가요????',
        category_id: 2,
        comments: 5,
        likes: 0,
        views: 10
      },
      {
        user_id: 2,
        image: '/images/thumbnail/desert.jpg',
        title: '솔직히 말해서 친구 사이에 어디까지?',
        content: '너무 선 넘는 듯...',
        category_id: 2,
        comments: 1,
        likes: 1,
        views: 4
      },
      {
        user_id: 3,
        image: '/images/thumbnail/desert.jpg',
        title: '친구들이 저를 은근히 무시하네요.',
        content: '저는 친구들이 너무 좋은데 자꾸 저를 소외시키는 것 같아요.',
        category_id: 2,
        comments: 35,
        likes: 5,
        views: 101
      },
      {
        user_id: 2,
        image: '/images/thumbnail/desert.jpg',
        title: '친구가 자꾸 저를 따라합니다. ㅜㅜ',
        content: '저도 진짜 신경 안쓰려고 했는데 한 두번 이여야지... 에휴',
        category_id: 2,
        comments: 5,
        likes: 1,
        views: 16
      },
      {
        user_id: 2,
        image: '/images/thumbnail/desert.jpg',
        title: '이 친구와 손절해야하는지 모르겠습니다.',
        content: '이 친구와 손절해야하는지 모르겠습니다...ㅜㅜ',
        category_id: 2,
        comments: 5,
        likes: 0,
        views: 25
      },
      {
        user_id: 1,
        image: '/images/thumbnail/desert.jpg',
        title: '고등학교 때 친구가 평생갈까요??',
        content: '예전과는 너무 달라진 현실 때문에 막막합니다...ㅜㅠㅠ',
        category_id: 2,
        comments: 5,
        likes: 2,
        views: 46
      },
      {
        user_id: 3,
        image: '/images/thumbnail/desert.jpg',
        title: '제 친구를 응원합니다.',
        content: '제 친구는 열심히 코딩 공부를 합니다. 항상 응원합니다!!!',
        category_id: 2,
        comments: 2,
        likes: 22,
        views: 102
      },
      {
        user_id: 1,
        image: '/images/thumbnail/romantic.jpg',
        title: '제 애인이 바람을 피는 것 같아요.',
        content: '제가 어쩌다 핸드폰을 보게되었는데...',
        category_id: 1,
        comments: 5,
        likes: 22,
        views: 102
      },
      {
        user_id: 1,
        image: '/images/thumbnail/desert.jpg',
        title: '페어가 힘들게 합니다.',
        content: '페어가 자꾸 저를 힘들게 합니다. 저를...',
        category_id: 2,
        comments: 5,
        likes: 30,
        views: 55
      },
      {
        user_id: 1,
        image: '/images/thumbnail/romantic.jpg',
        title: '연인 관계란... 정말 어렵네요...',
        content:
          '이렇게 까지 어려울 줄 몰랐습니다... 노력하는 제가 이상한가요?',
        category_id: 1,
        comments: 5,
        likes: 5,
        views: 33
      },
      {
        user_id: 2,
        image: '/images/thumbnail/romantic.jpg',
        title: '그래도 힘내 보려고 합니다.',
        content:
          '다른 분들 생각이 궁금합니다. 댓글 남겨 주시면 감사하겠습니다...',
        category_id: 1,
        comments: 5,
        likes: 2,
        views: 5
      },
      {
        user_id: 1,
        image: '/images/thumbnail/desert.jpg',
        title: '친구 사이에 이게 가능하다고 보십니까??',
        content: '제가 예민하게 반응한 건지 궁금합니다. 제가 이상한 건가요????',
        category_id: 2,
        comments: 5,
        likes: 0,
        views: 10
      },
      {
        user_id: 2,
        image: '/images/thumbnail/desert.jpg',
        title: '솔직히 말해서 친구 사이에 어디까지?',
        content: '너무 선 넘는 듯...',
        category_id: 2,
        comments: 1,
        likes: 1,
        views: 4
      },
      {
        user_id: 3,
        image: '/images/thumbnail/desert.jpg',
        title: '친구들이 저를 은근히 무시하네요.',
        content: '저는 친구들이 너무 좋은데 자꾸 저를 소외시키는 것 같아요.',
        category_id: 2,
        comments: 35,
        likes: 5,
        views: 101
      },
      {
        user_id: 2,
        image: '/images/thumbnail/desert.jpg',
        title: '친구가 자꾸 저를 따라합니다. ㅜㅜ',
        content: '저도 진짜 신경 안쓰려고 했는데 한 두번 이여야지... 에휴',
        category_id: 2,
        comments: 5,
        likes: 1,
        views: 16
      },
      {
        user_id: 2,
        image: '/images/thumbnail/desert.jpg',
        title: '이 친구와 손절해야하는지 모르겠습니다.',
        content: '이 친구와 손절해야하는지 모르겠습니다...ㅜㅜ',
        category_id: 2,
        comments: 5,
        likes: 0,
        views: 25
      },
      {
        user_id: 1,
        image: '/images/thumbnail/desert.jpg',
        title: '고등학교 때 친구가 평생갈까요??',
        content: '예전과는 너무 달라진 현실 때문에 막막합니다...ㅜㅠㅠ',
        category_id: 2,
        comments: 5,
        likes: 2,
        views: 46
      },
      {
        user_id: 3,
        image: '/images/thumbnail/desert.jpg',
        title: '제 친구를 응원합니다.',
        content: '제 친구는 열심히 코딩 공부를 합니다. 항상 응원합니다!!!',
        category_id: 2,
        comments: 2,
        likes: 22,
        views: 102
      },
      {
        user_id: 1,
        image: '/images/thumbnail/romantic.jpg',
        title: '제 애인이 바람을 피는 것 같아요.',
        content: '제가 어쩌다 핸드폰을 보게되었는데...',
        category_id: 1,
        comments: 5,
        likes: 22,
        views: 102
      },
      {
        user_id: 1,
        image: '/images/thumbnail/romantic.jpg',
        title: '제 애인이 바람을 피는 것 같아요.',
        content: '제가 어쩌다 핸드폰을 보게되었는데...',
        category_id: 1,
        comments: 5,
        likes: 22,
        views: 102
      },
      {
        user_id: 1,
        image: '/images/thumbnail/romantic.jpg',
        title: '제 애인이 바람을 피는 것 같아요.',
        content: '제가 어쩌다 핸드폰을 보게되었는데...',
        category_id: 1,
        comments: 5,
        likes: 22,
        views: 102
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('posts', null, {});
  }
};
