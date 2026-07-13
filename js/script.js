// ==========================================================================
// Steam Client - Portfolio Interactivity Script
// ==========================================================================

// Global State
let activeTab = 'store';
let searchQuery = '';
let selectedTech = null;
let libraryDisplayMode = 'grid'; // 'grid' or 'list'

// Navigation History Stack (Back/Forward)
let navHistory = [];
let navHistoryIndex = -1;
let isNavigatingHistory = false;

$(function () {
    // 1. Calculate and Render Age
    const birthYear = 1996;
    const currentYear = new Date().getFullYear();
    $(".dynamic-age").text(currentYear - birthYear);

    // 2. Initialize Sidebar Lists
    renderSidebar();

    // 3. Render Store Page Content
    renderStorePage();

    // 4. Render Project Grid
    renderProjectsGrid();

    // 5. Initialize Navigation Click Events
    setupEvents();

    // 6. Push Initial State to History
    pushState({ type: 'tab', target: 'store' });

    // 7. Auto Open Chat with Welcome Message on delay
    setTimeout(() => {
        $("#friends-chat-window").removeClass("chat-minimized");
    }, 1500);
});

// ############ Navigation History Logic ############
function pushState(state) {
    if (isNavigatingHistory) return;

    // Slice history stack if we are in middle of stack
    if (navHistoryIndex < navHistory.length - 1) {
        navHistory = navHistory.slice(0, navHistoryIndex + 1);
    }

    navHistory.push(state);
    navHistoryIndex = navHistory.length - 1;
    updateHistoryButtons();
}

function updateHistoryButtons() {
    $("#btn-back").prop("disabled", navHistoryIndex <= 0);
    $("#btn-forward").prop("disabled", navHistoryIndex >= navHistory.length - 1);
}

function historyBack() {
    if (navHistoryIndex > 0) {
        isNavigatingHistory = true;
        navHistoryIndex--;
        applyState(navHistory[navHistoryIndex]);
        isNavigatingHistory = false;
        updateHistoryButtons();
    }
}

function historyForward() {
    if (navHistoryIndex < navHistory.length - 1) {
        isNavigatingHistory = true;
        navHistoryIndex++;
        applyState(navHistory[navHistoryIndex]);
        isNavigatingHistory = false;
        updateHistoryButtons();
    }
}

function applyState(state) {
    if (!state) return;
    if (state.type === 'tab') {
        switchTab(state.target, false);
    } else if (state.type === 'project') {
        showProject(state.id, false);
    } else if (state.type === 'company') {
        showCompany(state.id, false);
    } else if (state.type === 'library_home') {
        showLibraryHome(false);
    }
}

// ############ Render DOM Elements ############

function renderSidebar() {
    const $expList = $("#experience-list");
    const $eduList = $("#education-list");
    const $techList = $("#tech-filters");

    $expList.empty();
    $eduList.empty();
    $techList.empty();

    // Render Work Experience and Education
    portfolioData.experiences.forEach(exp => {
        const itemHtml = `
            <div class="sidebar-item sidebar-exp-item" data-company-id="${exp.id}" onclick="showCompany('${exp.id}')">
                <span class="sidebar-exp-company">${exp.company}</span>
                <span class="sidebar-exp-period">${exp.period}</span>
            </div>
        `;
        if (exp.type === 'company') {
            $expList.append(itemHtml);
        } else {
            $eduList.append(itemHtml);
        }
    });

    // Gather all unique tech stacks
    const techMap = new Set();
    portfolioData.projects.forEach(p => {
        p.tech.forEach(t => techMap.add(t));
    });

    // Render Tech Stack Filter Badges
    techMap.forEach(tech => {
        const badgeHtml = `
            <span class="tech-tag-filter" data-tech="${tech}" onclick="toggleTechFilter('${tech}')">${tech}</span>
        `;
        $techList.append(badgeHtml);
    });

    // Set counts
    $("#all-projects-count").text(portfolioData.projects.length);
}

function renderStorePage() {
    const $featuredContainer = $("#store-featured-projects");
    $featuredContainer.empty();

    // Select first 3 projects as Featured
    const featuredProjects = portfolioData.projects.slice(0, 8);

    featuredProjects.forEach(proj => {
        // Build tech tag string
        const techHtml = proj.tech.slice(0, 3).map(t => `<span class="mini-tech-tag">${t}</span>`).join('');

        const cardHtml = `
            <div class="featured-card" onclick="showProject('${proj.id}')">
                <img src="${proj.cardBanner || 'assets/images/Banner_Empty.png'}" alt="${proj.name}" class="featured-card-banner" onerror="this.src='assets/images/Banner_Empty.png'">
                <div class="featured-card-body">
                    <span class="featured-card-title">${proj.name}</span>
                    <p class="featured-card-desc">${proj.description}</p>
                    <div class="featured-card-footer">
                        <span class="featured-card-role">${proj.role}</span>
                        <div class="featured-card-tech">${techHtml}</div>
                    </div>
                </div>
            </div>
        `;
        $featuredContainer.append(cardHtml);
    });
}

function renderProjectsGrid() {
    const $container = $("#projects-container");
    $container.empty();

    // Filter projects based on query and selected tech tag
    const filtered = portfolioData.projects.filter(p => {
        const matchesQuery = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
            p.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTech = !selectedTech || p.tech.includes(selectedTech);
        return matchesQuery && matchesTech;
    });

    $("#filtered-projects-count").text(filtered.length);

    if (filtered.length === 0) {
        $container.html(`<div class="text-center py-5 w-100 text-muted">No projects match the active filters.</div>`);
        return;
    }

    // Set view layout class
    if (libraryDisplayMode === 'grid') {
        $container.removeClass("projects-list-view").addClass("projects-grid-view");
    } else {
        $container.removeClass("projects-grid-view").addClass("projects-list-view");
    }

    filtered.forEach(proj => {
        const techBadges = proj.tech.slice(0, 2).map(t => `<span class="mini-tech-tag">${t}</span>`).join('');

        const cardHtml = `
            <div class="project-card" onclick="showProject('${proj.id}')">
                <img src="${proj.banner || 'assets/images/Library_Empty.png'}" alt="${proj.name}" class="project-poster-img" onerror="this.src='assets/images/Library_Empty.png'">
                <div class="project-card-overlay">
                    <div class="project-card-title">${proj.name}</div>
                    <span class="project-card-meta">${proj.period}</span>
                    <div class="project-card-tech-badges">${techBadges}</div>
                </div>
            </div>
        `;
        $container.append(cardHtml);
    });
}

// ############ Actions and Navigation ############

function setupEvents() {
    // Navigation Tabs Cliks
    $(".nav-tab").on("click", function () {
        const target = $(this).data("target");
        switchTab(target);
    });
}

function switchTab(tabName, shouldPushState = true) {
    activeTab = tabName;

    // Update Nav Tab UI styles
    $(".nav-tab").removeClass("active");
    $(`.nav-tab[data-target="${tabName}"]`).addClass("active");

    // Hide/show Panels
    $(".content-panel").removeClass("active");

    if (tabName === 'library') {
        // If switching to library, default to library home view unless active details loaded
        $("#library-home").addClass("active");
    } else {
        $(`#${tabName}-page`).addClass("active");
    }

    // Update active state in sidebar
    if (tabName !== 'library') {
        $(".sidebar-item, .sidebar-exp-item").removeClass("active");
    } else {
        $(".sidebar-item.home-item").addClass("active");
    }

    if (shouldPushState) {
        pushState({ type: 'tab', target: tabName });
    }

    // Auto scroll content area to top
    $("#steam-content").scrollTop(0);
}

function showLibraryHome(shouldPushState = true) {
    switchTab('library', false);

    // Hide specific details, show grid
    $("#project-details, #company-details").removeClass("active");
    $("#library-home").addClass("active");

    // Highlight sidebar home
    $(".sidebar-item, .sidebar-exp-item").removeClass("active");
    $(".sidebar-item.home-item").addClass("active");

    if (shouldPushState) {
        pushState({ type: 'library_home' });
    }
    $("#steam-content").scrollTop(0);
}

function showProject(projectId, shouldPushState = true) {
    const proj = portfolioData.projects.find(p => p.id === projectId);
    if (!proj) return;

    switchTab('library', false);

    // Swap panels
    $("#library-home, #company-details").removeClass("active");
    $("#project-details").addClass("active");

    // Clear active sidebar selections
    $(".sidebar-item, .sidebar-exp-item").removeClass("active");

    // Render Project Details
    $("#detail-title").text(proj.name);
    $("#detail-type").text(proj.type);
    $("#detail-description").text(proj.description);

    // Play Button Config
    if (proj.playLink) {
        $("#detail-play-btn").attr("href", proj.playLink).show();
    } else {
        $("#detail-play-btn").hide();
    }

    // GitHub Button Config
    if (proj.githubLink) {
        $("#detail-github-btn").attr("href", proj.githubLink).show();
    } else {
        $("#detail-github-btn").hide();
    }

    // Set Hero Banner
    $("#detail-banner").css("background-image", `url('${proj.hero}')`);

    // Media Youtube Player setup
    const $mediaContainer = $("#detail-media-container");
    $mediaContainer.empty();
    if (proj.youtubeUrl) {
        $mediaContainer.html(`<iframe src="${proj.youtubeUrl}" allowfullscreen></iframe>`).show();
    } else {
        $mediaContainer.hide();
    }

    // Responsibilities List rendering
    const $respList = $("#detail-responsibilities");
    $respList.empty();
    proj.details.forEach(item => {
        $respList.append(`<li>${item}</li>`);
    });

    // Side Specifications
    $("#detail-spec-period").text(proj.period);

    // Platform icons rendering
    const $platforms = $("#detail-spec-platforms");
    $platforms.empty();
    proj.platforms.forEach(p => {
        let iconFile = "web_logo.svg";
        if (p === "Android") iconFile = "android_logo.svg";
        if (p === "iOS") iconFile = "apple_logo.svg";
        if (p === "Steam") iconFile = "steam_logo.svg";
        $platforms.append(`<img src="assets/icons/${iconFile}" class="logo-img me-1" title="${p}" style="width:20px;height:20px;">`);
    });

    // Tech stack badges rendering
    const $techSpec = $("#detail-spec-tech");
    $techSpec.empty();
    proj.tech.forEach(t => {
        $techSpec.append(`<span class="tech-spec-badge">${t}</span>`);
    });

    // Achievements rendering
    const $achGrid = $("#detail-achievements");
    $achGrid.empty();
    if (proj.achievements && proj.achievements.length > 0) {
        proj.achievements.forEach(ach => {
            $achGrid.append(`
                <div class="achievement-badge-card" title="${ach.desc}">
                    <div class="achievement-icon-box">
                        <i class="material-icons">emoji_events</i>
                    </div>
                    <div class="achievement-info">
                        <span class="achievement-title">${ach.title}</span>
                        <span class="achievement-desc">${ach.desc}</span>
                    </div>
                </div>
            `);
        });
    } else {
        $achGrid.html(`<div class="text-muted" style="font-size:11px;">No special achievements defined.</div>`);
    }

    // Requirements Spec rendering
    const engineName = proj.tech.includes("Unity") ? "Unity 2022+ / C#" : (proj.tech.includes("React Native") ? "React Native / Node.js" : "C++ WinAPI / GDI");
    const primaryLang = proj.tech.includes("Unity") ? "C# / .NET" : (proj.tech.includes("React Native") ? "JavaScript / ES6" : "C++ (pure)");
    $("#detail-req-engine").text(engineName);
    $("#detail-req-lang").text(primaryLang);

    const $reqTechPoints = $("#detail-req-tech-points");
    $reqTechPoints.empty();
    proj.tech.forEach(t => {
        $reqTechPoints.append(`<li><strong>${t}</strong> core framework bindings</li>`);
    });

    if (shouldPushState) {
        pushState({ type: 'project', id: projectId });
    }
    $("#steam-content").scrollTop(0);
}

function showCompany(companyId, shouldPushState = true) {
    const exp = portfolioData.experiences.find(e => e.id === companyId);
    if (!exp) return;

    switchTab('library', false);

    // Swap panels
    $("#library-home, #project-details").removeClass("active");
    $("#company-details").addClass("active");

    // Highlight sidebar active item
    $(".sidebar-item, .sidebar-exp-item").removeClass("active");
    $(`.sidebar-exp-item[data-company-id="${companyId}"]`).addClass("active");

    // Populate Company info
    $("#company-type-label").text(exp.type === 'company' ? 'COMPANY' : 'EDUCATION');
    $("#company-name").text(exp.company);
    $("#company-period").text(exp.period);
    $("#company-role").text(exp.role);
    $("#company-description").text(exp.description);

    $("#spec-company-title").text(exp.company);
    $("#spec-company-period").text(exp.period);
    $("#spec-company-role").text(exp.role);

    // Render projects belonging to this company/experience
    const $companyProjContainer = $("#company-projects-container");
    $companyProjContainer.empty();

    const companyProjects = portfolioData.projects.filter(p => p.companyId === companyId);

    if (companyProjects.length === 0) {
        $companyProjContainer.html(`<div class="text-muted w-100 py-3" style="font-size:13px;"></div>`);
    } else {
        companyProjects.forEach(proj => {
            const techBadges = proj.tech.slice(0, 2).map(t => `<span class="mini-tech-tag">${t}</span>`).join('');

            const cardHtml = `
                <div class="project-card" onclick="showProject('${proj.id}')" style="width: 150px; flex-shrink:0;">
                    <img src="${proj.banner || 'assets/images/HollowKnightBanner.jpg'}" alt="${proj.name}" class="project-poster-img" onerror="this.src='assets/images/HollowKnightBanner.jpg'">
                    <div class="project-card-overlay">
                        <div class="project-card-title">${proj.name}</div>
                        <span class="project-card-meta">${proj.period}</span>
                        <div class="project-card-tech-badges">${techBadges}</div>
                    </div>
                </div>
            `;
            $companyProjContainer.append(cardHtml);
        });
    }

    if (shouldPushState) {
        pushState({ type: 'company', id: companyId });
    }
    $("#steam-content").scrollTop(0);
}

// ############ Search & Filter Logics ############

function handleSearch() {
    searchQuery = $("#search-input").val();

    // Switch to library home to see results
    if (activeTab !== 'library' || $("#project-details").hasClass("active") || $("#company-details").hasClass("active")) {
        showLibraryHome(false);
    }
    renderProjectsGrid();
}

function toggleTechFilter(techName) {
    // If clicking already selected tag, deselect it
    if (selectedTech === techName) {
        selectedTech = null;
        $(`.tech-tag-filter[data-tech="${techName}"]`).removeClass("active");
        $("#active-filters-container").hide();
    } else {
        selectedTech = techName;
        $(".tech-tag-filter").removeClass("active");
        $(`.tech-tag-filter[data-tech="${techName}"]`).addClass("active");

        // Show active filter tracker
        $("#active-filters-container").show();
        $("#active-filters-badges").html(`
            <span class="active-filter-badge">
                Tech: ${techName} 
                <i class="material-icons remove-filter-icon" onclick="toggleTechFilter('${techName}')">close</i>
            </span>
        `);
    }

    // Show library grid
    showLibraryHome(false);
    renderProjectsGrid();
}

function clearAllFilters() {
    selectedTech = null;
    searchQuery = '';
    $("#search-input").val('');
    $(".tech-tag-filter").removeClass("active");
    $("#active-filters-container").hide();
    renderProjectsGrid();
}

function setLibraryDisplay(mode) {
    libraryDisplayMode = mode;
    $(".display-btn").removeClass("active");
    $(`#display-${mode}`).addClass("active");
    renderProjectsGrid();
}

function copyEmail() {
    const tempElem = document.createElement('textarea');
    tempElem.value = portfolioData.profile.email;
    document.body.appendChild(tempElem);
    tempElem.select();
    document.execCommand("copy");
    document.body.removeChild(tempElem);
    alert('이메일 주소가 클립보드에 복사되었습니다: ' + portfolioData.profile.email);
}

// ############ Chat Window (Chatbot) Interactivity ############

function toggleChatWindow(event) {
    if (event) event.stopPropagation();
    const $chat = $("#friends-chat-window");
    if ($chat.hasClass("chat-closed")) {
        $chat.removeClass("chat-closed chat-minimized");
    } else {
        $chat.toggleClass("chat-minimized");
    }
}

function closeChatWindow(event) {
    if (event) event.stopPropagation();
    $("#friends-chat-window").addClass("chat-closed");
}

function openChatWindow() {
    $("#friends-chat-window").removeClass("chat-closed chat-minimized");
    $("#chat-input-field").focus();
}

function handleChatInput(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendChatMessage();
    }
}

function sendChatMessage() {
    const $input = $("#chat-input-field");
    const msgText = $input.val().trim();
    if (!msgText) return;

    // 1. Render User Message
    const $msgContainer = $("#chat-messages");
    $msgContainer.append(`
        <div class="chat-message user">
            <span class="chat-msg-sender">You:</span>
            <span class="message-content">${escapeHtml(msgText)}</span>
        </div>
    `);

    $input.val('');
    scrollToChatBottom();

    // 2. Trigger Bot Response Simulation
    simulateBotTyping(msgText);
}

function simulateBotTyping(userMsg) {
    const $msgContainer = $("#chat-messages");

    // Add typing indicator
    const typingId = "typing-" + Date.now();
    $msgContainer.append(`
        <div class="chat-message developer" id="${typingId}">
            <span class="chat-msg-sender">정지현:</span>
            <span class="message-content" style="color:var(--text-muted);">입력 중...</span>
        </div>
    `);
    scrollToChatBottom();

    setTimeout(() => {
        // Remove typing indicator
        $(`#${typingId}`).remove();

        // Get matching response based on text keywords
        const reply = getBotReply(userMsg);

        $msgContainer.append(`
            <div class="chat-message developer">
                <span class="chat-msg-sender">정지현:</span>
                <span class="message-content">${reply}</span>
            </div>
        `);
        scrollToChatBottom();
    }, 800);
}

function getBotReply(msg) {
    const text = msg.toLowerCase();

    if (text.includes("연락") || text.includes("이메일") || text.includes("번호") || text.includes("전화") || text.includes("contact") || text.includes("email") || text.includes("phone")) {
        return `제 연락처 정보입니다. 언제든 편하게 연락해 주세요! 😊<br><br>
                📞 <strong>전화번호:</strong> 010-8990-4721<br>
                ✉️ <strong>이메일:</strong> wjdwlgus96@gmail.com<br>
                🔗 <strong>GitHub:</strong> <a href="https://github.com/Elpoco" target="_blank">github.com/Elpoco</a>`;
    }

    if (text.includes("게임") || text.includes("유니티") || text.includes("unity") || text.includes("c#") || text.includes("클라")) {
        return `유니티(Unity)와 C#을 주력으로 개발하고 있습니다.<br>
                스팀 정식 출시작 <strong>Rope Up!</strong>을 비롯해 3D 방치형 키우기 게임 <strong>별빛기사 키우기</strong>, <strong>나노스페이스</strong> 및 <strong>카페 라이프</strong> 등 다양한 상용 게임을 클라이언트와 백엔드 트랜잭션을 아우르며 주도적으로 개발했습니다.`;
    }

    if (text.includes("cpp") || text.includes("c++") || text.includes("모작") || text.includes("던그리드") || text.includes("할로우")) {
        return `C++ WinAPI 환경에서 원작 <strong>Dungreed 모작</strong>과 <strong>Hollow Knight 모작</strong>을 1인 개발했습니다.<br>
                더블 버퍼링 렌더 엔진, 카메라 컬링, 자체 맵 에디터(Map Tool), 미니맵 좌표 계산 등 상용 라이브러리 없이 게임 엔진 핵심 로직을 직접 구현해 수강 중 최우수 평가를 받았습니다.`;
    }

    if (text.includes("웹") || text.includes("앱") || text.includes("react") || text.includes("php") || text.includes("react native") || text.includes("rn")) {
        return `React Native를 사용하여 구독형 어학 서비스 <strong>마이풀</strong>, 내 주변 거리 계산 LBS 매칭 앱 <strong>마찾사</strong> 등을 기획 단계부터 출시까지 1인 개발했습니다.<br>
                PHP와 MySQL 기반 RESTful API 서버 구조 설계 및 인앱결제(IAPHUB), 아임포트 정기결제 모듈, OneSignal 푸시 서비스 인프라 구축에도 뛰어난 숙련도를 가지고 있습니다.`;
    }

    if (text.includes("안녕") || text.includes("반갑") || text.includes("hi" || text.includes("hello"))) {
        return `반갑습니다! 포트폴리오를 감상하시다 궁금한 점이 생기시면 무엇이든 물어보세요. (예: 기술 스택, 개발 프로젝트 세부 사항 등)`;
    }

    return `포트폴리오에 관심을 가져주셔서 감사합니다! 😊<br>
            궁금하신 프로젝트나 경력을 클릭해 보시거나, 더 자세한 대화를 나누고 싶으시다면 <strong>wjdwlgus96@gmail.com</strong> 또는 <strong>010-8990-4721</strong>로 연락 부탁드립니다!`;
}

function scrollToChatBottom() {
    const $body = $("#chat-messages");
    $body.scrollTop($body[0].scrollHeight);
}

function escapeHtml(string) {
    return String(string).replace(/[&<>"'`=\/]/g, function (s) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
            '/': '&#x2F;',
            '=': '&#x3D;'
        }[s];
    });
}