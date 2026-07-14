const portfolioData = {
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
    { name: "C/C++", category: "Game" },
    { name: "C#", category: "Game" },
    { name: "PHP", category: "Backend" },
    { name: "MySQL", category: "Backend" },
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
      role: "유니티 클라이언트 개발",
      description: "스팀 출시 게임 개발.",
      type: "company"
    },
    {
      id: "exp_fireshrike",
      company: "파이어슈라이크게임즈",
      period: "2022.06 ~ 2026.01",
      role: "유니티 클라이언트 및 서버 개발",
      description: "모바일 게임 클라이언트/서버 콘텐츠 개발 진행.",
      type: "company"
    },
    {
      id: "exp_kyungil",
      company: "경일 게임 아카데미",
      period: "2021.11 ~ 2022.06",
      role: "C++ / 유니티 프로그래밍 교육 수료",
      description: "C++ WinAPI, Unity 기반 클라이언트 핵심 프로그래밍 과정 이수.",
      type: "education"
    },
    {
      id: "exp_banco",
      company: "뱅코",
      period: "2021.06 ~ 2021.08",
      role: "백엔드 개발",
      description: "가상화폐 거래소 관련 웹 백엔드 유지보수.",
      type: "company"
    },
    {
      id: "exp_toksolution",
      company: "톡솔루션",
      period: "2019.08 ~ 2021.04",
      role: "앱 / 웹 개발, 백엔드 개발",
      description: "React Native, 하이브리드 앱 개발 및 네이티브 앱, PHP/MySQL 기반 백엔드 API 설계 및 개발.",
      type: "company"
    },
    {
      id: "exp_wego",
      company: "위고 컴퍼니",
      period: "2019.05 ~ 2019.07",
      role: "안드로이드 앱 개발",
      description: "가상화폐 거래소 주변 기기 관련 앱 개발.",
      type: "company"
    },
    {
      id: "exp_mirae",
      company: "미래능력 개발 교육원",
      period: "2018.09 ~ 2019.06",
      role: "안드로이드 앱 프로그래밍 교육 수료",
      description: "자바, 안드로이드 SDK, 모바일 앱 개발 과정 수료.",
      type: "education"
    }
  ],
  projects: [
    // {
    //   id: "proj_tinytown",
    //   companyId: "exp_indie",
    //   name: "Rope Up!",
    //   period: "2025.03 ~ 2026.05",
    //   type: "Commercial Game",
    //   role: "2인 개발",
    //   tech: ["Unity", "C#"],
    //   cardBanner: "assets/images/Banner_RopeUp.png",
    //   banner: "assets/images/Library_RopeUp.png",
    //   hero: "assets/images/Hero_RopeUp.png",
    //   playLink: "https://store.steampowered.com/app/4595740/Rope_Up/?l=koreana&curator_clanid=34659241",
    //   youtubeUrl: "https://www.youtube.com/embed/O7HDu78Jo4k",
    //   platforms: ["Steam"],
    //   description: "Steam에 정식 출시한 물리 기반 클라이밍 게임으로, 로프 스윙과 정교한 조작을 활용해 정상까지 도달하는 것이 목표입니다.",
    //   details: [
    //     "로프 물리 기반 개발",
    //     "Unity Netcode for GameObjects(NGO)를 활용한 멀티플레이 구현",
    //     "Steamworks API를 활용한 로비 생성 및 초대 시스템 구현"
    //   ],
    //   achievements: [
    //     { title: "Steam Release", desc: "스팀 정식 런칭 및 서비스 개시" }
    //   ]
    // },
    {
      id: "proj_ropeup",
      companyId: "exp_indie",
      name: "Rope Up!",
      period: "2025.03 ~ 2026.05",
      type: "Commercial Game",
      role: "2인 개발",
      tech: ["Unity", "C#"],
      cardBanner: "assets/images/Banner_RopeUp.png",
      banner: "assets/images/Library_RopeUp.png",
      hero: "assets/images/Hero_RopeUp.png",
      playLink: "https://store.steampowered.com/app/4595740/Rope_Up/?l=koreana&curator_clanid=34659241",
      youtubeUrl: "https://www.youtube.com/embed/O7HDu78Jo4k",
      platforms: ["Steam"],
      description: "Steam에 정식 출시한 물리 기반 클라이밍 게임으로, 로프 스윙과 정교한 조작을 활용해 정상까지 도달하는 것이 목표입니다.",
      details: [
        "로프 물리 기반 개발",
        "Unity Netcode for GameObjects(NGO)를 활용한 멀티플레이 구현",
        "Steamworks API를 활용한 로비 생성 및 초대 시스템 구현"
      ],
      achievements: [
        { title: "Steam Release", desc: "스팀 정식 런칭 및 서비스 개시" }
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
      cardBanner: "assets/images/Banner_fxh.png",
      banner: "assets/images/Library_fxh.png",
      hero: "assets/images/Hero_fxh.png",
      playLink: "https://play.google.com/store/search?q=fantasy+hunters&c=apps&hl=ko",
      platforms: ["Android"],
      description: "판타지 테마의 하이퍼 캐주얼 RPG 게임으로, 무기를 수집하여 장착후 전투를 하며 전리품을 판매하여 강해지는 게임입니다.",
      details: [
        "메인 캐릭터 스킬 메커니즘 개발",
        "몬스터 추가 및 스킬 패턴 구현",
        "인게임 연출 시스템 구현"
      ],
      achievements: [
        { title: "Google Play Launch", desc: "구글 플레이 스토어 출시 및 배포 관리" },
        { title: "Vibrant Combat Engine", desc: "타격감이 돋보이는 액션 스킬 연동 구현" },
        { title: "Optimization Specialist", desc: "대량의 적 등장 시 프레임 드랍 방지 최적화" }
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
      cardBanner: "assets/images/Banner_cafe.png",
      banner: "assets/images/Library_cafe.png",
      hero: "assets/images/Hero_cafe.png",
      playLink: "https://play.google.com/store/apps/details?id=com.fireshrike.h2&hl=ko",
      appleLink: "https://apps.apple.com/us/app/%EC%B9%B4%ED%8E%98-%EB%9D%BC%EC%9D%B4%ED%94%84-%EC%B9%B4%ED%8E%98-%EB%A7%88%EB%8B%88%EC%95%84-cafe-life/id6747019708?l=ko",
      // youtubeUrl: "https://www.youtube.com/watch?v=0BbcYxbbi_o&source_ve_path=OTY3MTQ&embeds_referring_euri=https%3A%2F%2Fplay.google.com%2F",
      platforms: ["Android", "iOS"],
      description: "카페를 운영하는 컨셉의 하이퍼 캐주얼 게임입니다.",
      details: [
        "코어 루프 개발",
        "매장 확장 및 업그레이드 시스템 개발",
        "메인 캐릭터 스탯 시스템 개발",
        "직원 및 손님 AI 개발",
        "인게임 이벤트 시스템 개발",
        "홍보 영상 기능 구현"
      ],
      achievements: [
        { title: "Global App Store", desc: "AOS/iOS 글로벌 마켓 동시 런칭 및 피처드" },
        { title: "Core Loop Architect", desc: "중독성 높은 방치형 타이쿤의 비즈니스 로직 완성" }
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
      cardBanner: "assets/images/Banner_mfs.png",
      banner: "assets/images/Library_mfs.png",
      hero: "assets/images/Hero_mfs.png",
      youtubeUrl: "https://www.youtube.com/watch?v=E7-SupRfLPE",
      playLink: "https://play.google.com/store/apps/details?id=com.fireshrike.h1&hl=ko",
      appleLink: "https://apps.apple.com/us/app/my-food-street/id6736931912?l=ko",
      platforms: ["Android", "iOS"],
      description: "각종 식재료를 구해서 다양한 음식을 조리하고 손님에게 판매하는 하이퍼 캐주얼 게임입니다.",
      details: [
        "코어 루프 개발",
        "매장 확장 및 업그레이드 시스템 개발",
        "메인 캐릭터 스탯 시스템 개발",
        "스킨 변경 시스템 개발",
        "직원 및 손님 AI 개발",
        "인게임 이벤트 시스템 개발",
        "홍보 영상 기능 구현"
      ],
      achievements: [
        { title: "Double Launch", desc: "AOS 및 iOS 버전 통합 배포 안정적 완료" },
        { title: "State Manager", desc: "테이블, 손님, 직원 AI의 상태 연동 및 최적화" }
      ]
    },
    {
      id: "proj_nanospace",
      companyId: "exp_fireshrike",
      name: "나노스페이스",
      period: "2023.09 ~ 2024.04",
      type: "Commercial Game",
      role: "클라이언트 & 백엔드 개발",
      tech: ["Unity", "C#"],
      cardBanner: "assets/images/Banner_nanospace.png",
      banner: "assets/images/Library_nanospace.png",
      hero: "assets/images/Hero_nanospace.png",
      youtubeUrl: "https://www.youtube.com/watch?v=825-y9oi3D4",
      playLink: "https://play.google.com/store/apps/details?id=com.galileo.r3&hl=ko",
      appleLink: "https://apps.apple.com/kr/app/%EB%B3%84%EB%B9%9B%EA%B8%B0%EC%82%AC-%ED%82%A4%EC%9A%B0%EA%B8%B0/id1661086445",
      platforms: ["Android", "iOS"],
      description: "고품질 3D 그래픽의 방치형 키우기 RPG 게임입니다.",
      details: [
        "캐릭터 스킬 개발",
        "몬스터 추가",
        "보스 추가 및 스킬 개발",
        "재화 던전 추가",
        "레이드 시스템 개발"
      ],
      achievements: [
        { title: "3D Graphics Engine", desc: "화려한 3D 이펙트와 물리 기반 연출 최적화 적용" },
        { title: "Co-op Raid System", desc: "실시간 네트워크 지연을 감쇄하는 레이드 동기화 시스템 구현" },
        { title: "Database Syncing", desc: "백엔드 계정 연동 및 부정 행위 방지 데이터 설계" }
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
      cardBanner: "assets/images/Banner_mbsk.png",
      banner: "assets/images/Library_mbsk.png",
      hero: "assets/images/Hero_mbsk.png",
      youtubeUrl: "https://www.youtube.com/watch?v=_YLaQ-rlPFg",
      playLink: "https://play.google.com/store/apps/details?id=com.mobirix.mbsk&hl=ko",
      appleLink: "https://apps.apple.com/kr/app/%EB%B3%84%EB%B9%9B%EA%B8%B0%EC%82%AC-%ED%82%A4%EC%9A%B0%EA%B8%B0/id1661086445",
      platforms: ["Android", "iOS"],
      description: "모비릭스에서 퍼블리싱한 3D 방치형 키우기 RPG 게임입니다.",
      details: [
        "캐릭터 스킬 개발",
        "몬스터 추가",
        "보스 추가 및 스킬 개발",
        "신규 던전 추가",
        "레이드 시스템 개발",
        "유니티 타임라인을 사용하여 보스/레이드 연출 구현"
      ],
      achievements: [
        { title: "Global Publishing Success", desc: "글로벌 퍼블리셔(Mobirix)를 통해 다운로드 수십만 돌파" },
        { title: "Massive Hack & Slash", desc: "3D 캐릭터 다중 투사체 궤적 및 렉 없는 연출 최적화" },
        { title: "Full Stack Live Care", desc: "라이브 서비스 중 발생한 백엔드 재화 무결성 위협 긴급 대처" }
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
      cardBanner: "assets/images/Banner_dungreed.png",
      banner: "assets/images/Library_dungreed.png",
      hero: "assets/images/Hero_dungreed.png",
      playLink: "https://youtu.be/2GJa40E7roc",
      githubLink: "https://github.com/Elpoco/CPP_Dungreed",
      youtubeUrl: "https://www.youtube.com/embed/2GJa40E7roc",
      platforms: ["PC"],
      description: "C++ Win API 및 GDI/GDI+를 사용하여 로그라이크 게임 'Dungreed'를 모작한 PC 프로젝트입니다.",
      details: [
        "GDI+를 활용한 2D 카메라 렌더링 시스템 및 화면 내 컬링 최적화 구현",
        "비선형 보간 및 타일 맵을 이용한 그리드 기반 맵 에디터(Map Tool) 개발",
        "인벤토리, 상점, 어빌리티 포인트, 장착 장비 능력치 연산 매니저 클래스 구축",
        "보스 몬스터의 애니메이션 상태 기반 AI 패턴 스크립팅 구현"
      ],
      achievements: [
        { title: "WinAPI Game Engine", desc: "라이브러리 없이 자체적으로 다목적 2D 렌더링 엔진 구축" },
        { title: "Integrated Map Tool", desc: "직접 타일 및 오브젝트를 배치할 수 있는 레벨 에디터 설계" },
        { title: "Intelligent Mini-Map", desc: "전체 맵 경계를 분석하여 유동적으로 입구를 추적하는 인공지능 알고리즘 설계" }
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
      cardBanner: "assets/images/Banner_hk.png",
      banner: "assets/images/Library_hk.png",
      hero: "assets/images/Hero_hk.png",
      playLink: "https://youtu.be/WpeY7VANATY",
      githubLink: "https://github.com/Elpoco/CPP_HollowKnight",
      youtubeUrl: "https://www.youtube.com/embed/WpeY7VANATY",
      platforms: ["PC"],
      description: "C++ Win API를 사용하여 'Hollow Knight'를 모작한 1인 개발 프로젝트입니다.",
      details: [
        "보스 몬스터의 애니메이션 상태 기반 AI 패턴 스크립팅 구현",
        "패링 시스템의 공격 피격 타이밍 및 반격 성공 로직 구현"
      ],
      achievements: [
        { title: "Precise Physics Clone", desc: "메트로배니아 특유의 날카로운 공중 제어 및 충돌 물리 구현" },
        { title: "GDI Double Buffering", desc: "GDI 환경에서 최상의 부드러움을 구현한 렌더링 셋업" }
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
      cardBanner: "assets/images/Banner_bora.png",
      banner: "assets/images/Library_bora.png",
      hero: "assets/images/Hero_bora.png",
      playLink: "https://www.borabit.com/",
      platforms: ["Web"],
      description: "가상화폐 거래소 '보라비트'의 백엔드 유지보수 업무를 담당했습니다.",
      details: [
        "DB 내 민감한 개인 정보(비밀번호, 지갑 주소 등) 양방향/단방향 암호화",
      ],
      achievements: [
        { title: "Security Upgrade", desc: "전체 회원 대상 개인정보의 강력한 암호화 마이그레이션 완료" },
        { title: "Exchange Stabilization", desc: "실거래 위협 로그 분석 후 즉각적인 방화벽 및 예외 처리 패치" }
      ]
    },
    {
      id: "proj_metabex",
      companyId: "exp_banco",
      name: "메타벡스",
      period: "2021.06 ~ 2021.08",
      type: "Web Service",
      role: "백엔드 유지보수",
      tech: ["PHP", "MySQL"],
      cardBanner: "assets/images/Banner_meta.png",
      banner: "assets/images/Library_meta.png",
      hero: "assets/images/Hero_meta.png",
      // playLink: "https://www.borabit.com/",
      platforms: ["Web"],
      description: "가상화폐 거래소 '메타벡스'의 백엔드 유지보수 업무를 담당했습니다.",
      details: [
        "DB 내 민감한 개인 정보(비밀번호, 지갑 주소 등) 양방향/단방향 암호화",
      ],
      achievements: [
        { title: "Security Upgrade", desc: "전체 회원 대상 개인정보의 강력한 암호화 마이그레이션 완료" },
        { title: "Exchange Stabilization", desc: "실거래 위협 로그 분석 후 즉각적인 방화벽 및 예외 처리 패치" }
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
      cardBanner: "assets/images/Banner_Empty.png",
      banner: "assets/images/Library_Empty.png",
      hero: "assets/images/Hero_Empty.png",
      // playLink: "https://www.borabit.com/",
      platforms: ["Web"],
      description: "가상화폐 거래소 'NFEX'의 백엔드 유지보수 업무를 담당했습니다.",
      details: [
        "DB 내 민감한 개인 정보(비밀번호, 지갑 주소 등) 양방향/단방향 암호화",
      ],
      achievements: [
        { title: "Security Upgrade", desc: "전체 회원 대상 개인정보의 강력한 암호화 마이그레이션 완료" },
        { title: "Exchange Stabilization", desc: "실거래 위협 로그 분석 후 즉각적인 방화벽 및 예외 처리 패치" }
      ]
    },
    {
      id: "proj_ezpen",
      companyId: "exp_toksolution",
      name: "이지펜 (EZPEN)",
      period: "2021.02 ~ 2021.03",
      type: "Web Service",
      role: "아트팀과 협업하여 총괄 개발",
      tech: ["PHP", "MySQL", "JavaScript"],
      cardBanner: "assets/images/Banner_ezpen.png",
      banner: "assets/images/Library_ezpen.png",
      hero: "assets/images/Hero_ezpen.png",
      playLink: "https://ezpen.co.kr/",
      platforms: ["Web", "Android"],
      description: "사용자가 작성한 논술/글쓰기 원고를 첨삭 선생님과 매칭 및 결제, 교정받을 수 있는 서비스입니다.",
      details: [
        "아임포트(I'mport) 연동을 통한 월 정기 구독 및 건당 결제 시스템 설계",
        "OneSignal Push API 연동을 활용한 글 업로드 및 첨삭 완료 실시간 알림 기능",
        "로컬 스토리지 및 DB 연동 기반 실시간 글쓰기 임시 저장 및 상태 변경 모듈 구현",
        "관계형 데이터베이스(RDBMS) 설계 및 테이블 정규화"
      ],
      achievements: [
        { title: "PG Payment Pipeline", desc: "다양한 PG사 결제를 아우르는 아임포트 API 완벽 연동" },
        { title: "Realtime Notification", desc: "OneSignal을 연동하여 모바일 알림 수신율 99% 달성" },
        { title: "Auto-Save Engine", desc: "네트워크 불안정 시에도 작성 글 유실을 제로화한 자동 저장 메커니즘" }
      ]
    },
    {
      id: "proj_mypool",
      companyId: "exp_toksolution",
      name: "마이풀 (MyPool)",
      period: "2020.10 ~ 2021.01",
      type: "App Service",
      role: "아트팀과 협업하여 총괄 개발",
      tech: ["React Native"],
      cardBanner: "assets/images/Banner_mypool.png",
      banner: "assets/images/Library_mypool.png",
      hero: "assets/images/Hero_mypool.png",
      playLink: "https://play.google.com/store/apps/details?id=com.mypool",
      appleLink: "https://url.kr/j6q4a3",
      platforms: ["Android", "iOS"],
      description: "영어, 중국어, 토익 인강 시청 및 문제를 풀 수 있는 구독형 어학 학습 어플입니다.",
      details: [
        "React Native 기반 크로스 플랫폼 클라이언트 개발 및 상태 관리(Redux) 설계",
        "네이버, 카카오, 애플 간편 SNS 로그인 모듈 직접 구현",
        "IAPHUB 연동을 통한 구글 플레이/애플 앱스토어 구독제 인앱 결제 파이프라인 개발",
        "진단 테스트 결과 및 사용자 관심 코드를 연산해 맞춤 강좌를 순천향화하는 추천 알고리즘 설계"
      ],
      achievements: [
        { title: "Cross-Platform Expert", desc: "단일 코드베이스로 안드로이드 및 iOS 스토어에 동시 상용 출시" },
        { title: "In-App Subscription", desc: "모바일 영수증 검증 기반 IAPHUB 구독 인앱 결제 완벽 정산 구현" },
        { title: "Smart Recommendation", desc: "사용자의 오답 유형과 학습 데이터를 분석한 자동 맞춤 추천 피드 연동" }
      ]
    },
    {
      id: "proj_machasa_admin",
      companyId: "exp_toksolution",
      name: "마찾사 관리자 페이지",
      period: "2020.09",
      type: "Web Service",
      role: "1인 개발 (Solo)",
      tech: ["PHP", "MySQL", "JavaScript"],
      cardBanner: "assets/images/Banner_Empty.png",
      banner: "assets/images/Library_Empty.png",
      hero: "assets/images/Hero_Empty.png",
      platforms: ["Web"],
      description: "마사지 매장 정보 앱 '마찾사'의 서비스 관리자 통합 백오피스입니다.",
      details: [
        "전국 제휴 매장 계약 기간 체크 및 연장 만료일 알림 자동 시스템 스케줄링",
        "사용자 블랙리스트 공유 게시판 및 악성 유저 차단 정책 필터 구현",
        "앱 내 공지 롤링 및 배너 팝업 실시간 제어 어드민 모듈"
      ],
      achievements: [
        { title: "Admin Systemization", desc: "매장 계약부터 유저 제재까지 자동화한 백오피스 단독 구축" },
        { title: "Popup Scheduler", desc: "개발자 개입 없이 마케터가 실시간으로 배너를 게시/예약하는 기능 구현" }
      ]
    },
    {
      id: "proj_machasa",
      companyId: "exp_toksolution",
      name: "마찾사",
      period: "2020.07 ~ 2020.08",
      type: "App Service",
      role: "1인 앱 총괄 개발",
      tech: ["React Native"],
      cardBanner: "assets/images/Banner_Empty.png",
      banner: "assets/images/Library_Empty.png",
      hero: "assets/images/Hero_Empty.png",
      playLink: "https://play.google.com/store/apps/details?id=com.toksol.machasa",
      appleLink: "https://apps.apple.com/kr/app/%EB%A7%88%EC%B0%BE%EC%82%AC/id1558385716",
      platforms: ["Android", "iOS"],
      description: "내 주변 위치 기반으로 마사지 매장을 매칭하고 정보를 제공해주는 서비스입니다.",
      details: [
        "모바일 GPS 위/경도 데이터를 활용한 거리순 정렬 검색 쿼리 작성",
        "URL Scheme을 사용해 지도 앱 연동"
      ],
      achievements: [
        { title: "LBS Master", desc: "모바일 GPS 위치 데이터를 정밀 계산해 실시간 제휴 매장 최적 정렬" },
        { title: "Multi-Filter Search", desc: "성능 지연 없이 실시간 태그와 복합 옵션별 검색 매칭 구현" }
      ]
    },
    {
      id: "proj_manpa",
      companyId: "exp_toksolution",
      name: "터치만파 (차대번호 검색)",
      period: "2020.07",
      type: "App Service",
      role: "앱 1인 개발",
      tech: ["Java"],
      cardBanner: "assets/images/Banner_Empty.png",
      banner: "assets/images/Library_Empty.png",
      hero: "assets/images/Hero_Empty.png",
      playLink: "https://play.google.com/store/apps/details?id=com.system.vingo",
      platforms: ["Android"],
      description: "차량 차대번호를 카메라로 스캔하여 부품 규격과 매칭 정보를 보여주는 산업용 유틸리티 앱입니다.",
      details: [
        "OpenCV를 통해 스캐너 모듈 구현"
      ],
      achievements: [
        { title: "OpenCV Optimization", desc: "빛 번짐이 심한 차량 표면에서 차대번호 영역을 정밀 이진화 처리" },
        { title: "Hybrid OCR Scanner", desc: "구글 비전 API와 로컬 스캔의 결합으로 차량 번호 판독 정확도 95% 이상 확보" }
      ]
    },
    {
      id: "proj_deagu",
      companyId: "exp_toksolution",
      name: "대구 자기 지킴이",
      period: "2020.06",
      type: "Web/App Service",
      role: "앱 1인 개발",
      tech: ["Swift"],
      cardBanner: "assets/images/Banner_Empty.png",
      banner: "assets/images/Library_Empty.png",
      hero: "assets/images/Hero_Empty.png",
      playLink: "https://play.google.com/store/apps/details?id=com.system.vingo",
      platforms: ["iOS"],
      description: "코로나 관련 앱으로 출석 연동하는 기능과 시간마다 자가 검진을 할 수 있는 웹앱입니다.",
      details: [
        "일정 시간마다 알림 기능을 통해 검진 유도 기능 개발",
        "웹 서비스와 API 통신 하여 정보 동기화 개발"
      ],
      achievements: [
        { title: "OpenCV Optimization", desc: "빛 번짐이 심한 차량 표면에서 차대번호 영역을 정밀 이진화 처리" },
        { title: "Hybrid OCR Scanner", desc: "구글 비전 API와 로컬 스캔의 결합으로 차량 번호 판독 정확도 95% 이상 확보" }
      ]
    },
    {
      id: "proj_only1trip_admin",
      companyId: "exp_toksolution",
      name: "Only1Trip 관리자 페이지",
      period: "2020.05",
      type: "Web/App Service",
      role: "1인 개발 (Solo)",
      tech: ["PHP", "MySQL", "JavaScript"],
      cardBanner: "assets/images/Banner_o1t.png",
      banner: "assets/images/Library_o1t.png",
      hero: "assets/images/Hero_o1t.png",
      platforms: ["Web"],
      description: "여행 매칭 플랫폼 'Only1Trip'의 어드민 페이지입니다.",
      details: [
        "PHPMailer 라이브러리를 연동한 계정 분실, 가입 승인, 플래너 계약 메일 전송 모듈 구축",
        "여행 상품 등록 승인/반려/삭제 처리 및 불량 여행기 모더레이팅 툴 개발",
        "EXIMBAY PG 연동 데이터를 파싱한 대금 정산 및 결제 취소 API 어드민 매칭"
      ],
      achievements: [
        { title: "Unified moderating", desc: "커뮤니티 글 검열 및 여행 상품 매니지먼트의 관리" },
        { title: "Mail Pipeline", desc: "이메일 템플릿 동적 변환 및 동시 발송 성능 패치" }
      ]
    },
    {
      id: "proj_only1trip",
      companyId: "exp_toksolution",
      name: "Only1Trip",
      period: "2020.02 ~ 2020.04",
      type: "Web/App Service",
      role: "1인 총괄 개발",
      tech: ["PHP", "MySQL", "JavaScript"],
      cardBanner: "assets/images/Banner_o1t.png",
      banner: "assets/images/Library_o1t.png",
      hero: "assets/images/Hero_o1t.png",
      playLink: "https://www.only1trip.com/",
      platforms: ["Web"],
      description: "사용자가 등록한 맞춤형 요구에 따라 전문 여행 플래너가 코스를 제시하는 중개 매칭 사이트입니다.",
      details: [
        "Google Maps API를 이용해 커스텀 랜드마크 핀 배치 및 경유지 동선 드로잉 기능 구현",
        "국내외 가맹 결제를 위해 EXIMBAY API를 활용한 카드 해외 결제 시스템 구축",
        "Google Web STT/TTS API 기반 음성 인식 여행지 자동 탐색 및 간편 예약 기능 개발"
      ],
      achievements: [
        { title: "Custom Mapping Engine", desc: "구글 맵 위에 다지점 경로 선 연결 및 실시간 거리 계산 구현" },
        { title: "Voice Search Tech", desc: "STT API를 접목해 키보드 조작 없이 말로 검색하는 예약 데모 시연 성공" },
        { title: "Global Transaction", desc: "다국화 결제 게이트웨이 EXIMBAY의 보안 토큰 기반 API 결제 구조 정립" }
      ]
    },
    {
      id: "proj_smartsome",
      companyId: "exp_toksolution",
      name: "스마트썸",
      period: "2019.11 ~ 2020.01",
      type: "Web/App Service",
      role: "1인 앱 총괄 개발",
      tech: ["Java", "Swift"],
      cardBanner: "assets/images/Banner_some.png",
      banner: "assets/images/Library_some.png",
      hero: "assets/images/Hero_some.png",
      playLink: "https://play.google.com/store/apps/details?id=com.toksolution.mine",
      appleLink: "https://apps.apple.com/kr/app/%EC%8A%A4%EB%A7%88%ED%8A%B8%EC%8D%B8/id1486294292",
      platforms: ["Android", "iOS"],
      description: "VoIP 실시간 음성 통화 기능과 매칭 알고리즘이 내장된 데이팅 하이브리드 웹앱입니다.",
      details: [
        "Remote Monster WebRTC SDK를 통합하여 초저지연(Sub-second) 고음질 P2P 음성 통화 기능 구현",
        "Native 기기 오디오 레코더를 제어해 본인의 음성을 녹음 및 압축 서버 업로드 모듈 개발",
        "안드로이드 Java 및 iOS Swift 기반 Javascript Bridge 연동으로 하이브리드 웹앱 통신 정밀 설계",
        "구글 플레이 / 애플 앱스토어 인앱결제 영수증 서버리스 검증 파이프라인 개발"
      ],
      achievements: [
        { title: "Voice Call Engine", desc: "WebRTC 기술을 적용해 서버 비용 최소화 및 끊김 없는 음성 통화 성공" },
        { title: "Hybrid Bridge Arch", desc: "웹 뷰 내 Javascript와 모바일 네이티브 컨트롤러 간 에러 없는 브릿지 패턴 정립" },
        { title: "Cross-platform IAP", desc: "AOS/iOS 각각의 인앱 결제 모듈 연동 및 영수증 실시간 보안 대조 완료" }
      ]
    },
    {
      id: "proj_moontalk",
      companyId: "exp_toksolution",
      name: "문톡 (Moon Talk)",
      period: "2019.08 ~ 2019.10",
      type: "Web/App Service",
      role: "1인 앱 총괄 개발",
      tech: ["Java", "Swift"],
      cardBanner: "assets/images/Banner_moontalk.png",
      banner: "assets/images/Library_moontalk.png",
      hero: "assets/images/Hero_moontalk.png",
      playLink: "https://m.onestore.co.kr/mobilepoc/apps/appsDetail.omp?prodId=0000743106&scYn=Y",
      appleLink: "https://apps.apple.com/kr/app/%EB%AC%B8%ED%86%A1/id1488438926",
      platforms: ["Android", "iOS"],
      description: "웹에서 발송한 단체 문자 신호를 모바일 디바이스가 수신해 디바이스 통신 요금제로 대량의 SMS를 위탁 전송하는 메일링/메시징 솔루션입니다. (iOS는 로비 채팅방만 구성)",
      details: [
        "ContentProvider를 사용한 모바일 주소록 고속 동기화 파서 개발",
        "BroadcastReceiver를 사용해 단말기로 들어오는 문자 수신 시그널을 탈취해 실시간 DB 적재",
        "백그라운드 스레드 및 스케줄러를 가동해 수천 건의 단체/예약 메시지를 발송 지연(Delay)을 제어하며 자동 전송하는 알고리즘 구현",
        "Firebase Realtime Database 및 FCM을 활용한 공개/비공개 채팅방 및 실시간 차단 시스템 구축"
      ],
      achievements: [
        { title: "SMS Scheduler", desc: "OS의 백그라운드 슬립 차단을 피하는 영속성 서비스 스레드 설계" },
        { title: "Data Listener", desc: "BroadcastReceiver 기반 메시지 수신 패킷 파싱 모듈 구현" },
        { title: "Real-time Lobby", desc: "Firebase NoSQL 기반 실시간 동기화로 딜레이 없는 다자간 대화 챗룸 구축" }
      ]
    },
    {
      id: "proj_loa",
      companyId: "exp_mirae",
      name: "로아 망원경",
      period: "2019.02 ~ 2019.03",
      type: "Replica Game",
      role: "1인 개발 (Solo)",
      tech: ["Java"],
      cardBanner: "assets/images/Banner_loa.png",
      banner: "assets/images/Library_loa.png",
      hero: "assets/images/Hero_loa.png",
      playLink: "https://play.google.com/store/apps/details?id=com.elpoco.p_mapfinder",
      platforms: ["Android"],
      description: "게임 '로스트아크'의 컨텐츠 중 보물지도의 위치를 찾기가 어려워 서로 정보 공유 하기 위해 만든 앱입니다.",
      details: [
        "dothome 웹호스팅 및 MySQL 서버 연동 기반 모바일 익명 게시판 및 댓글 스키마 구축",
        "Google AdMob SDK를 도입한 배너/전면 광고 게재 및 레이아웃 최적화"
      ],
      achievements: [
        { title: "Ad Monetization", desc: "구글 애드몹 연동 및 수익화를 위한 UI 광고 노출 안전 루틴 구현" }
      ]
    }
  ]
};
