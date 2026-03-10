/* =========================================
   UNIVERSAL NAVIGATION — one template, every page
   ========================================= */
(function() {
    const navHTML = `
    <div class="overlay" aria-hidden="true"></div>
    <header>
        <nav aria-label="Main navigation">
            <a href="index.html" class="logo"><img src="SaraPOSSLOGO.png" alt="Sara Poss Therapy" width="283" height="162" decoding="async"></a>
            <button class="menu-toggle" aria-label="Toggle Navigation"><span></span><span></span><span></span></button>
            <div class="lang-toggle">
                <button id="lang-en" class="active" aria-label="English">\u{1F1EC}\u{1F1E7}</button>
                <button id="lang-de" aria-label="Deutsch">\u{1F1E9}\u{1F1EA}</button>
            </div>
            <ul class="nav-links">
                <li><a href="index.html" data-i18n="nav_home">Home</a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" aria-expanded="false" data-i18n="nav_systemic">Systemic Therapy ▾</a>
                    <ul class="dropdown-menu">
                        <li><a href="systemic-therapy.html#individual" data-i18n="nav_individual">Individual Systemic Therapy</a></li>
                        <li><a href="systemic-therapy.html#couples" data-i18n="nav_couples">Relationship &amp; Couples Therapy</a></li>
                        <li><a href="systemic-therapy.html#family" data-i18n="nav_family">Family Therapy</a></li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" aria-expanded="false" data-i18n="nav_constellations">Family Constellations ▾</a>
                    <ul class="dropdown-menu">
                        <li><a href="1to1-sessions.html" data-i18n="nav_const_11">1:1 Sessions</a></li>
                        <li class="has-submenu">
                            <a href="#" class="submenu-toggle" data-i18n="nav_const_workshops">Family Constellations Workshops ▾</a>
                            <ul class="submenu">
                                <li><a href="workshops.html" data-i18n="nav_const_open">Open Group Workshops</a></li>
                                <li><a href="bespoke-workshops.html" data-i18n="nav_const_bespoke">Bespoke Workshops</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><a href="contact.html" data-i18n="nav_contact">Contact</a></li>
                <li><a href="mailto:saraposs4@gmail.com" class="btn nav-cta" data-i18n="nav_cta">Book Discovery Call</a></li>
            </ul>
        </nav>
    </header>`;

    const placeholder = document.getElementById('site-nav');
    if (placeholder) {
        placeholder.insertAdjacentHTML('afterend', navHTML);
        placeholder.remove();
    }

    document.addEventListener('DOMContentLoaded', () => {
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        const overlay = document.querySelector('.overlay');

        if (!menuToggle || !navLinks || !overlay) return;

        function closeMenu() {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            overlay.classList.remove('active');
            document.body.classList.remove('menu-open');
            document.querySelectorAll('.dropdown').forEach(d => {
                d.classList.remove('active');
                const t = d.querySelector('.dropdown-toggle');
                if (t) t.setAttribute('aria-expanded', 'false');
            });
            document.querySelectorAll('.has-submenu').forEach(s => s.classList.remove('active'));
        }

        menuToggle.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                closeMenu();
            } else {
                navLinks.classList.add('active');
                menuToggle.classList.add('active');
                overlay.classList.add('active');
                document.body.classList.add('menu-open');
            }
        });

        overlay.addEventListener('click', closeMenu);

        document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                if (window.innerWidth <= 992) {
                    e.preventDefault();
                    const parent = toggle.parentElement;
                    document.querySelectorAll('.dropdown').forEach(d => {
                        if (d !== parent) {
                            d.classList.remove('active');
                            const t = d.querySelector('.dropdown-toggle');
                            if (t) t.setAttribute('aria-expanded', 'false');
                        }
                    });
                    const isOpen = parent.classList.toggle('active');
                    toggle.setAttribute('aria-expanded', isOpen);
                }
            });
        });

        document.querySelectorAll('.submenu-toggle').forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                if (window.innerWidth <= 992) {
                    e.preventDefault();
                    e.stopPropagation();
                    toggle.parentElement.classList.toggle('active');
                }
            });
        });

        document.querySelectorAll('.nav-links a:not(.dropdown-toggle):not(.submenu-toggle)').forEach(link => {
            link.addEventListener('click', (e) => {
                if (window.innerWidth > 992) return;
                const href = link.getAttribute('href');
                if (href && href !== '#') {
                    e.preventDefault();
                    closeMenu();
                    const [path, hash] = href.split('#');
                    const currentFile = window.location.pathname.split('/').pop() || 'index.html';
                    const samePage = hash && (!path || path === currentFile);
                    if (hash && samePage) {
                        const target = document.getElementById(hash);
                        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    } else {
                        window.location.href = href;
                    }
                } else {
                    closeMenu();
                }
            });
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 992) closeMenu();
        });
    });
})();
