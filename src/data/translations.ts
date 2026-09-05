export type Language = "es" | "en";

export interface TitleWithHighlight {
  main: string;
  highlight: string;
}

export interface ArchitectureMilestone {
  badge: string;
  role: string;
  title: string;
  description: string;
  tech: string[];
}

export interface Translations {
  nav: {
    home: string;
    about: string;
    projects: string;
    contact: string;
    lab: string;
  };
  hero: {
    badge: string;
    heroRole: string;
    marquee: string;
    profileFocus: string;
    heroTitle: TitleWithHighlight;
    description: string;
    ctaProjects: string;
    ctaResume: string;
    ctaContact: string;
    status: string;
  };
  about: {
    executiveSummaryTitle: string;
    heroStatement: string;
    metric1Label: string;
    metric1Value: string;
    metric2Label: string;
    metric2Value: string;
    metric3Label: string;
    metric3Value: string;
    moreAboutMeBtn: string;
    biographyTag: string;
    biographyLead: string;
    biographyBody: string;
    yearsExp: string;
    educationBadgeValue: string;
    prodSystems: string;
    meritBadgeValue: string;
    careerTitle: TitleWithHighlight;
    careerTag: string;
    careerDesc: string;
    architectureMilestones: ArchitectureMilestone[];
  };
  infrastructureTitle: TitleWithHighlight;
  techStackTitle: TitleWithHighlight;
  projectsTitle: TitleWithHighlight;
  techStack: {
    title: TitleWithHighlight;
    infrastructureTitle: TitleWithHighlight;
    subtitle: string;
    accordionTag: string;
    accordionTitle: TitleWithHighlight;
  };
  projects: {
    badge: string;
    title: TitleWithHighlight;
    subtitle: string;
    selectedLabsTag: string;
    moreProjectsTitle: TitleWithHighlight;
    allCategory: string;
    featuredOnly: string;
    searchPlaceholder: string;
    liveDemo: string;
    viewSource: string;
    demoUnavailable: string;
    privateRepo: string;
    viewProject: string;
    projectCount: string;
    viewDetails: string;
    scrollToExplore: string;
    aiTransparencyTitle: string;
    aiTransparencyNote: string;
  };
  projectDetail: {
    projectDetails: string;
    category: string;
    status: string;
    participation: string;
    technologies: string;
    throughput: string;
    latency: string;
    availability: string;
    contribution: string;
    learnings: string;
    transparencyNote: string;
    conceptualArchitecture: string;
    videoDemo: string;
    gallery: string;
    scrollToDetails: string;
    overview: string;
    objective: string;
    projectMedia: string;
    livePreview: string;
    systemDemo: string;
    techHighlights: string;
    architectureTopology: string;
    datasetSchema: string;
    closeProject: string;
    liveDemo: string;
    viewSource: string;
    demoUnavailable: string;
    privateRepo: string;
  };
  githubLab: {
    tag: string;
    title: TitleWithHighlight;
    description: string;
    viewProfile: string;
    publicRepo: string;
  };
  certifications: {
    tag: string;
    watermark: string;
    dragExplore: string;
    certOfCompetence: string;
    certifyThat: string;
    hasDemonstrated: string;
    issuingAuthority: string;
    reviewBoard: string;
  };
  contact: {
    title: TitleWithHighlight;
    description: string;
    directInquiries: string;
    responseTime: string;
    scheduleCallTitle: string;
    scheduleCallDesc: string;
    bookCallBtn: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successDesc: string;
    transmitAnother: string;
    errorMessage: string;
  };
  bookModal: {
    tag: string;
    title: TitleWithHighlight;
    subtitle: string;
    sendEmail: string;
    copyEmail: string;
    copiedEmail: string;
    done: string;
    responseTime: string;
    bookCallBtn: string;
    readyTitle: TitleWithHighlight;
    readyDesc: string;
  };
  footer: {
    role: string;
    home: string;
    about: string;
    projects: string;
    contact: string;
    github: string;
    linkedin: string;
    email: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    nav: {
      home: "INICIO",
      about: "SOBRE MÍ",
      projects: "PROYECTOS",
      contact: "CONTACTO",
      lab: "LABORATORIO",
    },
    hero: {
      badge: "DESARROLLO DE SOFTWARE Y ANÁLISIS DE DATOS",
      heroRole: "DESARROLLO DE SOFTWARE Y ANÁLISIS DE DATOS",
      marquee:
        "JUAN PARRA — DESARROLLO DE SOFTWARE Y ANÁLISIS DE DATOS — PORTAFOLIO —",
      profileFocus: "PROYECTOS ACADÉMICOS Y PERSONALES",
      heroTitle: {
        main: "DATOS COMO DIRECCIÓN. ",
        highlight: "SOFTWARE COMO BASE.",
      },
      description:
        "Desarrollo aplicaciones y proyectos orientados a datos utilizando Java, Python, React y bases de datos SQL y NoSQL. Actualmente fortalezco mis conocimientos en SQL, Power BI e ingeniería de datos.",
      ctaProjects: "EXPLORAR PROYECTOS",
      ctaResume: "DESCARGAR CV",
      ctaContact: "CONTACTARME",
      status: "ABIERTO A PRÁCTICAS Y OPORTUNIDADES JUNIOR",
    },
    about: {
      executiveSummaryTitle: "// RESUMEN PROFESIONAL",
      heroStatement:
        "DESARROLLO PROYECTOS ACADÉMICOS Y PERSONALES DE SOFTWARE Y DATOS, MIENTRAS FORTALEZCO MIS CONOCIMIENTOS EN ANÁLISIS E INGENIERÍA DE DATOS.",
      metric1Label: "BASE TÉCNICA",
      metric1Value: "Desarrollo de software",
      metric2Label: "DATOS",
      metric2Value: "SQL, Python y Power BI",
      metric3Label: "EXPERIENCIA",
      metric3Value: "Procesos industriales y CNC",
      moreAboutMeBtn: "MÁS SOBRE MÍ",
      biographyTag: "// BIOGRAFÍA",
      biographyLead:
        "Desarrollo proyectos académicos y personales de software y datos con el objetivo de crecer profesionalmente en análisis de datos e ingeniería de datos.",
      biographyBody:
        "Curso el séptimo ciclo de Ingeniería de Sistemas en la UTP y pertenezco al tercio superior. He desarrollado proyectos académicos y personales con Java, Python, React, SQL Server, PostgreSQL y MongoDB. Actualmente fortalezco mis conocimientos en SQL, Power BI y análisis e ingeniería de datos. Mi experiencia operando máquinas convencionales y CNC me aportó disciplina, precisión, análisis de procesos y una mirada cercana al entorno industrial.",
      yearsExp: "INGENIERÍA DE SISTEMAS · VII CICLO",
      educationBadgeValue: "UTP",
      prodSystems: "SUPERIOR",
      meritBadgeValue: "TERCIO",
      careerTitle: {
        main: "APRENDIZAJE ",
        highlight: "APLICADO",
      },
      careerTag: "// APRENDIZAJE Y PROYECTOS",
      careerDesc:
        "Proyectos académicos y personales para practicar desarrollo de software, bases de datos y análisis de procesos.",
      architectureMilestones: [
        {
          badge: "PROYECTOS ACADÉMICOS Y PERSONALES",
          role: "PROYECTOS DE SOFTWARE",
          title: "Meca-PRO MES, Catys Enterprise & SaaS Bodegas",
          description:
            "Proyectos orientados a practicar aplicaciones de gestión, interfaces interactivas, bases de datos y flujos de trabajo para contextos comerciales e industriales.",
          tech: ["Java Spring Boot", "React", "PostgreSQL", "Docker", "Flyway"],
        },
        {
          badge: "PROYECTOS DE SOFTWARE Y DATOS",
          role: "DESARROLLO Y BASES DE DATOS",
          title: "Testigo Oculto, LogiCore & SmartFleet V2",
          description:
            "Proyectos para explorar APIs, autenticación, modelado de datos y visualización de información en contextos de logística y gestión.",
          tech: ["Spring Security", "SQL Server", "PostgreSQL", "React"],
        },
        {
          badge: "EXPLORACIÓN TÉCNICA",
          role: "APRENDIZAJE APLICADO",
          title: "ClinicaV2, Biblioteca Digital & Olimpiadas PERÚ",
          description:
            "Proyectos para conocer herramientas de gestión, persistencia de datos, seguridad e integración de componentes en aplicaciones web.",
          tech: ["Keycloak", "Redis", "Apache Spark", "Tomcat", "Java EE"],
        },
      ],
    },
    infrastructureTitle: {
      main: "DESARROLLO FULL STACK & ",
      highlight: "INFRAESTRUCTURA",
    },
    techStackTitle: {
      main: "STACK TECNOLÓGICO & ",
      highlight: "CAPACIDADES",
    },
    projectsTitle: {
      main: "PROYECTOS & ",
      highlight: "ARQUITECTURAS",
    },
    techStack: {
      title: {
        main: "STACK TECNOLÓGICO & ",
        highlight: "CAPACIDADES",
      },
      infrastructureTitle: {
        main: "DESARROLLO FULL STACK & ",
        highlight: "INFRAESTRUCTURA",
      },
      subtitle: "DESPLIEGA EL MAZO DE CAPACIDADES ARQUITECTÓNICAS 3D",
      accordionTag: "// MATRIZ TECNOLÓGICA CORE",
      accordionTitle: {
        main: "HERRAMIENTAS & ",
        highlight: "MATRIZ TECNOLÓGICA",
      },
    },
    projects: {
      badge: "// PORTAFOLIO TÉCNICO",
      title: {
        main: "PROYECTOS & ",
        highlight: "ARQUITECTURAS",
      },
      subtitle: "9 PROYECTOS ACADÉMICOS Y PERSONALES · DESLIZA PARA EXPLORAR",
      selectedLabsTag: "LABORATORIOS SELECCIONADOS",
      moreProjectsTitle: {
        main: "MÁS PROYECTOS & ",
        highlight: "EXPERIMENTOS",
      },
      allCategory: "TODOS",
      featuredOnly: "DESTACADOS",
      searchPlaceholder: "BUSCAR POR TECNOLOGÍA, NOMBRE O ARQUITECTURA...",
      liveDemo: "DEMO EN VIVO",
      viewSource: "VER CÓDIGO",
      demoUnavailable: "DEMO NO DISPONIBLE",
      privateRepo: "REPOSITORIO PRIVADO",
      viewProject: "DETALLES DEL PROYECTO",
      projectCount: "PROYECTOS DE SOFTWARE Y DATOS",
      viewDetails: "VER DETALLES",
      scrollToExplore: "DESLIZA PARA EXPLORAR",
      aiTransparencyTitle: "METODOLOGÍA DE DESARROLLO",
      aiTransparencyNote:
        "Integré herramientas de IA como apoyo para investigación, análisis y depuración. Revisé, probé y validé cada solución presentada.",
    },
    projectDetail: {
      projectDetails: "DETALLES DEL PROYECTO",
      category: "CATEGORÍA",
      status: "ESTADO",
      participation: "PARTICIPACIÓN",
      technologies: "TECNOLOGÍAS",
      throughput: "RENDIMIENTO",
      latency: "LATENCIA",
      availability: "DISPONIBILIDAD",
      contribution: "MI CONTRIBUCIÓN",
      learnings: "CAPACIDADES DEMOSTRADAS",
      transparencyNote: "NOTA DE TRANSPARENCIA",
      conceptualArchitecture: "ARQUITECTURA CONCEPTUAL",
      videoDemo: "VIDEO DE DEMOSTRACIÓN",
      gallery: "GALERÍA DEL PROYECTO",
      scrollToDetails: "DESLIZA PARA VER DETALLES",
      overview: "RESUMEN GENERAL",
      objective: "OBJETIVO & ALCANCE",
      projectMedia: "MEDIOS & DEMOSTRACIÓN DEL SISTEMA",
      livePreview: "VISTA EN VIVO",
      systemDemo: "DEMO DEL SISTEMA",
      techHighlights: "HIGHLIGHTS TÉCNICOS & ARQUITECTURA",
      architectureTopology: "TOPOLOGÍA DE ARQUITECTURA & NODOS",
      datasetSchema: "ESQUEMA DE DATOS & MUESTRA",
      closeProject: "CERRAR PROYECTO",
      liveDemo: "DEMO EN VIVO",
      viewSource: "VER CÓDIGO",
      demoUnavailable: "DEMO NO DISPONIBLE",
      privateRepo: "REPOSITORIO PRIVADO",
    },
    githubLab: {
      tag: "SÍGUEME EN",
      title: {
        main: "PERFIL DE ",
        highlight: "GITHUB",
      },
      description:
        "EXPLORANDO SISTEMAS DISTRIBUIDOS, PIPELINES DE ALTO RENDIMIENTO Y ARQUITECTURAS ENTERPRISE MONITOREADAS.",
      viewProfile: "VER PERFIL DE GITHUB",
      publicRepo: "REPOSITORIO PÚBLICO",
    },
    certifications: {
      tag: "CERTIFICACIONES",
      watermark: "DIPLOMAS Y CERTIFICACIONES PROFESIONALES DE ARQUITECTURA",
      dragExplore: "ARRASTRA O HAZ CLIC PARA EXPLORAR",
      certOfCompetence: "CERTIFICADO DE COMPETENCIA EN ARQUITECTURA",
      certifyThat: "ESTO CERTIFICA QUE",
      hasDemonstrated: "HA DEMOSTRADO DOMINIO EN",
      issuingAuthority: "AUTORIDAD EMISORA",
      reviewBoard: "COMITÉ DE REVISIÓN",
    },
    contact: {
      title: {
        main: "HABLEMOS DE ",
        highlight: "OPORTUNIDADES",
      },
      description:
        "Estoy abierto a oportunidades de prácticas, posiciones junior en datos y colaboraciones tecnológicas donde pueda aportar y continuar aprendiendo.",
      directInquiries: "CONTACTO DIRECTO",
      responseTime: "LIMA, PE (UTC-5)",
      scheduleCallTitle: "OPORTUNIDADES PROFESIONALES",
      scheduleCallDesc:
        "Puedes escribirme para conversar sobre prácticas, posiciones junior en datos o colaboraciones tecnológicas.",
      bookCallBtn: "CONTACTARME",
      formTitle: "ENVIAR MENSAJE",
      nameLabel: "NOMBRE",
      namePlaceholder: "Alex Morgan",
      emailLabel: "CORREO ELECTRÓNICO",
      emailPlaceholder: "alex@empresa.com",
      subjectLabel: "ASUNTO",
      subjectPlaceholder: "Oportunidad de prácticas o posición junior",
      messageLabel: "MENSAJE",
      messagePlaceholder:
        "Cuéntame sobre la oportunidad, posición o colaboración...",
      submitBtn: "ENVIAR MENSAJE",
      submittingBtn: "ENVIANDO...",
      successTitle: "MENSAJE ENVIADO",
      successDesc:
        "Gracias por contactarme. Tu mensaje fue enviado correctamente.",
      transmitAnother: "ENVIAR OTRO MENSAJE",
      errorMessage:
        "ERROR DE TRANSMISIÓN. POR FAVOR INTENTA DE NUEVO O ESCRIBE DIRECTAMENTE A JUANJ983009@GMAIL.COM",
    },
    bookModal: {
      tag: "// CONTACTO",
      title: {
        main: "HABLEMOS DE ",
        highlight: "OPORTUNIDADES",
      },
      subtitle:
        "Estoy abierto a oportunidades de prácticas, posiciones junior en datos y colaboraciones tecnológicas donde pueda aportar y continuar aprendiendo.",
      sendEmail: "ENVIAR CORREO",
      copyEmail: "COPIAR DIRECCIÓN DE CORREO",
      copiedEmail: "COPIADO AL PORTAPAPELES",
      done: "HECHO",
      responseTime: "Lima, PE (UTC-5)",
      bookCallBtn: "CONTACTARME",
      readyTitle: {
        main: "HABLEMOS DE ",
        highlight: "OPORTUNIDADES",
      },
      readyDesc:
        "Conversemos sobre oportunidades de prácticas, posiciones junior en datos o colaboraciones tecnológicas.",
    },
    footer: {
      role: "DESARROLLO DE SOFTWARE Y ANÁLISIS DE DATOS · LIMA, PE (UTC-5)",
      home: "INICIO",
      about: "SOBRE MÍ",
      projects: "PROYECTOS",
      contact: "CONTACTO",
      github: "GITHUB",
      linkedin: "LINKEDIN",
      email: "CORREO",
    },
  },
  en: {
    nav: {
      home: "HOME",
      about: "ABOUT",
      projects: "PROJECTS",
      contact: "CONTACT",
      lab: "LABORATORY",
    },
    hero: {
      badge: "SOFTWARE DEVELOPMENT & DATA ANALYSIS",
      heroRole: "SOFTWARE DEVELOPMENT & DATA ANALYSIS",
      marquee:
        "JUAN PARRA — SOFTWARE DEVELOPMENT & DATA ANALYSIS — PORTFOLIO —",
      profileFocus: "ACADEMIC AND PERSONAL PROJECTS",
      heroTitle: {
        main: "DATA AS DIRECTION. ",
        highlight: "SOFTWARE AS A FOUNDATION.",
      },
      description:
        "I build data-oriented applications and projects using Java, Python, React, and SQL and NoSQL databases. I am currently strengthening my skills in SQL, Power BI, and data engineering.",
      ctaProjects: "EXPLORE PROJECTS",
      ctaResume: "DOWNLOAD CV",
      ctaContact: "CONTACT ME",
      status: "OPEN TO INTERNSHIPS AND JUNIOR OPPORTUNITIES",
    },
    about: {
      executiveSummaryTitle: "// PROFESSIONAL SUMMARY",
      heroStatement:
        "I BUILD ACADEMIC AND PERSONAL SOFTWARE AND DATA PROJECTS WHILE STRENGTHENING MY SKILLS IN DATA ANALYSIS AND DATA ENGINEERING.",
      metric1Label: "TECHNICAL FOUNDATION",
      metric1Value: "Software development",
      metric2Label: "DATA",
      metric2Value: "SQL, Python, and Power BI",
      metric3Label: "EXPERIENCE",
      metric3Value: "Industrial processes and CNC",
      moreAboutMeBtn: "MORE ABOUT ME",
      biographyTag: "// BIOGRAPHY",
      biographyLead:
        "I build academic and personal software and data projects with the goal of growing professionally in data analysis and data engineering.",
      biographyBody:
        "I am in the seventh term of Systems Engineering at UTP and rank in the top third of my class. I have developed academic and personal projects with Java, Python, React, SQL Server, PostgreSQL, and MongoDB. I am currently strengthening my skills in SQL, Power BI, data analysis, and data engineering. My experience operating conventional and CNC machines has given me discipline, precision, process-analysis skills, and a close perspective on industrial environments.",
      yearsExp: "SYSTEMS ENGINEERING · 7TH TERM",
      educationBadgeValue: "UTP",
      prodSystems: "TOP THIRD",
      meritBadgeValue: "TOP",
      careerTitle: {
        main: "APPLIED ",
        highlight: "LEARNING",
      },
      careerTag: "// LEARNING AND PROJECTS",
      careerDesc:
        "Academic and personal projects to practice software development, databases, and process analysis.",
      architectureMilestones: [
        {
          badge: "ACADEMIC AND PERSONAL PROJECTS",
          role: "FULL-STACK DEVELOPMENT",
          title: "Meca-PRO MES, Catys Enterprise & SaaS Bodegas",
          description:
            "Projects to practice management applications, interactive interfaces, databases, and workflows for commercial and industrial contexts.",
          tech: ["Java Spring Boot", "React", "PostgreSQL", "Docker", "Flyway"],
        },
        {
          badge: "SOFTWARE AND DATA PROJECTS",
          role: "DEVELOPMENT AND DATABASES",
          title: "Testigo Oculto, LogiCore & SmartFleet V2",
          description:
            "Projects to explore APIs, authentication, data modeling, and information visualization in logistics and management contexts.",
          tech: ["Spring Security", "SQL Server", "PostgreSQL", "React"],
        },
        {
          badge: "TECHNICAL EXPLORATION",
          role: "APPLIED LEARNING",
          title: "ClinicaV2, Biblioteca Digital & Olimpiadas PERÚ",
          description:
            "Projects to learn management tools, data persistence, security, and component integration in web applications.",
          tech: ["Keycloak", "Redis", "Apache Spark", "Tomcat", "Java EE"],
        },
      ],
    },
    infrastructureTitle: {
      main: "FULL STACK & ",
      highlight: "INFRASTRUCTURE",
    },
    techStackTitle: {
      main: "PRODUCTION TECH STACK & ",
      highlight: "CAPABILITIES",
    },
    projectsTitle: {
      main: "PROJECTS & ",
      highlight: "ARCHITECTURES",
    },
    techStack: {
      title: {
        main: "PRODUCTION TECH STACK & ",
        highlight: "CAPABILITIES",
      },
      infrastructureTitle: {
        main: "FULL STACK & ",
        highlight: "INFRASTRUCTURE",
      },
      subtitle: "SCROLL DOWN TO UNFOLD THE 3D CAPABILITY MATRIX DECK",
      accordionTag: "// CORE TECH MATRIX",
      accordionTitle: {
        main: "TOOLS & ",
        highlight: "STACK MATRIX",
      },
    },
    projects: {
      badge: "// TECHNICAL PORTFOLIO",
      title: {
        main: "PROJECTS & ",
        highlight: "ARCHITECTURES",
      },
      subtitle: "9 ACADEMIC AND PERSONAL PROJECTS · SCROLL DOWN TO EXPLORE",
      selectedLabsTag: "SELECTED LABS",
      moreProjectsTitle: {
        main: "MORE PROJECTS & ",
        highlight: "EXPERIMENTS",
      },
      allCategory: "ALL",
      featuredOnly: "FEATURED",
      searchPlaceholder: "SEARCH BY TECH, TITLE OR ARCHITECTURE...",
      liveDemo: "LIVE DEMO",
      viewSource: "VIEW SOURCE",
      demoUnavailable: "DEMO UNAVAILABLE",
      privateRepo: "PRIVATE REPO",
      viewProject: "PROJECT DETAILS",
      projectCount: "SOFTWARE AND DATA PROJECTS",
      viewDetails: "VIEW DETAILS",
      scrollToExplore: "SCROLL TO EXPLORE",
      aiTransparencyTitle: "DEVELOPMENT METHODOLOGY",
      aiTransparencyNote:
        "I incorporated AI tools to support research, analysis, and debugging. I reviewed, tested, and validated each solution presented.",
    },
    projectDetail: {
      projectDetails: "PROJECT DETAILS",
      category: "CATEGORY",
      status: "STATUS",
      participation: "PARTICIPATION",
      technologies: "TECHNOLOGIES",
      throughput: "PERFORMANCE",
      latency: "LATENCY",
      availability: "AVAILABILITY",
      contribution: "MY CONTRIBUTION",
      learnings: "DEMONSTRATED CAPABILITIES",
      transparencyNote: "TRANSPARENCY NOTE",
      conceptualArchitecture: "CONCEPTUAL ARCHITECTURE",
      videoDemo: "DEMONSTRATION VIDEO",
      gallery: "PROJECT GALLERY",
      scrollToDetails: "SCROLL TO VIEW DETAILS",
      overview: "OVERVIEW",
      objective: "OBJECTIVE & SCOPE",
      projectMedia: "PROJECT MEDIA & SYSTEM DEMO",
      livePreview: "LIVE PREVIEW",
      systemDemo: "SYSTEM DEMO",
      techHighlights: "TECHNICAL HIGHLIGHTS & ARCHITECTURE",
      architectureTopology: "ARCHITECTURE TOPOLOGY & NODES",
      datasetSchema: "DATASET SCHEMA & SAMPLE",
      closeProject: "CLOSE PROJECT",
      liveDemo: "LIVE DEMO",
      viewSource: "VIEW SOURCE",
      demoUnavailable: "DEMO UNAVAILABLE",
      privateRepo: "PRIVATE REPO",
    },
    githubLab: {
      tag: "FOLLOW ON",
      title: {
        main: "GITHUB ",
        highlight: "PROFILE",
      },
      description:
        "EXPLORING DISTRIBUTED SYSTEMS, HIGH-THROUGHPUT PIPELINES, AND ENTERPRISE MONITORED ARCHITECTURES.",
      viewProfile: "VIEW GITHUB PROFILE",
      publicRepo: "PUBLIC REPO",
    },
    certifications: {
      tag: "CERTIFICACIONES",
      watermark: "PROFESSIONAL ARCHITECTURE DIPLOMAS & ACCREDITATIONS",
      dragExplore: "DRAG OR CLICK TO EXPLORE",
      certOfCompetence: "CERTIFICATE OF ARCHITECTURAL COMPETENCE",
      certifyThat: "THIS IS TO CERTIFY THAT",
      hasDemonstrated: "HAS DEMONSTRATED MASTERY IN",
      issuingAuthority: "ISSUING AUTHORITY",
      reviewBoard: "REVIEW BOARD",
    },
    contact: {
      title: {
        main: "LET'S TALK ABOUT ",
        highlight: "OPPORTUNITIES",
      },
      description:
        "I am open to internship opportunities, junior data roles, and technology collaborations where I can contribute and continue learning.",
      directInquiries: "DIRECT CONTACT",
      responseTime: "LIMA, PE (UTC-5)",
      scheduleCallTitle: "CAREER OPPORTUNITIES",
      scheduleCallDesc:
        "Feel free to write to me about internships, junior data roles, or technology collaborations.",
      bookCallBtn: "CONTACT ME",
      formTitle: "SEND A MESSAGE",
      nameLabel: "NAME",
      namePlaceholder: "Alex Morgan",
      emailLabel: "EMAIL ADDRESS",
      emailPlaceholder: "alex@company.com",
      subjectLabel: "SUBJECT",
      subjectPlaceholder: "Internship opportunity or junior role",
      messageLabel: "MESSAGE",
      messagePlaceholder:
        "Tell me about the opportunity, role, or collaboration...",
      submitBtn: "SEND MESSAGE",
      submittingBtn: "SENDING...",
      successTitle: "MESSAGE SENT",
      successDesc:
        "Thank you for getting in touch. Your message was sent successfully.",
      transmitAnother: "SEND ANOTHER MESSAGE",
      errorMessage:
        "TRANSMISSION ERROR. PLEASE TRY AGAIN OR WRITE DIRECTLY TO JUANJ983009@GMAIL.COM",
    },
    bookModal: {
      tag: "// CONTACT",
      title: {
        main: "LET'S TALK ABOUT ",
        highlight: "OPPORTUNITIES",
      },
      subtitle:
        "I am open to internship opportunities, junior data roles, and technology collaborations where I can contribute and continue learning.",
      sendEmail: "SEND EMAIL",
      copyEmail: "COPY EMAIL ADDRESS",
      copiedEmail: "COPIED TO CLIPBOARD",
      done: "DONE",
      responseTime: "Lima, PE (UTC-5)",
      bookCallBtn: "CONTACT ME",
      readyTitle: {
        main: "LET'S TALK ABOUT ",
        highlight: "OPPORTUNITIES",
      },
      readyDesc:
        "Let’s discuss internship opportunities, junior data roles, or technology collaborations.",
    },
    footer: {
      role: "SOFTWARE DEVELOPMENT & DATA ANALYSIS · LIMA, PE (UTC-5)",
      home: "HOME",
      about: "ABOUT",
      projects: "PROJECTS",
      contact: "CONTACT",
      github: "GITHUB",
      linkedin: "LINKEDIN",
      email: "EMAIL",
    },
  },
};

export default translations;
