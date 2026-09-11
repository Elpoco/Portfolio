/**
 * print_view.js
 * Renders all portfolio data into a single continuous scrollable page
 * with full details, chronological ordering, and dynamic print events (Dark -> Light on print).
 */

$(function () {
    // 1. Calculate Age
    const birthYear = 1996;
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    // 2. Render Header Profile
    renderProfile(age);

    // 3. Render Experience & Education
    renderExperiences();

    // 4. Render Tech Stack
    renderSkills();

    // 5. Render Chronological Projects
    renderChronologicalProjects();
});

/**
 * 1. Render Profile Header
 */
function renderProfile(age) {
    const p = portfolioData.profile;
    if (!p) return;

    $("#profile-name").text(p.name);
    $("#profile-avatar").attr("src", p.avatar || "assets/images/jjh2.jpg");
    $("#profile-birth-age").text(`${p.birth} (${age}세)`);
    $("#profile-phone").text(p.phone);
    $("#profile-email").text(p.email).attr("href", `mailto:${p.email}`);
    $("#profile-address").text(p.address);
    $("#profile-github").text(p.github.replace("https://", "")).attr("href", p.github);

    if (p.blog) {
        $("#profile-blog-item").show();
        $("#profile-blog").text(p.blog.replace("https://", "")).attr("href", p.blog);
    } else {
        $("#profile-blog-item").hide();
    }

    if (p.portfolioUrl) {
        $("#profile-web-badge").attr("href", p.portfolioUrl);
        $("#profile-web-url").text(p.portfolioUrl);
    }
}

/**
 * 2. Render Experiences & Education
 */
function renderExperiences() {
    const $container = $("#experience-timeline-container");
    $container.empty();

    if (!portfolioData.experiences || portfolioData.experiences.length === 0) return;

    portfolioData.experiences.forEach(exp => {
        const typeLabel = exp.type === 'company' ? '경력 (Company)' : '교육 (Education)';
        const cardHtml = `
            <div class="experience-card">
                <div class="exp-header">
                    <div class="exp-company-name">
                        <span>${exp.company}</span>
                        <span class="exp-type-tag" style="display:none;">${typeLabel}</span>
                    </div>
                    <span class="exp-period">${exp.period}</span>
                </div>
                <div class="exp-role">${exp.role}</div>
                <p class="exp-desc">${exp.description}</p>
            </div>
        `;
        $container.append(cardHtml);
    });

    $("#exp-count-badge").text(`${portfolioData.experiences.length} 건`);
}

/**
 * 3. Render Skills
 */
function renderSkills() {
    const $container = $("#skills-inventory-container");
    $container.empty();

    if (!portfolioData.skills || portfolioData.skills.length === 0) return;

    // Group skills by category
    const categories = {};
    portfolioData.skills.forEach(skill => {
        const cat = skill.category || "General";
        if (!categories[cat]) {
            categories[cat] = [];
        }
        categories[cat].push(skill.name);
    });

    Object.keys(categories).forEach(cat => {
        const tagsHtml = categories[cat].map(name => `<span class="skill-tag">${name}</span>`).join('');
        const rowHtml = `
            <div class="skills-category-group">
                <div class="skills-cat-name">${cat}</div>
                <div class="skills-tags-wrap">${tagsHtml}</div>
            </div>
        `;
        $container.append(rowHtml);
    });
}

/**
 * Helper: Parse start date from period string for robust chronological sorting
 * Examples: "2026.06 ~ 2026.09" -> 202606
 *           "2022.01" -> 202201
 */
function parsePeriodStartDate(periodStr) {
    if (!periodStr) return 0;
    const match = periodStr.match(/(\d{4})(?:\.(\d{1,2}))?/);
    if (match) {
        const year = parseInt(match[1], 10);
        const month = match[2] ? parseInt(match[2], 10) : 1;
        return year * 100 + month;
    }
    return 0;
}

/**
 * 4. Render Chronological Projects
 */
function renderChronologicalProjects() {
    const $container = $("#projects-chronological-container");
    const $quickSelect = $("#project-quick-select");
    $container.empty();
    $quickSelect.empty();
    $quickSelect.append('<option value="">-- 프로젝트 바로가기 (선택) --</option>');

    if (!portfolioData.projects || portfolioData.projects.length === 0) return;

    // Sort projects strictly chronologically descending (newest to oldest)
    const sortedProjects = [...portfolioData.projects].sort((a, b) => {
        const dateA = parsePeriodStartDate(a.period);
        const dateB = parsePeriodStartDate(b.period);
        return dateB - dateA;
    });

    $("#projects-total-count").text(`${sortedProjects.length}개`);

    sortedProjects.forEach((proj, idx) => {
        // Find company info
        const exp = portfolioData.experiences ? portfolioData.experiences.find(e => e.id === proj.companyId) : null;
        const companyName = exp ? exp.company : (proj.companyId || "");

        // Quick jump option
        $quickSelect.append(`<option value="proj-card-${proj.id}">[${proj.period.split('~')[0].trim()}] ${proj.name}</option>`);

        // Platform icons
        let platformIconsHtml = '';
        if (proj.platforms && proj.platforms.length > 0) {
            platformIconsHtml = proj.platforms.map(p => {
                let iconFile = "web_logo.svg";
                if (p === "Android") iconFile = "android_logo.svg";
                if (p === "iOS") iconFile = "apple_logo.svg";
                if (p === "Steam") iconFile = "steam_logo.svg";
                return `<img src="assets/icons/${iconFile}" class="proj-platform-icon-img" title="${p}" alt="${p}">`;
            }).join('');
        }

        // Project Links (Store / Code links only; videos are displayed below screenshots)
        let linksHtml = '';
        if (isValidLink(proj.playLink) && !proj.playLink.includes("youtube") && !proj.playLink.includes("youtu.be")) {
            let label = "Web";
            let iconImg = "web_logo.svg";
            if (proj.playLink.includes("steampowered.com")) {
                label = "Steam Store";
                iconImg = "steam_logo.svg";
            } else if (proj.playLink.includes("google.com")) {
                label = "Google Play";
                iconImg = "android_logo.svg";
            }
            linksHtml += `<a href="${proj.playLink}" target="_blank" class="proj-link-btn"><img src="assets/icons/${iconImg}" alt="${label}"> ${label}</a>`;
        }
        if (isValidLink(proj.appleLink)) {
            linksHtml += `<a href="${proj.appleLink}" target="_blank" class="proj-link-btn"><img src="assets/icons/apple_logo.svg" alt="App Store"> App Store</a>`;
        }
        if (isValidLink(proj.githubLink)) {
            linksHtml += `<a href="${proj.githubLink}" target="_blank" class="proj-link-btn"><img src="assets/icons/github.svg" alt="GitHub"> GitHub</a>`;
        }

        // Tech stack pills
        let techPillsHtml = '';
        if (proj.tech && proj.tech.length > 0) {
            techPillsHtml = proj.tech.map(t => `<span class="tech-pill">${t}</span>`).join('');
        }

        // Key Developments (Details)
        let detailsHtml = '';
        if (proj.details && proj.details.length > 0) {
            const items = proj.details.map(d => `<li>${d}</li>`).join('');
            detailsHtml = `
                <div class="proj-detail-block">
                    <div class="block-title">
                        <i class="material-icons">task_alt</i> 주요 개발 내용 (Key Developments)
                    </div>
                    <ul class="details-bullet-list">${items}</ul>
                </div>
            `;
        }

        // Technical Challenges & Solutions
        let technicalHtml = '';
        if (proj.technical && proj.technical.length > 0) {
            const techBoxes = proj.technical.map(item => `
                <div class="technical-box-item">
                    <div class="tech-box-title">
                        <i class="material-icons">construction</i> ${item.title}
                    </div>
                    <div class="tech-box-desc">${item.desc}</div>
                </div>
            `).join('');

            technicalHtml = `
                <div class="proj-detail-block">
                    <div class="block-title">
                        <i class="material-icons">psychology</i> 기술적 문제 해결 및 아키텍처 (Technical Challenges)
                    </div>
                    <div class="technical-box-list">${techBoxes}</div>
                </div>
            `;
        }

        // Achievements
        let achievementsHtml = '';
        if (proj.achievements && proj.achievements.length > 0) {
            const achItems = proj.achievements.map(ach => `
                <div class="achievement-compact-item">
                    <i class="material-icons">emoji_events</i>
                    <span class="ach-compact-title">${ach.title}</span>
                    <span class="ach-compact-desc">• ${ach.desc}</span>
                </div>
            `).join('');

            achievementsHtml = `
                <div class="proj-detail-block">
                    <div class="block-title">
                        <i class="material-icons">stars</i> 프로젝트 성과 (Achievements)
                    </div>
                    <div class="achievements-row">${achItems}</div>
                </div>
            `;
        }

        achievementsHtml = '';

        // Screenshots (Display up to 4 key screenshots, auto-adapting to both PC and mobile!)
        let screenshotsHtml = '';
        if (proj.screenshots && proj.screenshots.length > 0) {
            const displayScreenshots = proj.screenshots;
            const thumbItems = displayScreenshots.map(src => `
                <div class="screenshot-thumb-wrap">
                    <img src="${src}" class="screenshot-thumb-img" alt="${proj.name} 스크린샷" loading="lazy">
                </div>
            `).join('');

            screenshotsHtml = `
                <div class="proj-screenshots-block">
                    <div class="block-title">
                        <i class="material-icons">photo_library</i> 스크린샷
                    </div>
                    <div class="screenshots-grid">${thumbItems}</div>
                </div>
            `;
        }

        // YouTube Video Block (Directly below screenshots)
        let videoHtml = '';
        const rawVideoUrl = (isValidLink(proj.youtubeUrl) ? proj.youtubeUrl : null) || (isValidLink(proj.playLink) && (proj.playLink.includes('youtu.be') || proj.playLink.includes('youtube.com')) ? proj.playLink : null);
        if (rawVideoUrl) {
            const ytInfo = getYouTubeEmbedAndWatchUrls(rawVideoUrl);
            if (ytInfo) {
                videoHtml = `
                    <div class="proj-video-block">
                        <div class="block-title">
                            <i class="material-icons" style="color: #dc2626;">smart_display</i> 영상
                        </div>
                        <div class="proj-video-container">
                            <iframe src="${ytInfo.embedUrl}" title="${proj.name} 시연 영상" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
                        </div>
                        <div class="proj-video-link-hint">
                            <a href="${ytInfo.watchUrl}" target="_blank" class="proj-video-url-link">
                                <i class="material-icons">open_in_new</i> YouTube에서 바로보기: ${ytInfo.watchUrl}
                            </a>
                        </div>
                    </div>
                `;
            }
        }

        const projectCardHtml = `
            <article class="project-item-card" id="proj-card-${proj.id}">
                <header class="proj-card-header">
                    <div class="proj-title-group">
                        <h3 class="proj-main-title">
                            <span>${proj.name}</span>
                        </h3>
                        <div class="proj-tags-line">
                            ${companyName ? `<span class="proj-company-context"><i class="material-icons" style="font-size:14px;vertical-align:middle;">apartment</i> ${companyName}</span>` : ''}
                            <span class="badge-proj-type">${proj.type || 'Project'}</span>
                            <span class="badge-proj-role">${proj.role || '개발'}</span>
                        </div>
                    </div>
                    <div class="proj-meta-right">
                        <div class="proj-period-badge">${proj.period}</div>
                        
                        ${linksHtml ? `<div class="proj-links-row">${linksHtml}</div>` : ''}
                    </div>
                </header>

                <div class="proj-tech-stack">${techPillsHtml}</div>

                <div class="proj-description">${proj.description}</div>

                <div class="proj-content-blocks">
                    ${detailsHtml}
                    ${technicalHtml}
                    ${achievementsHtml}
                </div>

                ${screenshotsHtml}
                ${videoHtml}
            </article>
        `;

        $container.append(projectCardHtml);
    });
}

/**
 * Helper: Extract YouTube embed and watch URLs from any YouTube format
 */
function getYouTubeEmbedAndWatchUrls(url) {
    if (!url) return null;
    let videoId = '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
        videoId = match[2];
        return {
            embedUrl: `https://www.youtube.com/embed/${videoId}`,
            watchUrl: `https://www.youtube.com/watch?v=${videoId}`
        };
    }
    if (url.includes('/embed/')) {
        const id = url.split('/embed/')[1].split('?')[0];
        return {
            embedUrl: url,
            watchUrl: `https://www.youtube.com/watch?v=${id}`
        };
    }
    return {
        embedUrl: url,
        watchUrl: url
    };
}


