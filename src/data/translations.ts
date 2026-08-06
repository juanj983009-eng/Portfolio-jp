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
      badge: "INGENIERO DE SOFTWARE Y DATOS | SISTEMAS EMPRESARIALES",
      heroRole: "INGENIERO DE SOFTWARE Y DATA ENGINEER",
      heroTitle: {
        main: "INGENIERÍA DE SISTEMAS ",
        highlight: "DISTRIBUIDOS & ESCALABLES",
      },
      description:
        "ESPECIALIZADO EN ARQUITECTURAS E2E, PROCESAMIENTO DISTRIBUIDO EN TIEMPO REAL, PERSISTENCIA POLÍGLOTA Y MICROSERVICIOS RESILIENTES.",
      ctaProjects: "EXPLORAR PROYECTOS DE PRODUCCIÓN",
      ctaContact: "AGENDAR CONSULTORÍA",
      status: "DISPONIBLE PARA ROLES LEAD & CONSULTORÍA DE ARQUITECTURA",
    },
    about: {
      executiveSummaryTitle: "// RESUMEN EJECUTIVO Y ARQUITECTURA CORE",
      heroStatement:
        "SOY UN INGENIERO DE SOFTWARE Y DATA ENGINEER ESPECIALIZADO EN ARQUITECTURAS LIMPIAS, PERSISTENCIA POLÍGLOTA Y EL DESPLIEGUE DE SOLUCIONES ENTERPRISE DE EXTREMO A EXTREMO (E2E).",
      metric1Label: "RESILIENCIA BAJO CARGA TRANSACCIONAL",
      metric2Label: "CONCURRENCIA EN MOTORES TRANSACCIONALES",
      metric3Label: "SQL, NOSQL Y PROCESAMIENTO DISTRIBUIDO",
      moreAboutMeBtn: "MÁS SOBRE MÍ",
      biographyTag: "// BIOGRAFÍA",
      biographyLead:
        "Soy un Ingeniero de Software y Data Engineer enfocado en el diseño, construcción y despliegue de soluciones enterprise de extremo a extremo (E2E).",
      biographyBody:
        "Con base en Lima, Perú (UTC-5), combino ingeniería backend robusta (Java Spring Boot, Python) con interfaces cliente reactivas (React, Vite, Tailwind CSS), procesamiento distribuido de datos (Apache Spark, PySpark) e infraestructura contenerizada (Docker). Aplico la disciplina analítica de la certificación Lean Six Sigma (Green Belt) para auditar sistemas, eliminar cuellos de botella y garantizar alta disponibilidad bajo carga transaccional.",
      yearsExp: "AÑOS DE EXPERIENCIA",
      prodSystems: "PROYECTOS E2E",
      careerTitle: {
        main: "HITOS DE ",
        highlight: "ARQUITECTURA",
      },
      careerDesc:
        "Historial comprobado diseñando arquitecturas E2E, motores transaccionales y procesamiento distribuido.",
      architectureMilestones: [
        {
          badge: "SISTEMAS INDUSTRIALES Y RETAIL E2E",
          role: "LEAD FULL STACK DEVELOPER",
          title: "Meca-PRO MES, Catys Enterprise & SaaS Bodegas",
          description:
            "Arquitectura de soluciones comerciales e industriales. Optimización de acceso a datos, esquemas evolutivos con Flyway, orquestación en Docker Compose y desarrollo de sistemas de diseño de interfaces interactivas.",
          tech: ["Java Spring Boot", "React", "PostgreSQL", "Docker", "Flyway"],
        },
        {
          badge: "ARQUITECTURA TRANSACCIONAL Y LOGÍSTICA",
          role: "ARCHITECT & FULL STACK DEVELOPER",
          title: "Testigo Oculto, LogiCore & SmartFleet V2",
          description:
            "Construcción de motores backend asegurados con JWT y simuladores de tráfico logístico. Validación de resiliencia mediante pruebas de estrés inyectando 500 solicitudes concurrentes sin degradación del servicio.",
          tech: ["Spring Security", "SQL Server", "PostgreSQL", "React"],
        },
        {
          badge: "PLATAFORMAS DE SALUD, GESTIÓN Y DATOS",
          role: "SYSTEMS ARCHITECT & DATA ENGINEER",
          title: "ClinicaV2, Biblioteca Digital & Olimpiadas PERÚ",
          description:
            "Desarrollo de plataformas con gestión de identidad centralizada (Keycloak), almacenamiento en caché (Redis) e infraestructura para la ingesta y procesamiento distribuido de datos en tiempo real.",
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
        main: "¿LISTO PARA TRANSFORMAR ",
        highlight: "TU VISIÓN?",
      },
      description:
        "DISCUTAMOS TUS REQUERIMIENTOS DE SISTEMA, METAS DE ARQUITECTURA O PIPELINES DISTRIBUIDOS ESCALABLES.",
      directInquiries: "CONSULTAS DIRECTAS",
      responseTime: "TIEMPO DE RESPUESTA: < 24HRS (UTC-5)",
      scheduleCallTitle: "AGENDAR LLAMADA",
      scheduleCallDesc:
        "¿Prefieres una conversación directa? Agenda una llamada de consulta técnica de 30 minutos.",
      bookCallBtn: "AGENDAR LLAMADA",
      formTitle: "TRANSMITIR ESPECIFICACIONES",
      nameLabel: "NOMBRE",
      namePlaceholder: "Alex Morgan",
      emailLabel: "CORREO ELECTRÓNICO",
      emailPlaceholder: "alex@empresa.com",
      subjectLabel: "ASUNTO DEL PROYECTO",
      subjectPlaceholder: "Arquitectura de Telemetría Distribuida",
      messageLabel: "MENSAJE & ESPECIFICACIONES",
      messagePlaceholder:
        "Describe tus requerimientos de sistema, línea de tiempo o metas de arquitectura...",
      submitBtn: "TRANSMITIR CONSULTA",
      submittingBtn: "TRANSMITIENDO...",
      successTitle: "CONSULTA TRANSMITIDA",
      successDesc:
        "GRACIAS POR CONTACTAR. TU TRANSMISIÓN HA SIDO ENVIADA A MI ESPACIO DE TRABAJO.",
      transmitAnother: "TRANSMITIR OTRO MENSAJE",
      errorMessage:
        "ERROR DE TRANSMISIÓN. POR FAVOR INTENTA DE NUEVO O ESCRIBE DIRECTAMENTE A JUANJ983009@GMAIL.COM",
    },
    bookModal: {
      tag: "// AGENDAR LLAMADA",
      title: {
        main: "CONSTRUYAMOS ",
        highlight: "ALGO INCREÍBLE",
      },
      subtitle:
        "Disponible para roles Lead, consultoría de arquitectura y contratos Senior Fullstack.",
      sendEmail: "ENVIAR CORREO",
      copyEmail: "COPIAR DIRECCIÓN DE CORREO",
      copiedEmail: "COPIADO AL PORTAPAPELES",
      done: "HECHO",
      responseTime:
        "Tiempo de respuesta: En menos de 24 horas · Lima, PE (UTC-5)",
      bookCallBtn: "AGENDAR LLAMADA",
      readyTitle: {
        main: "¿LISTO PARA TRANSFORMAR ",
        highlight: "TU VISIÓN?",
      },
      readyDesc:
        "Hablemos de cómo dar vida a tu arquitectura distribuida o pipeline de ingeniería de datos.",
    },
    footer: {
      role: "SOFTWARE & DATA ENGINEER · LIMA, PE (UTC-5)",
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
      badge: "SOFTWARE & DATA ENGINEER | ENTERPRISE SYSTEMS",
      heroRole: "SOFTWARE ENGINEER & DATA ENGINEER",
      heroTitle: {
        main: "DISTRIBUTED & SCALABLE ",
        highlight: "SYSTEMS ENGINEERING",
      },
      description:
        "Specializing in high-throughput data architecture, real-time IoT telemetry, polyglot persistence, and resilient microservices.",
      ctaProjects: "EXPLORE PRODUCTION PROJECTS",
      ctaContact: "SCHEDULE CONSULTATION",
      status: "AVAILABLE FOR LEAD ROLES & ARCHITECTURE CONSULTING",
    },
    about: {
      executiveSummaryTitle: "// EXECUTIVE SUMMARY & CORE ARCHITECTURE",
      heroStatement:
        "I AM A SENIOR FULLSTACK ARCHITECT & DATA ENGINEER SPECIALIZING IN HIGH-THROUGHPUT DISTRIBUTED SYSTEMS, REAL-TIME TELEMETRY, AND SCALABLE EVENT-DRIVEN PIPELINES.",
      metric1Label: "UPTIME SLA GUARANTEED",
      metric2Label: "TELEMETRY THROUGHPUT",
      metric3Label: "DISTRIBUTED MULTI-CLOUD ARCHITECTURES",
      moreAboutMeBtn: "MORE ABOUT ME",
      biographyTag: "// BIOGRAPHY",
      biographyLead:
        "I am a Software Engineer and Data Engineer focused on designing, building, and deploying end-to-end enterprise solutions.",
      biographyBody:
        "Based in Lima, Peru (UTC-5), I combine robust backend engineering (Java Spring Boot, Python) with reactive client interfaces (React, Vite, Tailwind CSS), distributed data processing (Apache Spark, PySpark), and containerized infrastructure (Docker). I apply the analytical discipline of Lean Six Sigma Green Belt certification to audit systems, remove bottlenecks, and ensure high availability under transactional load.",
      yearsExp: "YEARS EXPERIENCE",
      prodSystems: "E2E PROJECTS",
      careerTitle: {
        main: "ARCHITECTURE ",
        highlight: "MILESTONES",
      },
      careerDesc:
        "Proven track record designing E2E architectures, transactional engines, and distributed processing.",
      architectureMilestones: [
        {
          badge: "E2E INDUSTRIAL AND RETAIL SYSTEMS",
          role: "LEAD FULL STACK DEVELOPER",
          title: "Meca-PRO MES, Catys Enterprise & SaaS Bodegas",
          description:
            "Architecture for commercial and industrial solutions. Data-access optimization, evolutionary schemas with Flyway, Docker Compose orchestration, and interactive interface design systems.",
          tech: ["Java Spring Boot", "React", "PostgreSQL", "Docker", "Flyway"],
        },
        {
          badge: "TRANSACTIONAL AND LOGISTICS ARCHITECTURE",
          role: "ARCHITECT & FULL STACK DEVELOPER",
          title: "Testigo Oculto, LogiCore & SmartFleet V2",
          description:
            "Built JWT-secured backend engines and logistics traffic simulators. Validated resilience through stress tests injecting 500 concurrent requests without service degradation.",
          tech: ["Spring Security", "SQL Server", "PostgreSQL", "React"],
        },
        {
          badge: "HEALTH, MANAGEMENT, AND DATA PLATFORMS",
          role: "SYSTEMS ARCHITECT & DATA ENGINEER",
          title: "ClinicaV2, Biblioteca Digital & Olimpiadas PERÚ",
          description:
            "Developed platforms with centralized identity management (Keycloak), caching (Redis), and infrastructure for real-time distributed data ingestion and processing.",
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
        main: "READY TO TRANSFORM ",
        highlight: "YOUR VISION?",
      },
      description:
        "LET'S DISCUSS YOUR SYSTEM REQUIREMENTS, ARCHITECTURE GOALS, OR SCALABLE DISTRIBUTED PIPELINES.",
      directInquiries: "DIRECT INQUIRIES",
      responseTime: "RESPONSE TIME: < 24HRS (UTC-5)",
      scheduleCallTitle: "SCHEDULE CALL",
      scheduleCallDesc:
        "Prefer a direct conversation? Book a 30-minute technical roadmap consultation call.",
      bookCallBtn: "BOOK A CALL",
      formTitle: "TRANSMIT SPECIFICATIONS",
      nameLabel: "NAME",
      namePlaceholder: "Alex Morgan",
      emailLabel: "EMAIL ADDRESS",
      emailPlaceholder: "alex@company.com",
      subjectLabel: "PROJECT SUBJECT",
      subjectPlaceholder: "Distributed Telemetry Architecture",
      messageLabel: "MESSAGE & SPECIFICATIONS",
      messagePlaceholder:
        "Describe your system requirements, timeline, or architecture goals...",
      submitBtn: "TRANSMIT INQUIRY",
      submittingBtn: "TRANSMITTING...",
      successTitle: "INQUIRY TRANSMITTED",
      successDesc:
        "THANK YOU FOR REACHING OUT. YOUR TRANSMISSION HAS BEEN ROUTED TO MY WORKSPACE.",
      transmitAnother: "TRANSMIT ANOTHER MESSAGE",
      errorMessage:
        "TRANSMISSION ERROR. PLEASE TRY AGAIN OR WRITE DIRECTLY TO JUANJ983009@GMAIL.COM",
    },
    bookModal: {
      tag: "// BOOK A CALL",
      title: {
        main: "LET'S BUILD ",
        highlight: "SOMETHING GREAT",
      },
      subtitle:
        "Available for Lead Roles, Architecture Consulting & Senior Fullstack contracts.",
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
      readyDesc:
        "Let's discuss how we can bring your distributed architecture or data engineering pipeline to life.",
    },
    footer: {
      role: "SOFTWARE & DATA ENGINEER · LIMA, PE (UTC-5)",
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
