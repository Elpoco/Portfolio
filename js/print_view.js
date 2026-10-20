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

    // 6. Render Left Sidebar Quick Navigation (TOC)
    renderQuickNav();
    initQuickNavEvents();
});

/**
 * 1. Render Profile Header
 */
function renderProfile(age) {
    const p = portfolioData.profile;
    if (!p) return;

    $("#profile-name").text(p.name);
    $("#profile-avatar").attr("src", p.avatar || "assets/images/jjh2.jpg");
    if (p.summary) {
        $("#profile-tech-summary").text(p.summary);
    }
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
 * 2. Render Experiences & Education (Vertical Timeline with Dots & Inline Date Badges)
 */
function renderExperiences() {
    const $container = $("#experience-timeline-container");
    $container.empty();

    if (!portfolioData.experiences || portfolioData.experiences.length === 0) return;

    portfolioData.experiences.forEach(exp => {
        const isEducation = exp.type === 'education';
        const typeLabel = isEducation ? '교육' : '경력';
        const typeClass = isEducation ? 'education' : 'company';
        const typeIcon = isEducation ? 'school' : 'business_center';

        // Format period and duration
        const formattedPeriod = formatExpPeriod(exp.period);
        const duration = calculateDuration(exp.period);

        const cardHtml = `
            <div class="experience-item" id="exp-item-${exp.id}">
                <div class="exp-timeline-dot"></div>
                <div class="experience-card">
                    <div class="exp-header">
                        <div class="exp-company-group">
                            <span class="exp-company-name">${exp.company}</span>
                            <span class="exp-type-tag ${typeClass}">
                                <i class="material-icons">${typeIcon}</i>
                                ${typeLabel}
                            </span>
                        </div>
                        <div class="exp-period-badge">
                            <i class="material-icons">event</i>
                            <span class="exp-period-text">${formattedPeriod}</span>
                            ${duration ? `<span class="exp-period-duration">${duration}</span>` : ''}
                        </div>
                    </div>
                    <div class="exp-role">
                        <i class="material-icons">badge</i>
                        <span>${exp.role}</span>
                    </div>
                    <p class="exp-desc">${exp.description}</p>
                </div>
            </div>
        `;
        $container.append(cardHtml);
    });

    $("#exp-count-badge").text(`${portfolioData.experiences.length} 건`);
}

/**
 * Helper: Format period string (e.g. "2026.02 ~ " -> "2026.02 ~ 현재")
 */
function formatExpPeriod(period) {
    if (!period) return "";
    let trimmed = period.trim();
    if (trimmed.endsWith("~")) {
        return `${trimmed} 현재`;
    }
    return trimmed;
}

/**
 * Helper: Calculate tenure/duration (e.g. "3년 9개월", "8개월")
 */
function calculateDuration(period) {
    if (!period) return "";
    const hasTilde = period.includes("~");
    const parts = period.split("~").map(p => p.trim());
    if (!parts[0]) return "";

    const startMatch = parts[0].match(/(\d{4})\.(\d{2})/);
    if (!startMatch) return "";
    const startYear = parseInt(startMatch[1], 10);
    const startMonth = parseInt(startMatch[2], 10);

    let endYear, endMonth;
    if (!hasTilde) {
        endYear = startYear;
        endMonth = startMonth;
    } else if (!parts[1] || parts[1] === "" || parts[1] === "현재") {
        const now = new Date();
        endYear = now.getFullYear();
        endMonth = now.getMonth() + 1;
    } else {
        const endMatch = parts[1].match(/(\d{4})\.(\d{2})/);
        if (!endMatch) return "";
        endYear = parseInt(endMatch[1], 10);
        endMonth = parseInt(endMatch[2], 10);
    }

    const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
    if (totalMonths <= 0) return "";
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (years > 0 && months > 0) {
        return `${years}년 ${months}개월`;
    } else if (years > 0) {
        return `${years}년`;
    } else {
        return `${months}개월`;
    }
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
                        <i class="material-icons">task_alt</i> 주요 개발 내용
                    </div>
                    <ul class="details-bullet-list">${items}</ul>
                </div>
            `;
        }



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
                        <!-- Web Screen Only: Interactive Embedded Video Player -->
                        <div class="proj-video-container no-print">
                            <iframe src="${ytInfo.embedUrl}" title="${proj.name} 시연 영상" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
                        </div>
                        <!-- Print / PDF Only: Simple Clean Text Link -->
                        <div class="print-video-link-wrap print-only">
                            <i class="material-icons" style="font-size: 15px; vertical-align: middle; color: #64748b;">link</i>
                            <span class="print-video-label">시연 영상:</span>
                            <a href="${ytInfo.watchUrl}" target="_blank" class="print-video-simple-link">${ytInfo.watchUrl}</a>
                        </div>
                    </div>
                `;
            }
        }

        // Hero Banner Image (Displayed at the very top of each project before title)
        let heroImageHtml = '';
        if (proj.hero && !proj.hero.includes('/empty/')) {
            heroImageHtml = `
                <div class="proj-hero-banner-wrap">
                    <img src="${proj.hero}" alt="${proj.name} Hero 이미지" class="proj-hero-banner-img" onerror="this.parentElement.style.display='none'">
                </div>
            `;
        }

        // Project Duration
        const projDuration = calculateDuration(proj.period);

        const projectCardHtml = `
            <article class="project-item-card" id="proj-card-${proj.id}">
                ${heroImageHtml}
                <header class="proj-card-header">
                    <div class="proj-title-group">
                        <h3 class="proj-main-title">
                            <span>${proj.name}</span>
                        </h3>
                        <div class="proj-tags-line">
                            ${companyName ? `<span class="proj-company-context"><i class="material-icons" style="font-size:14px;vertical-align:middle;">apartment</i> ${companyName}</span>` : ''}
                            <span class="badge-proj-period">
                                <i class="material-icons">event</i>
                                <span class="proj-period-text">${proj.period}</span>
                                ${projDuration ? `<span class="proj-period-duration">${projDuration}</span>` : ''}
                            </span>
                        </div>
                    </div>
                    ${linksHtml ? `
                    <div class="proj-meta-right">
                        <div class="proj-links-row">${linksHtml}</div>
                    </div>
                    ` : ''}
                </header>

                <div class="proj-tech-stack">${techPillsHtml}</div>

                <div class="proj-description">${proj.description}</div>

                ${detailsHtml ? `<div class="proj-content-blocks">${detailsHtml}</div>` : ''}

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

/**
 * 5. Render Left Sidebar Quick Navigation (TOC)
 */
function renderQuickNav() {
    const $nav = $("#quick-nav-content");
    $nav.empty();

    // 1. 프로필 링크
    let navHtml = `
        <div class="quick-nav-group">
            <a href="#profile" class="quick-nav-link" data-target="profile">
                <i class="material-icons">person</i>
                <span>프로필</span>
            </a>
        </div>
    `;

    // 2. 경력 링크 (단일 메뉴)
    navHtml += `
        <div class="quick-nav-group">
            <a href="#experience" class="quick-nav-link" data-target="experience">
                <i class="material-icons">work_history</i>
                <span>경력</span>
            </a>
        </div>
    `;

    // 3. 보유 기술 스택 링크
    navHtml += `
        <div class="quick-nav-group">
            <a href="#skills" class="quick-nav-link" data-target="skills">
                <i class="material-icons">inventory_2</i>
                <span>보유 기술 스택</span>
            </a>
        </div>
    `;

    // 4. 프로젝트 링크 & 하위 목록
    if (portfolioData.projects && portfolioData.projects.length > 0) {
        // 정렬된 프로젝트 목록 (최신순)
        const sortedProjects = [...portfolioData.projects].sort((a, b) => {
            const dateA = parsePeriodStartDate(a.period);
            const dateB = parsePeriodStartDate(b.period);
            return dateB - dateA;
        });

        const projItemsHtml = sortedProjects.map(proj => {
            const exp = portfolioData.experiences ? portfolioData.experiences.find(e => e.id === proj.companyId) : null;
            const companyName = exp ? exp.company : (proj.companyId || "");
            const tooltipTitle = companyName ? `[${companyName}] ${proj.name}` : proj.name;
            return `
                <li class="quick-nav-subitem">
                    <a href="#proj-card-${proj.id}" class="quick-nav-sublink" data-target="proj-card-${proj.id}" title="${tooltipTitle}">
                        ${proj.name}
                    </a>
                </li>
            `;
        }).join('');

        navHtml += `
            <div class="quick-nav-group" data-group="projects">
                <a href="#projects" class="quick-nav-link parent-link" data-target="projects">
                    <i class="material-icons">rocket_launch</i>
                    <span>프로젝트</span>
                </a>
                <ul class="quick-nav-sublist">
                    ${projItemsHtml}
                </ul>
            </div>
        `;
    }

    $nav.html(navHtml);
}

/**
 * 6. Quick Navigation Interactions (Smooth Scroll, ScrollSpy, Drawer Toggle)
 */
function closeTocDrawer() {
    $("#quick-nav-sidebar").removeClass("open");
    $("#toc-backdrop").removeClass("show");
}

function initQuickNavEvents() {
    // 1. Mobile Drawer Toggle Button
    $("#btn-toc-toggle").on("click", function () {
        $("#quick-nav-sidebar").toggleClass("open");
        $("#toc-backdrop").toggleClass("show");
    });

    // 2. Close Drawer on close button or backdrop click
    $("#quick-nav-close, #toc-backdrop").on("click", function () {
        closeTocDrawer();
    });

    // 3. Escape key closes drawer
    $(document).on("keydown", function (e) {
        if (e.key === "Escape" || e.keyCode === 27) {
            closeTocDrawer();
        }
    });

    // 3.5 Isolate mouse wheel scrolling inside TOC (prevent main document from scrolling together)
    const sidebarEl = document.getElementById("quick-nav-sidebar");
    if (sidebarEl) {
        sidebarEl.addEventListener("wheel", function (e) {
            const content = document.getElementById("quick-nav-content");
            if (content) {
                content.scrollTop += e.deltaY;
            }
            e.preventDefault();
            e.stopPropagation();
        }, { passive: false });
    }

    // Click lock state to prevent scroll animation from overriding user's deliberate click
    let isClickLocked = false;
    let clickLockTimer = null;

    // 4. Smooth Anchor Scrolling with Click Priority Lock
    $(document).on("click", ".quick-nav-link, .quick-nav-sublink", function (e) {
        const href = $(this).attr("href");
        if (!href || !href.startsWith("#")) return;

        const targetEl = document.querySelector(href);
        if (targetEl) {
            e.preventDefault();
            closeTocDrawer();

            // Set active class immediately on the clicked item
            currentActiveId = href;
            $(".quick-nav-link, .quick-nav-sublink").removeClass("active");
            $(".quick-nav-group").removeClass("has-active");
            $(this).addClass("active");
            const $parentGroup = $(this).closest(".quick-nav-group");
            if ($parentGroup.length) {
                $parentGroup.addClass("has-active");
            }

            // Lock ScrollSpy while smooth scrolling to clicked destination
            isClickLocked = true;
            if (clickLockTimer) clearTimeout(clickLockTimer);
            clickLockTimer = setTimeout(function () {
                isClickLocked = false;
            }, 850);

            const offset = 24;
            const elementPosition = targetEl.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            if (history.pushState) {
                history.pushState(null, null, href);
            }

            // Immediately scroll TOC container to center clicked item comfortably
            scrollTocIntoView(this);
        }
    });

    // 5. ScrollSpy (Highlight current active link while scrolling & auto-scroll TOC)
    let scrollSpyTimer = null;
    let targets = [];
    let currentActiveId = null;

    function collectTargets() {
        targets = [];
        $(".quick-nav-link, .quick-nav-sublink").each(function () {
            const href = $(this).attr("href");
            if (href && href.startsWith("#")) {
                const el = document.querySelector(href);
                if (el) {
                    const isParent = $(this).hasClass("parent-link");
                    // For parent section links (e.g. #experience, #projects),
                    // measure only their header so they don't engulf all children cards!
                    const targetEl = isParent ? (el.querySelector(".section-header") || el) : el;
                    targets.push({
                        id: href,
                        el: targetEl,
                        isParent: isParent,
                        $link: $(this)
                    });
                }
            }
        });
    }

    /**
     * Keep the active TOC link comfortably visible/centered within the TOC container
     */
    function scrollTocIntoView(linkEl) {
        if (!linkEl) return;
        const container = document.getElementById("quick-nav-content");
        if (!container) return;

        // Calculate link's position relative to the scrollable content of container
        const containerRect = container.getBoundingClientRect();
        const linkRect = linkEl.getBoundingClientRect();

        const relativeTop = linkRect.top - containerRect.top + container.scrollTop;
        const containerHeight = container.clientHeight;
        const linkHeight = linkRect.height;

        // Center the active item in the TOC viewport
        const targetScrollTop = relativeTop - (containerHeight / 2) + (linkHeight / 2);
        const maxScroll = container.scrollHeight - containerHeight;
        const boundedScrollTop = Math.max(0, Math.min(maxScroll, targetScrollTop));

        container.scrollTo({
            top: boundedScrollTop,
            behavior: "smooth"
        });
    }

    /**
     * Top-Proximity & Coverage based Viewport ScrollSpy
     * Guarantees fair matching for compact items (e.g. 위고컴퍼니, 미래능력개발원) and respects deliberate user clicks.
     */
    function updateScrollSpy() {
        if (isClickLocked) return;

        if (targets.length === 0) {
            collectTargets();
        }
        if (targets.length === 0) return;

        const vHeight = window.innerHeight;

        let bestItem = null;
        let highestScore = -Infinity;

        // Check each candidate target
        for (let i = 0; i < targets.length; i++) {
            const item = targets[i];
            const rect = item.el.getBoundingClientRect();

            // 1. Strict Visibility: Element MUST have visible area inside viewport
            // If top is below viewport or bottom is above viewport, it is completely offscreen!
            if (rect.bottom <= 20 || rect.top >= vHeight - 20) {
                continue;
            }

            // Visible intersection height inside viewport
            const visibleTop = Math.max(0, rect.top);
            const visibleBottom = Math.min(vHeight, rect.bottom);
            const visibleHeight = Math.max(0, visibleBottom - visibleTop);

            if (visibleHeight < 20) {
                continue;
            }

            // 2. Score Calculation:
            // High priority given to items whose header/top is currently in the primary reading zone (top: 20px ~ 160px)
            let score = 0;

            if (rect.top >= -20 && rect.top <= 160) {
                // Highest priority: item sits right at the reading anchor at top of viewport
                score += 6000 - Math.abs(rect.top - 24) * 12;
            } else if (rect.top < -20 && rect.bottom > 160) {
                // Long item started above viewport and continues downward through reading anchor
                score += 3500;
            } else if (rect.top > 160 && rect.top <= vHeight * 0.5) {
                // Item is ascending in the upper half of screen
                score += 1800 - (rect.top - 160) * 2;
            }

            // (B) Coverage ratio: compact cards fully in view get fair full coverage bonus
            const itemHeight = Math.max(1, rect.height);
            const coverageRatio = Math.min(1, visibleHeight / itemHeight);
            score += coverageRatio * 1000;

            // (C) Sub-item priority over broad section headers
            if (!item.isParent) {
                score += 250;
            }

            if (score > highestScore) {
                highestScore = score;
                bestItem = item;
            }
        }

        // Special case: At the very bottom of the page, if no element scored, keep last item
        if (!bestItem && (window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 60)) {
            bestItem = targets[targets.length - 1];
        }

        if (bestItem) {
            if (currentActiveId !== bestItem.id) {
                currentActiveId = bestItem.id;

                $(".quick-nav-link, .quick-nav-sublink").removeClass("active");
                $(".quick-nav-group").removeClass("has-active");

                bestItem.$link.addClass("active");
                const $parentGroup = bestItem.$link.closest(".quick-nav-group");
                if ($parentGroup.length) {
                    $parentGroup.addClass("has-active");
                }

                // Automatically keep the active TOC item in view
                scrollTocIntoView(bestItem.$link[0]);
            }
        } else {
            // When nothing from our target list is in viewport, clear active states
            if (currentActiveId !== null) {
                currentActiveId = null;
                $(".quick-nav-link, .quick-nav-sublink").removeClass("active");
                $(".quick-nav-group").removeClass("has-active");
            }
        }
    }

    $(window).on("scroll resize", function () {
        if (!scrollSpyTimer) {
            scrollSpyTimer = requestAnimationFrame(function () {
                updateScrollSpy();
                scrollSpyTimer = null;
            });
        }
    });

    // Initial check after content is rendered
    setTimeout(function () {
        collectTargets();
        updateScrollSpy();
    }, 250);
}



