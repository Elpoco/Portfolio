const portfolioData = {
  featuredCount: 9, // Store 페이지(주요 프로젝트)에 표시할 프로젝트 개수
  profile: {
    name: "정지현",
    nickname: "Elpoco",
    status: "Online",
    gameStatus: "포트폴리오 개발 중",
    level: 96,
    avatar: "assets/images/jjh2.jpg",
    email: "wjdwlgus96@gmail.com",
    phone: "010-8990-4721",
    github: "https://github.com/Elpoco",
    blog: "https://elpoco.tistory.com",
    portfolioUrl: "https://elpoco.github.io/Portfolio/print.html",
    address: "서울 성동구 성수동",
    birth: "1996.11.25",
    summary: "상용 모바일 3D RPG 및 Steam 인디 게임을 정식 런칭한 4년 차 Unity 클라이언트 프로그래머입니다."
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
      period: "2022.06 ~ 2026.02",
      role: "Unity 클라이언트 및 백엔드 개발",
      description: "모바일 3D 방치형 게임과 하이퍼 캐주얼 게임을 개발했습니다.\n콘텐츠 단위로 클라이언트와 백엔드를 함께 개발했으며, 아트팀과 협업하여 이펙트, 애니메이션 연출을 게임에 적용했습니다.",
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
      period: "2021.06 ~ 2021.10",
      role: "백엔드 개발",
      description: "가상화폐 거래소 관련 웹 백엔드 유지보수 및 기능 개발을 했습니다.",
      type: "company"
    },
    {
      id: "exp_toksolution",
      company: "톡솔루션",
      period: "2019.08 ~ 2021.05",
      role: "앱 / 웹, 백엔드 개발",
      description: "Java 안드로이드 앱 개발을 시작으로 Swift를 사용해 iOS 앱 개발 후 웹과 백엔드 개발, 하이브리드 앱까지 개발을 했습니다.",
      type: "company"
    },
    {
      id: "exp_wego",
      company: "위고 컴퍼니",
      period: "2019.05 ~ 2019.08",
      role: "안드로이드 앱 개발",
      description: "가상화폐의 주변 기기 관련 앱 개발을 했습니다.",
      type: "company"
    },
    {
      id: "exp_mirae",
      company: "미래능력 개발 교육원",
      period: "2018.09 ~ 2019.05",
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
      youtubeUrl: "https://www.youtube.com/embed/zJQGXy6nouo?si=C1mJawCNNr6aGFmd",
      platforms: ["Steam"],
      description: "2D 타일맵 기반 인크리멘탈 게임 (Steam 데모 출시).",
      details: [
        "Tilemap 컴포넌트 기반 그리드 좌표계 변환 및 건물 배치 유효성 검사 로직 구현",
        "인게임 시간 축(낮/밤, 4계절) 계절별 맵 타일/환경 전환 연동",
        "주민 일과 루틴 구현",
      ],
      technical: [
        {
          title: "타일 그리드 좌표 연산",
          desc: "월드 좌표와 셀 좌표 간 상호 변환 및 다중 타일 점유(Multi-tile Occupancy) 건물 설치 시 충돌 영역 검사 로직 구현"
        }
      ],
      achievements: [
        { title: "Steam Demo Release", desc: "스팀 데모 출시 및 피드백 수렴" }
      ],
      screenshots: [
        "assets/images/tinyvillage/screenshot_01.png",
        "assets/images/tinyvillage/screenshot_02.png",
        "assets/images/tinyvillage/screenshot_03.png",
        "assets/images/tinyvillage/screenshot_04.png",
        "assets/images/tinyvillage/screenshot_05.png",
      ]
    },
    {
      id: "proj_ropeup",
      companyId: "exp_indie",
      name: "Rope Up!",
      period: "2026.03 ~ 2026.05",
      type: "Commercial Game",
      role: "클라이언트 개발",
      tech: ["Unity", "C#", "Unity Netcode", "Steamworks"],
      cardBanner: "assets/images/ropeup/banner.png",
      banner: "assets/images/ropeup/library.png",
      hero: "assets/images/ropeup/hero.png",
      playLink: "https://store.steampowered.com/app/4595740/Rope_Up/",
      youtubeUrl: "https://www.youtube.com/embed/O7HDu78Jo4k",
      platforms: ["Steam"],
      description: "Steam 정식 출시한 물리 기반 실시간 멀티플레이 클라이밍 게임. SpringJoint와 Rigidbody를 활용한 로프 스윙 물리 및 NGO 기반 네트워크 동기화 개발.",
      details: [
        "SpringJoint와 Rigidbody 기반 로프 스윙 및 반동 물리 이동 시스템 구현",
        "Unity Netcode for GameObjects(NGO) 기반 실시간 플레이어 위치 및 로프 상태 동기화",
        "호스트-클라이언트 간 게임 룸 설정(최대 인원, 난이도, 체크포인트 공유) 동기화",
        "플레이어 캐릭터 표정 파츠 교체 시스템 구현",
        "마우스 감도 조절 및 키 매핑 설정 기능 구현",
        "Steamworks API 연동 - 오버레이 친구 초대 구현 및 스팀 업적 연동",
        "Steam Cloud Save를 활용한 게임 세이브 데이터 동기화",
      ],
      technical: [
        {
          title: "레이캐스트 시점 판정 보정",
          desc: "카메라 뷰포트 중심 기준과 캐릭터 발사 원점(손) 간의 각도 차이로 인한 조준 오차를 보정하기 위해, 카메라 중앙과 손 위치에서 듀얼 Raycast를 수행하여 시야 가림 검증 및 실제 로프 궤적 일치 처리"
        },
        {
          title: "물리 스윙 반동 안정화",
          desc: "지형지물과 초근접 시 SpringJoint 반동이 과도하게 튀거나 물리 연산이 불안정해지는 현상을 방지하기 위해 최소 로프 길이 클램핑(Clamping) 및 텐션 완화 로직 적용"
        },
        {
          title: "1인칭 / 3인칭 뷰 전환",
          desc: "시점 전환 시 플레이어 메시 렌더링 레이어 마스크 처리 및 카메라 클리핑 방지 로직 구현"
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
      id: "proj_mushroom",
      companyId: "exp_indie",
      name: "Mushroom Jump Tycoon",
      period: "2026.01",
      type: "Roblox Game",
      role: "1인 개발",
      tech: ["Roblox", "Luau"],
      cardBanner: "assets/images/mushroom/banner.png",
      banner: "assets/images/mushroom/library.png",
      hero: "assets/images/mushroom/hero.png",
      playLink: "",
      platforms: ["PC"],
      description: "Roblox 플랫폼 기반 3D 인크리멘탈 타이쿤 게임. 버섯 발판 인터랙션을 통한 재화 파밍 및 업그레이드 루프 개발.",
      details: [
        "버섯 발판 충돌(Touched) 이벤트 기반 점프 인터랙션 및 재화 획득 로직 구현",
        "재화 소비를 통한 버섯 티어 해금, 스폰 주기 및 획득 배율 업그레이드 시스템 구현",
        "RemoteEvent를 활용한 클라이언트 UI 상호작용 및 서버 재화/데이터 검증 처리",
        "DataStoreService를 활용한 플레이어 재화 및 업그레이드 단계 영구 저장"
      ],
      technical: [
        {
          title: "클라이언트-서버 분리 검증",
          desc: "클라이언트의 발판 터치 및 업그레이드 요청을 RemoteEvent로 전달받아 서버 스크립트에서 재화 유효성을 검증 후 처리하도록 설계하여 비정상 데이터 변조 방지"
        },
        {
          title: "데이터 영속성 (DataStore)",
          desc: "플레이어 접속 및 퇴장 시 DataStoreService를 통해 유저별 버섯 해금 단계와 누적 코인 데이터를 직렬화하여 안전하게 저장/로드 구현"
        }
      ],
      achievements: [
        {
          title: "Roblox R&D",
          desc: "Roblox Studio 및 Luau 언어 스택 연구 개발"
        },
      ],
      screenshots: [
        "assets/images/mushroom/screenshot_01.png",
        "assets/images/mushroom/screenshot_02.png",
        "assets/images/mushroom/screenshot_03.png",
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
      description: "모바일 하이퍼 캐주얼 액션 RPG. 다수의 무기별 고유 공격 메커니즘 및 몬스터 전투/스킬 시스템 개발.",
      details: [
        "추상 클래스(BaseAttack) 기반 무기/스킬 공통 기능 캡슐화 및 신규 스킬 확장 구조 설계",
        "몬스터 FSM 기반 타겟 추적, 공격 사거리 체크 및 패턴 실행 로직 구현",
        "공격 판정 및 피격 시 카메라 셰이크, 넉백 연출 구현",
        "오브젝트 풀링 패턴 적용으로 투사체 및 피격 파티클 이펙트 재사용 구조 구축",
        "보스 처치 시 트로피 연출 시퀀스 구현"
      ],
      technical: [
        {
          title: "상속 기반 스킬 구조 모듈화",
          desc: "BaseAttack을 기반으로 쿨다운, 타겟팅, 공격 판정 등 공통 파이프라인을 관리하고, 개별 스킬은 고유 연출 및 로직만 오버라이딩하도록 구현하여 신규 스킬 추가 시 기존 코드 수정 최소화"
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
      description: "레스토랑 운영 모바일 하이퍼 캐주얼 타이쿤 게임 (글로벌 AOS/iOS 런칭). 손님 주문-서빙-정산 루프 및 Task 기반 NPC AI 시스템 개발.",
      details: [
        "조리, 판매, 매장 확장으로 이어지는 코어 게임플레이 루프 구현",
        "대기열(Queue) 기반 손님 입장, 카운터 주문, 테이블 배정 및 퇴장 라이프사이클 구현",
        "직원 역할군(조리, 서빙, 청소)별 우선순위 기반 Task 분배 및 작업 시퀀스 처리 로직 구현",
        "NavMeshAgent를 활용한 매장 내 경로 탐색",
        "업그레이드 스탯 연동",
        "출석 보상 및 랜덤 이벤트 시스템 구현"
      ],
      technical: [
        {
          title: "Task Sequence 파이프라인",
          desc: "복합 작업(냉장고 재료 픽업 -> 조리대 이동 -> 조리 대기 -> 서빙대 이동)을 단계별 상태 노드로 쪼개어 실패나 취소 시 안정적으로 이전 상태로 롤백 가능한 시퀀스 구조 구축"
        },
        {
          title: "역할군 기반 직원 AI",
          desc: "각 직원이 보유한 역량과 역할(요리사, 서버, 청소부)에 맞춰 작업 대기열에서 적합한 Task를 우선 인출하여 처리하도록 설계"
        },
        {
          title: "손님 라이프사이클 관리",
          desc: "입장 대기, 주문 대기, 식사, 계산 대기 상태별 타임아웃 타이머를 두고 만족도 감소 및 이탈 처리 구현"
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
      description: "푸드코트 운영 모바일 하이퍼 캐주얼 타이쿤 게임 (글로벌 AOS/iOS 런칭). 식재료 수집, 요리 제작, 판매 및 매장 확장 코어 루프 개발.",
      details: [
        "식재료 수집부터 조리, 판매, 매장 확장으로 이어지는 코어 게임플레이 루프 구현",
        "직원 및 손님 상태 머신(FSM) 및 동선 탐색 로직 구현",
        "플레이어 스탯 및 코스튬 스킨 교체 시스템 구현",
        "매장 시설물 해금 및 구역 확장 구현",
        "출석 보상 구현",
        "장비 뽑기, 합성 및 장착 스탯 연동 시스템 구현"
      ],
      technical: [
        {
          title: "코어 게임플레이 루프 구조",
          desc: "손님 유입량과 조리대 재고 상태를 연동하여 병목 현상 없이 주문-서빙 루프가 순환되도록 딜레이 및 적재량 밸런스 로직 설계"
        },
        {
          title: "NPC 상태 머신",
          desc: "대기, 이동, 작업, 상호작용 등 기본 상태를 모듈화하여 손님과 직원 NPC가 동일한 기반 클래스에서 파생 동작하도록 구현"
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
      playLink: "--https://play.google.com/store/apps/details?id=com.galileo.r3&hl=ko",
      appleLink: "--https://apps.apple.com/kr/app/%EB%B3%84%EB%B9%9B%EA%B8%B0%EC%82%AC-%ED%82%A4%EC%9A%B0%EA%B8%B0/id1661086445",
      platforms: ["Android", "iOS"],
      description: "모바일 3D 방치형 액션 RPG. 실시간 레이드 콘텐츠 클라이언트 구현 및 백엔드 서버 기능 연동.",
      details: [
        "Photon PUN2 기반 실시간 협동 보스 레이드 동기화 (방 생성, 플레이어 동기화, 보스 패턴 공유)",
        "무기 스왑에 따른 스킬 셋 실시간 변경 및 전투 메커니즘 구현",
        "Unity Timeline을 활용한 보스 패턴 및 컷씬 연출 시스템 구축",
        "TypeScript 기반 Azure Functions 및 PlayFab 연동: 던전 보상 검증 및 지급 API 개발",
        "캐릭터 스킬 구현"
      ],
      technical: [
        {
          title: "실시간 레이드 동기화",
          desc: "Photon PUN2의 OnPhotonSerializeView 및 RPC를 활용하여 플레이어 위치, 스킬 시전, 보스 페이즈 전환 데이터를 호스트-클라이언트 간 실시간 동기화"
        },
        {
          title: "서버 검증 트랜잭션 연동",
          desc: "클라이언트의 비정상적인 데이터 조작을 방지하기 위해 던전 클리어 시 Azure Functions를 통해 전투 시간 및 획득 조건을 검증한 후 PlayFab/DB에 보상 반영"
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
      playLink: "--https://play.google.com/store/apps/details?id=com.mobirix.mbsk&hl=ko",
      appleLink: "--https://apps.apple.com/kr/app/%EB%B3%84%EB%B9%9B%EA%B8%B0%EC%82%AC-%ED%82%A4%EC%9A%B0%EA%B8%B0/id1661086445",
      platforms: ["Android", "iOS"],
      description: "모바일 3D 방치형 액션 RPG. 스테이지/던전 전투 로직 및 콘텐츠 클라이언트/백엔드 기능 개발.",
      details: [
        "재화 던전(골드, 강화석, 보석)별 고유 클리어 조건 및 제한시간 타이머 로직 구현",
        "보스 패턴(범위 공격, 돌진 기믹) AI 구현",
        "캐릭터 스킬 구현"
      ],
      technical: [
        {
          title: "오프라인 누적 보상 연산",
          desc: "마지막 접속 시각과 서버 현재 시각의 오차를 기반으로 유효 방치 시간을 산출하고, 스테이지 단계별 분당 획득 계수를 적용하여 최대 방치 시간 내 보상을 안전하게 지급하도록 구현"
        },
        {
          title: "재화 던전 및 성장 밸런스",
          desc: "던전 단계별 몬스터 체력/공격력 스케일링 공식 및 클리어 보상 테이블을 구조화하여 신규 난이도 확장이 용이하도록 설계"
        },
      ],
      achievements: [
        {
          title: "Live Service",
          desc: "상용 서비스 라이브 업데이트 및 콘텐츠 개발"
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
      type: "모작",
      role: "1인 개발",
      tech: ["C/C++", "WinAPI"],
      cardBanner: "assets/images/dungreed/banner.png",
      banner: "assets/images/dungreed/library.png",
      hero: "assets/images/dungreed/hero.png",
      playLink: "https://youtu.be/2GJa40E7roc",
      githubLink: "https://github.com/Elpoco/CPP_Dungreed",
      youtubeUrl: "https://www.youtube.com/embed/2GJa40E7roc",
      platforms: ["PC"],
      description: "C++ WinAPI 기반 2D 로그라이크 게임 엔진 및 Dungreed 모작 프로젝트. 카메라, 렌더링 파이프라인, 맵 에디터 자체 구현.",
      details: [
        "GDI 더블 버퍼링(Double Buffering) 렌더링 파이프라인 구축을 통한 화면 깜빡임 제거",
        "카메라 뷰포트 영역(AABB) 기반 컬링 로직을 적용하여 화면 밖 오브젝트 Draw 연산 배제",
        "타일 배치, 오브젝트 스폰 위치, 벽 콜라이더를 설정할 수 있는 WinAPI 자체 맵 툴 개발",
        "AABB 충돌 판정 및 인벤토리, 장비/음식 상점, 캐릭터 능력치 성장 시스템 구현",
      ],
      technical: [
        {
          title: "카메라 뷰포트 컬링 최적화",
          desc: "화면 밖으로 벗어난 다수의 총알과 몬스터, 타일이 렌더 루프에서 계속 연산되는 문제를 해결하기 위해, 메인 카메라 뷰포트 사각 영역과 오브젝트 AABB 간의 교차 검사를 선행하여 불필요한 GDI 그리기 호출 배제"
        },
        {
          title: "자체 맵 에디터 개발",
          desc: "Windows Dialog 및 마우스 입력을 활용하여 타일셋 선택, 레이어별 타일 배치, 콜라이더 속성 부여 후 파일(TXT)로 직렬화/역직렬화하는 레벨 툴 구현"
        },
      ],
      achievements: [
        { title: "Custom 2D Engine", desc: "외부 라이브러리 없이 WinAPI 기반 2D 렌더링 루프 직접 구축" }
      ]
    },
    {
      id: "proj_hollowknight",
      companyId: "exp_kyungil",
      name: "Hollow Knight 모작",
      period: "2022.01",
      type: "모작",
      role: "1인 개발",
      tech: ["C/C++", "WinAPI"],
      cardBanner: "assets/images/hollowknight/banner.png",
      banner: "assets/images/hollowknight/library.png",
      hero: "assets/images/hollowknight/hero.png",
      playLink: "https://youtu.be/WpeY7VANATY",
      githubLink: "https://github.com/Elpoco/CPP_HollowKnight",
      youtubeUrl: "https://www.youtube.com/embed/WpeY7VANATY",
      platforms: ["PC"],
      description: "C++ WinAPI 기반 2D 메트로배니아 액션 게임 모작 프로젝트. 정밀 점프 물리 및 보스 FSM 구현.",
      details: [
        "키 입력 처리 및 2D 물리 반응 구현",
        "보스 몬스터 상태 머신 설계",
        "패링 타이밍 판정 및 성공 시 반격 이펙트/무적 판정 구현"
      ],
      technical: [
        {
          title: "정밀 액션 물리 및 역경직 연출",
          desc: "메트로배니아 장르 특유의 날카로운 조작감을 위해 점프 키 입력 지속 시간에 따른 가변 중력 가속도를 적용하고, 피격 시 수 프레임간 애니메이션 업데이트를 멈추는 히트스탑으로 타격감 구현"
        },
      ],
      achievements: [
        { title: "Action Physics Clone", desc: "메트로배니아 특유의 공중 제어 및 충돌 물리 구현" }
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
      description: "가상화폐 거래소 '보라비트' 백엔드 유지보수 및 보안 기능 개발.",
      details: [
        "외부 보안 취약점 점검(모의해킹) 결과에 따른 보안 조치 및 패치",
        "거래소 보안 심사 통과를 위한 웹/서버 취약점 보완"
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
      description: "가상화폐 거래소 '메타벡스' 백엔드 유지보수 및 보안 기능 개발.",
      details: [
        "외부 보안 취약점 점검(모의해킹) 결과에 따른 보안 조치 및 패치",
        "거래소 보안 심사 통과를 위한 웹/서버 취약점 보완"
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
      description: "가상화폐 거래소 'NFEX' 백엔드 유지보수 및 보안 기능 개발.",
      details: [
        "외부 보안 취약점 점검(모의해킹) 결과에 따른 보안 조치 및 패치",
        "거래소 보안 심사 통과를 위한 웹/서버 취약점 보완"
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
      platforms: ["Web"],
      description: "논술/글쓰기 원고 첨삭 매칭 웹 플랫폼.",
      details: [
        "아임포트(I'mport) API 연동을 통한 월 정기 구독 및 건당 결제 시스템 구축",
        "OneSignal Push API 연동: 원고 제출 및 첨삭 완료 실시간 웹/모바일 알림 전송",
        "LocalStorage 및 DB 기반 원고 실시간 자동 저장 기능 구현"
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
      appleLink: "https://apps.apple.com/kr/app/마이풀-외국어-무제한-학습/id1547568215",
      platforms: ["Android", "iOS"],
      description: "외국어(영어·중국어·토익) 인강 시청 및 문제풀이 구독형 크로스 플랫폼 앱.",
      details: [
        "React Native 기반 단일 코드베이스로 AOS/iOS 앱스토어 동시 출시",
        "IAPHUB 연동을 통한 구글 플레이/애플 앱스토어 정기 구독 인앱 결제 및 영수증 검증 구현",
        "네이버, 카카오, 애플 OAuth 간편 로그인 연동",
        "진단 테스트 결과 및 유저 학습 데이터 기반 맞춤 강좌 추천 알고리즘 연동"
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
      description: "위치 기반 서비스 '마찾사' 통합 어드민 백오피스.",
      details: [
        "제휴 매장 계약 기간 체크 및 만료일 알림 자동 스케줄링 배치 구현",
        "악성 이용자 제재 및 블랙리스트 관리 구현",
        "앱 내 공지사항 및 팝업 배너 실시간 게시/예약 관리 기능 구현"
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
      playLink: "--https://play.google.com/store/apps/details?id=com.toksol.machasa",
      appleLink: "--https://apps.apple.com/kr/app/%EB%A7%88%EC%B0%BE%EC%82%AC/id1558385716",
      platforms: ["Android", "iOS"],
      description: "위치(GPS) 기반 주변 매장 추천 및 검색 크로스 플랫폼 앱.",
      details: [
        "디바이스 GPS 위·경도 좌표 기반 거리순 정렬 및 반경 필터링 검색 로직 구현",
        "URL Scheme을 활용한 외부 지도 앱(네이버/카카오/티맵) 길찾기 연동"
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
      playLink: "--https://play.google.com/store/apps/details?id=com.system.vingo",
      platforms: ["Android"],
      description: "OpenCV 기반 차량 부품 바코드/식별 번호 스캔 산업용 유틸리티 앱.",
      details: [
        "OpenCV 영상 처리 라이브러리를 활용한 바코드 영역 검출 및 스캔 모듈 구현"
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
      playLink: "--https://play.google.com/store/apps/details?id=com.system.vingo",
      platforms: ["iOS"],
      description: "대학교 출석 연동 및 자가 진단 웹앱 서비스.",
      details: [
        "APNs 푸시 알림을 통한 정기 자가 검진 유도 기능 구현",
        "대학 학사 시스템 API 통신을 통한 출석 및 진단 데이터 동기화"
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
      description: "여행 매칭 플랫폼 'Only1Trip' 관리자 백오피스.",
      details: [
        "PHPMailer 연동: 가입 승인 및 플래너 계약 안내 템플릿 메일 자동 발송 모듈 구현",
        "여행 상품 등록 심사, 승인/반려 및 후기 모더레이팅 관리 기능 개발",
        "EXIMBAY 결제 내역 정산 및 취소 API 어드민 연동"
      ]
    },
    {
      id: "proj_only1trip",
      companyId: "exp_toksolution",
      name: "Only1Trip",
      period: "2020.02 ~ 2020.04",
      type: "Web/App Service",
      role: "개발 총괄",
      tech: ["PHP", "MySQL", "JavaScript"],
      cardBanner: "assets/images/only1trip/banner.png",
      banner: "assets/images/only1trip/library.png",
      hero: "assets/images/only1trip/hero.png",
      playLink: "--https://www.only1trip.com/",
      platforms: ["Web"],
      description: "여행 맞춤 코스 중개 및 견적 매칭 웹 플랫폼.",
      details: [
        "Google Maps API 연동: 커스텀 랜드마크 핀 배치 및 다중 경유지 경로 드로잉 구현",
        "국내외 가맹 결제를 위해 EXIMBAY API를 활용한 카드 해외 결제 시스템 구축",
        "Google Web STT/TTS API 기반 음성 인식 여행지 자동 탐색 기능 개발"
      ],
      screenshots: [
        "assets/images/only1trip/screenshot_01.png",
        "assets/images/only1trip/screenshot_02.png",
        "assets/images/only1trip/screenshot_03.png",
        "assets/images/only1trip/screenshot_04.png",
        "assets/images/only1trip/screenshot_05.png",
        "assets/images/only1trip/screenshot_06.png",
        "assets/images/only1trip/screenshot_07.png",
        "assets/images/only1trip/screenshot_08.png",
        "assets/images/only1trip/screenshot_09.png",
        "assets/images/only1trip/screenshot_10.png",
        "assets/images/only1trip/screenshot_11.png",
      ]
    },
    {
      id: "proj_smartsome",
      companyId: "exp_toksolution",
      name: "스마트썸",
      period: "2019.11 ~ 2020.01",
      type: "Web/App Service",
      role: "앱 개발",
      tech: ["Java", "Swift"],
      cardBanner: "assets/images/smartsome/banner.png",
      banner: "assets/images/smartsome/library.png",
      hero: "assets/images/smartsome/hero.png",
      playLink: "https://play.google.com/store/apps/details?id=com.toksolution.mine",
      appleLink: "https://apps.apple.com/kr/app/%EC%8A%A4%EB%A7%88%ED%8A%B8%EC%8D%B8/id1486294292",
      platforms: ["Android", "iOS"],
      description: "실시간 음성 통화 기능 기반 데이팅 하이브리드 앱.",
      details: [
        "VoIP 외부 라이브러리 연동을 통한 저지연 실시간 음성 통화 구현",
        "음성 녹음 및 업로드 기반 프로필 음성 소개 기능 구현",
        "Java/Swift - JavaScript 간 브릿지(WebView Bridge) 통신 파이프라인 구축",
        "구글 플레이 및 애플 앱스토어 인앱 결제 연동"
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
      role: "앱 개발",
      tech: ["Java", "Swift"],
      cardBanner: "assets/images/moontalk/banner.png",
      banner: "assets/images/moontalk/library.png",
      hero: "assets/images/moontalk/hero.png",
      playLink: "https://m.onestore.co.kr/mobilepoc/apps/appsDetail.omp?prodId=0000743106&scYn=Y",
      appleLink: "--https://apps.apple.com/kr/app/%EB%AC%B8%ED%86%A1/id1488438926",
      platforms: ["Android", "iOS"],
      description: "웹 신호 기반 대량 SMS 위탁 발송 및 실시간 채팅 모바일 앱.",
      details: [
        "모바일 단말기 주소록 동기화 기능 구현",
        "BroadcastReceiver 기반 단말기 문자 수신 시그널 감지 및 DB 적재",
        "백그라운드 서비스 및 스케줄러 기반 대량/예약 SMS 발송 딜레이 제어",
        "Firebase Realtime Database 및 FCM 연동 실시간 채팅방 구축"
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
      type: "App Service",
      role: "1인 개발",
      tech: ["Java"],
      cardBanner: "assets/images/loa/banner.png",
      banner: "assets/images/loa/library.png",
      hero: "assets/images/loa/hero.png",
      playLink: "--https://play.google.com/store/apps/details?id=com.elpoco.p_mapfinder",
      platforms: ["Android"],
      description: "게임 '로스트아크' 인게임 보물지도 위치 공유 커뮤니티 앱.",
      details: [
        "MySQL 서버 연동 기반 모바일 익명 게시판 및 댓글 기능 구현",
        "Google AdMob SDK 배너 및 전면 광고 연동"
      ]
    }
  ]
};

/**
 * Global URL validator: Checks if a link is valid and active.
 * Links starting with '--' (e.g. '--https://...') are treated as disabled/expired.
 */
function isValidLink(url) {
  return typeof url === 'string' && url.trim().length > 0 && !url.trim().startsWith('--');
}

// Auto-sanitize disabled links in portfolioData (sets fields starting with '--' to null)
if (typeof portfolioData !== 'undefined' && portfolioData.projects) {
  portfolioData.projects.forEach(p => {
    ['playLink', 'appleLink', 'githubLink', 'youtubeUrl'].forEach(key => {
      if (p[key] && !isValidLink(p[key])) {
        p[key] = null;
      }
    });
  });
}

