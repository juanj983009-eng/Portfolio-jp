export type Language = "es" | "en";

export interface TitleWithHighlight {
  main: string;
  highlight: string;
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
    heroTitle: TitleWithHighlight;
    description: string;
    ctaProjects: string;
    ctaContact: string;
    status: string;
  };
  about: {
    executiveSummaryTitle: string;
    heroStatement: string;
    metric1Label: string;
    metric2Label: string;
    metric3Label: string;
    moreAboutMeBtn: string;
    biographyTag: string;
    biographyLead: string;
    biographyBody: string;
    yearsExp: string;
    prodSystems: string;
    careerTitle: TitleWithHighlight;
    careerDesc: string;
    role1Title: string;
    role1Company: string;
    role1Desc: string;
    role1Date: string;
    role2Title: string;
    role2Company: string;
    role2Desc: string;
    role2Date: string;
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
  };
  projectDetail: {
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
      badge: "INGENIERO FULLSTACK SENIOR Y ARQUITECTO DE SISTEMAS",
      heroRole: "INGENIERO FULLSTACK SENIOR Y ARQUITECTO DE SISTEMAS",
      heroTitle: {
        main: "INGENIERÍA DE SISTEMAS ",
        highlight: "DISTRIBUIDOS & ESCALABLES",
      },
      description: "Especializado en arquitectura de datos de alto rendimiento, telemetría IoT en tiempo real, persistencia políglota y microservicios resilientes.",
      ctaProjects: "EXPLORAR PROYECTOS DE PRODUCCIÓN",
      ctaContact: "AGENDAR CONSULTORÍA",
      status: "DISPONIBLE PARA ROLES LEAD & CONSULTORÍA DE ARQUITECTURA",
    },
    about: {
      executiveSummaryTitle: "// RESUMEN EJECUTIVO Y ARQUITECTURA CORE",
      heroStatement: "SOY UN ARQUITECTO FULLSTACK SENIOR E INGENIERO DE DATOS ESPECIALIZADO EN SISTEMAS DISTRIBUIDOS DE ALTO RENDIMIENTO, TELEMETRÍA EN TIEMPO REAL Y PIPELINES ESCALABLES ORIENTADOS A EVENTOS.",
      metric1Label: "SLA DE DISPONIBILIDAD GARANTIZADO",
      metric2Label: "PROCESAMIENTO DE TELEMETRÍA",
      metric3Label: "ARQUITECTURAS MULTI-NUBE DISTRIBUIDAS",
      moreAboutMeBtn: "MÁS SOBRE MÍ",
      biographyTag: "// BIOGRAFÍA",
      biographyLead: "Soy un Arquitecto Principal de Software e Ingeniero de Datos Senior con más de 8 años de experiencia diseñando pipelines de telemetría en tiempo real y microservicios orientados a eventos.",
      biographyBody: "Con base en Lima, Perú (UTC-5), me especializo en combinar ingeniería backend robusta (Java Spring Boot, Go, Python) con interfaces cliente reactivas (React 19, Next.js 15) y analítica columnar de alta velocidad (DuckDB, Cassandra, PostgreSQL).",
      yearsExp: "AÑOS DE EXPERIENCIA",
      prodSystems: "SISTEMAS EN PRODUCCIÓN",
      careerTitle: {
        main: "LÍNEA DE TIEMPO DE ",
        highlight: "CARRERA",
      },
      careerDesc: "Historial comprobado diseñando redes distribuidas tolerantes a fallos y sistemas web de alta carga.",
      role1Title: "ARQUITECTO PRINCIPAL DE SOFTWARE / SENIOR FULLSTACK",
      role1Company: "LABORATORIO DE SISTEMAS DISTRIBUIDOS",
      role1Desc: "Arquitectura de pipelines de ingestión de telemetría de alto rendimiento, mallas de streaming Kafka y tableros enterprise en Next.js 15 procesando más de 5,000 req/s con 99.99% de disponibilidad.",
      role1Date: "2021 — PRESENTE",
      role2Title: "INGENIERO DE DATOS / ARQUITECTO BACKEND",
      role2Company: "SOLUCIONES ENTERPRISE",
      role2Desc: "Diseño de sistemas de monitoreo industrial OEE, estructuras de datos columnares en Cassandra y microservicios de autenticación Zero-Trust con Keycloak y OAuth2.",
      role2Date: "2018 — 2021",
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
      subtitle: "9 SISTEMAS DE PRODUCCIÓN · DESLIZA PARA EXPLORAR",
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
    },
    projectDetail: {
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
      description: "EXPLORANDO SISTEMAS DISTRIBUIDOS, PIPELINES DE ALTO RENDIMIENTO Y ARQUITECTURAS ENTERPRISE MONITOREADAS.",
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
        main: "¿LISTO PARA TRANSFORMAR ",
        highlight: "TU VISIÓN?",
      },
      description: "DISCUTAMOS TUS REQUERIMIENTOS DE SISTEMA, METAS DE ARQUITECTURA O PIPELINES DISTRIBUIDOS ESCALABLES.",
      directInquiries: "CONSULTAS DIRECTAS",
      responseTime: "TIEMPO DE RESPUESTA: < 24HRS (UTC-5)",
      scheduleCallTitle: "AGENDAR LLAMADA",
      scheduleCallDesc: "¿Prefieres una conversación directa? Agenda una llamada de consulta técnica de 30 minutos.",
      bookCallBtn: "AGENDAR LLAMADA",
      formTitle: "TRANSMITIR ESPECIFICACIONES",
      nameLabel: "NOMBRE",
      namePlaceholder: "Alex Morgan",
      emailLabel: "CORREO ELECTRÓNICO",
      emailPlaceholder: "alex@empresa.com",
      subjectLabel: "ASUNTO DEL PROYECTO",
      subjectPlaceholder: "Arquitectura de Telemetría Distribuida",
      messageLabel: "MENSAJE & ESPECIFICACIONES",
      messagePlaceholder: "Describe tus requerimientos de sistema, línea de tiempo o metas de arquitectura...",
      submitBtn: "TRANSMITIR CONSULTA",
      submittingBtn: "TRANSMITIENDO...",
      successTitle: "CONSULTA TRANSMITIDA",
      successDesc: "GRACIAS POR CONTACTAR. TU TRANSMISIÓN HA SIDO ENVIADA A MI ESPACIO DE TRABAJO.",
      transmitAnother: "TRANSMITIR OTRO MENSAJE",
      errorMessage: "ERROR DE TRANSMISIÓN. POR FAVOR INTENTA DE NUEVO O ESCRIBE DIRECTAMENTE A JUANJ983009@GMAIL.COM",
    },
    bookModal: {
      tag: "// AGENDAR LLAMADA",
      title: {
        main: "CONSTRUYAMOS ",
        highlight: "ALGO INCREÍBLE",
      },
      subtitle: "Disponible para roles Lead, consultoría de arquitectura y contratos Senior Fullstack.",
      sendEmail: "ENVIAR CORREO",
      copyEmail: "COPIAR DIRECCIÓN DE CORREO",
      copiedEmail: "COPIADO AL PORTAPAPELES",
      done: "HECHO",
      responseTime: "Tiempo de respuesta: En menos de 24 horas · Lima, PE (UTC-5)",
      bookCallBtn: "AGENDAR LLAMADA",
      readyTitle: {
        main: "¿LISTO PARA TRANSFORMAR ",
        highlight: "TU VISIÓN?",
      },
      readyDesc: "Hablemos de cómo dar vida a tu arquitectura distribuida o pipeline de ingeniería de datos.",
    },
    footer: {
      role: "LIMA, PE (UTC-5) • SENIOR LEAD DEVELOPER & ARCHITECT",
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
      badge: "SENIOR FULLSTACK ENGINEER & SYSTEM ARCHITECT",
      heroRole: "SENIOR FULLSTACK ENGINEER & SYSTEM ARCHITECT",
      heroTitle: {
        main: "DISTRIBUTED & SCALABLE ",
        highlight: "SYSTEMS ENGINEERING",
      },
      description: "Specializing in high-throughput data architecture, real-time IoT telemetry, polyglot persistence, and resilient microservices.",
      ctaProjects: "EXPLORE PRODUCTION PROJECTS",
      ctaContact: "SCHEDULE CONSULTATION",
      status: "AVAILABLE FOR LEAD ROLES & ARCHITECTURE CONSULTING",
    },
    about: {
      executiveSummaryTitle: "// EXECUTIVE SUMMARY & CORE ARCHITECTURE",
      heroStatement: "I AM A SENIOR FULLSTACK ARCHITECT & DATA ENGINEER SPECIALIZING IN HIGH-THROUGHPUT DISTRIBUTED SYSTEMS, REAL-TIME TELEMETRY, AND SCALABLE EVENT-DRIVEN PIPELINES.",
      metric1Label: "UPTIME SLA GUARANTEED",
      metric2Label: "TELEMETRY THROUGHPUT",
      metric3Label: "DISTRIBUTED MULTI-CLOUD ARCHITECTURES",
      moreAboutMeBtn: "MORE ABOUT ME",
      biographyTag: "// BIOGRAPHY",
      biographyLead: "I am a Senior Lead Software Architect & Data Engineer with over 8 years of experience designing high-throughput distributed systems, real-time telemetry ingestion pipelines, and fault-tolerant event-driven microservices.",
      biographyBody: "Based in Lima, PE (UTC-5), I specialize in combining robust backend engineering (Java Spring Boot, Go, Python) with modern reactive frontend interfaces (React 19, Next.js 15) and high-speed columnar database analytics (DuckDB, Cassandra, PostgreSQL).",
      yearsExp: "YEARS EXPERIENCE",
      prodSystems: "PRODUCTION SYSTEMS",
      careerTitle: {
        main: "CAREER ",
        highlight: "TIMELINE",
      },
      careerDesc: "Proven history architecting fault-tolerant distributed networks and high-load web systems.",
      role1Title: "LEAD SOFTWARE ARCHITECT / SENIOR FULLSTACK",
      role1Company: "DISTRIBUTED SYSTEMS LAB",
      role1Desc: "Architected high-throughput telemetry ingestion pipelines, Kafka event streaming meshes, and Next.js 15 enterprise dashboards serving over 5,000 requests per second with 99.99% uptime.",
      role1Date: "2021 — PRESENT",
      role2Title: "DATA ENGINEER / BACKEND ARCHITECT",
      role2Company: "ENTERPRISE SOLUTIONS",
      role2Desc: "Designed industrial OEE shift monitoring systems, Cassandra wide-column data structures, and OAuth2 Keycloak Zero-Trust authentication microservices.",
      role2Date: "2018 — 2021",
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
      subtitle: "9 PRODUCTION SYSTEMS · SCROLL DOWN TO EXPLORE",
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
    },
    projectDetail: {
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
      description: "EXPLORING DISTRIBUTED SYSTEMS, HIGH-THROUGHPUT PIPELINES, AND ENTERPRISE MONITORED ARCHITECTURES.",
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
        main: "READY TO TRANSFORM ",
        highlight: "YOUR VISION?",
      },
      description: "LET'S DISCUSS YOUR SYSTEM REQUIREMENTS, ARCHITECTURE GOALS, OR SCALABLE DISTRIBUTED PIPELINES.",
      directInquiries: "DIRECT INQUIRIES",
      responseTime: "RESPONSE TIME: < 24HRS (UTC-5)",
      scheduleCallTitle: "SCHEDULE CALL",
      scheduleCallDesc: "Prefer a direct conversation? Book a 30-minute technical roadmap consultation call.",
      bookCallBtn: "BOOK A CALL",
      formTitle: "TRANSMIT SPECIFICATIONS",
      nameLabel: "NAME",
      namePlaceholder: "Alex Morgan",
      emailLabel: "EMAIL ADDRESS",
      emailPlaceholder: "alex@company.com",
      subjectLabel: "PROJECT SUBJECT",
      subjectPlaceholder: "Distributed Telemetry Architecture",
      messageLabel: "MESSAGE & SPECIFICATIONS",
      messagePlaceholder: "Describe your system requirements, timeline, or architecture goals...",
      submitBtn: "TRANSMIT INQUIRY",
      submittingBtn: "TRANSMITTING...",
      successTitle: "INQUIRY TRANSMITTED",
      successDesc: "THANK YOU FOR REACHING OUT. YOUR TRANSMISSION HAS BEEN ROUTED TO MY WORKSPACE.",
      transmitAnother: "TRANSMIT ANOTHER MESSAGE",
      errorMessage: "TRANSMISSION ERROR. PLEASE TRY AGAIN OR WRITE DIRECTLY TO JUANJ983009@GMAIL.COM",
    },
    bookModal: {
      tag: "// BOOK A CALL",
      title: {
        main: "LET'S BUILD ",
        highlight: "SOMETHING GREAT",
      },
      subtitle: "Available for Lead Roles, Architecture Consulting & Senior Fullstack contracts.",
      sendEmail: "SEND EMAIL",
      copyEmail: "COPY EMAIL ADDRESS",
      copiedEmail: "COPIED TO CLIPBOARD",
      done: "DONE",
      responseTime: "Response time: Within 24 hours · Lima, PE (UTC-5)",
      bookCallBtn: "BOOK A CALL",
      readyTitle: {
        main: "READY TO TRANSFORM ",
        highlight: "YOUR VISION?",
      },
      readyDesc: "Let's discuss how we can bring your distributed architecture or data engineering pipeline to life.",
    },
    footer: {
      role: "LIMA, PE (UTC-5) • SENIOR LEAD DEVELOPER & ARCHITECT",
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
