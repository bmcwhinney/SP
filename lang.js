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
            nav_const_workshops: 'Constellations Workshops ▾',
            nav_const_open: 'Open Group Workshops',
            nav_const_bespoke: 'Bespoke Workshops',
            nav_contact: 'Contact',
            nav_cta: 'Book Discovery Call',
            hero_tagline: 'Psychotherapy | Online & in North London',
            hero_heading: 'Systemic Therapy & Family Constellations',
            hero_text: "Whether you're navigating relationship difficulties, feeling weighed down by family patterns, or searching for a deeper understanding of yourself - I'm here to help.",
            hero_cta: 'Book a Free Discovery Call',
            trust_label: 'Registered & Accredited:',
            trust_ukcp: '<strong>UKCP</strong> (UK Council for Psychotherapy)',
            trust_dgsf: '<strong>DGSF</strong> (German Society for Systemic Therapy)',
            trust_affp: '<strong>AFFP</strong> (Association For Family And Systemic Psychotherapy)',
            who_heading: 'Is This You?',
            who_text: "You don't have to have it all figured out to reach out. Many of my clients come to me when they're experiencing ...",
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
            about_p1: "I'm Sara Poss, a UKCP-registered systemic therapist and certified family constellations facilitator. I work with individuals, couples, and families to help them understand the hidden dynamics shaping their lives and relationships.",
            about_p2: "My training spans both the UK and Germany, giving me a unique perspective that bridges different therapeutic traditions. I believe that lasting change happens when we look beyond the individual: at the systems, patterns, and loyalties that connect us to those around us and to the generations before.",
            about_cta: 'Book a Free Discovery Call',
            testimonials_heading: 'What Clients Say',
            testimonials_quote: '"Sara provided an incredibly safe space. My work with her completely shifted how I view my family dynamics. Highly recommended."',
            testimonials_author: 'Previous Workshop Participant',
            testimonials_stars: '5 Star Google Reviews',
            testimonials_link: 'Read more on Google Reviews',
            footer_heading: 'Ready to take the next step?',
            footer_text: 'Reach out to discuss how we can work together.',
            footer_cta: 'Book a Free Discovery Call',
            footer_address_label: 'Address',
            footer_contact_label: 'Phone & Email',
            footer_social_label: 'Social',
            fnav_home: 'Home',
            fnav_systemic: 'Systemic Therapy',
            fnav_11_sessions: '1:1 Sessions',
            fnav_workshops: 'Workshops',
            fnav_contact: 'Contact',
            fnav_faqs: 'FAQs',
            footer_legal: '© 2026 Sara Poss Therapy. All rights reserved.',
            wa_tooltip: 'Message Sara on WhatsApp',
            nav_toggle: 'Toggle navigation menu',
            events_tooltip: 'Upcoming Events',
            events_title: 'Family & Personal Issue Workshop',
            events_date: '7th May 2026',
            events_time: '6pm - 9pm',
            events_btn: 'Book tickets',
            page_contact_title: 'Contact',
            page_contact_tagline: 'Begin your journey',
            contact_intro: 'Join me for a complimentary introductory call where we can explore your needs and address any questions you may have.',
            contact_phone_label: 'Phone',
            contact_location_heading: 'North London Therapy',
            contact_location_address: 'Mc Crone House<br>Leighton Road<br>London NW5',
            contact_location_img_alt: 'North London therapy location - McCrone House',
            page_11_title: '1:1 Family Constellations Sessions',
            page_11_tagline: 'One-to-one sessions in North London or online via Zoom',
            page_workshops_title: 'Family Constellations Workshops',
            page_workshops_tagline: 'Open Group Workshops',
            page_bespoke_title: 'Bespoke Workshops',
            page_bespoke_tagline: 'Bespoke Workshops for Groups & Organisations',
            page_systemic_title: 'Systemic Therapy for Individuals, Couples & Families',
            page_systemic_tagline: 'Evidence-based psychotherapy in North London or online via Zoom',
            learn_more: 'Learn more',
            contact_sara: 'Contact Sara',
            read_google_reviews: 'Read Google Reviews',
            about_sara_bio: 'Sara has over 10 years\' experience facilitating Family Constellations workshops, creating a safe space for insight, reflection, and meaningful change. She holds International Recognition as a Master Constellator from Constellations International (CI), demonstrating her expertise in applying constellation work in therapeutic, professional, and training settings.',
            about_sara_bespoke: 'Sara has over 10 years\' experience facilitating Family Constellations workshops, creating a safe space for insight, reflection, and meaningful change. She holds International Recognition as a Master Constellator from Constellations International (CI), demonstrating her expertise in applying constellation work in therapeutic, professional, and training settings.',
            get_in_touch: 'Get in Touch',
            get_in_touch_text: 'If your group would like to explore a question, theme, or issue together, or if you\'d like to commission a bespoke workshop with a gathered group, contact Sara to create a workshop designed just for you.',
            what_people_say: 'What People Say',
            workshops_testimonial: 'Participants describe Sara\'s workshops as insightful, transformative, and deeply supportive.',
            /* 1to1-sessions */
            fc_what_title: 'What is Family Constellations Therapy?',
            fc_what_p1: 'Family Constellations Therapy (also known as Systemic Constellations) is a therapeutic approach that explores how family history, unconscious loyalties, and generational patterns can influence our lives today.',
            fc_what_p2: 'Many of the difficulties we experience, such as feeling stuck, repeating familiar patterns, or carrying emotions that don\'t quite feel like our own, can be connected to unresolved experiences within our family system. While these patterns may have been passed down through generations, they are not necessarily ours to carry.',
            fc_what_p3: 'Family Constellations Therapy brings awareness to these hidden dynamics, creating space for release, reconnection, and change. This work supports movement where things have felt inherited or stuck, and can help you reconnect more fully with yourself.',
            fc_what_p4: 'My approach is grounded in trauma-informed and psychological awareness, while also honouring the systemic and experiential nature of constellation work.',
            fc_what_highlight: '1:1 sessions are 90 minutes.',
            fc_fees_label: 'Fee:',
            fc_fees_online_label: 'online',
            fc_fees_inperson_label: 'in person',
            fc_expect_title: 'What to expect from a 1:1 session',
            fc_expect_p1: 'In a one-to-one Family Constellations session, we work together to explore a specific theme or question you bring. The process is experiential rather than purely conversational, allowing insight to emerge through felt experience as well as reflection.',
            fc_expect_p2: 'No prior experience is needed. Sessions are offered in person at my London practice or online via Zoom, and take place at a pace that supports safety, regulation, and integration.',
            fc_prepare_title: 'How to prepare',
            fc_prepare_p: 'There is no formal preparation required. This work often unfolds gently and organically, meeting you where you are.',
            fc_after_title: 'After the session & integration',
            fc_after_p1: 'Each session is unique, and people experience a wide range of responses: emotional, physical, reflective, or subtle. There is no "right" way to feel afterwards.',
            fc_after_p2: 'Family Constellations Therapy differs from ongoing weekly therapy. Sessions may stand alone, or be revisited when it feels supportive. If you choose to book another session, I recommend allowing at least 2–3 weeks between sessions to support integration.',
            fc_after_p3: 'Many people also find it helpful to integrate this work alongside other supportive approaches such as psychotherapy, somatic therapy, or body-based practices.',
            constellations_disclaimer: 'Constellations are a process for expanding understanding and awareness. They are not a diagnostic or treatment method for any psychological condition or disorder.',
            fc_reading_title: 'Further reading',
            fc_reading_welldoing: 'What is Family Constellations Therapy?',
            fc_reading_welldoing_src: '(Welldoing)',
            fc_reading_csc: 'Parenting Constellations with Sara Poss & Betsy Gibson',
            fc_reading_csc_src: '(The CSC)',
            /* workshops */
            w_understand_title: 'Understand challenges and transform them',
            w_understand_p: 'Family Constellations workshops offer a unique way to uncover the hidden roots of personal and professional challenges. Many people come feeling stuck, constrained, or unsure why certain patterns keep repeating. This method helps you move beyond the surface problem to explore its deeper origins, often connected to previous generations.',
            w_systems_title: 'How Family Systems Shape Our Lives',
            w_systems_p1: 'Our parents, grandparents and ancestors create an invisible web of relationships and patterns that influence our choices and experiences. Without realising it, we may carry unconscious loyalties to these family dynamics, which can limit our freedom.',
            w_systems_p2: 'Family Constellations make these hidden patterns visible. By seeing and integrating them, you gain clarity, choice, and a greater sense of agency.',
            w_systems_highlight: 'Understanding the forces shaping your life brings real freedom to move forward.',
            w_participants_title: 'How Participants Take Part',
            w_participants_intro: 'Workshops provide a safe, supportive, and confidential space. The process begins with a conversation between the facilitator, Sara, and the person bringing an issue. From there, participants take part in one of two ways:',
            w_role_holder: 'Issue Holder',
            w_role_holder_p: 'Bring a personal or professional challenge to explore. Up to three issue holders are supported in each workshop. Issues may include family patterns, relationships, work, health, creativity, or life decisions.',
            w_role_rep: 'Representative (Resource)',
            w_role_rep_p: 'Stand in for someone or something in a Constellation. No prior experience is needed. Representatives often gain surprising personal insights and healing.',
            w_participants_outro: 'Both ways of participating can lead to profound understanding and emotional release.',
            w_upcoming_workshop_intro: 'Next workshop — Book your place',
            /* bespoke */
            b_theme_title: 'Exploring a Theme, Question, or Issue Together',
            b_theme_p1: 'Bespoke Systemic and Family Constellations workshops support the exploration of meaningful personal or professional questions and challenges.',
            b_theme_p2: 'These workshops can be designed for existing groups, teams, or communities, or commissioned by an individual or organisation. In commissioned workshops, participants can be brought together specifically for the session.',
            b_theme_p3: 'Each workshop is shaped around the theme or question the group brings, helping participants uncover patterns, gain insights, and make practical shifts.',
            b_how_title: 'How a Bespoke Workshop Works',
            b_how_p1: 'Workshops are guided by Sara in a safe, supportive, and confidential space. The group may already exist, or it may be gathered specifically for the constellation.',
            b_how_p2: 'During the workshop:',
            b_how_holders: 'Issue Holders',
            b_how_holders_desc: 'bring a personal or shared question.',
            b_how_reps: 'Representatives',
            b_how_reps_desc: 'take part in the constellation, creating a living map of the system.',
            b_how_p3: 'As the constellation unfolds, hidden patterns and dynamics often become visible. The work is not about quick fixes, but about creating movement, opening new viewpoints, and generating fresh possibilities.',
            b_how_highlight: 'No prior experience with Systemic or Family Constellations is required. Workshops are offered in person in the UK and Europe.',
            /* media-constellations */
            nav_mc: 'Media Constellations',
            mc_title: 'Media Constellations',
            mc_tagline: 'Aligning Creative Projects and Teams',
            mc_intro: 'Media Constellations brings systemic insight to film, TV, and production teams, creating space to pause, see the whole picture, and explore the unseen dynamics shaping projects and collaborations. Through this experiential approach, individuals and teams gain clarity, connection, and a renewed sense of direction in their creative work.',
            mc_discover_title: 'Discover Media Constellations',
            mc_discover_p: 'Inspired by the transformative principles of Systemic Constellations, Media Constellations reveals hidden creative dynamics, uncovering the forces that shape stories, characters, and entire projects. Originally developed to understand patterns in families and organisations, this method offers powerful insight into narrative development, team collaboration, and emotional ecosystems that underpin creative work.',
            mc_screenwriters_title: 'For Screenwriters & Story Developers',
            mc_screenwriters_intro: 'Go beyond plot and structure to enter the living field of your story. Media Constellations allows you to:',
            mc_screenwriters_1: 'Meet your characters as if they were present in the room',
            mc_screenwriters_2: 'Explore emotional and relational forces shaping your story',
            mc_screenwriters_3: 'Illuminate narrative arcs, blocks, and unseen tensions',
            mc_screenwriters_4: 'Uncover the essential truth your script is trying to express',
            mc_screenwriters_outro: 'Whether you\'re working in fiction, documentary, or hybrid forms, this approach unlocks depth, clarity, and surprising new creative pathways.',
            mc_teams_title: 'For Creative Leads & Project Teams',
            mc_teams_intro: 'Large creative projects involve many voices, agendas, and emotional undercurrents. Media Constellations helps you:',
            mc_teams_1: 'Navigate complex team dynamics',
            mc_teams_2: 'Clarify roles, responsibilities, and creative intention',
            mc_teams_3: 'Resolve conflicts and misalignments early',
            mc_teams_4: 'Bring coherence to teams, collaborators, and the project as a whole',
            mc_teams_outro: 'By making invisible dynamics visible, this process supports healthy collaboration and ensures your creative vision remains intact from development through delivery.',
            mc_cta_text: 'To explore Media Constellations for your project or team, contact Sara to discuss how this approach could support your creative work.',
            mc_find_out_more: 'Find out more here',
            /* systemic-therapy */
            st_what_title: 'What is Systemic Therapy?',
            st_what_p1: 'Systemic therapy is a well-established, evidence-based form of psychotherapy that focuses on understanding difficulties within the context of relationships, life circumstances, and wider social systems. Rather than seeing problems in isolation, a systemic approach explores how patterns develop and are maintained over time, and how change becomes possible.',
            st_what_p2: 'Systemic therapy looks at recurring patterns in relationships, thoughts, and behaviours that may feel limiting or unhelpful. The focus is not on blame, but on creating understanding, whether these patterns show up in families, partnerships, work environments, or other important areas of life.',
            st_what_p3: 'My work as a systemic therapist is informed by a background in family constellations, supporting an awareness of intergenerational influences while keeping therapy practical, collaborative, and closely connected to everyday concerns.',
            st_what_p4: 'At its core, systemic psychotherapy is about connection and integration rather than judgement. By understanding past and present as part of a whole, this approach creates space to develop a future direction that feels meaningful, balanced, and sustainable.',
            st_what_p5: 'Systemic therapy can be helpful for individuals, couples, and families. Whether you are seeking short-term support or longer-term therapy, I work collaboratively and at a pace that feels right for you, offering a safe and supportive space to explore challenges, strengthen relationships, and support meaningful change.',
            st_what_highlight: 'Sessions are available in person at my North London practice or online via Zoom.',
            st_options_title: 'Therapy Options',
            st_card_individual_p: 'Short or long-term sessions for adults, adolescents, and children, supporting personal growth and life challenges.',
            st_card_couples_p: 'Online or in-person sessions to improve communication, strengthen connection, and resolve conflicts.',
            st_card_family_p: 'Explore family dynamics and relationships in a safe, guided environment, available online or in-person.',
            st_individual_title: 'Individual Therapy',
            st_individual_p: 'Instead of treating the troubled parts of ourselves as problems to get rid of, we see them as aspects that want to be seen. By exploring the underlying, and often unseen, dynamics of an issue, new understandings and fresh insight can be revealed. My aim is to help you gain a fresh perspective on your challenges, empowering you to feel freer and navigate life\'s challenges with greater ease.',
            st_couples_title: 'Couples Therapy',
            st_couples_p: 'I facilitate collaborative dialogue aimed at uncovering underlying dynamics and patterns. By creating a safe space for open communication, both partners can gain insight into their individual perspectives and their impact on the relationship. Throughout our sessions, we will explore communication patterns, family histories and more to help you both gain clarity and develop more adaptive ways of relating. Together, we\'ll focus on enhancing communication, building trust, and constructively resolving conflicts. Ultimately, our goal is to create positive changes, strengthen your connection, and deepen your relational bond.',
            st_family_title: 'Family Therapy',
            st_family_p: 'By viewing the family as a whole, rather than focusing solely on one person, we acknowledge the interconnectedness and influence of each family member on the others. Many family problems stem from these relationships and interactions. During our sessions, we\'ll collaborate to explore the dynamics within your family system. We\'ll pay attention to communication patterns, family roles, and any underlying beliefs or expectations that may affect family functioning. We\'ll work on improving communication, resolving conflicts, and strengthening connections among family members. By addressing issues within the family system, we can effect lasting change that benefits everyone involved.',
            st_details_title: 'Session Details',
            st_detail_inperson: '<strong>In-person</strong> North London practice',
            st_detail_online: '<strong>Online</strong> Secure Zoom sessions',
            st_detail_length: '<strong>Session length</strong> 60 or 90 minutes',
            st_fees_title: 'Fees',
            st_fees_th_therapy: 'Therapy',
            st_fees_th_online: 'Online (60 min)',
            st_fees_th_online_90: 'Online (90 min)',
            st_fees_th_inperson: 'In-person (60 min)',
            st_fees_th_inperson_90: 'In-person (90 min)',
            st_testimonial_quote: '\u201CI have had years of therapy but only a few sessions with Sara have made me see, feel and understand things I have not been able to fathom before. Working with Sara has been transformational.\u201D',
            st_testimonial_author: '\u2014 Julie P',
            pages: {
                index: { page_title: 'Sara Poss Therapy | Systemic Therapist North London & Online', meta_description: 'Sara Poss, UKCP-registered systemic therapist in North London offering Systemic Therapy and Family Constellations for individuals, couples, and families. In-person & online. Book a free discovery call.' },
                contact: { page_title: 'Contact | Sara Poss Therapy', meta_description: 'Get in touch with Sara Poss for systemic therapy and Family Constellations. Book a complimentary introductory call.' },
                '1to1-sessions': { page_title: '1:1 Family Constellations Sessions | Sara Poss Therapy', meta_description: 'One-to-one Family Constellations sessions with Sara Poss. Explore family dynamics, unconscious loyalties and generational patterns. In person in North London or online via Zoom.' },
                workshops: { page_title: 'Family Constellations Workshops | Sara Poss Therapy', meta_description: 'Open group Family Constellations workshops with Sara Poss. Uncover hidden family dynamics and generational patterns in a safe, supportive space. North London and online.' },
                'bespoke-workshops': { page_title: 'Bespoke Workshops | Sara Poss Therapy', meta_description: 'Bespoke systemic and Family Constellations workshops for groups, teams, and organisations. Tailored to your theme or question. Facilitated by Sara Poss across the UK and Europe.' },
                'media-constellations': { page_title: 'Media Constellations | Sara Poss Therapy', meta_description: 'Media Constellations brings systemic insight to film, TV, and production teams. Aligning creative projects and teams through experiential constellation work.' },
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
            nav_const_workshops: 'Constellations-Workshops ▾',
            nav_const_open: 'Offene Gruppenworkshops',
            nav_const_bespoke: 'Maßgeschneiderte Workshops',
            nav_contact: 'Kontakt',
            nav_cta: 'Erstgespräch buchen',
            hero_tagline: 'Psychotherapie | Online & in Nord-London',
            hero_heading: 'Systemische Therapie & Familienaufstellungen',
            hero_text: 'Ob Sie mit Beziehungsschwierigkeiten kämpfen, sich von familiären Mustern belastet fühlen oder nach einem tieferen Verständnis Ihrer selbst suchen - Ich bin für Sie da.',
            hero_cta: 'Kostenloses Erstgespräch buchen',
            trust_label: 'Registriert & Akkreditiert:',
            trust_ukcp: '<strong>UKCP</strong> (UK Council for Psychotherapy)',
            trust_dgsf: '<strong>DGSF</strong> (Deutsche Gesellschaft für Systemische Therapie)',
            trust_affp: '<strong>AFFP</strong> (Association For Family And Systemic Psychotherapy)',
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
            about_p1: 'Ich bin Sara Poss, UKCP-registrierte systemische Therapeutin und zertifizierte Familienaufstellerin. Ich arbeite mit Einzelpersonen, Paaren und Familien, um ihnen zu helfen, die verborgenen Dynamiken zu verstehen, die ihr Leben und ihre Beziehungen prägen.',
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
            footer_social_label: 'Social',
            fnav_home: 'Startseite',
            fnav_systemic: 'Systemische Therapie',
            fnav_11_sessions: '1:1 Sitzungen',
            fnav_workshops: 'Workshops',
            fnav_contact: 'Kontakt',
            fnav_faqs: 'Häufige Fragen',
            footer_legal: '© 2026 Sara Poss Therapy. Alle Rechte vorbehalten.',
            wa_tooltip: 'Sara auf WhatsApp schreiben',
            nav_toggle: 'Navigationsmenü ein-/ausblenden',
            events_tooltip: 'Kommende Veranstaltungen',
            events_title: 'Workshop zu Familien- und persönlichen Themen',
            events_date: '7. Mai 2026',
            events_time: '18–21 Uhr',
            events_btn: 'Tickets buchen',
            page_contact_title: 'Kontakt',
            page_contact_tagline: 'Beginnen Sie Ihre Reise',
            contact_intro: 'Vereinbaren Sie ein kostenloses Erstgespräch, in dem wir Ihre Anliegen besprechen und offene Fragen klären können.',
            contact_phone_label: 'Telefon',
            contact_location_heading: 'Nord-London Therapie',
            contact_location_address: 'Mc Crone House<br>Leighton Road<br>London NW5',
            contact_location_img_alt: 'Nord-London Therapie - McCrone House',
            page_11_title: '1:1 Familienaufstellungen',
            page_11_tagline: 'Einzelsitzungen in Nord-London oder online via Zoom',
            page_workshops_title: 'Familienaufstellungs-Workshops',
            page_workshops_tagline: 'Offene Gruppenworkshops',
            page_bespoke_title: 'Maßgeschneiderte Workshops',
            page_bespoke_tagline: 'Maßgeschneiderte Workshops für Gruppen & Organisationen',
            page_systemic_title: 'Systemische Therapie für Einzelpersonen, Paare & Familien',
            page_systemic_tagline: 'Evidenzbasierte Psychotherapie in Nord-London oder online via Zoom',
            learn_more: 'Mehr erfahren',
            contact_sara: 'Sara kontaktieren',
            read_google_reviews: 'Google-Bewertungen lesen',
            about_sara_bio: 'Sara hat über 10 Jahre Erfahrung in der Leitung von Familienaufstellungs-Workshops und schafft einen sicheren Raum für Einsicht, Reflexion und bedeutsame Veränderung. Sie trägt die Internationale Anerkennung als Master Constellator von Constellations International (CI), was ihre Expertise in der Anwendung von Aufstellungsarbeit in therapeutischen, beruflichen und Trainingskontexten unterstreicht.',
            about_sara_bespoke: 'Sara hat über 10 Jahre Erfahrung in der Leitung von Familienaufstellungs-Workshops und schafft einen sicheren Raum für Einsicht, Reflexion und bedeutsame Veränderung. Sie trägt die Internationale Anerkennung als Master Constellator von Constellations International (CI), was ihre Expertise in der Anwendung von Aufstellungsarbeit in therapeutischen, beruflichen und Trainingskontexten unterstreicht.',
            get_in_touch: 'Kontakt aufnehmen',
            get_in_touch_text: 'Wenn Ihre Gruppe gemeinsam eine Frage, ein Thema oder ein Anliegen erkunden möchte, oder wenn Sie einen maßgeschneiderten Workshop mit einer zusammengestellten Gruppe buchen möchten, kontaktieren Sie Sara für einen Workshop, der genau auf Sie zugeschnitten ist.',
            what_people_say: 'Was Teilnehmende sagen',
            workshops_testimonial: 'Teilnehmende beschreiben Saras Workshops als erkenntnisreich, transformativ und zutiefst unterstützend.',
            /* 1to1-sessions */
            fc_what_title: 'Was ist Familienaufstellungs-Therapie?',
            fc_what_p1: 'Familienaufstellungs-Therapie (auch Systemische Aufstellungen genannt) ist ein therapeutischer Ansatz, der erforscht, wie Familiengeschichte, unbewusste Loyalitäten und generationenübergreifende Muster unser heutiges Leben beeinflussen können.',
            fc_what_p2: 'Viele der Schwierigkeiten, die wir erleben – wie Feststecken, wiederkehrende Muster oder das Tragen von Emotionen, die sich nicht ganz als unsere eigenen anfühlen – können mit ungelösten Erfahrungen in unserem Familiensystem zusammenhängen. Obwohl diese Muster über Generationen weitergegeben wurden, müssen wir sie nicht zwangsläufig tragen.',
            fc_what_p3: 'Familienaufstellungs-Therapie bringt diese verborgenen Dynamiken ins Bewusstsein und schafft Raum für Loslassen, Neuverbindung und Veränderung. Diese Arbeit unterstützt Bewegung dort, wo sich Dinge vererbt oder festgefahren angefühlt haben, und kann Ihnen helfen, sich wieder voller mit sich selbst zu verbinden.',
            fc_what_p4: 'Mein Ansatz ist in traumainformierter und psychologischer Bewusstheit verankert und würdigt gleichzeitig die systemische und erfahrungsorientierte Natur der Aufstellungsarbeit.',
            fc_what_highlight: '1:1-Sitzungen dauern 90 Minuten.',
            fc_fees_label: 'Honorar:',
            fc_fees_online_label: 'online',
            fc_fees_inperson_label: 'persönlich',
            fc_expect_title: 'Was Sie von einer 1:1-Sitzung erwarten können',
            fc_expect_p1: 'In einer Einzel-Familienaufstellungs-Sitzung arbeiten wir gemeinsam an einem bestimmten Thema oder einer Frage, die Sie mitbringen. Der Prozess ist erfahrungsorientiert statt rein gesprächsbasiert und lässt Einsichten sowohl durch gefühlte Erfahrung als auch durch Reflexion entstehen.',
            fc_expect_p2: 'Keine Vorerfahrung nötig. Sitzungen werden persönlich in meiner Londoner Praxis oder online via Zoom angeboten und finden in einem Tempo statt, das Sicherheit, Regulation und Integration unterstützt.',
            fc_prepare_title: 'Wie Sie sich vorbereiten können',
            fc_prepare_p: 'Es ist keine formale Vorbereitung erforderlich. Diese Arbeit entfaltet sich oft sanft und organisch und trifft Sie dort, wo Sie sind.',
            fc_after_title: 'Nach der Sitzung & Integration',
            fc_after_p1: 'Jede Sitzung ist einzigartig, und Menschen erleben eine breite Palette von Reaktionen: emotional, körperlich, reflektierend oder subtil. Es gibt keinen „richtigen“ Weg, sich danach zu fühlen.',
            fc_after_p2: 'Familienaufstellungs-Therapie unterscheidet sich von wöchentlicher Langzeittherapie. Sitzungen können für sich stehen oder wiederholt werden, wenn es unterstützend wirkt. Wenn Sie eine weitere Sitzung buchen möchten, empfehle ich mindestens 2–3 Wochen Abstand zur Integration.',
            fc_after_p3: 'Viele Menschen finden es auch hilfreich, diese Arbeit neben anderen unterstützenden Ansätzen wie Psychotherapie, somatischer Therapie oder körperorientierten Praktiken zu integrieren.',
            constellations_disclaimer: 'Constellations sind ein Prozess zur Erweiterung von Verständnis und Bewusstsein. Sie sind keine diagnostische oder Behandlungsmethode für psychologische Zustände oder Störungen.',
            fc_reading_title: 'Weiterführende Lektüre',
            fc_reading_welldoing: 'Was ist Familienaufstellungs-Therapie?',
            fc_reading_welldoing_src: '(Welldoing)',
            fc_reading_csc: 'Parenting Constellations mit Sara Poss & Betsy Gibson',
            fc_reading_csc_src: '(The CSC)',
            /* workshops */
            w_understand_title: 'Herausforderungen verstehen und transformieren',
            w_understand_p: 'Familienaufstellungs-Workshops bieten eine einzigartige Möglichkeit, die verborgenen Wurzeln persönlicher und beruflicher Herausforderungen aufzudecken. Viele kommen mit dem Gefühl, festzustecken, eingeschränkt zu sein oder unsicher, warum bestimmte Muster sich wiederholen. Diese Methode hilft Ihnen, über das Oberflächenproblem hinauszugehen und seine tieferen Ursprünge zu erkunden, oft verbunden mit früheren Generationen.',
            w_systems_title: 'Wie Familiensysteme unser Leben prägen',
            w_systems_p1: 'Unsere Eltern, Großeltern und Vorfahren schaffen ein unsichtbares Netz aus Beziehungen und Mustern, das unsere Entscheidungen und Erfahrungen beeinflusst. Ohne es zu merken, tragen wir möglicherweise unbewusste Loyalitäten zu diesen Familiendynamiken, die unsere Freiheit einschränken können.',
            w_systems_p2: 'Familienaufstellungen machen diese verborgenen Muster sichtbar. Indem Sie sie sehen und integrieren, gewinnen Sie Klarheit, Wahlmöglichkeiten und ein größeres Gefühl von Handlungsfähigkeit.',
            w_systems_highlight: 'Die Kräfte zu verstehen, die Ihr Leben prägen, bringt echte Freiheit, voranzukommen.',
            w_participants_title: 'Wie Teilnehmende mitwirken',
            w_participants_intro: 'Workshops bieten einen sicheren, unterstützenden und vertraulichen Raum. Der Prozess beginnt mit einem Gespräch zwischen der Leiterin Sara und der Person, die ein Anliegen einbringt. Von dort aus nehmen Teilnehmende auf eine von zwei Weisen teil:',
            w_role_holder: 'Anliegen-Inhaber:in',
            w_role_holder_p: 'Bringen Sie eine persönliche oder berufliche Herausforderung zur Erkundung ein. Bis zu drei Anliegen-Inhaber:innen werden pro Workshop unterstützt. Themen können Familiendynamiken, Beziehungen, Arbeit, Gesundheit, Kreativität oder Lebensentscheidungen umfassen.',
            w_role_rep: 'Stellvertreter:in (Ressource)',
            w_role_rep_p: 'Stehen Sie für jemanden oder etwas in einer Aufstellung ein. Keine Vorerfahrung nötig. Stellvertreter:innen gewinnen oft überraschende persönliche Einsichten und Heilung.',
            w_participants_outro: 'Beide Teilnahmeformen können zu tiefem Verständnis und emotionaler Befreiung führen.',
            w_upcoming_workshop_intro: 'Nächster Workshop — Platz buchen',
            /* bespoke */
            b_theme_title: 'Ein Thema, eine Frage oder ein Anliegen gemeinsam erkunden',
            b_theme_p1: 'Maßgeschneiderte Systemische und Familienaufstellungs-Workshops unterstützen die Erkundung bedeutsamer persönlicher oder beruflicher Fragen und Herausforderungen.',
            b_theme_p2: 'Diese Workshops können für bestehende Gruppen, Teams oder Gemeinschaften konzipiert werden oder von einer Einzelperson oder Organisation beauftragt werden. Bei beauftragten Workshops können die Teilnehmenden speziell für die Sitzung zusammengebracht werden.',
            b_theme_p3: 'Jeder Workshop wird um das Thema oder die Frage geformt, die die Gruppe mitbringt, und hilft den Teilnehmenden, Muster zu erkennen, Einsichten zu gewinnen und praktische Veränderungen zu bewirken.',
            b_how_title: 'Wie ein maßgeschneiderter Workshop funktioniert',
            b_how_p1: 'Workshops werden von Sara in einem sicheren, unterstützenden und vertraulichen Raum geleitet. Die Gruppe kann bereits existieren oder speziell für die Aufstellung zusammengestellt werden.',
            b_how_p2: 'Während des Workshops:',
            b_how_holders: 'Anliegen-Inhaber:innen',
            b_how_holders_desc: 'bringen eine persönliche oder gemeinsame Frage ein.',
            b_how_reps: 'Stellvertreter:innen',
            b_how_reps_desc: 'nehmen an der Aufstellung teil und erstellen eine lebendige Landkarte des Systems.',
            b_how_p3: 'Während sich die Aufstellung entfaltet, werden oft verborgene Muster und Dynamiken sichtbar. Es geht nicht um schnelle Lösungen, sondern um Bewegung, neue Blickwinkel und frische Möglichkeiten.',
            b_how_highlight: 'Keine Vorerfahrung mit Systemischer oder Familienaufstellungs-Arbeit erforderlich. Workshops werden persönlich im UK und Europa angeboten.',
            /* media-constellations */
            nav_mc: 'Media Constellations',
            mc_title: 'Media Constellations',
            mc_tagline: 'Kreative Projekte und Teams in Einklang bringen',
            mc_intro: 'Media Constellations bringt systemische Einsicht in Film-, TV- und Produktionsteams und schafft Raum zum Innehalten, das Gesamtbild zu sehen und die unsichtbaren Dynamiken zu erkunden, die Projekte und Zusammenarbeit prägen. Durch diesen erfahrungsorientierten Ansatz gewinnen Einzelpersonen und Teams Klarheit, Verbindung und ein erneuertes Gefühl der Richtung in ihrer kreativen Arbeit.',
            mc_discover_title: 'Media Constellations entdecken',
            mc_discover_p: 'Inspiriert von den transformativen Prinzipien der Systemischen Aufstellungen enthüllt Media Constellations verborgene kreative Dynamiken und deckt die Kräfte auf, die Geschichten, Charaktere und ganze Projekte prägen. Ursprünglich entwickelt, um Muster in Familien und Organisationen zu verstehen, bietet diese Methode tiefe Einblicke in narrative Entwicklung, Teamzusammenarbeit und emotionale Ökosysteme, die kreative Arbeit tragen.',
            mc_screenwriters_title: 'Für Drehbuchautor:innen & Story-Entwickler:innen',
            mc_screenwriters_intro: 'Gehen Sie über Plot und Struktur hinaus und betreten Sie das lebendige Feld Ihrer Geschichte. Media Constellations ermöglicht Ihnen:',
            mc_screenwriters_1: 'Ihre Charaktere zu treffen, als wären sie im Raum anwesend',
            mc_screenwriters_2: 'Emotionale und beziehungsbezogene Kräfte zu erkunden, die Ihre Geschichte prägen',
            mc_screenwriters_3: 'Narrative Bögen, Blockaden und unsichtbare Spannungen zu beleuchten',
            mc_screenwriters_4: 'Die wesentliche Wahrheit zu entdecken, die Ihr Skript ausdrücken möchte',
            mc_screenwriters_outro: 'Ob Sie in Fiktion, Dokumentation oder hybriden Formen arbeiten – dieser Ansatz erschließt Tiefe, Klarheit und überraschende neue kreative Wege.',
            mc_teams_title: 'Für kreative Leitung & Projektteams',
            mc_teams_intro: 'Große kreative Projekte beinhalten viele Stimmen, Agenden und emotionale Unterströmungen. Media Constellations hilft Ihnen:',
            mc_teams_1: 'Komplexe Teamdynamiken zu navigieren',
            mc_teams_2: 'Rollen, Verantwortlichkeiten und kreative Intention zu klären',
            mc_teams_3: 'Konflikte und Fehlausrichtungen früh zu lösen',
            mc_teams_4: 'Teams, Mitwirkende und das Projekt als Ganzes in Kohärenz zu bringen',
            mc_teams_outro: 'Indem unsichtbare Dynamiken sichtbar gemacht werden, unterstützt dieser Prozess gesunde Zusammenarbeit und stellt sicher, dass Ihre kreative Vision von der Entwicklung bis zur Fertigstellung intakt bleibt.',
            mc_cta_text: 'Um Media Constellations für Ihr Projekt oder Team zu erkunden, kontaktieren Sie Sara, um zu besprechen, wie dieser Ansatz Ihre kreative Arbeit unterstützen könnte.',
            mc_find_out_more: 'Mehr erfahren',
            /* systemic-therapy */
            st_what_title: 'Was ist Systemische Therapie?',
            st_what_p1: 'Systemische Therapie ist eine etablierte, evidenzbasierte Form der Psychotherapie, die Schwierigkeiten im Kontext von Beziehungen, Lebensumständen und weiteren sozialen Systemen betrachtet. Statt Probleme isoliert zu sehen, erkundet ein systemischer Ansatz, wie Muster sich entwickeln und über die Zeit aufrechterhalten werden und wie Veränderung möglich wird.',
            st_what_p2: 'Systemische Therapie betrachtet wiederkehrende Muster in Beziehungen, Gedanken und Verhaltensweisen, die einschränkend oder unhilfreich wirken können. Der Fokus liegt nicht auf Schuld, sondern auf Verständnis – ob diese Muster in Familien, Partnerschaften, Arbeitsumgebungen oder anderen wichtigen Lebensbereichen auftreten.',
            st_what_p3: 'Meine Arbeit als systemische Therapeutin wird von einem Hintergrund in Familienaufstellungen geprägt und unterstützt ein Bewusstsein für generationenübergreifende Einflüsse, während die Therapie praktisch, kooperativ und eng mit alltäglichen Anliegen verbunden bleibt.',
            st_what_p4: 'Im Kern geht es bei systemischer Psychotherapie um Verbindung und Integration statt um Urteil. Indem Vergangenheit und Gegenwart als Teil eines Ganzen verstanden werden, schafft dieser Ansatz Raum für eine zukunftsgerichtete Richtung, die bedeutsam, ausgewogen und nachhaltig wirkt.',
            st_what_p5: 'Systemische Therapie kann Einzelpersonen, Paaren und Familien helfen. Ob Sie kurzfristige Unterstützung oder längerfristige Therapie suchen – ich arbeite kooperativ und in einem Tempo, das sich für Sie richtig anfühlt, und biete einen sicheren, unterstützenden Raum, um Herausforderungen zu erkunden, Beziehungen zu stärken und bedeutsame Veränderung zu unterstützen.',
            st_what_highlight: 'Sitzungen sind persönlich in meiner Nord-London-Praxis oder online via Zoom verfügbar.',
            st_options_title: 'Therapieoptionen',
            st_card_individual_p: 'Kurz- oder langfristige Sitzungen für Erwachsene, Jugendliche und Kinder zur Unterstützung persönlichen Wachstums und Lebensherausforderungen.',
            st_card_couples_p: 'Online- oder Präsenzsitzungen zur Verbesserung der Kommunikation, Stärkung der Verbindung und Konfliktlösung.',
            st_card_family_p: 'Familiendynamiken und Beziehungen in einer sicheren, begleiteten Umgebung erkunden – online oder persönlich.',
            st_individual_title: 'Einzeltherapie',
            st_individual_p: 'Statt die belasteten Teile von uns als Probleme zu betrachten, die wir loswerden müssen, sehen wir sie als Aspekte, die gesehen werden wollen. Indem wir die zugrunde liegenden, oft unsichtbaren Dynamiken eines Themas erkunden, können neue Verständnisse und frische Einsichten entstehen. Mein Ziel ist es, Ihnen zu helfen, eine neue Perspektive auf Ihre Herausforderungen zu gewinnen und sich freier zu fühlen und Lebensherausforderungen mit größerer Leichtigkeit zu meistern.',
            st_couples_title: 'Paartherapie',
            st_couples_p: 'Ich begleite einen kooperativen Dialog, der darauf abzielt, zugrunde liegende Dynamiken und Muster aufzudecken. Indem ich einen sicheren Raum für offene Kommunikation schaffe, können beide Partner Einblick in ihre jeweiligen Perspektiven und deren Auswirkungen auf die Beziehung gewinnen. In unseren Sitzungen erkunden wir Kommunikationsmuster, Familiengeschichten und mehr, um Ihnen beiden Klarheit zu verschaffen und anpassungsfähigere Beziehungsweisen zu entwickeln. Gemeinsam konzentrieren wir uns darauf, die Kommunikation zu verbessern, Vertrauen aufzubauen und Konflikte konstruktiv zu lösen. Unser Ziel ist es, positive Veränderungen zu schaffen, Ihre Verbindung zu stärken und Ihre Beziehung zu vertiefen.',
            st_family_title: 'Familientherapie',
            st_family_p: 'Indem wir die Familie als Ganzes betrachten statt nur eine Person, anerkennen wir die Vernetzung und den Einfluss jedes Familienmitglieds auf die anderen. Viele Familienprobleme entstehen aus diesen Beziehungen und Interaktionen. In unseren Sitzungen arbeiten wir zusammen, um die Dynamiken innerhalb Ihres Familiensystems zu erkunden. Wir achten auf Kommunikationsmuster, Familienrollen und zugrunde liegende Überzeugungen oder Erwartungen, die das Familienleben beeinflussen können. Wir arbeiten daran, die Kommunikation zu verbessern, Konflikte zu lösen und die Verbindungen zwischen Familienmitgliedern zu stärken. Indem wir Themen im Familiensystem angehen, können wir nachhaltige Veränderung bewirken, die allen Beteiligten zugutekommt.',
            st_details_title: 'Sitzungsdetails',
            st_detail_inperson: '<strong>Persönlich</strong> Nord-London-Praxis',
            st_detail_online: '<strong>Online</strong> Sichere Zoom-Sitzungen',
            st_detail_length: '<strong>Sitzungsdauer</strong> 60 oder 90 Minuten',
            st_fees_title: 'Honorare',
            st_fees_th_therapy: 'Therapie',
            st_fees_th_online: 'Online (60 Min.)',
            st_fees_th_online_90: 'Online (90 Min.)',
            st_fees_th_inperson: 'Persönlich (60 Min.)',
            st_fees_th_inperson_90: 'Persönlich (90 Min.)',
            st_testimonial_quote: '\u201EIch hatte jahrelang Therapie, aber erst wenige Sitzungen mit Sara haben mich Dinge sehen, f\u00FChlen und verstehen lassen, die ich vorher nicht erfassen konnte. Die Arbeit mit Sara war transformativ.\u201C',
            st_testimonial_author: '\u2014 Julie P',
            pages: {
                index: { page_title: 'Sara Poss Therapie | Systemische Therapeutin Nord-London & Online', meta_description: 'Sara Poss, UKCP-registrierte systemische Therapeutin in Nord-London. Systemische Therapie und Familienaufstellungen für Einzelpersonen, Paare und Familien. Vor Ort & online.' },
                contact: { page_title: 'Kontakt | Sara Poss Therapie', meta_description: 'Kontaktieren Sie Sara Poss für systemische Therapie und Familienaufstellungen. Vereinbaren Sie ein kostenloses Erstgespräch.' },
                '1to1-sessions': { page_title: '1:1 Familienaufstellungen | Sara Poss Therapie', meta_description: 'Einzelsitzungen Familienaufstellungen mit Sara Poss. Familiendynamiken, unbewusste Loyalitäten und generationenübergreifende Muster erforschen. In Nord-London oder online.' },
                workshops: { page_title: 'Familienaufstellungs-Workshops | Sara Poss Therapie', meta_description: 'Offene Gruppenworkshops Familienaufstellungen mit Sara Poss. Verborgene Familiendynamiken in einem sicheren Raum aufdecken. Nord-London und online.' },
                'bespoke-workshops': { page_title: 'Maßgeschneiderte Workshops | Sara Poss Therapie', meta_description: 'Maßgeschneiderte systemische und Familienaufstellungs-Workshops für Gruppen und Organisationen. Von Sara Poss im UK und Europa.' },
                'media-constellations': { page_title: 'Media Constellations | Sara Poss Therapie', meta_description: 'Media Constellations bringt systemische Einsicht in Film-, TV- und Produktionsteams. Kreative Projekte und Teams in Einklang bringen.' },
                'systemic-therapy': { page_title: 'Systemische Therapie für Einzelpersonen, Paare & Familien | Sara Poss Therapie', meta_description: 'Systemische Therapie mit Sara Poss. Evidenzbasierte Psychotherapie für Einzelpersonen, Paare und Familien. Nord-London und online.' }
            }
        }
    };

    const waMessages = {
        en: 'https://wa.me/447903539734?text=Hi%20Sara%2C%20I%20found%20your%20website%20and%20I%E2%80%99d%20love%20to%20find%20out%20more.',
        de: 'https://wa.me/447903539734?text=Hallo%20Sara%2C%20ich%20habe%20Ihre%20Website%20gefunden%20und%20w%C3%BCrde%20gerne%20mehr%20erfahren.'
    };

    function getPageKey() {
        const pathParts = window.location.pathname.split('/').filter(Boolean);
        const last = pathParts[pathParts.length - 1];
        if (!last) return 'index';
        return last.replace('.html', '');
    }

    function setLanguage(lang) {
        const t = translations[lang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const val = t[key];
            if (val && typeof val === 'string') el.innerHTML = val;
        });
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const key = el.getAttribute('data-i18n-aria');
            const val = t[key];
            if (val && typeof val === 'string') el.setAttribute('aria-label', val);
        });
        document.querySelectorAll('[data-i18n-alt]').forEach(el => {
            const key = el.getAttribute('data-i18n-alt');
            const val = t[key];
            if (val && typeof val === 'string') el.setAttribute('alt', val);
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
        if (waLink) {
            waLink.href = waMessages[lang];
            const waLabel = t.wa_tooltip;
            if (waLabel) waLink.setAttribute('aria-label', waLabel);
        }
        const eventsBtn = document.querySelector('.events-float');
        if (eventsBtn) {
            const eventsLabel = t.events_tooltip;
            if (eventsLabel) eventsBtn.setAttribute('aria-label', eventsLabel);
        }
        localStorage.setItem('sp-lang', lang);
    }
    window.spApplyTranslations = function () {
        setLanguage(localStorage.getItem('sp-lang') || 'en');
    };

    var langInitialized = false;
    function initLang() {
        if (langInitialized) return;
        const langEn = document.getElementById('lang-en');
        const langDe = document.getElementById('lang-de');
        if (!langEn || !langDe) return;
        langInitialized = true;
        langEn.addEventListener('click', () => setLanguage('en'));
        langDe.addEventListener('click', () => setLanguage('de'));
        const saved = localStorage.getItem('sp-lang');
        if (saved && saved !== 'en') setLanguage(saved);
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLang);
    } else {
        initLang();
    }
})();
