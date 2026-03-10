/* =========================================
   LANGUAGE / i18n — shared across all pages
   ========================================= */
(function() {
    const translations = {
        en: {
            skip_link: 'Skip to content',
            nav_home: 'Home',
            nav_systemic: 'Systemic Therapy ▾',
            nav_individual: 'Individual Systemic Therapy',
            nav_couples: 'Relationship & Couples Therapy',
            nav_family: 'Family Therapy',
            nav_constellations: 'Family Constellations ▾',
            nav_const_11: '1:1 Sessions',
            nav_const_workshops: 'Family Constellations Workshops ▾',
            nav_const_open: 'Open Group Workshops',
            nav_const_bespoke: 'Bespoke Workshops',
            nav_contact: 'Contact',
            nav_cta: 'Book Discovery Call',
            hero_tagline: 'Psychotherapy | Online & in North London',
            hero_heading: 'Systemic Therapy & Family Constellations',
            hero_text: "Whether you're navigating relationship difficulties, feeling weighed down by family patterns, or searching for a deeper understanding of yourself. I'm here to help.",
            hero_cta: 'Book a Free Discovery Call',
            trust_label: 'Registered & Accredited:',
            trust_ukcp: '<strong>UKCP</strong> (UK Council for Psychotherapy)',
            trust_dgsf: '<strong>DGSF</strong> (German Society for Systemic Therapy)',
            who_heading: 'Is This You?',
            who_text: "You don't have to have it all figured out to reach out. Many of my clients come to me when they're experiencing...",
            pain1_title: 'Feeling stuck in repeating patterns',
            pain1_text: 'The same conflicts, the same dynamics, the same outcomes, despite your best efforts to change.',
            pain2_title: 'Relationship difficulties',
            pain2_text: 'Communication breakdowns, growing distance, or recurring tension with your partner, family, or loved ones.',
            pain3_title: "Carrying weight that isn't yours",
            pain3_text: "A sense of heaviness, loyalty, or responsibility that seems to run deeper than your own experiences.",
            services_heading: 'How I Can Help',
            services_text: 'I offer two complementary approaches to help you uncover the root of your challenges and find lasting resolution.',
            card_systemic_title: 'Systemic Therapy',
            card_systemic_text: "We don't exist in isolation. Systemic therapy looks at your life through the lens of your relationships: your family, your partnership, and your environment. Together, we explore these dynamics to break unhelpful cycles, improve communication, and restore balance.",
            card_systemic_btn: 'Explore Systemic Therapy',
            card_const_title: 'Family Constellations',
            card_const_text: "Sometimes, the roadblocks we face belong to the generations that came before us. Family Constellations is a profound method that reveals hidden family dynamics and unconscious loyalties, allowing you to release inherited trauma and step into your own life.",
            card_const_btn: 'Explore Constellations',
            about_heading: 'About Sara',
            about_p1: "I'm Sara Poss, a UKCP-registered systemic therapist and DGSF-certified family constellations facilitator. I work with individuals, couples, and families to help them understand the hidden dynamics shaping their lives and relationships.",
            about_p2: "My training spans both the UK and Germany, giving me a unique perspective that bridges different therapeutic traditions. I believe that lasting change happens when we look beyond the individual: at the systems, patterns, and loyalties that connect us to those around us and to the generations before.",
            about_cta: 'Book a Free Discovery Call',
            testimonials_heading: 'What Clients Say',
            testimonials_quote: '"Sara provided an incredibly safe space. The constellation workshop completely shifted how I view my family dynamics. Highly recommended."',
            testimonials_author: 'Previous Workshop Participant',
            testimonials_stars: '5 Star Google Reviews',
            testimonials_link: 'Read more on Google Reviews',
            footer_heading: 'Ready to take the next step?',
            footer_text: 'Reach out to discuss how we can work together.',
            footer_cta: 'Book a Free Discovery Call',
            footer_address_label: 'Address',
            footer_contact_label: 'Phone & Email',
            fnav_home: 'Home',
            fnav_systemic: 'Systemic Therapy',
            fnav_11_sessions: '1:1 Sessions',
            fnav_workshops: 'Workshops',
            fnav_contact: 'Contact',
            fnav_faqs: 'FAQs',
            footer_legal: '© 2026 Sara Poss Therapy. All rights reserved.',
            wa_tooltip: 'Message Sara on WhatsApp',
            page_contact_title: 'Contact',
            page_contact_tagline: 'Begin your journey',
            page_11_title: '1:1 Family Constellations Sessions',
            page_11_tagline: 'One-to-one sessions in North London or online via Zoom',
            page_workshops_title: 'Family Constellations Workshops',
            page_workshops_tagline: 'Open Group Workshops',
            page_bespoke_title: 'Bespoke Workshops',
            page_bespoke_tagline: 'Bespoke Workshops for Groups & Organisations',
            page_systemic_title: 'Systemic Therapy for Individuals, Couples & Families',
            page_systemic_tagline: 'Evidence-based psychotherapy in North London or online via Zoom',
            pages: {
                index: { page_title: 'Sara Poss Therapy | Systemic Therapist North London & Online', meta_description: 'Sara Poss, UKCP-registered systemic therapist in North London offering Systemic Therapy and Family Constellations for individuals, couples, and families. In-person & online. Book a free discovery call.' },
                contact: { page_title: 'Contact | Sara Poss Therapy', meta_description: 'Get in touch with Sara Poss for systemic therapy and Family Constellations. Book a complimentary introductory call.' },
                '1to1-sessions': { page_title: '1:1 Family Constellations Sessions | Sara Poss Therapy', meta_description: 'One-to-one Family Constellations sessions with Sara Poss. Explore family dynamics, unconscious loyalties and generational patterns. In person in North London or online via Zoom.' },
                workshops: { page_title: 'Family Constellations Workshops | Sara Poss Therapy', meta_description: 'Open group Family Constellations workshops with Sara Poss. Uncover hidden family dynamics and generational patterns in a safe, supportive space. North London and online.' },
                'bespoke-workshops': { page_title: 'Bespoke Workshops | Sara Poss Therapy', meta_description: 'Bespoke systemic and Family Constellations workshops for groups, teams, and organisations. Tailored to your theme or question. Facilitated by Sara Poss across the UK and Europe.' },
                'systemic-therapy': { page_title: 'Systemic Therapy for Individuals, Couples & Families | Sara Poss Therapy', meta_description: 'Systemic therapy with Sara Poss. Evidence-based psychotherapy for individuals, couples and families. North London and online via Zoom. Book a free discovery call.' }
            }
        },
        de: {
            skip_link: 'Zum Inhalt springen',
            nav_home: 'Startseite',
            nav_systemic: 'Systemische Therapie ▾',
            nav_individual: 'Einzeltherapie',
            nav_couples: 'Paar- & Beziehungstherapie',
            nav_family: 'Familientherapie',
            nav_constellations: 'Familienaufstellungen ▾',
            nav_const_11: 'Einzelsitzungen',
            nav_const_workshops: 'Familienaufstellungs-Workshops ▾',
            nav_const_open: 'Offene Gruppenworkshops',
            nav_const_bespoke: 'Maßgeschneiderte Workshops',
            nav_contact: 'Kontakt',
            nav_cta: 'Erstgespräch buchen',
            hero_tagline: 'Psychotherapie | Online & in Nord-London',
            hero_heading: 'Systemische Therapie & Familienaufstellungen',
            hero_text: 'Ob Sie mit Beziehungsschwierigkeiten kämpfen, sich von familiären Mustern belastet fühlen oder nach einem tieferen Verständnis Ihrer selbst suchen. Ich bin für Sie da.',
            hero_cta: 'Kostenloses Erstgespräch buchen',
            trust_label: 'Registriert & Akkreditiert:',
            trust_ukcp: '<strong>UKCP</strong> (UK Council for Psychotherapy)',
            trust_dgsf: '<strong>DGSF</strong> (Deutsche Gesellschaft für Systemische Therapie)',
            who_heading: 'Erkennen Sie sich wieder?',
            who_text: 'Sie müssen nicht alles verstanden haben, bevor Sie sich melden. Viele meiner Klient:innen kommen zu mir, wenn sie Folgendes erleben...',
            pain1_title: 'Feststecken in wiederkehrenden Mustern',
            pain1_text: 'Dieselben Konflikte, dieselben Dynamiken, dieselben Ergebnisse, trotz aller Bemühungen, etwas zu verändern.',
            pain2_title: 'Beziehungsschwierigkeiten',
            pain2_text: 'Kommunikationsprobleme, wachsende Distanz oder wiederkehrende Spannungen mit Ihrem Partner, Ihrer Familie oder Ihren Liebsten.',
            pain3_title: 'Eine Last tragen, die nicht Ihre ist',
            pain3_text: 'Ein Gefühl von Schwere, Loyalität oder Verantwortung, das tiefer zu reichen scheint als Ihre eigenen Erfahrungen.',
            services_heading: 'Wie ich helfen kann',
            services_text: 'Ich biete zwei sich ergänzende Ansätze, um die Ursachen Ihrer Herausforderungen aufzudecken und nachhaltige Lösungen zu finden.',
            card_systemic_title: 'Systemische Therapie',
            card_systemic_text: 'Wir existieren nicht isoliert. Systemische Therapie betrachtet Ihr Leben durch die Linse Ihrer Beziehungen: Ihre Familie, Ihre Partnerschaft und Ihr Umfeld. Gemeinsam erforschen wir diese Dynamiken, um schädliche Kreise zu durchbrechen, die Kommunikation zu verbessern und das Gleichgewicht wiederherzustellen.',
            card_systemic_btn: 'Systemische Therapie entdecken',
            card_const_title: 'Familienaufstellungen',
            card_const_text: 'Manchmal gehören die Hindernisse, denen wir begegnen, den Generationen vor uns. Familienaufstellungen sind eine tiefgreifende Methode, die verborgene Familiendynamiken und unbewusste Loyalitäten sichtbar macht und es Ihnen ermöglicht, vererbte Traumata loszulassen und Ihr eigenes Leben zu leben.',
            card_const_btn: 'Aufstellungen entdecken',
            about_heading: 'Über Sara',
            about_p1: 'Ich bin Sara Poss, UKCP-registrierte systemische Therapeutin und DGSF-zertifizierte Familienaufstellerin. Ich arbeite mit Einzelpersonen, Paaren und Familien, um ihnen zu helfen, die verborgenen Dynamiken zu verstehen, die ihr Leben und ihre Beziehungen prägen.',
            about_p2: 'Meine Ausbildung umfasst sowohl Großbritannien als auch Deutschland, was mir eine einzigartige Perspektive verleiht, die verschiedene therapeutische Traditionen verbindet. Ich glaube, dass nachhaltige Veränderung geschieht, wenn wir über den Einzelnen hinausschauen: auf die Systeme, Muster und Loyalitäten, die uns mit unserer Umgebung und den Generationen vor uns verbinden.',
            about_cta: 'Kostenloses Erstgespräch buchen',
            testimonials_heading: 'Was Klient:innen sagen',
            testimonials_quote: '"Sara hat einen unglaublich sicheren Raum geschaffen. Der Aufstellungs-Workshop hat meine Sicht auf meine Familiendynamiken komplett verändert. Sehr empfehlenswert."',
            testimonials_author: 'Frühere Workshop-Teilnehmerin',
            testimonials_stars: '5-Sterne Google-Bewertungen',
            testimonials_link: 'Mehr auf Google Reviews lesen',
            footer_heading: 'Bereit für den nächsten Schritt?',
            footer_text: 'Melden Sie sich, um zu besprechen, wie wir zusammenarbeiten können.',
            footer_cta: 'Kostenloses Erstgespräch buchen',
            footer_address_label: 'Adresse',
            footer_contact_label: 'Telefon & E-Mail',
            fnav_home: 'Startseite',
            fnav_systemic: 'Systemische Therapie',
            fnav_11_sessions: '1:1 Sitzungen',
            fnav_workshops: 'Workshops',
            fnav_contact: 'Kontakt',
            fnav_faqs: 'Häufige Fragen',
            footer_legal: '© 2026 Sara Poss Therapy. Alle Rechte vorbehalten.',
            wa_tooltip: 'Sara auf WhatsApp schreiben',
            page_contact_title: 'Kontakt',
            page_contact_tagline: 'Beginnen Sie Ihre Reise',
            page_11_title: '1:1 Familienaufstellungen',
            page_11_tagline: 'Einzelsitzungen in Nord-London oder online via Zoom',
            page_workshops_title: 'Familienaufstellungs-Workshops',
            page_workshops_tagline: 'Offene Gruppenworkshops',
            page_bespoke_title: 'Maßgeschneiderte Workshops',
            page_bespoke_tagline: 'Maßgeschneiderte Workshops für Gruppen & Organisationen',
            page_systemic_title: 'Systemische Therapie für Einzelpersonen, Paare & Familien',
            page_systemic_tagline: 'Evidenzbasierte Psychotherapie in Nord-London oder online via Zoom',
            pages: {
                index: { page_title: 'Sara Poss Therapie | Systemische Therapeutin Nord-London & Online', meta_description: 'Sara Poss, UKCP-registrierte systemische Therapeutin in Nord-London. Systemische Therapie und Familienaufstellungen für Einzelpersonen, Paare und Familien. Vor Ort & online.' },
                contact: { page_title: 'Kontakt | Sara Poss Therapie', meta_description: 'Kontaktieren Sie Sara Poss für systemische Therapie und Familienaufstellungen. Vereinbaren Sie ein kostenloses Erstgespräch.' },
                '1to1-sessions': { page_title: '1:1 Familienaufstellungen | Sara Poss Therapie', meta_description: 'Einzelsitzungen Familienaufstellungen mit Sara Poss. Familiendynamiken, unbewusste Loyalitäten und generationenübergreifende Muster erforschen. In Nord-London oder online.' },
                workshops: { page_title: 'Familienaufstellungs-Workshops | Sara Poss Therapie', meta_description: 'Offene Gruppenworkshops Familienaufstellungen mit Sara Poss. Verborgene Familiendynamiken in einem sicheren Raum aufdecken. Nord-London und online.' },
                'bespoke-workshops': { page_title: 'Maßgeschneiderte Workshops | Sara Poss Therapie', meta_description: 'Maßgeschneiderte systemische und Familienaufstellungs-Workshops für Gruppen und Organisationen. Von Sara Poss im UK und Europa.' },
                'systemic-therapy': { page_title: 'Systemische Therapie für Einzelpersonen, Paare & Familien | Sara Poss Therapie', meta_description: 'Systemische Therapie mit Sara Poss. Evidenzbasierte Psychotherapie für Einzelpersonen, Paare und Familien. Nord-London und online.' }
            }
        }
    };

    const waMessages = {
        en: 'https://wa.me/447903539734?text=Hi%20Sara%2C%20I%20found%20your%20website%20and%20I%E2%80%99d%20love%20to%20find%20out%20more.',
        de: 'https://wa.me/447903539734?text=Hallo%20Sara%2C%20ich%20habe%20Ihre%20Website%20gefunden%20und%20w%C3%BCrde%20gerne%20mehr%20erfahren.'
    };

    function getPageKey() {
        const path = window.location.pathname.split('/').pop() || 'index.html';
        return path.replace('.html', '') || 'index';
    }

    function setLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const t = translations[lang];
            const val = t[key];
            if (val && typeof val === 'string') el.innerHTML = val;
        });
        document.documentElement.lang = lang;
        const pageKey = getPageKey();
        const page = translations[lang].pages && translations[lang].pages[pageKey];
        if (page) {
            document.title = page.page_title;
            const meta = document.querySelector('meta[name="description"]');
            if (meta) meta.content = page.meta_description;
        }
        const langEn = document.getElementById('lang-en');
        const langDe = document.getElementById('lang-de');
        if (langEn) langEn.classList.toggle('active', lang === 'en');
        if (langDe) langDe.classList.toggle('active', lang === 'de');
        const waLink = document.getElementById('wa-link');
        if (waLink) waLink.href = waMessages[lang];
        localStorage.setItem('sp-lang', lang);
    }

    function initLang() {
        const langEn = document.getElementById('lang-en');
        const langDe = document.getElementById('lang-de');
        if (langEn) langEn.addEventListener('click', () => setLanguage('en'));
        if (langDe) langDe.addEventListener('click', () => setLanguage('de'));
        const saved = localStorage.getItem('sp-lang');
        if (saved && saved !== 'en') setLanguage(saved);
    }
    document.addEventListener('DOMContentLoaded', initLang);
})();
