const portfolioData = {
  featuredCount: 9, // Store 페이지(주요 프로젝트)에 표시할 프로젝트 개수
  profile: {
    name: "정지현 (Jeong Ji-hyeon)",
    nickname: "Elpoco",
    status: "Online",
    gameStatus: "포트폴리오 개발 중 (Developing Portfolio)",
    level: 96,
    avatar: "assets/images/jjh2.jpg",
    email: "wjdwlgus96@gmail.com",
    phone: "010-8990-4721",
    github: "https://github.com/Elpoco",
    blog: "https://elpoco.tistory.com",
    address: "서울 성동구 성수동",
    birth: "1996.11.25"
  },
  skills: [
    { name: "Unity", category: "Game" },
    { name: "C#", category: "Game" },
    { name: "C/C++", category: "Game" },

    { name: "Photon", category: "Networking" },
    { name: "Unity Netcode", category: "Networking" },
    { name: "Steamworks", category: "Networking" },

    { name: "TypeScript", category: "Backend" },
    { name: "PHP", category: "Backend" },
    { name: "MySQL", category: "Database" },
    { name: "PlayFab", category: "Backend" },
    { name: "Azure Functions", category: "Cloud" },

    { name: "JavaScript", category: "Web" },
    { name: "React Native", category: "App" },
    { name: "Java", category: "App" },
    { name: "Swift", category: "App" }
  ],
  experiences: [
    {
      id: "exp_indie",
      company: "개인 프로젝트",
      period: "2026.02 ~ ",
      role: "Unity 클라이언트 개발",
      description: "스팀 게임 출시를 목표로 개인 프로젝트를 진행 중입니다.",
      type: "company"
    },
    {
      id: "exp_fireshrike",
      company: "파이어슈라이크게임즈",
      period: "2022.06 ~ 2026.01",
      role: "Unity 클라이언트 및 백엔드 개발",
      description: "3D 방치형 RPG와 하이퍼 캐주얼 게임을 개발했습니다.\n콘텐츠 단위로 클라이언트와 백엔드를 함께 개발했으며, 아트팀과 협업하여 이펙트, 애니메이션 연출을 게임에 적용했습니다.",
      type: "company"
    },
    {
      id: "exp_kyungil",
      company: "경일 게임 아카데미",
      period: "2021.11 ~ 2022.06",
      role: "C++ / Unity 프로그래밍 교육 수료",
      description: "C++ WinAPI, Unity 기반 클라이언트 프로그래밍 과정 수료했습니다.",
      type: "education"
    },
    {
      id: "exp_banco",
      company: "뱅코",
      period: "2021.06 ~ 2021.08",
      role: "백엔드 개발",
      description: "가상화폐 거래소 관련 웹 백엔드 유지보수 및 기능 개발을 했습니다.",
      type: "company"
    },
    {
      id: "exp_toksolution",
      company: "톡솔루션",
      period: "2019.08 ~ 2021.04",
      role: "앱 / 웹, 백엔드 개발",
      description: "Java 안드로이드 앱 개발을 시작으로 Swift를 사용해 iOS 앱 개발 후 웹과 백엔드 개발, 하이브리드 앱까지 개발을 했습니다.",
      type: "company"
    },
    {
      id: "exp_wego",
      company: "위고 컴퍼니",
      period: "2019.05 ~ 2019.07",
      role: "안드로이드 앱 개발",
      description: "가상화폐의 주변 기기 관련 앱 개발을 했습니다.",
      type: "company"
    },
    {
      id: "exp_mirae",
      company: "미래능력 개발 교육원",
      period: "2018.09 ~ 2019.06",
      role: "안드로이드 앱 프로그래밍 교육 수료",
      description: "자바, 안드로이드 SDK, 모바일 앱 개발 과정 수료 했습니다.",
      type: "education"
    }
  ],
  projects: [
    {
      id: "proj_tinyvillage",
      companyId: "exp_indie",
      name: "Tiny Village",
      period: "2026.06 ~ 2026.09",
      type: "Idle Simulation Game",
      role: "1인 개발",
      tech: ["Unity", "C#"],
      cardBanner: "assets/images/tinyvillage/banner.png",
      banner: "assets/images/tinyvillage/library.png",
      hero: "assets/images/tinyvillage/hero.png",
      playLink: "https://store.steampowered.com/app/4743040/Tiny_Village/",
      youtubeUrl: "https://www.youtube.com/embed/ybSm8BSrOAw",
      platforms: ["Steam"],
      description: "2D 타일맵 기반의 인크리멘탈 게임 입니다. 자원을 수집하고 마을을 발전 시켜 나가는 게임 입니다.",
      details: [
        "건설 시스템을 통한 마을 발전 구현",
        "계절 시스템과 낮밤 시스템 구현",
        "주민들의 생활 시스템과 만족도 구현",
        "자원 채집 시스템 구현",
      ],
      achievements: [
        { title: "Steam Demo Release", desc: "스팀 데모 출시 및 피드백 수렴" }
      ]
    },
    {
      id: "proj_ropeup",
      companyId: "exp_indie",
      name: "Rope Up!",
      period: "2026.03 ~ 2026.05",
      type: "Commercial Game",
      role: "2인 개발",
      tech: ["Unity", "C#", "Unity Netcode", "Steamworks"],
      cardBanner: "assets/images/ropeup/banner.png",
      banner: "assets/images/ropeup/library.png",
      hero: "assets/images/ropeup/hero.png",
      playLink: "https://store.steampowered.com/app/4595740/Rope_Up/",
      youtubeUrl: "https://www.youtube.com/embed/O7HDu78Jo4k",
      platforms: ["Steam"],
      description: "Steam에 정식 출시한 물리 기반 멀티플레이 클라이밍 게임입니다. 플레이어는 로프 스윙과 정교한 물리 조작을 활용하여 정상까지 도달해야 합니다.",
      details: [
        "SpringJoint와 Rigidbody를 활용한 로프 스윙 및 물리 이동 시스템 구현",
        "Unity Netcode for GameObjects(NGO)를 이용한 멀티플레이 동기화 구현",
        "Steamworks API를 활용한 로비 생성, Steam Overlay 초대 및 매칭 시스템 구현",
        "플레이어 캐릭터 커스터마이징 기능 구현",
        "Steam Cloud Save를 활용한 게임 데이터 저장 및 불러오기",
        "Steam 업적(Achievements) 시스템 연동",
        "플레이 경험을 고려한 맵 레벨 디자인 및 밸런스 조정",
        "게임 방 설정(인원수, 난이도, 체크포인트 공유) 구현",
        "마우스 감도 조절 기능 구현"
      ],
      technical: [
        {
          title: "조작감 개선",
          desc: "카메라 중앙에서만 Raycast를 쏘게 되면 플레이어의 손에서 쏘는 로프가 카메라 시점에선 안 닿는 오브젝트가 손에서 쏠땐 닿아서, 이를 해결하기 위해 카메라 중앙과 캐릭터 손 위치에서 각각 Raycast를 수행하여 시각적으로 로프가 걸릴 수 있는 위치와 실제 판정을 최대한 일치시켰습니다."
        },
        {
          title: "스윙 안정성",
          desc: "오브젝트에 로프를 쏠때 너무 가까이에서 쏘면 스윙을 못하는 불편함이 발생하여 최소 로프 길이를 제한하여 조작 불편을 방지하고 안정적인 스윙을 할 수 있도록 하였습니다."
        },
        {
          title: "플레이 경험",
          desc: "1인칭과 3인칭 시점을 지원하여 플레이어가 원하는 시점으로 게임을 즐길 수 있도록 설계했습니다."
        },
      ],
      achievements: [
        {
          title: "Steam Release",
          desc: "Steam 정식 출시 및 서비스"
        },
        {
          title: "Multiplayer",
          desc: "NGO 기반 실시간 멀티플레이"
        },
        {
          title: "Steamworks",
          desc: "친구 초대 및 업적, 클라우드 세이브"
        },
      ],
      screenshots: [
        "assets/images/ropeup/screenshot_01.png",
        "assets/images/ropeup/screenshot_02.png",
        "assets/images/ropeup/screenshot_03.png",
        "assets/images/ropeup/screenshot_04.png",
        "assets/images/ropeup/screenshot_05.png",
        "assets/images/ropeup/screenshot_06.png",
        "assets/images/ropeup/screenshot_07.png",
      ]
    },
    {
      id: "proj_fantasyhunters",
      companyId: "exp_fireshrike",
      name: "FANTASY x HUNTERS",
      period: "2025.07 ~ 2026.01",
      type: "Commercial Game",
      role: "클라이언트 개발",
      tech: ["Unity", "C#"],
      cardBanner: "assets/images/fantasyhunter/banner.png",
      banner: "assets/images/fantasyhunter/library.png",
      hero: "assets/images/fantasyhunter/hero.png",
      playLink: "https://play.google.com/store/search?q=fantasy+hunters&c=apps&hl=ko",
      platforms: ["Android"],
      description: "판타지 테마의 하이퍼 캐주얼 RPG 게임으로, 다양한 무기를 수집하고 성장하며 몬스터를 처치하는 모바일 RPG입니다.",
      details: [
        "메인 캐릭터의 스킬 시스템 및 전투 메커니즘 구현",
        "무기의 스킬 시스템 및 전투 구현",
        "스킬 구조 설계 및 구현",
        "몬스터 AI 및 패턴 시스템 구현",
        "전투 연출 시스템 구현",
      ],
      technical: [
        {
          title: "확장 가능한 스킬 구조",
          desc: "BaseAttack을 기반으로 공통 기능을 관리하고, 각 스킬은 상속을 통해 고유한 동작만 구현하여 신규 스킬을 쉽게 추가할 수 있도록 구성했습니다."
        },
      ],
      achievements: [
        {
          title: "Google Play Launch",
          desc: "구글 플레이 스토어 출시"
        },
      ],
      screenshots: [
        "assets/images/fantasyhunter/screenshot_01.png",
        "assets/images/fantasyhunter/screenshot_02.png",
        "assets/images/fantasyhunter/screenshot_03.png",
        "assets/images/fantasyhunter/screenshot_04.png",
        "assets/images/fantasyhunter/screenshot_05.png",
        "assets/images/fantasyhunter/screenshot_06.png",
      ]
    },
    {
      id: "proj_cafelife",
      companyId: "exp_fireshrike",
      name: "카페 라이프: 레스토랑 게임 (Cafe Life)",
      period: "2024.12 ~ 2025.06",
      type: "Commercial Game",
      role: "클라이언트 메인 개발",
      tech: ["Unity", "C#"],
      cardBanner: "assets/images/cafelife/banner.png",
      banner: "assets/images/cafelife/library.png",
      hero: "assets/images/cafelife/hero.png",
      playLink: "https://play.google.com/store/apps/details?id=com.fireshrike.h2&hl=ko",
      appleLink: "https://apps.apple.com/us/app/%EC%B9%B4%ED%8E%98-%EB%9D%BC%EC%9D%B4%ED%94%84-%EC%B9%B4%ED%8E%98-%EB%A7%88%EB%8B%88%EC%95%84-cafe-life/id6747019708?l=ko",
      youtubeUrl: "https://www.youtube.com/embed/0BbcYxbbi_o?si=QT3qbCkg-nSXxcBI",
      platforms: ["Android", "iOS"],
      description: "카페를 운영하며 음식을 판매하고, 수익을 통해 매장을 확장하고 직원을 고용하는 하이퍼 캐주얼 게임입니다.",
      details: [
        "음식 조리, 손님 응대, 음식 판매, 수익 획득으로 이어지는 코어 게임플레이 구현",
        "매장 확장 및 시설 업그레이드 시스템 구현",
        "플레이어 스탯 시스템 구현",
        "Task 기반 직원 AI 및 손님 행동 AI 구현",
        "출석, 기간 한정 및 랜덤 이벤트 시스템 구현",
        "게임 플레이를 활용한 홍보 영상 기능 구현"
      ],
      technical: [
        {
          title: "Task Sequence",
          desc: "여러 단계의 업무를 하나의 Task Sequence로 구성하여 직원이 상황에 맞게 순차적으로 작업을 수행하도록 구현했습니다."
        },
        {
          title: "Task 기반 직원 AI",
          desc: "각 직원이 (요리사, 서버, 청소부, 운반) 역할에 맞는 업무를 수행할 수 있도록 Task 기반 AI 시스템을 구현했습니다."
        },
        {
          title: "손님 AI",
          desc: "손님이 입장부터 대기, 주문, 식사, 계산, 퇴장까지 자연스럽게 동작하도록 행동 흐름을 구현했습니다."
        },
        {
          title: "홍보 영상용 게임",
          desc: "게임 에셋을 활용해 1인칭 타이쿤 스타일의 홍보 영상을 제작했습니다."
        }
      ],
      achievements: [
        {
          title: "Global App Store",
          desc: "AOS/iOS 마켓 런칭 및 서비스"
        },
      ],
      screenshots: [
        "assets/images/cafelife/screenshot_01.png",
        "assets/images/cafelife/screenshot_02.png",
        "assets/images/cafelife/screenshot_03.png",
        "assets/images/cafelife/screenshot_04.png",
        "assets/images/cafelife/screenshot_05.png",
      ]
    },
    {
      id: "proj_foodstreet",
      companyId: "exp_fireshrike",
      name: "My Food Street",
      period: "2024.07 ~ 2024.11",
      type: "Commercial Game",
      role: "클라이언트 메인 개발",
      tech: ["Unity", "C#"],
      cardBanner: "assets/images/myfoodstreet/banner.png",
      banner: "assets/images/myfoodstreet/library.png",
      hero: "assets/images/myfoodstreet/hero.png",
      youtubeUrl: "https://www.youtube.com/embed/E7-SupRfLPE?si=RoEsFGrEmmBf-khM",
      playLink: "https://play.google.com/store/apps/details?id=com.fireshrike.h1&hl=ko",
      appleLink: "https://apps.apple.com/us/app/my-food-street/id6736931912?l=ko",
      platforms: ["Android", "iOS"],
      description: "식재료를 수집하고 다양한 음식을 조리하여 손님에게 판매하며 매장을 성장시키는 하이퍼 캐주얼 게임입니다.",
      details: [
        "식재료 수집, 요리, 판매로 이어지는 코어 게임플레이 구현",
        "매장 확장 시스템 구현",
        "플레이어 스탯 시스템 구현",
        "캐릭터 스킨 변경 시스템 구현",
        "직원 및 손님 AI 구현",
        "출석, 기간 한정 및 랜덤 이벤트 시스템 구현",
      ],
      technical: [
        {
          title: "Core Gameplay",
          desc: "식재료 수집부터 조리, 판매, 매장 확장으로 이어지는 타이쿤 장르의 핵심 게임플레이 루프를 구현했습니다."
        },
        {
          title: "NPC AI",
          desc: "직원과 손님이 각각의 역할과 행동 흐름에 따라 자연스럽게 동작하도록 AI를 구현했습니다."
        }
      ],
      achievements: [
        { title: "Global App Store", desc: "AOS/iOS 마켓 런칭 및 서비스" },
      ],
      screenshots: [
        "assets/images/myfoodstreet/screenshot_01.png",
        "assets/images/myfoodstreet/screenshot_02.png",
        "assets/images/myfoodstreet/screenshot_03.png",
        "assets/images/myfoodstreet/screenshot_04.png",
        "assets/images/myfoodstreet/screenshot_05.png",
        "assets/images/myfoodstreet/screenshot_06.png",
      ]
    },
    {
      id: "proj_nanospace",
      companyId: "exp_fireshrike",
      name: "나노스페이스",
      period: "2023.09 ~ 2024.04",
      type: "Commercial Game",
      role: "클라이언트 & 백엔드 개발",
      tech: ["Unity", "C#", "PlayFab", "Azure Functions", "Photon PUN2"],
      cardBanner: "assets/images/nanospace/banner.png",
      banner: "assets/images/nanospace/library.png",
      hero: "assets/images/nanospace/hero.png",
      youtubeUrl: "https://www.youtube.com/embed/ZWSOQbO8h9Q?si=hWSv0j7JXxLb3TN8",
      playLink: "https://play.google.com/store/apps/details?id=com.galileo.r3&hl=ko",
      appleLink: "https://apps.apple.com/kr/app/%EB%B3%84%EB%B9%9B%EA%B8%B0%EC%82%AC-%ED%82%A4%EC%9A%B0%EA%B8%B0/id1661086445",
      platforms: ["Android", "iOS"],
      description: "캐릭터를 성장시키며 다양한 던전과 레이드를 공략하는 3D 방치형 키우기 게임입니다.",
      details: [
        "캐릭터 스킬 및 전투 시스템 구현",
        "무기 스왑 시스템 구현",
        "몬스터 추가 및 구현",
        "보스 패턴 및 스킬 구현",
        "레이드 콘텐츠 개발",
        "재화 던전 콘텐츠 구현",
        "Photon PUN2 기반 실시간 레이드 시스템 구현",
        "Unity Timeline을 활용한 보스 및 레이드 연출 구현",
        "TypeScript · Azure Functions · PlayFab · MySQL 기반 서버 기능 구현",
      ],
      technical: [
        {
          title: "실시간 레이드",
          desc: "Photon PUN2를 활용하여 여러 플레이어가 함께 보스를 공략하는 실시간 레이드 시스템을 구현했습니다."
        },
        {
          title: "콘텐츠 개발",
          desc: "재화 던전, 레이드 등 콘텐츠 단위로 클라이언트 구현부터 서버 API, DB 처리, 보상 지급까지 전체 개발을 담당했습니다."
        },
      ],
      achievements: [
        {
          title: "Photon",
          desc: "Photon 기반 실시간 레이드 구현"
        },
        {
          title: "Backend Development",
          desc: "TypeScript · MySQL · Azure Functions 기반 서버 개발"
        }
      ],
      screenshots: [
        "assets/images/nanospace/screenshot_01.png",
        "assets/images/nanospace/screenshot_02.png",
        "assets/images/nanospace/screenshot_03.png",
        "assets/images/nanospace/screenshot_04.png",
      ]
    },
    {
      id: "proj_stellarknight",
      companyId: "exp_fireshrike",
      name: "별빛기사 키우기",
      period: "2022.06 ~ 2023.08",
      type: "Commercial Game",
      role: "클라이언트 & 백엔드 개발",
      tech: ["Unity", "C#"],
      cardBanner: "assets/images/stellarknight/banner.png",
      banner: "assets/images/stellarknight/library.png",
      hero: "assets/images/stellarknight/hero.png",
      youtubeUrl: "https://www.youtube.com/embed/_YLaQ-rlPFg?si=x-W0tebeOHbUJzMB",
      playLink: "https://play.google.com/store/apps/details?id=com.mobirix.mbsk&hl=ko",
      appleLink: "https://apps.apple.com/kr/app/%EB%B3%84%EB%B9%9B%EA%B8%B0%EC%82%AC-%ED%82%A4%EC%9A%B0%EA%B8%B0/id1661086445",
      platforms: ["Android", "iOS"],
      description: "캐릭터를 성장시키며 다양한 던전과 레이드를 공략하는 3D 방치형 키우기 게임입니다.",
      details: [
        "캐릭터 스킬 추가 및 구현",
        "몬스터 추가 및 구현",
        "보스 패턴 및 스킬 구현",
        "레이드 콘텐츠 개발",
        "재화 던전 콘텐츠 구현",
        "Photon PUN2 기반 실시간 레이드 시스템 구현",
        "Unity Timeline을 활용한 보스 및 레이드 연출 구현",
        "TypeScript · Azure Functions · PlayFab · MySQL 기반 서버 기능 구현",
      ],
      technical: [
        {
          title: "실시간 레이드",
          desc: "Photon PUN2를 활용하여 여러 플레이어가 함께 보스를 공략하는 실시간 레이드 시스템을 구현했습니다."
        },
        {
          title: "콘텐츠 개발",
          desc: "재화 던전, 레이드 등 콘텐츠 단위로 클라이언트 구현부터 서버 API, DB 처리, 보상 지급까지 전체 개발을 담당했습니다."
        },
      ],
      achievements: [
        {
          title: "Photon",
          desc: "Photon 기반 실시간 레이드 구현"
        },
        {
          title: "Backend Development",
          desc: "TypeScript · MySQL · Azure Functions 기반 서버 개발"
        }
      ],
      screenshots: [
        "assets/images/stellarknight/screenshot_01.png",
        "assets/images/stellarknight/screenshot_02.png",
        "assets/images/stellarknight/screenshot_03.png",
        "assets/images/stellarknight/screenshot_04.png",
        "assets/images/stellarknight/screenshot_05.png",
        "assets/images/stellarknight/screenshot_06.png",
        "assets/images/stellarknight/screenshot_07.png",
      ]
    },
    {
      id: "proj_dungreed",
      companyId: "exp_kyungil",
      name: "Dungreed 모작",
      period: "2022.03 ~ 2022.04",
      type: "Replica Game",
      role: "1인 개발",
      tech: ["C/C++", "WinAPI"],
      cardBanner: "assets/images/dungreed/banner.png",
      banner: "assets/images/dungreed/library.png",
      hero: "assets/images/dungreed/hero.png",
      playLink: "https://youtu.be/2GJa40E7roc",
      githubLink: "https://github.com/Elpoco/CPP_Dungreed",
      youtubeUrl: "https://www.youtube.com/embed/2GJa40E7roc",
      platforms: ["PC"],
      description: "C++ WinAPI 기반으로 렌더링, 카메라, 맵 에디터, 게임 시스템을 직접 구현한 로그라이크 게임 Dungreed 모작 프로젝트입니다.",
      details: [
        "플레이어 캐릭터 개발",
        "몬스터 및 보스 개발",
        "인벤토리, 장비 상점, 음식 상점 구현",
        "맵 에디터 개발",
        "성장 능력치 구현",
      ],
      technical: [
        {
          title: "렌더링 최적화",
          desc: "처음엔 화면 밖으로 나가는 총알들이 화면 밖으로 나가도 계속 그려졌습니다. 이를 해결하기 위해 카메라 컬링을 하여 최적화 하였습니다."
        },
        {
          title: "맵 에디터 개발",
          desc: "직접 타일 및 오브젝트를 배치할 수 있는 레벨 에디터(Map Tool)를 개발했습니다."
        },
      ],
      achievements: [
        // { title: "WinAPI 기반 게임 엔진", desc: "라이브러리 없이 자체적으로 다목적 2D 렌더링 엔진 구축" },
        // { title: "Integrated Map Tool", desc: "직접 타일 및 오브젝트를 배치할 수 있는 레벨 에디터 설계" },
      ]
    },
    {
      id: "proj_hollowknight",
      companyId: "exp_kyungil",
      name: "Hollow Knight 모작",
      period: "2022.01",
      type: "Replica Game",
      role: "1인 개발",
      tech: ["C/C++", "WinAPI"],
      cardBanner: "assets/images/hollowknight/banner.png",
      banner: "assets/images/hollowknight/library.png",
      hero: "assets/images/hollowknight/hero.png",
      playLink: "https://youtu.be/WpeY7VANATY",
      githubLink: "https://github.com/Elpoco/CPP_HollowKnight",
      youtubeUrl: "https://www.youtube.com/embed/WpeY7VANATY",
      platforms: ["PC"],
      description: "C++ Win API를 사용하여 'Hollow Knight'를 모작한 1인 개발 프로젝트입니다.",
      details: [
        "플레이어 캐릭터 개발",
        "보스 몬스터 개발",
        "보스 몬스터의 패턴 구현",
        "패링 시스템 구현"
      ],
      technical: [
        // {
        //   title: "렌더링 최적화",
        //   desc: "처음엔 화면 밖으로 나가는 총알들이 화면 밖으로 나가도 계속 그려졌습니다. 이를 해결하기 위해 카메라 컬링을 하여 최적화 하였습니다."
        // },
        // {
        //   title: "맵 에디터 개발",
        //   desc: "직접 타일 및 오브젝트를 배치할 수 있는 레벨 에디터(Map Tool)를 개발했습니다."
        // },
      ],
      achievements: [
        // { title: "Precise Physics Clone", desc: "메트로배니아 특유의 날카로운 공중 제어 및 충돌 물리 구현" },
        // { title: "GDI Double Buffering", desc: "GDI 환경에서 최상의 부드러움을 구현한 렌더링 셋업" }
      ]
    },
    {
      id: "proj_borabit",
      companyId: "exp_banco",
      name: "보라비트",
      period: "2021.06 ~ 2021.08",
      type: "Web Service",
      role: "백엔드 유지보수",
      tech: ["PHP", "MySQL"],
      cardBanner: "assets/images/borabit/banner.png",
      banner: "assets/images/borabit/library.png",
      hero: "assets/images/borabit/hero.png",
      playLink: "https://www.borabit.com/",
      platforms: ["Web"],
      description: "가상화폐 거래소 '보라비트'의 백엔드 유지보수 업무를 담당했습니다.",
      details: [
        "DB 내 민감한 개인 정보(비밀번호, 지갑 주소 등) 양방향/단방향 암호화",
      ],
      achievements: [
        // { title: "Security Upgrade", desc: "전체 회원 대상 개인정보의 강력한 암호화 마이그레이션 완료" },
        // { title: "Exchange Stabilization", desc: "실거래 위협 로그 분석 후 즉각적인 방화벽 및 예외 처리 패치" }
      ]
    },
    {
      id: "proj_metavex",
      companyId: "exp_banco",
      name: "메타벡스",
      period: "2021.06 ~ 2021.08",
      type: "Web Service",
      role: "백엔드 유지보수",
      tech: ["PHP", "MySQL"],
      cardBanner: "assets/images/metavex/banner.png",
      banner: "assets/images/metavex/library.png",
      hero: "assets/images/metavex/hero.png",
      platforms: ["Web"],
      description: "가상화폐 거래소 '메타벡스'의 백엔드 유지보수 업무를 담당했습니다.",
      details: [
        "DB 내 민감한 개인 정보(비밀번호, 지갑 주소 등) 양방향/단방향 암호화",
      ],
      achievements: [
        // { title: "Security Upgrade", desc: "전체 회원 대상 개인정보의 강력한 암호화 마이그레이션 완료" },
        // { title: "Exchange Stabilization", desc: "실거래 위협 로그 분석 후 즉각적인 방화벽 및 예외 처리 패치" }
      ]
    },
    {
      id: "proj_nfex",
      companyId: "exp_banco",
      name: "NFEX",
      period: "2021.06 ~ 2021.08",
      type: "Web Service",
      role: "백엔드 유지보수",
      tech: ["PHP", "MySQL"],
      cardBanner: "assets/images/empty/banner.png",
      banner: "assets/images/empty/library.png",
      hero: "assets/images/empty/hero.png",
      platforms: ["Web"],
      description: "가상화폐 거래소 'NFEX'의 백엔드 유지보수 업무를 담당했습니다.",
      details: [
        "DB 내 민감한 개인 정보(비밀번호, 지갑 주소 등) 양방향/단방향 암호화",
      ],
      achievements: [
        // { title: "Security Upgrade", desc: "전체 회원 대상 개인정보의 강력한 암호화 마이그레이션 완료" },
        // { title: "Exchange Stabilization", desc: "실거래 위협 로그 분석 후 즉각적인 방화벽 및 예외 처리 패치" }
      ]
    },
    {
      id: "proj_ezpen",
      companyId: "exp_toksolution",
      name: "이지펜 (EZPEN)",
      period: "2021.02 ~ 2021.03",
      type: "Web Service",
      role: "1인 개발 총괄",
      tech: ["PHP", "MySQL", "JavaScript"],
      cardBanner: "assets/images/ezpen/banner.png",
      banner: "assets/images/ezpen/library.png",
      hero: "assets/images/ezpen/hero.png",
      playLink: "https://ezpen.co.kr/",
      platforms: ["Web", "Android"],
      description: "사용자가 작성한 논술/글쓰기 원고를 첨삭 선생님과 매칭 후 첨삭 받을 수 있는 서비스입니다.",
      details: [
        "아임포트(I'mport) 연동을 통한 월 정기 구독 및 건당 결제 시스템 설계",
        "OneSignal Push API 연동을 활용한 글 업로드 및 첨삭 완료 실시간 알림 기능",
        "로컬 스토리지 및 DB 연동 기반 실시간 글쓰기 임시 저장 및 상태 동기화 구현",
      ],
      achievements: [
        // { title: "PG Payment Pipeline", desc: "다양한 PG사 결제를 아우르는 아임포트 API 완벽 연동" },
        // { title: "Realtime Notification", desc: "OneSignal을 연동하여 모바일 알림 수신율 99% 달성" },
        { title: "자동 저장", desc: "네트워크 불안정 시에도 작성 글 유실을 제로화한 자동 저장 메커니즘" }
      ]
    },
    {
      id: "proj_mypool",
      companyId: "exp_toksolution",
      name: "마이풀 (MyPool)",
      period: "2020.10 ~ 2021.01",
      type: "App Service",
      role: "1인 개발 총괄",
      tech: ["React Native"],
      cardBanner: "assets/images/mypool/banner.png",
      banner: "assets/images/mypool/library.png",
      hero: "assets/images/mypool/hero.png",
      playLink: "https://play.google.com/store/apps/details?id=com.mypool",
      appleLink: "https://url.kr/j6q4a3",
      platforms: ["Android", "iOS"],
      description: "영어, 중국어, 토익 인강 시청 및 문제를 풀 수 있는 구독형 어학 학습 어플입니다.",
      details: [
        "네이버, 카카오, 애플 간편 SNS 로그인 구현",
        "IAPHUB 연동을 통한 구글 플레이/애플 앱스토어 구독제 인앱 결제 구현",
        "진단 테스트 결과 및 사용자 관심 코드를 연산해 맞춤 강좌를 추천 알고리즘 구현"
      ],
      achievements: [
        // { title: "Cross-Platform Expert", desc: "단일 코드베이스로 안드로이드 및 iOS 스토어에 동시 상용 출시" },
        // { title: "In-App Subscription", desc: "모바일 영수증 검증 기반 IAPHUB 구독 인앱 결제 완벽 정산 구현" },
        // { title: "Smart Recommendation", desc: "사용자의 오답 유형과 학습 데이터를 분석한 자동 맞춤 추천 피드 연동" }
      ]
    },
    {
      id: "proj_machasa_admin",
      companyId: "exp_toksolution",
      name: "마찾사 관리자 페이지",
      period: "2020.09",
      type: "Web Service",
      role: "1인 개발 총괄",
      tech: ["PHP", "MySQL", "JavaScript"],
      cardBanner: "assets/images/machasa/banner.png",
      banner: "assets/images/machasa/library.png",
      hero: "assets/images/machasa/hero.png",
      platforms: ["Web"],
      description: "마사지 매장 정보 앱 '마찾사'의 서비스 관리자 페이지 입니다.",
      details: [
        "전국 제휴 매장 계약 기간 체크 및 연장 만료일 알림 자동 시스템 스케줄링",
        "사용자 블랙리스트 공유 게시판 및 악성 유저 차단 정책 필터 구현",
        "앱 내 공지 롤링 및 배너 팝업 실시간 제어 어드민 모듈"
      ],
      achievements: [
        // { title: "Admin Systemization", desc: "매장 계약부터 유저 제재까지 자동화한 백오피스 단독 구축" },
        // { title: "Popup Scheduler", desc: "개발자 개입 없이 마케터가 실시간으로 배너를 게시/예약하는 기능 구현" }
      ]
    },
    {
      id: "proj_machasa",
      companyId: "exp_toksolution",
      name: "마찾사",
      period: "2020.07 ~ 2020.08",
      type: "App Service",
      role: "1인 개발 총괄",
      tech: ["React Native"],
      cardBanner: "assets/images/machasa/banner.png",
      banner: "assets/images/machasa/library.png",
      hero: "assets/images/machasa/hero.png",
      playLink: "https://play.google.com/store/apps/details?id=com.toksol.machasa",
      appleLink: "https://apps.apple.com/kr/app/%EB%A7%88%EC%B0%BE%EC%82%AC/id1558385716",
      platforms: ["Android", "iOS"],
      description: "내 주변 위치 기반으로 마사지 매장을 매칭하고 정보를 제공해주는 서비스입니다.",
      details: [
        "모바일 GPS 위/경도 데이터를 활용한 거리순 정렬 검색 구현",
        "URL Scheme을 사용해 지도 앱 연동"
      ],
      achievements: [
        // { title: "LBS Master", desc: "모바일 GPS 위치 데이터를 정밀 계산해 실시간 제휴 매장 최적 정렬" },
        // { title: "Multi-Filter Search", desc: "성능 지연 없이 실시간 태그와 복합 옵션별 검색 매칭 구현" }
      ],
      screenshots: [
        "assets/images/machasa/screenshot_01.png",
        "assets/images/machasa/screenshot_02.png",
        "assets/images/machasa/screenshot_03.png",
        "assets/images/machasa/screenshot_04.png",
        "assets/images/machasa/screenshot_05.png",
        "assets/images/machasa/screenshot_06.png",
        "assets/images/machasa/screenshot_07.png",
        "assets/images/machasa/screenshot_08.png",
        "assets/images/machasa/screenshot_09.png",
        "assets/images/machasa/screenshot_10.png",
        "assets/images/machasa/screenshot_11.png",
        "assets/images/machasa/screenshot_12.png",
        "assets/images/machasa/screenshot_13.png",
      ]
    },
    {
      id: "proj_manpa",
      companyId: "exp_toksolution",
      name: "터치만파",
      period: "2020.06",
      type: "App Service",
      role: "앱 개발",
      tech: ["Java"],
      cardBanner: "assets/images/empty/banner.png",
      banner: "assets/images/empty/library.png",
      hero: "assets/images/empty/hero.png",
      playLink: "https://play.google.com/store/apps/details?id=com.system.vingo",
      platforms: ["Android"],
      description: "차량 부품의 바코드를 카메라로 스캔하여 부품 규격과 정보를 보여주는 산업용 유틸리티 웹앱입니다.",
      details: [
        "OpenCV를 통해 스캐너 모듈 구현"
      ],
      achievements: [
        // { title: "OpenCV Optimization", desc: "빛 번짐이 심한 차량 표면에서 차대번호 영역을 정밀 이진화 처리" },
        // { title: "Hybrid OCR Scanner", desc: "구글 비전 API와 로컬 스캔의 결합으로 차량 번호 판독 정확도 95% 이상 확보" }
      ]
    },
    {
      id: "proj_deagu",
      companyId: "exp_toksolution",
      name: "대구 자기 지킴이",
      period: "2020.06",
      type: "Web/App Service",
      role: "앱 개발",
      tech: ["Swift"],
      cardBanner: "assets/images/empty/banner.png",
      banner: "assets/images/empty/library.png",
      hero: "assets/images/empty/hero.png",
      playLink: "https://play.google.com/store/apps/details?id=com.system.vingo",
      platforms: ["iOS"],
      description: "코로나 관련 앱으로 대학교 출석 연동하는 기능과 시간마다 자가 검진을 할 수 있는 웹앱입니다.",
      details: [
        "일정 시간마다 알림 기능을 통해 검진 유도 기능 개발",
        "웹 서비스와 API 통신 하여 정보 동기화 개발"
      ],
      achievements: [
        // { title: "OpenCV Optimization", desc: "빛 번짐이 심한 차량 표면에서 차대번호 영역을 정밀 이진화 처리" },
        // { title: "Hybrid OCR Scanner", desc: "구글 비전 API와 로컬 스캔의 결합으로 차량 번호 판독 정확도 95% 이상 확보" }
      ]
    },
    {
      id: "proj_only1trip_admin",
      companyId: "exp_toksolution",
      name: "Only1Trip 관리자 페이지",
      period: "2020.05",
      type: "Web/App Service",
      role: "1인 개발 총괄",
      tech: ["PHP", "MySQL", "JavaScript"],
      cardBanner: "assets/images/only1trip/banner.png",
      banner: "assets/images/only1trip/library.png",
      hero: "assets/images/only1trip/hero.png",
      platforms: ["Web"],
      description: "여행 매칭 플랫폼 'Only1Trip'의 관리자 페이지입니다.",
      details: [
        // "PHPMailer 라이브러리를 연동한 계정 분실, 가입 승인, 플래너 계약 메일 전송 모듈 구축",
        // "여행 상품 등록 승인/반려/삭제 처리 및 불량 여행기 모더레이팅 툴 개발",
        // "EXIMBAY PG 연동 데이터를 파싱한 대금 정산 및 결제 취소 API 어드민 매칭"
      ],
      achievements: [
        // { title: "Unified moderating", desc: "커뮤니티 글 검열 및 여행 상품 매니지먼트의 관리" },
        // { title: "Mail Pipeline", desc: "이메일 템플릿 동적 변환 및 동시 발송 성능 패치" }
      ]
    },
    {
      id: "proj_only1trip",
      companyId: "exp_toksolution",
      name: "Only1Trip",
      period: "2020.02 ~ 2020.04",
      type: "Web/App Service",
      role: "1인 개발 총괄",
      tech: ["PHP", "MySQL", "JavaScript"],
      cardBanner: "assets/images/only1trip/banner.png",
      banner: "assets/images/only1trip/library.png",
      hero: "assets/images/only1trip/hero.png",
      playLink: "https://www.only1trip.com/",
      platforms: ["Web"],
      description: "사용자가 등록한 맞춤형 요구에 따라 전문 여행 플래너가 코스를 제시하는 중개 매칭 사이트입니다.",
      details: [
        "Google Maps API를 이용해 커스텀 랜드마크 핀 배치 및 경유지 동선 드로잉 기능 구현",
        "국내외 가맹 결제를 위해 EXIMBAY API를 활용한 카드 해외 결제 시스템 구축",
        "Google Web STT/TTS API 기반 음성 인식 여행지 자동 탐색 및 간편 예약 기능 개발"
      ],
      achievements: [
        // { title: "Custom Mapping Engine", desc: "구글 맵 위에 다지점 경로 선 연결 및 실시간 거리 계산 구현" },
        // { title: "Voice Search Tech", desc: "STT API를 접목해 키보드 조작 없이 말로 검색하는 예약 데모 시연 성공" },
        // { title: "Global Transaction", desc: "다국화 결제 게이트웨이 EXIMBAY의 보안 토큰 기반 API 결제 구조 정립" }
      ],
      screenshots: [
        "assets/images/machasa/screenshot_01.png",
        "assets/images/machasa/screenshot_02.png",
        "assets/images/machasa/screenshot_03.png",
        "assets/images/machasa/screenshot_04.png",
        "assets/images/machasa/screenshot_05.png",
        "assets/images/machasa/screenshot_06.png",
        "assets/images/machasa/screenshot_07.png",
        "assets/images/machasa/screenshot_08.png",
        "assets/images/machasa/screenshot_09.png",
        "assets/images/machasa/screenshot_10.png",
        "assets/images/machasa/screenshot_11.png",
      ]
    },
    {
      id: "proj_smartsome",
      companyId: "exp_toksolution",
      name: "스마트썸",
      period: "2019.11 ~ 2020.01",
      type: "Web/App Service",
      role: "앱 개발 총괄",
      tech: ["Java", "Swift"],
      cardBanner: "assets/images/smartsome/banner.png",
      banner: "assets/images/smartsome/library.png",
      hero: "assets/images/smartsome/hero.png",
      playLink: "https://play.google.com/store/apps/details?id=com.toksolution.mine",
      appleLink: "https://apps.apple.com/kr/app/%EC%8A%A4%EB%A7%88%ED%8A%B8%EC%8D%B8/id1486294292",
      platforms: ["Android", "iOS"],
      description: "VoIP 실시간 음성 통화 기능과 매칭 알고리즘이 내장된 데이팅 하이브리드 웹앱입니다.",
      details: [
        "VoIP 외부 라이브러리를 사용해 실시간 통화 구현",
        "음성 녹음 및 업로드 후 자기소개 기능 구현",
        "안드로이드 Java 및 iOS Swift 기반 Javascript Bridge 연동으로 하이브리드 웹앱 통신 구현",
        "구글 플레이 / 애플 앱스토어 인앱결제 구현"
      ],
      achievements: [
        // { title: "Voice Call Engine", desc: "WebRTC 기술을 적용해 서버 비용 최소화 및 끊김 없는 음성 통화 성공" },
        // { title: "Hybrid Bridge Arch", desc: "웹 뷰 내 Javascript와 모바일 네이티브 컨트롤러 간 에러 없는 브릿지 패턴 정립" },
        // { title: "Cross-platform IAP", desc: "AOS/iOS 각각의 인앱 결제 모듈 연동 및 영수증 실시간 보안 대조 완료" }
      ],
      screenshots: [
        "assets/images/smartsome/screenshot_01.png",
        "assets/images/smartsome/screenshot_02.png",
        "assets/images/smartsome/screenshot_03.png",
        "assets/images/smartsome/screenshot_04.png",
        "assets/images/smartsome/screenshot_05.png",
        "assets/images/smartsome/screenshot_06.png",
      ]
    },
    {
      id: "proj_moontalk",
      companyId: "exp_toksolution",
      name: "문톡 (Moon Talk)",
      period: "2019.08 ~ 2019.10",
      type: "Web/App Service",
      role: "앱 개발 총괄",
      tech: ["Java", "Swift"],
      cardBanner: "assets/images/moontalk/banner.png",
      banner: "assets/images/moontalk/library.png",
      hero: "assets/images/moontalk/hero.png",
      playLink: "https://m.onestore.co.kr/mobilepoc/apps/appsDetail.omp?prodId=0000743106&scYn=Y",
      appleLink: "https://apps.apple.com/kr/app/%EB%AC%B8%ED%86%A1/id1488438926",
      platforms: ["Android", "iOS"],
      description: "웹에서 발송한 단체 문자 신호를 모바일 디바이스가 수신해 디바이스 통신 요금제로 대량의 SMS를 위탁 전송하는 메시징 앱입니다. (iOS는 로비 채팅방만 구성)",
      details: [
        "모바일 주소록 동기화 기능 구현",
        "단말기로 들어오는 문자 수신 시그널을 받아 DB 적재",
        "백그라운드 스레드 및 스케줄러를 가동해 수천 건의 단체/예약 메시지를 발송 지연(Delay)을 제어하며 자동 전송하는 기능 구현",
        "Firebase Realtime Database 및 FCM을 활용한 공개/비공개 채팅방 및 실시간 차단 시스템 구축"
      ],
      achievements: [
        // { title: "SMS Scheduler", desc: "OS의 백그라운드 슬립 차단을 피하는 영속성 서비스 스레드 설계" },
        // { title: "Data Listener", desc: "BroadcastReceiver 기반 메시지 수신 패킷 파싱 모듈 구현" },
        // { title: "Real-time Lobby", desc: "Firebase NoSQL 기반 실시간 동기화로 딜레이 없는 다자간 대화 챗룸 구축" }
      ],
      screenshots: [
        "assets/images/moontalk/screenshot_01.png",
        "assets/images/moontalk/screenshot_02.png",
        "assets/images/moontalk/screenshot_03.png",
        "assets/images/moontalk/screenshot_04.png",
        "assets/images/moontalk/screenshot_05.png",
        "assets/images/moontalk/screenshot_06.png",
      ]
    },
    {
      id: "proj_loa",
      companyId: "exp_mirae",
      name: "로아 망원경",
      period: "2019.02 ~ 2019.03",
      type: "Replica Game",
      role: "1인 개발",
      tech: ["Java"],
      cardBanner: "assets/images/loa/banner.png",
      banner: "assets/images/loa/library.png",
      hero: "assets/images/loa/hero.png",
      playLink: "https://play.google.com/store/apps/details?id=com.elpoco.p_mapfinder",
      platforms: ["Android"],
      description: "게임 '로스트아크'의 컨텐츠 중 보물지도의 위치를 찾기가 어려워 서로 정보 공유 하기 위해 만든 앱입니다.",
      details: [
        "dothome 웹호스팅 및 MySQL 서버 연동 기반 모바일 익명 게시판 및 댓글 스키마 구축",
        "Google AdMob SDK를 도입한 배너/전면 광고 게재 및 레이아웃 최적화"
      ],
      achievements: [
        // { title: "Ad Monetization", desc: "구글 애드몹 연동 및 수익화를 위한 UI 광고 노출 안전 루틴 구현" }
      ]
    }
  ]
};
