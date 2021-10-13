'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('posts', [
      {
        user_id: 1,
        image: '/images/thumbnail/romantic.jpg',
        title: '안좋은 기억이 들춰질까봐 자꾸 겁이나요..',
        content:
          '어릴 때 우울증을 앓고 있었는데, 친하게 지내던 친구에게 이 사실을 우연히 고백했어요..그때 당시에는 너무 힘들었거든요.. 그 이후에 그 친구랑 가까워지고 저도 남자친구가 생기면서 셋이서 같이 붙어다니게 되었습니다. 그런데 이 친구가 제가 우울증을 앓았던 사실을 남자친구에게 얘기하려고 하더라구요.. 저는 어떻게 해야 할까요?',
        category_id: 1,
        likes: 30,
        views: 55
      },
      {
        user_id: 3,
        image: '/images/thumbnail/romantic.jpg',
        title: '연인 관계란... 정말 어렵네요...',
        content:
          '사소한 것 하나까지 다 맞춰야하고 기념일 안챙기면 서로 서운해하고.. 이런 관계 모두들 어떻게 생각하시나요??',
        category_id: 1,
        likes: 5,
        views: 33
      },
      {
        user_id: 2,
        image: '/images/thumbnail/romantic.jpg',
        title: '사랑하는 사람에게 힘내 보려고 합니다.',
        content:
          '요즘 여자친구가 너무 힘들어해요.. 여러가지 일들이 겹치다 보니까 스트레스를 많이 받더라구요 ㅜㅜ 그래서 저는 더 여자친구에게 귀 기울여주고 조금이라도 더 도움될 수 있도록 노력하려고 합니다!',
        category_id: 1,
        likes: 2,
        views: 5
      },
      {
        user_id: 1,
        image: '/images/thumbnail/romantic.jpg',
        title: '연인 사이에 이게 가능하다고 보십니까??',
        content:
          '아니 애인사이에 전 남친,전 여친 이런 주제로 말 하는게 가능하다고 생각하세요?? 저는 도저히 이해가 안가는데 여러분들 생각은 어떠신가요?!',
        category_id: 1,
        likes: 0,
        views: 10
      },
      {
        user_id: 2,
        image: '/images/thumbnail/romantic.jpg',
        title: '주변사람들이 자꾸 여친을 흉봐요..',
        content:
          '저는 오래된 여자친구가 있습니다 주변 친구들도 다 아는사이구요. 그런데 요즘들어서 자꾸 제 여자친구 흉을 보는거에요 어디서 다른 남자랑 있는걸봤다는둥, 너가 아깝다는둥 이런 말들을 어떻게 받아쳐야 할까요?',
        category_id: 1,
        likes: 1,
        views: 4
      },
      {
        user_id: 3,
        image: '/images/thumbnail/romantic.jpg',
        title: '남친이 저를 은근히 무시하네요.',
        content:
          '남친이랑 오랜만에 쇼핑갈 때 였어요. 제가 이 바지랑 위에 맨투맨이랑 입으면 너무 이쁠 것 같다고 어떠냐고 물어봤는데, 그렇게 입으면 친구들이랑 같이 못다닐껄? 이러는거에요.. 이게 맞다고 생각하세요?',
        category_id: 1,
        likes: 5,
        views: 101
      },
      {
        user_id: 2,
        image: '/images/thumbnail/romantic.jpg',
        title: '여친 지인이 자꾸 저를 따라해요..',
        content:
          '요즘들어서 커플데이트를 많이 하는데 어디 갈때마다 제 옷입는 스타일에 대해서 지적아닌 지적을 하는거에요;; 정작 본인은 후줄근한 츄리닝에 키는 땅콩만해서! 화가나는데 남친 지인이라서 뭐라고 하지도 못하겠고.. 이럴 땐 다들 어떻게 대처하시나요??',
        category_id: 1,
        likes: 1,
        views: 17
      },
      {
        user_id: 1,
        image: '/images/thumbnail/romantic.jpg',
        title: '제 연인과 그만둬야하는지 모르겠습니다.',
        content:
          '요즘 권태기가 온 것 같아요.. 예전처럼 얼굴을 봐도 좋지도 않고, 손을 잡아도 설레지가 않네요.. 이런 제가 이상한걸까요??',
        category_id: 1,
        likes: 0,
        views: 28
      },
      {
        user_id: 1,
        image: '/images/thumbnail/romantic.jpg',
        title: '사랑이 평생간다고 생각하세요??',
        content:
          '어느덧 4년차 커플입니다. 이제는 슬슬 결혼얘기도 나오고 하는데 저는 아직도 너무 남자친구가 좋고 바라만봐도 설레요 ㅎㅎ 근데 주변에서는 다들 한철이라고 하더라구요 어떻게 생각하시는지 여러분 생각이 궁금합니다.',
        category_id: 1,
        likes: 2,
        views: 49
      },
      {
        user_id: 3,
        image: '/images/thumbnail/romantic.jpg',
        title: '남자친구를 응원하고 싶어요!',
        content:
          '하루하루 열심히 살아가는 제 남자친구를 너무 응원하고 싶어지더라구요! 선물이 좋을지 마음이 담긴 편지가 좋을지 다른 분들 생각은 어떠신가요??',
        category_id: 1,
        likes: 22,
        views: 100
      },
      {
        user_id: 1,
        image: '/images/thumbnail/friends.jpg',
        title: '제 친한 친구가 바람을 피는 것 같아요.',
        content:
          '우연히 친구 핸드폰을 보게되었는데 모르는 여자한테서 톡이 오더라구요 내용이 연인과의 대화 내용이였는데 이 친구는 오래된 여자친구가 있어요.. 제가 오해하고 있는걸까요??',
        category_id: 2,
        likes: 7,
        views: 101
      },
      {
        user_id: 1,
        image: '/images/thumbnail/friends.jpg',
        title: '친구가 저를 너무 힘들게 하네요..',
        content:
          '게임을 너무 좋아하는 한 친구가 있습니다 가끔 피시방에도 같이 가서 하곤 하는데 이 친구는 틈만나면 저를 불러서 같이 게임을 하자고 하네요.. 기분나쁘지 않게 어떻게 거절하면 좋을까요??',
        category_id: 2,
        likes: 14,
        views: 52
      },
      {
        user_id: 2,
        image: '/images/thumbnail/friends.jpg',
        title: '친구 관계란... 정말 어렵네요...',
        content:
          '한쪽이 맞춰주면 다른 한쪽이 양보해주고 이런관계가 좋다고 생각하는데 친구 관계가 이렇게 어려운 거 였나요? ㅜㅜ',
        category_id: 2,
        likes: 9,
        views: 33
      },
      {
        user_id: 3,
        image: '/images/thumbnail/friends.jpg',
        title: '그래도 힘내 보려고 합니다!!',
        content:
          '친구 사이에 이런일도 있고 저런일도 있더라구요 다 제 뜻대로 되는게 어디있겠습니까 ㅎㅎ 모두들 힘내시고 화이팅하세요!!',
        category_id: 2,
        likes: 2,
        views: 4
      },
      {
        user_id: 3,
        image: '/images/thumbnail/friends.jpg',
        title: '친구 사이에 이게 가능하다고 보십니까??',
        content:
          '제가 시험이 있어서 너무 필요한 준비물이 생겼는데 친구가 가지고 있길래 빌려달라고 부탁했습니다. 그런데 막 화를 내더라구요.. 제가 예민하게 반응한 건지 궁금합니다. 제가 이상한 건가요????',
        category_id: 2,
        likes: 0,
        views: 15
      },
      {
        user_id: 2,
        image: '/images/thumbnail/friends.jpg',
        title: '솔직히 말해서 친구 사이에 어디까지 가능하다고 생각하세요?',
        content:
          '제가 한번 부탁을 들어주니까 하루가 멀다하고 이거해달라 저거해달라 하더라구요.. 딱 잘라서 말하고 싶은데 제 성격이 그렇지 못합니다.. 이게 친구 사이가 맞나요??',
        category_id: 2,
        likes: 15,
        views: 46
      },
      {
        user_id: 3,
        image: '/images/thumbnail/friends.jpg',
        title: '친구들이 저를 은근히 무시하네요.',
        content:
          '학창시절에 저랑 친한친구 3명이 있었습니다. 그 친구들은 다들 좋은 곳에 취직해서 잘 사는데 저는 아직 취업을 못한 상태이빈다. 가끔 친구들을 만나면 저는 친구들이 너무 좋은데 자꾸 저를 소외시키는 것 같아요.',
        category_id: 2,
        likes: 56,
        views: 107
      },
      {
        user_id: 2,
        image: '/images/thumbnail/friends.jpg',
        title: '친구가 자꾸 저를 따라합니다. ㅜㅜ',
        content:
          '제가 큰맘먹고 유니크한 옷을사면 어디서 구했는지 친구가 제 옷을 따라서 사더라구요.. 저도 진짜 신경 안쓰려고 했는데 한 두번 이여야지... 하.. 어떻게 하면 좋을까요..?',
        category_id: 2,
        likes: 42,
        views: 118
      },
      {
        user_id: 2,
        image: '/images/thumbnail/friends.jpg',
        title: '이 친구와 손절해야하는지 모르겠습니다.',
        content:
          '툭하면 남 흉보고, 자기 잘난 맛에 사는 친구를 어떻게 하면 좋을끼요? 손절이 답인가요??',
        category_id: 2,
        likes: 16,
        views: 29
      },
      {
        user_id: 1,
        image: '/images/thumbnail/friends.jpg',
        title: '고등학교 때 친구가 평생갈까요??',
        content:
          '대학교 들어와서 학교에서 생활하는 시간이 많다보니까 고등학교 때 친구들을 자주 못보게 되더라구요.. 정말 친하게 지냈었는데.. 고등학교 친구들이 보통 평생 가나요??',
        category_id: 2,
        likes: 21,
        views: 40
      },
      {
        user_id: 3,
        image: '/images/thumbnail/work.jpg',
        title: '제 직장상사를 응원합니다!',
        content:
          '제 직장상사는 열심히 일을 하고 자기개발도 한다고 합니다. 제가 말주변이 없어서 직접 말하지 못해 여기에 용기내서 글을 씁니다. 항상 응원합니다!!!',
        category_id: 3,
        likes: 33,
        views: 101
      },
      {
        user_id: 1,
        image: '/images/thumbnail/work.jpg',
        title: '직장 내에서 바람을 피는 것 같아요..',
        content:
          '제가 우연히 직원통로로 가야하는 일이 생겼는데, 문을 나가자마자 이상한 기류가 흐르더군요.. 분명히 남자분은 가정이 있으신분인데.. 제가 예민한걸까요??',
        category_id: 3,
        likes: 56,
        views: 102
      },
      {
        user_id: 1,
        image: '/images/thumbnail/work.jpg',
        title: '직장상사가 힘들게 합니다.',
        content:
          '아침 9시 출근에 할일은 많은데 자기는 심심한지 저를 자꾸 불러서 이런저런 교훈을 주더군요.. 이솝우화 많이 읽으셨나봅니다.',
        category_id: 3,
        likes: 30,
        views: 53
      },
      {
        user_id: 1,
        image: '/images/thumbnail/work.jpg',
        title: '직장 생활이란... 정말 어렵네요...',
        content:
          '매일 아침에 커피 사다드리고, 퇴근할때 컴퓨터 꺼드리고.. 이렇게 까지 어려울 줄 몰랐습니다... 이렇게 다 맞춰주는 제가 이상한건가요?',
        category_id: 3,
        likes: 5,
        views: 34
      },
      {
        user_id: 2,
        image: '/images/thumbnail/work.jpg',
        title: '그래도 힘내 보려고 합니다.',
        content:
          '지금 제 상황이 회사를 떠날 수 있는 상황이 아니다보니 일에 스트레스가 많더라도 사표를 낼 수가 없더군요.. 다른 분들 생각이 궁금합니다. 댓글 남겨 주시면 감사하겠습니다...',
        category_id: 3,
        likes: 2,
        views: 5
      },
      {
        user_id: 1,
        image: '/images/thumbnail/work.jpg',
        title: '직장내에서 이게 가능하다고 보십니까??',
        content:
          '시도때도 없이 불러서 훈계 하질 않나, 이런식으로 하면 진급 못한다고 하질 않나.. 이게 정상인가요?? 이 회사 그만둬야 할 것 같은데 어떻게 생각하세요??',
        category_id: 3,
        likes: 3,
        views: 16
      },
      {
        user_id: 2,
        image: '/images/thumbnail/work.jpg',
        title: '직장 내에서 도대체 어디까지 맞춰야 할까요?',
        content:
          '이거해라 저거해달라 왜이렇게 해달라고 해야한다고 하는게 많은건지.. 도대체 어디까지 맞춰야 맞는걸까요??',
        category_id: 3,
        likes: 1,
        views: 7
      },
      {
        user_id: 3,
        image: '/images/thumbnail/work.jpg',
        title: '직장동료들이 저를 은근히 무시하네요.',
        content:
          '자기네들은 벤츠 뽑았다, 어디 집을 계약했다 다 빚인데.. 그러면서 저는 이렇다 저렇다 은근히 무시하네요;; 비교하는거 듣기도 싫고 힘들어 죽겠습니다..',
        category_id: 3,
        likes: 27,
        views: 108
      },
      {
        user_id: 2,
        image: '/images/thumbnail/work.jpg',
        title: '직장동료가 자꾸 제 일 스타일을 따라합니다.',
        content:
          '각자 자기만의 방식이 있는건데 아예 똑같이 따라하더군요.. 그러면서 마치 자기가 한 마냥 먼저 공을 채가는 모습이 너무 보기 싫습니다.. 어떻게 해야 할까요??',
        category_id: 3,
        likes: 4,
        views: 19
      },
      {
        user_id: 2,
        image: '/images/thumbnail/work.jpg',
        title: '직장을 그만둬야할지도 모르겠습니다.',
        content:
          '어떤 계기로 저를 모함하는 사람이 제 비밀을 회사에 다 풀겠다고 하더군요.. 직장을 그만둬야 할 것 같은데 방법이 없을까요?!',
        category_id: 3,
        likes: 2,
        views: 20
      },
      {
        user_id: 3,
        image: '/images/thumbnail/family.jpg',
        title: '가족들과 힐링할 곳을 추천받습니다!',
        content:
          '부모님 결혼기념일 겸해서 국내에서 같이 놀러갈 휴양지나 여러곳 추천 받습니다!! 아무곳이나 괜찮으니 도움 부탁드립니다',
        category_id: 4,
        likes: 18,
        views: 41
      },
      {
        user_id: 3,
        image: '/images/thumbnail/family.jpg',
        title: '어머니 생일 선물을 뭘로 하면 좋을까요?',
        content:
          '곧 어머니 생신이신데, 평소 생신보다 좀 더 특별한걸 해드리고 싶습니다. 기억에 남는 생신선물 없을까요?!',
        category_id: 4,
        likes: 43,
        views: 102
      },
      {
        user_id: 1,
        image: '/images/thumbnail/family.jpg',
        title: '아버지가 골프를 너무 좋아하세요..',
        content:
          '평소에 주말에 스트레스도 푸실 겸 골프장도 다녀오시는데 중요한 건 집에서도 계속 골프방송을 보시고 저에게 골프를 하라고 권유하십니다 저희 아버지 골프에 대한 열정을 낮춰주실 분 구합니다',
        category_id: 4,
        likes: 17,
        views: 103
      },
      {
        user_id: 1,
        image: '/images/thumbnail/family.jpg',
        title: '가족들이 저를 너무 힘들게 합니다..',
        content:
          '저는 외동아들입니다.. 부모님이 저에대한 기대가 너무 크세요.. 특히 공부에 대한 압박이 너무 강하십니다.. 어떻게 잘 말씀드리면서 이 과정을 극복해야 할까요..? 정말 도움이 필요합니다..',
        category_id: 4,
        likes: 9,
        views: 54
      },
      {
        user_id: 1,
        image: '/images/thumbnail/family.jpg',
        title: '가족들끼리도 말 못하는게 있겠죠..?',
        content:
          '어느순간부터 수척해지신 아버지를 볼때마다 무슨 일 있으시냐고 여쭤보고 싶지만, 뭔가 여쭤보면 안될 것 같은 분위기가 느껴졌어요.. 가족들끼리도 말 못하는 사정이 있겠죠..?',
        category_id: 4,
        likes: 11,
        views: 35
      },
      {
        user_id: 2,
        image: '/images/thumbnail/family.jpg',
        title: '그래도 힘내 보려고 합니다.',
        content:
          '단칸방에 옹기종기 열심히 살고있는 한 가정의 가장입니다. 아내는 사정이 있어서 일을 못하는 상태입니다.. 그래도 가장인 제가 힘을 내보려고 합니다',
        category_id: 4,
        likes: 2,
        views: 6
      },
      {
        user_id: 1,
        image: '/images/thumbnail/family.jpg',
        title: '아버지가 칠순이세요',
        content:
          '아버지가 다음주에 칠순이신데 정말 기억에 남는 칠순잔치를 해드리고 싶습니다 여러분들은 어떤 이벤트가 좋으신지 의견을 여쭤보고 싶습니다.',
        category_id: 4,
        likes: 3,
        views: 17
      },
      {
        user_id: 2,
        image: '/images/thumbnail/family.jpg',
        title: '오빠가 요즘 너무 먹어서 걱정이에요',
        content:
          '매일 저녁마다 스트레스 쌓인거 푼다면서 혼자서 3인분 양의 식사를 다 먹어치워요 그것도 짜고,맵고,단걸로요.. 건강이 걱정입니다 뭐라고 말을 해줘야 할까요',
        category_id: 4,
        likes: 47,
        views: 98
      },
      {
        user_id: 3,
        image: '/images/thumbnail/family.jpg',
        title: '가족들이 저만 빼고 여행다녀요..',
        content:
          '제가 군대 있을 때 보라카이, 취업공부했을 때 일본, 취업 후 일이 바쁠 때 미국.. 저 가족들한테 왕따인걸까요? ㅜㅜ',
        category_id: 4,
        likes: 9,
        views: 109
      },
      {
        user_id: 2,
        image: '/images/thumbnail/family.jpg',
        title: '한번이라도 보고싶습니다..',
        content:
          '저는 어릴 때 멀리 떨어진 이복동생이 있습니다.. 인상착의랑 여러 특징들 첨부해드릴테니 혹시라도 주변에서 제 동생을 찾으신 분은 꼭 연락 부탁드립니다.. 정말 간절합나디 ㅜㅜ',
        category_id: 4,
        likes: 88,
        views: 110
      },
      {
        user_id: 1,
        image: '/images/thumbnail/romantic.jpg',
        title: '결혼준비에 대하여',
        content:
          '저는 곧 결혼을 앞둔 예비 신랑입니다. 혼수,식장 등등 이것저것 들어가는 비용이 만만치 않더라구요.. 결혼선배분들은 다들 어떻게 진행하셨는지 궁금합니다!',
        category_id: 1,
        likes: 0,
        views: 21
      },
      {
        user_id: 1,
        image: '/images/thumbnail/romantic.jpg',
        title: '100일 선물에 대하여',
        content:
          '곧 여자친구랑 100일이네요! 서로 부담주면서 선물하지 말자고 약속했는데 그래도 마음은 그렇게 되질 못하는 것 같아요 적당한 선물 없을까요??',
        category_id: 1,
        likes: 2,
        views: 42
      },
      {
        user_id: 3,
        image: '/images/thumbnail/romantic.jpg',
        title: '취중고백',
        content:
          '제가 평소에 너무 좋아하던 여사친에게 어제 같은 술자리에서 취중고백을 했습니다.. 아침에 일어나니 이불이 창문 밖에 있었습니다.. 이 상황.. 어떻게 해야할까요?',
        category_id: 1,
        likes: 13,
        views: 103
      },
      {
        user_id: 1,
        image: '/images/thumbnail/romantic.jpg',
        title: '제 애인이 바람을 피는 것 같아요.',
        content:
          '제가 어쩌다 핸드폰을 보게되었는데... 삼진물류라는 들어보지도 못한 곳에서 밥은 잘 먹었냐고 연락이 왔습니다. 요즘 회사에서는 밥 안부도 서로 묻고 하나요?',
        category_id: 1,
        likes: 41,
        views: 104
      },
      {
        user_id: 1,
        image: '/images/thumbnail/romantic.jpg',
        title: '남자친구가 많이 아파요..',
        content:
          '최근에 암이 3기까지 진행되었다고 하더라구요.. 옆에서 함께 있어주고 싶은데 남자친구는 저의 그런 모습이 힘들어보였는지 이별을 얘기하더군요.. 저는 어쩌면 좋을까요..',
        category_id: 1,
        likes: 30,
        views: 105
      },
      {
        user_id: 1,
        image: '/images/thumbnail/romantic.jpg',
        title: '보고싶다 혜선아',
        content:
          '내가 여기다가 이런 글을 쓴다고 너가 보지는 못하겠지만, 그 때의 일들 너무 후회하고 있어.. 니가 이 글을 혹시라도 읽는다면 나에게 기회를 줄 수 있을까..',
        category_id: 1,
        likes: 51,
        views: 106
      },
      {
        user_id: 3,
        image: '/images/thumbnail/romantic.jpg',
        title: '기적이 일어날까요?',
        content:
          '저는 3년째 짝사랑하는 여사친이 있습니다. 저의 매력을 보여주고 싶지만 주변에 잘난 사람들이 너무 많은 것 같아요.. 기적이 일어날까요?',
        category_id: 1,
        likes: 19,
        views: 107
      },
      {
        user_id: 3,
        image: '/images/thumbnail/romantic.jpg',
        title: '나를 좋아하지 않는 그대에게..',
        content:
          '저를 좋아하지 않는 사람이 저를 좋아해줄 확률이 얼마나 될까요..? 이 글을 쓰면서도 그 사람생각이 자꾸 납니다.. 도움을 주실 수 있으신가요',
        category_id: 1,
        likes: 101,
        views: 158
      },
      {
        user_id: 1,
        image: '/images/thumbnail/romantic.jpg',
        title: '노래방에서 고백',
        content:
          '제가 너무 너무 좋아하는 중학교 여사친이 있는데여, 노래방에서 제가 포맨의 고백이라는 노래를 불러서 고백하고 싶은데 노래 잘하는 방법 아시나여??',
        category_id: 1,
        likes: 46,
        views: 109
      },
      {
        user_id: 2,
        image: '/images/thumbnail/romantic.jpg',
        title: '로코예능 스포',
        content:
          '요즘에는 로코예능이 대세잖아요! 그래서 제가 스포아닌 스포를 준비했습니다 ㅎㅎ 아무것도 없는게 스포에요! 둘 사이에 아무것도 없어요!! ^^',
        category_id: 1,
        likes: 52,
        views: 210
      },
      {
        user_id: 2,
        image: '/images/thumbnail/friends.jpg',
        title: '친구 사이의 돈 문제',
        content:
          '얼마전에 한 친구한테서 돈을 빌려달라는 연락을 받았어요. 평소에는 연락도 잘 안하는데 이 친구한테 빌려주는게 맞을까요?',
        category_id: 2,
        likes: 24,
        views: 31
      },
      {
        user_id: 3,
        image: '/images/thumbnail/friends.jpg',
        title: '내탓하는 친구',
        content:
          '유독 한 친구가 우리 왜이렇게 못봐 이러는데 처음엔 나도 바쁘고 그러려니 했는데 시간이 지나면서는 네가 워낙 바쁘니까~ 이러면서 내탓을 하더라구 그게 너무 불편한데 어떻게 하면 좋을까..',
        category_id: 2,
        likes: 3,
        views: 12
      },
      {
        user_id: 1,
        image: '/images/thumbnail/friends.jpg',
        title: '자기얘기만 하는 친구',
        content:
          '주변 친구중에 자기 얘기만 엄청 늘어놓는 친구가 있어서 소개할려고 해 그 친구는 남들이 얘기할 때 속으로 나는 다음에 무슨 생각하지 이런 생각을 하더라고.. 어떻게 기분나쁘지 않게 잘 얘기해줄 수 있을까',
        category_id: 2,
        likes: 7,
        views: 33
      },
      {
        user_id: 2,
        image: '/images/thumbnail/friends.jpg',
        title: '부정으로 가득한 친구이야기',
        content:
          '나를 감정쓰레기통으로 생각하는 친구가 있어.. 만나기만 하면 힘듦을 발굴하는 친구인데 자꾸 듣다보니까 내가 얘를 달래줄려고 만나는건가 라는 생각까지 들더라고 내가 더 우울해지기 전에 방법이 없을까?',
        category_id: 2,
        likes: 11,
        views: 44
      },
      {
        user_id: 3,
        image: '/images/thumbnail/friends.jpg',
        title: '장소,시간 다 내가 맞춰!! 내가 봉이냐!!',
        content:
          '경기도민은 서울 어디를 가나 1시간 이상 걸려.. 근데 내가 가는건 되는거고 너네가 오는건 너무 멀어~ 거기 놀거 없잖아~ 이게 말이냐 방구냐?! 나를 봉으로 아는거냐?!!!!',
        category_id: 2,
        likes: 21,
        views: 75
      },
      {
        user_id: 1,
        image: '/images/thumbnail/friends.jpg',
        title: '시간 약속 늦는 친구들 잘 봐!',
        content:
          '나도 사람인지라 5분,10분 늦는 경우도 있어 이해하고! 근데 아무 이유없이 꾸물거리다가 한시간 두시간 늦는건 무슨 생각인거냐?! 너 그러다가 주변에 있는 친구들 다 잃는다!! 명심해!!!',
        category_id: 2,
        likes: 1,
        views: 6
      },
      {
        user_id: 2,
        image: '/images/thumbnail/friends.jpg',
        title: '필요할 때만 찾는 우리의 안읽씹 선생님들~',
        content:
          '본인들이 원할 땐 칼답해줘야하고, 내가 원하는게 있거나 부탁할게 있으면 그렇~~게 안읽씹을 하는 친구들아~^^ 그러다가 평생 혼자 살 수도 있어 이 언니 말 명심해!!',
        category_id: 2,
        likes: 22,
        views: 77
      },
      {
        user_id: 3,
        image: '/images/thumbnail/friends.jpg',
        title: '이중약속 잡는 친구들',
        content:
          '자기의 인간관계를 순서대로 정리한게 느껴지는 친구들이 간혹 있어 1순위가 없을때만 나를 찾거나 그걸 또 티내는 애들 솔직히 미리 잡은 약속은 지켜주는게 예의 아니야??',
        category_id: 2,
        likes: 19,
        views: 38
      },
      {
        user_id: 1,
        image: '/images/thumbnail/friends.jpg',
        title: '무리한 부탁 하는 애들',
        content:
          '주변 사람들 중에 친분을 빌미로 해서 과도한 부탁 하는 애들이 있어 미안하다 한번만 부탁할게라는 말도없이 당연하다는 듯이 부탁하는 애들은 도대체 무슨 생각인걸까?',
        category_id: 2,
        likes: 4,
        views: 79
      },
      {
        user_id: 1,
        image: '/images/thumbnail/friends.jpg',
        title: '가십을 사랑하는 내 친구에게',
        content:
          '우리 모두 재미난 이야기로 살아가지만 가끔 다른 사람들은 남을 험담하는 재미로 살아가고, 다른 사람 흉보는걸로 자신이 우월하다고 느끼고 다른 사람을 조종하는 힘을 가지게 된다',
        category_id: 2,
        likes: 7,
        views: 40
      },
      {
        user_id: 3,
        image: '/images/thumbnail/work.jpg',
        title: '빨간색 구두가 도대체 뭐가 문제야?',
        content:
          '아니 요즘시대에 직장에서 빨간색 구두 신었다고 꾸중듣는건 어디시대 사람인거지? 내가 츄리닝을 입고 간 것도 아니고, 단정한 오피스룩에다가 빨간색 구두 신었을 뿐인데 이게 뭐가 문제야?!',
        category_id: 3,
        likes: 14,
        views: 41
      },
      {
        user_id: 2,
        image: '/images/thumbnail/work.jpg',
        title: '사사건건 참견하는 나잘난 형들에 대해',
        content:
          '보통 이런사람들은 자기 잘난 맛에 살기때문에 자기 자랑하기 바빠요 딱 선 잘라서 업무적인 얘기만 하고 경계를 확실히 할 필요가 있다고 생각해',
        category_id: 3,
        likes: 1,
        views: 22
      },
      {
        user_id: 1,
        image: '/images/thumbnail/work.jpg',
        title: '무조건 안된다고만 하는 권위적인 상사',
        content:
          '내가 결제할 서류를 들고 갈때마다 무조건 이건 이래서 안되고 저건 저래서 안된다고 말하는 권위적인 상사야 그럼 회사는 어떻게 돌아가니?? 너무 궁금해서 미치겠구나^^',
        category_id: 3,
        likes: 27,
        views: 53
      },
      {
        user_id: 3,
        image: '/images/thumbnail/work.jpg',
        title: '내 말도 좀 들어주세요',
        content:
          '내가 입사한지 3개월 차인데 그게 중요한게 아니라 회의시간에 내가 의견을 내면 이건 좀 그런데 다른 방법없어? 이러고 결국엔 내 의견으로 갈거면 도대체 다른 의견있는지는 왜 물어본거야??',
        category_id: 3,
        likes: 22,
        views: 44
      },
      {
        user_id: 1,
        image: '/images/thumbnail/work.jpg',
        title: '동료문제',
        content:
          '서로 힘든 이 시국에 도와가면서 으쌰으쌰 해야하는거 아니야? 왜 다들 자기 살기 바빠서 서로 뜯어먹으려고 하는지 모르겠어.. 내가 너무 안일한거야?',
        category_id: 3,
        likes: 33,
        views: 85
      },
      {
        user_id: 2,
        image: '/images/thumbnail/work.jpg',
        title: '사람이 중요한가 문제가 중요한가',
        content:
          '다들 어떻게 생각해? 직장관계에서는 사람이 중요해 아니면 문제가 중요해? 나는 그래도 서로서로 얼굴 붉히지 않고 좋게 지나가는게 낫다고 생각하는데 다들 어때?',
        category_id: 1,
        likes: 22,
        views: 46
      },
      {
        user_id: 2,
        image: '/images/thumbnail/work.jpg',
        title: '직장내에서 손해와 타협',
        content:
          '서로 모두 윈윈하면 좋겠지만 우리는 선택을 해야되는 것 같아. 한쪽이 손해를 보고 다른 한쪽은 타협을 하려고하면 어쩔 수 없이 양쪽 다 손해를 보게 되는 것 같아..',
        category_id: 3,
        likes: 19,
        views: 17
      },
      {
        user_id: 1,
        image: '/images/thumbnail/work.jpg',
        title: '아.. 이번에도 연봉협상 안됐어..',
        content:
          '아니 회사는 매년 말 될때마다 무슨 돈들을 끌어서 쓰는지 내년에 해줄게 내년에 해줄게 벌써 2번째야.. 이건 문제가 좀 있다고 생각하지 않아??',
        category_id: 3,
        likes: 2,
        views: 8
      },
      {
        user_id: 1,
        image: '/images/thumbnail/work.jpg',
        title: '진짜 내 직장동료때문에 힘들어..',
        content:
          '나랑 같이 입사한 직장동료가 있는데 얘가 나를 시샘하는건지는 모르겠는데 나를 자꾸 못마땅해 하더라고.. 그래서 한번 날 잡고 얘기르 좀 해야할 것 같은데 어때?',
        category_id: 1,
        likes: 8,
        views: 49
      },
      {
        user_id: 2,
        image: '/images/thumbnail/work.jpg',
        title: '엄청난 일이 있었음',
        content:
          '직장상사중에 모대리라고 있는데 그 사람이 평소에도 화가 좀 많아;; 근데 이번에 그게 터진거지.. 부장이 뭘 시켰는데 그날따라 자기 기분이 안좋았는지 책상을 탁! 치더라고.. 이 회사 어떻게 될지 궁금하다..',
        category_id: 1,
        likes: 15,
        views: 70
      },
      {
        user_id: 1,
        image: '/images/thumbnail/family.jpg',
        title: '진짜 오빠있는 집들은 다 그래?',
        content:
          '아니 물떠달라고 하고, 불꺼달라고 하고, 진짜로 그렇게 막 시켜 너네들한테?? 나는 형이 있어서 더 그런데.. 그래서 너네들이 좀 더 낫지 않나 싶어서.. 부러워서..',
        category_id: 4,
        likes: 122,
        views: 131
      },
      {
        user_id: 3,
        image: '/images/thumbnail/family.jpg',
        title: '다들 돌때 뭐 잡았어??',
        content:
          '나는 돌때 연필을 잡았는데 거기서부터 잘못된 것 같아 나는 도저히 공부머리가 아닌 것 같거든.. 다들 이런 경험 있지않아? 나만있어? 대답 좀 해줘',
        category_id: 4,
        likes: 35,
        views: 62
      },
      {
        user_id: 2,
        image: '/images/thumbnail/family.jpg',
        title: '나는 오늘 이런일이 있었어',
        content:
          '일 끝내고 피곤한채로 집 언덕 올라가는데 어떤 할머니랑 조그만 손자가 리어카를 끌면서 가더라구.. 너무 안쓰러워서 도와드리고 싶었는데 나도 피곤해서 그냥 지나쳤어.. 내가 잘못된걸까?',
        category_id: 4,
        likes: 74,
        views: 23
      },
      {
        user_id: 2,
        image: '/images/thumbnail/family.jpg',
        title: '가족들끼리 주로 외식 어떻게 해?',
        content:
          '아이가 생기고 나서 우리 가족 첫 외식인데 뭔가 그동안 살면서 했던 외식이랑 느낌이 다른거 같아서 ㅎㅎ 다들 어디서 뭘 주로 먹어?',
        category_id: 4,
        likes: 13,
        views: 64
      },
      {
        user_id: 1,
        image: '/images/thumbnail/family.jpg',
        title: '요즘 집에서 시켜먹잖아 메뉴 추천좀!',
        content:
          '코로나 시국에 어디 나가서 먹는것도 너무 무섭고 그래서 시켜먹을려고 하는데 가족들끼리 시켜먹을만한 메뉴 추천 좀 해줄 수 있어??',
        category_id: 4,
        likes: 37,
        views: 25
      },
      {
        user_id: 3,
        image: '/images/thumbnail/family.jpg',
        title: '이번 명절은 어떻게 내려가지..',
        content:
          '고향이 대구인데 이번에 가족들이랑 차를 타야할지 기차를 타야할지 버스를 타야할지 고민중이야 다들 이번 명절 어떻게 갈 생각이야??',
        category_id: 4,
        likes: 38,
        views: 46
      },
      {
        user_id: 3,
        image: '/images/thumbnail/family.jpg',
        title: '가족들끼리 볼 만한 영화 추천좀!',
        content:
          '우리 아들이 강아지 나오는 영상을 너무 좋아하는데 그런 종류로 추천해줄 수 있는 영화들 있어?!',
        category_id: 4,
        likes: 11,
        views: 47
      },
      {
        user_id: 1,
        image: '/images/thumbnail/family.jpg',
        title: '이번에 나온 가족할인카드에 대해서 어떻게 생각해?',
        content:
          '우리집은 4명인데 나이 상관없이 인당 교통비 할인해준다고 하더라구! 각자의 의견이 궁금해서 같이 얘기 나누고싶어!!',
        category_id: 4,
        likes: 60,
        views: 58
      },
      {
        user_id: 3,
        image: '/images/thumbnail/family.jpg',
        title: '아들이 군대를 갔습니다.',
        content:
          '이번에 저희 아들이 군대를 갔습니다. 너무 자랑스럽고 대견하지만 한편으론 걱정도 되고 보내줄때 눈물도 흘렸네요. 이럴땐 뭘 챙겨주면 좋아할까요?',
        category_id: 4,
        likes: 16,
        views: 39
      },
      {
        user_id: 1,
        image: '/images/thumbnail/family.jpg',
        title: '할머니',
        content:
          '할머니 나야! 이쁜 똥강아지!! ㅎㅎ 오늘은 너무 좋은날이였다? 드디어 내가 취업을 했거든!! ㅎㅎ 할머니 손자 이제 다 컸지?! 그러니까 할머니도 걱정하지말구 내 옆에서 항상 지켜봐줘 사랑해 할머니!',
        category_id: 4,
        likes: 78,
        views: 140
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('posts', null, {});
  }
};
