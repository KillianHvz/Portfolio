const translations = {
    fr: {
        // Navigation & Header
        nav_skills: "COMPÉTENCES",
        nav_projects: "PROJETS",
        nav_contact: "CONTACT",
        subtitle: "BIENVENUE SUR MON PORTFOLIO",
        role: "DÉVELOPPEUR FULLSTACK",
        btn_cv_fr: "TÉLÉCHARGER CV (FR)",
        btn_cv_en: "TÉLÉCHARGER CV (EN)",
        
        // Titres Sections
        title_skills: "MES COMPÉTENCES",
        title_projects: "SELECT LEVEL (Projets)",
        title_continue: "CONTINUE ?",

        // --- TIMELINE (PARCOURS) ---
        title_timeline: "PARCOURS",
        t1_title: "BUT INFORMATIQUE (2EME ANNEE)",
        t1_desc: "Spécialisation développement. Java avancé, PHP.",
        t2_title: "BUT INFORMATIQUE (1ERE ANNEE)",
        t2_desc: "Apprentissage des bases : Java, HTML/CSS, SQL.",
        t3_title: "OBTENTION DU BACCALAUREAT",
        t3_desc: "Diplôme obtenu avec mention.",

        // --- PROJETS ---
        p1_title: "Marathon",
        p1_desc: "Blog musical sur le style SKA.",
        p2_title: "LenSymphony",
        p2_desc: "Synthétiseur de sons en Java.",
        p3_title: "LenSymphonyWeb",
        p3_desc: "Gestion de partitions musicales.",
        p4_title: "CocktailQuizz",
        p4_desc: "Quizz API sur les cocktails.",
        p5_title: "Pacman",
        p5_desc: "Jeu Pacman complet en Java.",
        p6_title: "Cinéhub",
        p6_desc: "Plateforme communautaire de films.",
        p7_title: "CODE GAME JAM",
        p7_desc: "Création d'un jeu en équipe.",
        wip_txt: "EN DÉVELOPPEMENT",

        // --- CONTACT ---
        contact_intro: "Un projet ? Une mission ? Entrons en contact !",
        lbl_mail: "VOTRE MAIL",
        lbl_obj: "OBJET",
        lbl_msg: "MESSAGE",
        btn_send: "ENVOYER MESSAGE",
        txt_github: "VENEZ VISITER MON GITHUB"
    },
    en: {
        nav_skills: "SKILLS",
        nav_projects: "PROJECTS",
        nav_contact: "CONTACT",
        subtitle: "WELCOME TO MY PORTFOLIO",
        role: "FULLSTACK DEVELOPER",
        btn_cv_fr: "DOWNLOAD CV (FR)",
        btn_cv_en: "DOWNLOAD CV (EN)",
        
        title_skills: "MY SKILLS",
        title_projects: "SELECT LEVEL (Projects)",
        title_continue: "CONTINUE?",

        // --- TIMELINE (CAREER PATH) ---
        title_timeline: "CAREER PATH",
        t1_title: "COMPUTER SCIENCE DEGREE (2ND YEAR)",
        t1_desc: "Development specialization. Advanced Java, PHP.",
        t2_title: "COMPUTER SCIENCE DEGREE (1ST YEAR)",
        t2_desc: "Learning fundamentals: Java, HTML/CSS, SQL.",
        t3_title: "HIGH SCHOOL DIPLOMA",
        t3_desc: "Graduated with honors.",

        // --- PROJECTS ---
        p1_title: "Marathon",
        p1_desc: "Musical blog about SKA style.",
        p2_title: "LenSymphony",
        p2_desc: "Sound synthesizer built in Java.",
        p3_title: "LenSymphonyWeb",
        p3_desc: "Musical score management app.",
        p4_title: "CocktailQuizz",
        p4_desc: "Cocktail API Quiz using Flask.",
        p5_title: "Pacman",
        p5_desc: "Complete Pacman game in Java.",
        p6_title: "Cinehub",
        p6_desc: "Community movie platform.",
        p7_title: "CODE GAME JAM",
        p7_desc: "Creating a game as a team.",
        wip_txt: "IN DEVELOPMENT",

        // --- CONTACT ---
        contact_intro: "A project? Hiring? Let's get in touch!",
        lbl_mail: "YOUR EMAIL",
        lbl_obj: "SUBJECT",
        lbl_msg: "MESSAGE",
        btn_send: "SEND MESSAGE",
        txt_github: "VISIT MY GITHUB"
    },
    es: {
        nav_skills: "HABILIDADES",
        nav_projects: "PROYECTOS",
        nav_contact: "CONTACTO",
        subtitle: "BIENVENIDO A MI PORTAFOLIO",
        role: "DESARROLLADOR FULLSTACK",
        btn_cv_fr: "DESCARGAR CV (FR)",
        btn_cv_en: "DESCARGAR CV (EN)",
        
        title_skills: "MIS HABILIDADES",
        title_projects: "SELECT LEVEL (Proyectos)",
        title_continue: "¿CONTINUAR?",

        // --- TIMELINE (TRAYECTORIA) ---
        title_timeline: "TRAYECTORIA",
        t1_title: "GRADO EN INFORMÁTICA (2º AÑO)",
        t1_desc: "Especialización en desarrollo. Java avanzado, PHP.",
        t2_title: "GRADO EN INFORMÁTICA (1ER AÑO)",
        t2_desc: "Aprendizaje de fundamentos: Java, HTML/CSS, SQL.",
        t3_title: "BACHILLERATO",
        t3_desc: "Graduado con mención.",

        // --- PROYECTOS ---
        p1_title: "Marathon",
        p1_desc: "Blog musical sobre el estilo SKA.",
        p2_title: "LenSymphony",
        p2_desc: "Sintetizador de sonido en Java.",
        p3_title: "LenSymphonyWeb",
        p3_desc: "Gestión de partituras musicales.",
        p4_title: "CocktailQuizz",
        p4_desc: "Cuestionario de cócteles con API.",
        p5_title: "Pacman",
        p5_desc: "Juego completo de Pacman en Java.",
        p6_title: "Cinehub",
        p6_desc: "Plataforma comunitaria de películas.",
        p7_title: "CODE GAME JAM",
        p7_desc: "Creación de un juego en equipo.",
        wip_txt: "EN DESARROLLO",

        // --- CONTACT ---
        contact_intro: "¿Un proyecto? ¿Contratando? ¡Hablemos!",
        lbl_mail: "TU CORREO",
        lbl_obj: "ASUNTO",
        lbl_msg: "MENSAJE",
        btn_send: "ENVIAR MENSAJE",
        txt_github: "VISITA MI GITHUB"
    }
};

/* --- LOGIQUE DU MENU DÉROULANT --- */

function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function changeLanguage(lang) {
    const t = translations[lang];

    // 1. Mettre à jour le texte du bouton (FR, EN, ES)
    document.getElementById('current-lang').innerText = lang.toUpperCase();
    
    // 2. Mettre à jour le DRAPEAU
    let flagElement = document.getElementById('current-flag');
    
    if (lang === 'fr') {
        flagElement.src = "img/fr.png"; 
    } else if (lang === 'en') {
        flagElement.src = "img/en.jpg"; 
    } else if (lang === 'es') {
        flagElement.src = "img/es.jpg"; 
    }
    
    // 3. Mettre à jour tous les textes de la page
    if(document.getElementById('nav-skills')) document.getElementById('nav-skills').innerText = t.nav_skills;
    if(document.getElementById('nav-projects')) document.getElementById('nav-projects').innerText = t.nav_projects;
    if(document.getElementById('nav-contact')) document.getElementById('nav-contact').innerText = t.nav_contact;
    
    if(document.getElementById('hero-subtitle')) document.getElementById('hero-subtitle').innerText = t.subtitle;
    if(document.getElementById('hero-role')) document.getElementById('hero-role').innerText = t.role;
    if(document.getElementById('btn-cv-fr')) document.getElementById('btn-cv-fr').innerText = t.btn_cv_fr;
    if(document.getElementById('btn-cv-en')) document.getElementById('btn-cv-en').innerText = t.btn_cv_en;
    
    if(document.getElementById('title-skills')) document.getElementById('title-skills').innerText = t.title_skills;
    if(document.getElementById('title-projects')) document.getElementById('title-projects').innerText = t.title_projects;

    if(document.getElementById('title-timeline')) document.getElementById('title-timeline').innerText = t.title_timeline;
    
    // Année 2
    if(document.getElementById('t1-title')) document.getElementById('t1-title').innerText = t.t1_title;
    if(document.getElementById('t1-desc')) document.getElementById('t1-desc').innerText = t.t1_desc;
    
    // Année 1
    if(document.getElementById('t2-title')) document.getElementById('t2-title').innerText = t.t2_title;
    if(document.getElementById('t2-desc')) document.getElementById('t2-desc').innerText = t.t2_desc;
    
    // Bac
    if(document.getElementById('t3-title')) document.getElementById('t3-title').innerText = t.t3_title;
    if(document.getElementById('t3-desc')) document.getElementById('t3-desc').innerText = t.t3_desc;
    
    // Projets (1 à 7)
    if(document.getElementById('p1-title')) document.getElementById('p1-title').innerText = t.p1_title;
    if(document.getElementById('p1-desc')) document.getElementById('p1-desc').innerText = t.p1_desc;
    
    if(document.getElementById('p2-title')) document.getElementById('p2-title').innerText = t.p2_title;
    if(document.getElementById('p2-desc')) document.getElementById('p2-desc').innerText = t.p2_desc;

    if(document.getElementById('p3-title')) document.getElementById('p3-title').innerText = t.p3_title;
    if(document.getElementById('p3-desc')) document.getElementById('p3-desc').innerText = t.p3_desc;

    if(document.getElementById('p4-title')) document.getElementById('p4-title').innerText = t.p4_title;
    if(document.getElementById('p4-desc')) document.getElementById('p4-desc').innerText = t.p4_desc;

    if(document.getElementById('p5-title')) document.getElementById('p5-title').innerText = t.p5_title;
    if(document.getElementById('p5-desc')) document.getElementById('p5-desc').innerText = t.p5_desc;

    if(document.getElementById('p6-title')) document.getElementById('p6-title').innerText = t.p6_title;
    if(document.getElementById('p6-desc')) document.getElementById('p6-desc').innerText = t.p6_desc;

    if(document.getElementById('p7-title')) document.getElementById('p7-title').innerText = t.p7_title;
    if(document.getElementById('p7-desc')) document.getElementById('p7-desc').innerText = t.p7_desc;

    // Étiquettes "En cours"
    if(document.getElementById('wip-txt-1')) document.getElementById('wip-txt-1').innerText = t.wip_txt;
    if(document.getElementById('wip-txt-2')) document.getElementById('wip-txt-2').innerText = t.wip_txt;

    // Contact & Footer
    if(document.getElementById('title-continue')) document.getElementById('title-continue').innerText = t.title_continue;
    if(document.getElementById('contact-intro')) document.getElementById('contact-intro').innerText = t.contact_intro;
    if(document.getElementById('lbl-mail')) document.getElementById('lbl-mail').innerText = t.lbl_mail;
    if(document.getElementById('lbl-obj')) document.getElementById('lbl-obj').innerText = t.lbl_obj;
    if(document.getElementById('lbl-msg')) document.getElementById('lbl-msg').innerText = t.lbl_msg;
    if(document.getElementById('btn-send')) document.getElementById('btn-send').innerText = t.btn_send;
    
    if(document.getElementById('txt-github')) document.getElementById('txt-github').innerText = t.txt_github;

    // Fermer le menu
    toggleDropdown(); 
}

// Fermer si on clique ailleurs
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.parentElement.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


let currentIndex = 0;

function moveCarousel(direction) {
    const track = document.getElementById('track');
    const cards = document.querySelectorAll('.project-card');

    if (cards.length === 0) return;

    const trackStyle = window.getComputedStyle(track);
    const gap = parseFloat(trackStyle.gap) || 20;

    const cardWidth = cards[0].offsetWidth + gap;

    const containerWidth = document.querySelector('.carousel-window').offsetWidth;

    const visibleCards = Math.floor((containerWidth + gap) / cardWidth);

    const totalCards = cards.length;

    let maxIndex = totalCards - visibleCards;

    if (maxIndex < 0) maxIndex = 0;

    currentIndex += direction;

    if (currentIndex > maxIndex) {
        currentIndex = 0;
    }

    if (currentIndex < 0) {
        currentIndex = maxIndex;
    }

    const translateX = -(currentIndex * cardWidth);
    track.style.transform = `translateX(${translateX}px)`;
}

window.addEventListener('resize', () => {
    currentIndex = 0;
    document.getElementById('track').style.transform = `translateX(0px)`;
});


/* ---  NAVBAR (CACHE AU SCROLL TELEPHONE) --- */

let lastScrollTop = 0;
const navbar = document.querySelector('.arcade-nav');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop <= 0) {
        navbar.classList.remove('nav-hidden');
        lastScrollTop = scrollTop;
        return;
    }

    if (scrollTop > lastScrollTop) {
        navbar.classList.add('nav-hidden');
    } else {
        navbar.classList.remove('nav-hidden');
    }
    
    lastScrollTop = scrollTop;
});