import { Project } from "@/types/portfolio";

export const PROJECTS: Project[] = [
  {
    id: "smartfleet-v2",
    slug: "smartfleet-v2",
    title: "SMARTFLEET V2",
    category: "IOT / POLYGLOT PERSISTENCE",
    subtitle: {
      es: "Pipeline de Telemetría y GPS de Alto Rendimiento con Arquitectura Políglota",
      en: "High-Throughput GPS & Telemetry Pipeline with Polyglot Storage Architecture",
    },
    tagline: {
      es: "Pipeline de Telemetría y GPS de Alto Rendimiento con Arquitectura Políglota",
      en: "High-Throughput GPS & Telemetry Pipeline with Polyglot Storage Architecture",
    },
    role: {
      es: "Arquitecto Principal de Software & Desarrollador Fullstack",
      en: "Lead Software Architect & Fullstack Developer",
    },
    summary: {
      es: "Sistema distribuido de telemetría IoT capaz de ingerir datos GPS de alta frecuencia y códigos de diagnóstico vehicular en estructuras de series de tiempo columnares con cumplimiento ACID.",
      en: "Distributed IoT telemetry system capable of ingesting high-frequency GPS pings and vehicle diagnostic codes, storing metrics in optimized columnar time-series structures while guaranteeing ACID compliance.",
    },
    description: {
      es: "Diseño y despliegue de una plataforma de telemetría de flotas multidatabase estructurada para resolver desafíos de escalabilidad de escritura e integridad de datos. Integra una capa de persistencia políglota combinando PostgreSQL para datos maestros transaccionales, Apache Cassandra para registro de GPS en series de tiempo de alto rendimiento y MongoDB para auditoría de incidentes no estructurados, orquestados mediante redes de contenedores Docker.",
      en: "Architected and deployed a multi-database fleet telemetry platform designed to solve write-scalability and data integrity challenges. Integrated a polyglot persistence layer combining PostgreSQL for transactional master data, Apache Cassandra for high-throughput time-series GPS logging, and MongoDB for unstructured incident auditing, fully orchestrated via Docker container networks.",
    },
    techStack: ["React", "Spring Boot", "PostgreSQL", "Apache Cassandra", "MongoDB", "Docker", "Tailwind CSS"],
    highlights: [
      {
        es: "Capa de Persistencia Políglota: Cargas de trabajo segmentadas asignando PostgreSQL a datos maestros ACID, Cassandra a telemetría columnar de series de tiempo y MongoDB a registros de auditoría polimórficos.",
        en: "Polyglot Persistence Layer: Segmented query workloads by assigning PostgreSQL to ACID relational master data, Cassandra to wide-column time-series telemetry, and MongoDB to polymorphic audit logs.",
      },
      {
        es: "Optimización de Series de Tiempo: Claves de partición Cassandra modeladas por vehicle_id y claves de agrupamiento por timestamp (descendente) garantizando lecturas O(1) en tiempo real.",
        en: "Time-Series Optimization: Modeled Cassandra partition keys by vehicle_id and clustering keys by timestamp (descending) to ensure constant-time O(1) reads for real-time tracking.",
      },
      {
        es: "Registro Polimórfico de Incidentes: Colección MongoDB sin esquema diseñada para auditar más de 79,000 eventos heterogéneos de alertas vehiculares sin migraciones relacionales.",
        en: "Polymorphic Incident Logging: Designed a schema-less MongoDB collection to audit over 79,000 heterogeneous vehicle alert events without requiring structural relational migrations.",
      },
      {
        es: "Infraestructura Contenedorizada: Servicios backend, bases de datos políglotas y clientes frontend orquestados en redes puente aisladas con descubrimiento automatizado.",
        en: "Containerized Infrastructure: Orchestrated backend services, polyglot databases, and frontend clients over isolated bridge networks with automated service discovery.",
      },
    ],
    architectureNodes: [
      { id: "node-1", label: "Fleet Vehicle IoT Devices", type: "iot", tech: "REST / HTTP", status: "active", description: "Transmits GPS coordinates, speed, and engine diagnostics to the Spring Boot ingestion API." },
      { id: "node-2", label: "Spring Boot Ingestion API", type: "backend", tech: "Spring Boot / Java", status: "active", description: "Receives telemetry payloads, validates data contracts, and routes records to the appropriate persistence layer." },
      { id: "node-3", label: "PostgreSQL Master DB", type: "database", tech: "PostgreSQL", status: "active", description: "Stores ACID-compliant master data: fleets, vehicles, drivers, and operational configurations." },
      { id: "node-4", label: "Apache Cassandra Cluster", type: "database", tech: "Apache Cassandra", status: "active", description: "Wide-column time-series store partitioned by vehicle_id, clustered by timestamp DESC for O(1) real-time reads." },
      { id: "node-5", label: "MongoDB Audit Store", type: "database", tech: "MongoDB", status: "active", description: "Schema-less document store capturing 79,000+ polymorphic vehicle incident and alert audit events." },
      { id: "node-6", label: "React Fleet Dashboard", type: "frontend", tech: "React / Tailwind CSS", status: "active", description: "Interactive fleet monitoring UI consuming the Spring Boot REST API with real-time telemetry visualizations." }
    ],
    metrics: {
      throughput: "79,318+ Records",
      latency: "< 45ms",
      uptime: "99.95%",
      customMetrics: [
        { label: "Incident Events Audited", value: "79,318+" },
        { label: "Persistence Strategy", value: "Polyglot (3 DBs)" },
        { label: "Infrastructure", value: "Docker Compose" }
      ]
    },
    dataset: {
      name: "fleet_telemetry_sample",
      recordsCount: 150000,
      sizeFormatted: "24.5 MB",
      description: "High-density vehicle telemetry events containing spatial coordinates, speed, RPM, and engine fault codes.",
      schema: [
        { field: "device_id", type: "VARCHAR", description: "Unique hardware identifier" },
        { field: "timestamp", type: "TIMESTAMP", description: "UTC timestamp of reading" },
        { field: "latitude", type: "DOUBLE", description: "WGS84 Latitude" },
        { field: "longitude", type: "DOUBLE", description: "WGS84 Longitude" },
        { field: "speed_kmh", type: "FLOAT", description: "Vehicle ground speed" },
        { field: "rpm", type: "INTEGER", description: "Engine revolutions per minute" },
        { field: "fuel_level_pct", type: "FLOAT", description: "Tank fuel percentage" }
      ],
      sampleData: [
        { device_id: "VEH-8942-FL", timestamp: "2026-07-23T14:22:01.002Z", latitude: -12.046374, longitude: -77.042793, speed_kmh: 68.4, rpm: 2150, fuel_level_pct: 78.5 },
        { device_id: "VEH-8942-FL", timestamp: "2026-07-23T14:22:01.503Z", latitude: -12.046412, longitude: -77.042851, speed_kmh: 69.1, rpm: 2180, fuel_level_pct: 78.5 },
        { device_id: "VEH-3109-TX", timestamp: "2026-07-23T14:22:01.110Z", latitude: -12.089201, longitude: -77.012390, speed_kmh: 0.0, rpm: 800, fuel_level_pct: 42.1 }
      ]
    },
    coverImage: "/projects/smartfleet-v2/cover.jpg",
    githubUrl: "https://github.com/juanj983009-eng/SMARTFLEET_V2",
    videoUrl: "https://youtu.be/GWb8TBxducY",
    demoVideoUrl: "https://youtu.be/GWb8TBxducY",
    demoUrl: "https://youtu.be/GWb8TBxducY",
    screenshots: [
      "/projects/smartfleet-v2/gallery/captura-de-pantalla-2026-07-28-232338.png",
      "/projects/smartfleet-v2/gallery/captura-de-pantalla-2026-07-28-232352.png",
      "/projects/smartfleet-v2/gallery/captura-de-pantalla-2026-07-28-232402.png",
      "/projects/smartfleet-v2/gallery/captura-de-pantalla-2026-07-28-232412.png",
      "/projects/smartfleet-v2/gallery/captura-de-pantalla-2026-07-28-232422.png",
      "/projects/smartfleet-v2/gallery/captura-de-pantalla-2026-07-28-232431.png",
      "/projects/smartfleet-v2/gallery/captura-de-pantalla-2026-07-28-232438.png",
      "/projects/smartfleet-v2/gallery/captura-de-pantalla-2026-07-28-232446.png",
      "/projects/smartfleet-v2/gallery/captura-de-pantalla-2026-07-28-232501.png",
      "/projects/smartfleet-v2/gallery/captura-de-pantalla-2026-07-28-232510.png",
    ],
    isFeatured: true
  },
  {
    id: "controller-production",
    slug: "controller-production",
    title: "Meca-PRO MES",
    category: "MANUFACTURING EXECUTION SYSTEM / INDUSTRIAL HMI",
    subtitle: {
      es: "Sistema MES de Alta Disponibilidad con HMI Reactiva y Seguridad JWT Criptográfica",
      en: "High-Availability Manufacturing Execution System with Reactive HMI & Cryptographic JWT Security",
    },
    tagline: {
      es: "Sistema MES de Alta Disponibilidad con HMI Reactiva y Seguridad JWT Criptográfica",
      en: "High-Availability Manufacturing Execution System with Reactive HMI & Cryptographic JWT Security",
    },
    role: {
      es: "Arquitecto Principal de Software & Desarrollador Fullstack",
      en: "Lead Software Architect & Fullstack Developer",
    },
    summary: {
      es: "Sistema de control de producción industrial en tiempo real con monitoreo HMI de alta visibilidad, cálculo de métricas en memoria JVM y autenticación segura para pantallas de fábrica.",
      en: "Enterprise-grade MES application executing shop-floor tracking, JVM-cached metrics, and high-contrast HMI for industrial floor screens.",
    },
    description: {
      es: "Meca-PRO MES es un sistema de ejecución de fabricación de grado empresarial diseñado para digitalizar y monitorear operaciones en planta en entornos industriales de alta exigencia. Construido con una arquitectura Spring Boot por capas y un SPA de React de alto contraste, el sistema ofrece seguimiento en tiempo real de hojas de proceso (HPs), cronómetros de mano de obra de operadores, registros de tiempo de inactividad de maquinaria y asignación de recursos en terminales táctiles industriales.",
      en: "Meca-PRO MES is an enterprise-grade Manufacturing Execution System designed to digitize and monitor shop-floor operations in heavy manufacturing environments. Built with a layered Spring Boot architecture and a high-contrast React SPA, the system delivers real-time tracking of process sheets (HPs), operator labor timers, machinery downtime logs, and resource allocation (EPPs and tools) across industrial touch terminals.",
    },
    techStack: ["Java 17", "Spring Boot 3.3.5", "PostgreSQL 16", "Flyway DB", "React 19", "Zustand 5.0", "Docker", "Docker Compose", "Nginx", "Tailwind CSS", "JWT (HS256)", "Maven"],
    highlights: [
      {
        es: "Optimización de Lógica de Negocio en Memoria: Transiciones de hojas de proceso y agregaciones de tiempo refactorizadas a cálculos en memoria JVM sin bloqueos, reduciendo latencias a menos de 15ms.",
        en: "In-Memory Business Logic Optimization: Refactored critical process-sheet state transitions and labor time aggregations from legacy synchronous JPA cycles into non-blocking JVM computations under 15ms.",
      },
      {
        es: "Arquitectura SOLID Desacoplada: Capa de servicio abstraída utilizando proyecciones DTO paginadas (Page<DTO>), eliminando sobrecargas de serialización profunda sobre endpoints REST.",
        en: "Decoupled SOLID Architecture & Paginated Data Contracts: Re-architected controller dependencies into an abstracted Service-Oriented Layer using clean DTO projections (Page<DTO>).",
      },
      {
        es: "Autenticación Criptográfica JWT Segura: Claves externas mediante variables de entorno (JWT_SECRET) con firmas HS256 de alta entropía y sesiones de 30 minutos para evitar desvíos en planta.",
        en: "Hardened JWT Cryptographic Authentication: Replaced hardcoded JWT secrets with externalized runtime environment variables (JWT_SECRET) enforcing high-entropy HS256 signatures.",
      },
      {
        es: "Ergonomía Industrial Multi-Tema: Estado centralizado Zustand con tokens CSS ([data-theme]) para cambio dinámico entre modo Industrial, Claro reflectivo y Oscuro estándar.",
        en: "Adaptive Industrial Multi-Theme Ergonomics: Integrated a centralized Zustand state store paired with custom CSS color tokens ([data-theme]) for dynamic runtime mode switching.",
      },
    ],
    architectureNodes: [
      { id: "cp-1", label: "Factory Touch Terminals", type: "iot", tech: "React 19 / Tailwind CSS", status: "active", description: "Industrial-grade tablets running the React SPA HMI with multi-theme support for shop-floor ambient conditions." },
      { id: "cp-2", label: "React 19 SPA (HMI)", type: "frontend", tech: "React 19 / Zustand 5.0", status: "active", description: "High-contrast reactive dashboard tracking process sheets, labor timers, and downtime logs with sub-second UI updates." },
      { id: "cp-3", label: "Nginx Reverse Proxy", type: "gateway", tech: "Nginx", status: "active", description: "Terminates HTTPS, routes API requests to the Spring Boot backend, and serves the React SPA static bundle." },
      { id: "cp-4", label: "Spring Boot 3.3.5 API", type: "backend", tech: "Java 17 / Spring Boot 3.3.5", status: "active", description: "Layered REST API performing JVM-cached business logic for process-sheet transitions and labor aggregations at sub-15ms latency." },
      { id: "cp-5", label: "JWT Auth Layer", type: "backend", tech: "JWT (HS256)", status: "active", description: "Cryptographic session management with 30-minute validity and externalized JWT_SECRET environment variable to prevent terminal session hijacking." },
      { id: "cp-6", label: "PostgreSQL 16 + Flyway", type: "database", tech: "PostgreSQL 16 / Flyway DB", status: "active", description: "Relational schema managed via Flyway versioned migrations, enforcing ACID compliance for operational and HR production records." }
    ],
    metrics: {
      throughput: "156.77 kB JS / Sub-15ms",
      latency: "< 15ms",
      uptime: "100% JWT / Zero Bottlenecks",
      customMetrics: [
        { label: "API Endpoint Latency", value: "< 15ms" },
        { label: "JWT Session Window", value: "30 minutes" },
        { label: "JS Bundle Size", value: "156.77 kB" }
      ]
    },
    dataset: {
      name: "factory_oee_metrics",
      recordsCount: 85000,
      sizeFormatted: "18.2 MB",
      description: "Hourly aggregated factory machine metrics including shift IDs, cycle counts, micro-stoppages, and OEE percentages.",
      schema: [
        { field: "line_id", type: "VARCHAR", description: "Assembly line identifier" },
        { field: "shift_code", type: "VARCHAR", description: "Operational shift code (e.g. S1, S2)" },
        { field: "availability_pct", type: "FLOAT", description: "Equipment uptime percentage" },
        { field: "performance_pct", type: "FLOAT", description: "Actual speed vs target speed percentage" },
        { field: "quality_pct", type: "FLOAT", description: "Good units vs total units percentage" },
        { field: "oee_score", type: "FLOAT", description: "Overall Equipment Effectiveness" }
      ],
      sampleData: [
        { line_id: "LINE-01-STAMPING", shift_code: "2026-07-23-S1", availability_pct: 94.2, performance_pct: 88.5, quality_pct: 99.1, oee_score: 82.6 },
        { line_id: "LINE-02-ASSEMBLY", shift_code: "2026-07-23-S1", availability_pct: 91.0, performance_pct: 95.2, quality_pct: 98.7, oee_score: 85.5 }
      ]
    },
    coverImage: "/projects/controller-production/cover.jpg",
    githubUrl: "https://github.com/juanj983009-eng/Mecapro-mes-V1",
    videoUrl: "https://youtu.be/V4FemFCJsPg",
    demoVideoUrl: "https://youtu.be/V4FemFCJsPg",
    demoUrl: "https://youtu.be/V4FemFCJsPg",
    screenshots: [
      "/projects/controller-production/gallery/captura-de-pantalla-2026-07-29-082302.png",
      "/projects/controller-production/gallery/captura-de-pantalla-2026-07-29-082803.png",
      "/projects/controller-production/gallery/captura-de-pantalla-2026-07-29-082813.png",
      "/projects/controller-production/gallery/captura-de-pantalla-2026-07-29-082820.png",
      "/projects/controller-production/gallery/captura-de-pantalla-2026-07-29-082830.png",
      "/projects/controller-production/gallery/captura-de-pantalla-2026-07-29-082840.png",
      "/projects/controller-production/gallery/captura-de-pantalla-2026-07-29-082848.png",
      "/projects/controller-production/gallery/captura-de-pantalla-2026-07-29-082931.png",
      "/projects/controller-production/gallery/captura-de-pantalla-2026-07-29-082939.png",
      "/projects/controller-production/gallery/captura-de-pantalla-2026-07-29-082947.png",
      "/projects/controller-production/gallery/captura-de-pantalla-2026-07-29-083007.png",
      "/projects/controller-production/gallery/captura-de-pantalla-2026-07-29-083018.png",
      "/projects/controller-production/gallery/captura-de-pantalla-2026-07-29-083024.png",
      "/projects/controller-production/gallery/captura-de-pantalla-2026-07-29-083036.png",
      "/projects/controller-production/gallery/captura-de-pantalla-2026-07-29-083042.png",
    ],
    isFeatured: true
  },
  {
    id: "logicore-port-control",
    slug: "logicore-port-control",
    title: "LogiCore Port Control",
    category: "DISTRIBUTED SYSTEMS / DATA STRUCTURES",
    subtitle: {
      es: "Motor de Logística Portuaria de Contenedores con Monitoreo 3D en Tiempo Real",
      en: "Real-Time Container Terminal Logistics Engine with 3D Spatial Monitoring",
    },
    tagline: {
      es: "Motor de Logística Portuaria de Contenedores con Monitoreo 3D en Tiempo Real",
      en: "Real-Time Container Terminal Logistics Engine with 3D Spatial Monitoring",
    },
    role: {
      es: "Arquitecto de Sistemas Distribuidos & Desarrollador Java Bajo Nivel",
      en: "Distributed Systems Architect & Low-Level Java Developer",
    },
    summary: {
      es: "Ecosistema de microservicios híbrido para terminales marítimas con estructuras de datos en memoria personalizadas (AVL, Punteros Dobles) e interfaz 3D WebGL.",
      en: "Hybrid microservices ecosystem for maritime terminals with custom JVM memory structures (AVL, Dual Pointers) and 3D WebGL visualization.",
    },
    description: {
      es: "LogiCore Port Control es un ecosistema de microservicios distribuidos de grado empresarial diseñado para automatizar y optimizar las operaciones de terminales marítimas de alta densidad. Basado en un modelo de persistencia híbrido que combina bases de datos relacionales dockerizadas (PostgreSQL y SQL Server) con estructuras RAM personalizadas sin sobrecarga en la JVM Heap, la plataforma maneja asignación de contenedores en tiempo real, colas de transporte terrestre y registros de auditoría con reactividad subsegundo y control determinista.",
      en: "LogiCore Port Control is an enterprise-grade, distributed microservices ecosystem designed to automate and optimize high-density maritime terminal operations. Built on a hybrid persistence model combining Dockerized relational databases (PostgreSQL & SQL Server) with zero-overhead, hand-crafted RAM structures in the JVM Heap, the platform handles real-time container allocation, overland transport queueing, and audit logging with sub-second reactivity and absolute deterministic control over system memory.",
    },
    techStack: ["Java 17", "Spring Boot 3.x", "PostgreSQL 15", "MS SQL Server 2022", "Docker", "Docker Compose", "JavaScript (ES6+)", "Three.js", "JVM Concurrency", "Maven", "WSL2"],
    highlights: [
      {
        es: "Arquitectura de Punteros en Heap a Bajo Nivel: Estructuras genéricas en memoria (ListaDobleManual, ColaManual, PilaManual) que puentean punteros dobles para liberaciones O(1) instantáneas en el recolector JVM.",
        en: "Custom Low-Level Heap Pointer Architecture: Bypassed standard JDK collection framework overhead by engineering custom generic memory structures (ListaDobleManual, ColaManual, PilaManual).",
      },
      {
        es: "Indexador AVL Autobalanceado: Árbol ArbolAVL personalizado con balanceador dinámico (BF en [-1, 0, 1]) y rotaciones O(1), reduciendo latencias de búsqueda a O(log N) sobre 1,000,000+ registros.",
        en: "Self-Balancing AVL Indexer for Log Telemetry: Implemented a custom-balanced ArbolAVL with dynamic Balance Factor evaluation guaranteeing O(log N) search latency over linear audit streams.",
      },
      {
        es: "Modelo Concurrente y Persistencia Híbrida: Eliminación física en BD relacional previa a la modificación de punteros RAM, con bloqueos ReentrantReadWriteLock para prevenir estados Split-Brain.",
        en: "Hybrid Persistence & Thread-Safe Concurrency Model: Prevented Split-Brain states between volatile RAM structures and Docker DBMS layers via database-first physical deletions.",
      },
      {
        es: "Capa Anti-Corrupción (ACL) y Visualización WebGL 3D: Interfaz en Three.js con mapas de calor 3D en tiempo real y resolución de datos multi-nivel (RAM Estado Local -> Árbol AVL Backend).",
        en: "Client-Side Anti-Corruption Layer (ACL) & WebGL Visualization: Built a resilient frontend interface powered by Three.js for real-time 3D yard heatmaps and multi-tier data resolution.",
      },
    ],
    architectureNodes: [
      { id: "lc-1", label: "Overland Truck Fleet (IoT)", type: "iot", tech: "REST / HTTP", status: "active", description: "Transport units dispatched via Spring Boot Dispatch API with real-time container allocation from JVM Heap queues." },
      { id: "lc-2", label: "Spring Boot Dispatch API", type: "backend", tech: "Java 17 / Spring Boot 3.x", status: "active", description: "Core event engine performing container slot allocation, guard assignments, and extramural queue management with ReentrantReadWriteLock concurrency." },
      { id: "lc-3", label: "JVM Heap Memory Layer", type: "backend", tech: "JVM Concurrency", status: "active", description: "Custom-built generic structures (ListaDobleManual, ColaManual, PilaManual, ArbolAVL) replacing JDK collections for O(1)/O(log N) deterministic memory control." },
      { id: "lc-4", label: "PostgreSQL 15", type: "database", tech: "PostgreSQL 15", status: "active", description: "Primary relational store for container records, guard schedules, and port slot master data with database-first deletion protocol." },
      { id: "lc-5", label: "MS SQL Server 2022", type: "database", tech: "MS SQL Server 2022", status: "active", description: "Secondary DBMS for extramural transport audit logs and cross-service historical telemetry with hybrid sync under 100ms." },
      { id: "lc-6", label: "Three.js Yard Visualizer", type: "frontend", tech: "Three.js / JavaScript (ES6+)", status: "active", description: "Real-time 3D WebGL heatmaps of terminal yard occupancy with Anti-Corruption Layer for multi-tier fallback data resolution." }
    ],
    metrics: {
      throughput: "O(log N) AVL / Dispatch < 3 min",
      latency: "< 100ms",
      uptime: "0% Runtime Exceptions",
      customMetrics: [
        { label: "Dispatch Latency", value: "< 3 minutes" },
        { label: "AVL Search Complexity", value: "O(log N)" },
        { label: "DB Sync Latency", value: "< 100ms" }
      ]
    },
    coverImage: "/projects/logicore-port-control/cover.jpg",
    githubUrl: "https://github.com/juanj983009-eng/LogiCore-Port-Control",
    videoUrl: "https://youtu.be/2pPX6ErTX7A",
    demoVideoUrl: "https://youtu.be/2pPX6ErTX7A",
    demoUrl: "https://youtu.be/2pPX6ErTX7A",
    screenshots: [
      "/projects/logicore-port-control/gallery/captura-de-pantalla-2026-07-29-085803.png",
      "/projects/logicore-port-control/gallery/captura-de-pantalla-2026-07-29-085813.png",
      "/projects/logicore-port-control/gallery/captura-de-pantalla-2026-07-29-085818.png",
      "/projects/logicore-port-control/gallery/captura-de-pantalla-2026-07-29-085825.png",
      "/projects/logicore-port-control/gallery/captura-de-pantalla-2026-07-29-085837.png",
      "/projects/logicore-port-control/gallery/captura-de-pantalla-2026-07-29-085846.png",
      "/projects/logicore-port-control/gallery/captura-de-pantalla-2026-07-29-085856.png",
      "/projects/logicore-port-control/gallery/captura-de-pantalla-2026-07-29-085902.png",
      "/projects/logicore-port-control/gallery/captura-de-pantalla-2026-07-29-085909.png",
      "/projects/logicore-port-control/gallery/captura-de-pantalla-2026-07-29-085916.png",
    ],
    isFeatured: true
  },
  {
    id: "podcast-streaming-app",
    slug: "podcast-streaming-app",
    title: "Testigo Oculto",
    category: "FULL-STACK & SYSTEMS ARCHITECTURE",
    subtitle: {
      es: "Plataforma de Procesamiento y Análisis Forense de Audio con Espectrogramas en Tiempo Real",
      en: "Forensic Audio Analytics Platform with Real-Time Waveform & Spectrogram Processing",
    },
    tagline: {
      es: "Plataforma de Procesamiento y Análisis Forense de Audio con Espectrogramas en Tiempo Real",
      en: "Forensic Audio Analytics Platform with Real-Time Waveform & Spectrogram Processing",
    },
    role: {
      es: "Arquitecto Full-Stack & Desarrollador Principal",
      en: "Full-Stack Architect & Lead Developer",
    },
    summary: {
      es: "Sistema forense de transmisión de audio de alta seguridad con control de acceso basado en roles (JWT), WaveSurfer.js y auditoría asíncrona.",
      en: "Forensic-grade audio streaming platform engineered for secure evidence management, role-based JWT filters, and real-time audio analysis.",
    },
    description: {
      es: "Testigo Oculto es una plataforma de audio forense de nivel de inteligencia diseñada para transmitir grabaciones de casos de alto bitrate, gestionar evidencia restringida y mantener registros de auditoría transaccionales en tiempo real. Construida con una arquitectura de microservicios desacoplada, la plataforma impone estrictas matrices de control de acceso y transmisión concurrente sin comprometer la integridad.",
      en: "Testigo Oculto is an intelligence-grade forensic audio platform engineered to stream high-bitrate criminal case recordings, manage restricted evidence, and maintain real-time transactional audit trails. Built with a decoupled microservice architecture, the platform enforces strict access control matrices, handling concurrent audio streaming and zero-cost administrative tracking without compromising systemic state integrity.",
    },
    techStack: ["Java 17", "Spring Boot 3", "Spring Security", "JWT", "Spring Data JPA", "PostgreSQL", "React 18", "Vite", "Tailwind CSS", "Axios", "WaveSurfer.js", "Docker", "Docker Compose", "Maven"],
    highlights: [
      {
        es: "Gestión Asíncrona de Reproducción Multimedia: Intercepción de excepciones AbortError en WaveSurfer.js sobre peticiones HTTP 206 Partial Content, evitando bloqueos de hilo del navegador durante la reproducción.",
        en: "Resilient Asynchronous Media Lifecycle Management: Intercepted and managed AbortError exceptions within WaveSurfer.js over HTTP 206 Partial Content requests, preventing browser thread lockups.",
      },
      {
        es: "Inyección de Auditoría Sin Impacto Transaccional: Registro asíncrono en Spring Data JPA para telemetría administrativa con entradas BigDecimal.ZERO sin alterar saldos ni generar bloqueos relacionales.",
        en: "Zero-Impact Administrative Audit Ledger Injection: Designed an asynchronous persistence bypass recording BigDecimal.ZERO admin audit entries without mutating user balance constraints.",
      },
      {
        es: "Arquitectura de Seguridad Basada en Roles: Autenticación JWT con Spring Security e interceptores globales Axios en React, evaluando permisos de rutas y manejando la invalidación de sesiones de forma segura.",
        en: "Role-Gated Security Architecture & Interceptors: Implemented JWT authentication powered by Spring Security, backed by global Axios interceptors dynamically evaluating route claims.",
      },
      {
        es: "Orquestación Multi-Contenedor en Docker: Entorno reproducible en Docker Compose que integra el núcleo Spring Boot con instancias PostgreSQL, volumen de datos persistente y comprobaciones de salud.",
        en: "Fully Containerized Multi-Stage Orchestration: Configured a reproducible multi-container environment via Docker Compose orchestrating the Spring Boot application core with PostgreSQL.",
      },
    ],
    architectureNodes: [
      { id: "pod-1", label: "React 18 SPA (HMI)", type: "frontend", tech: "React 18 / Vite / WaveSurfer.js", status: "active", description: "Evidence player with WaveSurfer.js waveform rendering, Axios interceptors, and ROLE_ADMIN vs ROLE_USER route guards." },
      { id: "pod-2", label: "Nginx Reverse Proxy", type: "gateway", tech: "Nginx", status: "active", description: "Terminates HTTPS and proxies API calls to the Spring Boot core, serving the React SPA static bundle." },
      { id: "pod-3", label: "Spring Boot 3 API", type: "backend", tech: "Java 17 / Spring Boot 3", status: "active", description: "Core REST API handling media streaming, JWT validation, role-gated access and audit ledger injection." },
      { id: "pod-4", label: "Spring Security + JWT", type: "backend", tech: "Spring Security / JWT", status: "active", description: "Cryptographic session layer evaluating ROLE_ADMIN / ROLE_USER claims and enforcing endpoint-level authorization filters." },
      { id: "pod-5", label: "Spring Data JPA (Audit)", type: "backend", tech: "Spring Data JPA", status: "active", description: "Asynchronous persistence bypass recording BigDecimal.ZERO admin audit entries without mutating user balance state." },
      { id: "pod-6", label: "PostgreSQL (Dockerized)", type: "database", tech: "PostgreSQL", status: "active", description: "Containerized relational store for case records, audit trails, user roles, and evidence metadata with volume persistence." }
    ],
    metrics: {
      throughput: "~1,200 req/sec (Streaming & Audit)",
      latency: "< 45ms",
      uptime: "99.9% (Dockerized)",
      customMetrics: [
        { label: "Concurrent Streams", value: "~1,200 req/s" },
        { label: "Auth Token TTL", value: "30 minutes" },
        { label: "Audit Injection Cost", value: "Zero-Impact" }
      ]
    },
    coverImage: "/projects/podcast-streaming-app/cover.jpg",
    githubUrl: "https://github.com/juanj983009-eng/testigo-oculto-v2",
    videoUrl: "https://youtu.be/trWjGSGqxXw",
    demoVideoUrl: "https://youtu.be/trWjGSGqxXw",
    demoUrl: "https://youtu.be/trWjGSGqxXw",
    screenshots: [
      "/projects/podcast-streaming-app/gallery/captura-de-pantalla-2026-07-29-092352.png",
      "/projects/podcast-streaming-app/gallery/captura-de-pantalla-2026-07-29-092640.png",
      "/projects/podcast-streaming-app/gallery/captura-de-pantalla-2026-07-29-095756.png",
      "/projects/podcast-streaming-app/gallery/captura-de-pantalla-2026-07-29-095802.png",
      "/projects/podcast-streaming-app/gallery/captura-de-pantalla-2026-07-29-095808.png",
      "/projects/podcast-streaming-app/gallery/captura-de-pantalla-2026-07-29-095814.png",
      "/projects/podcast-streaming-app/gallery/captura-de-pantalla-2026-07-29-095826.png",
      "/projects/podcast-streaming-app/gallery/captura-de-pantalla-2026-07-29-095831.png",
      "/projects/podcast-streaming-app/gallery/captura-de-pantalla-2026-07-29-095838.png",
      "/projects/podcast-streaming-app/gallery/captura-de-pantalla-2026-07-29-095847.png",
      "/projects/podcast-streaming-app/gallery/captura-de-pantalla-2026-07-29-095854.png",
      "/projects/podcast-streaming-app/gallery/captura-de-pantalla-2026-07-29-095902.png",
      "/projects/podcast-streaming-app/gallery/captura-de-pantalla-2026-07-29-095910.png",
      "/projects/podcast-streaming-app/gallery/captura-de-pantalla-2026-07-29-095920.png"
    ],
    isFeatured: false
  },
  {
    id: "saas-bodegas-pos",
    slug: "saas-bodegas-pos",
    title: "SaaS Bodegas",
    category: "FULL-STACK & DISTRIBUTED SYSTEMS",
    subtitle: {
      es: "Sistema POS Offline-First para Bodegas con Sincronización CRDTs e IndexedDB",
      en: "Offline-First Retail POS with CRDT State Synchronization & IndexedDB",
    },
    tagline: {
      es: "Sistema POS Offline-First para Bodegas con Sincronización CRDTs e IndexedDB",
      en: "Offline-First Retail POS with CRDT State Synchronization & IndexedDB",
    },
    role: {
      es: "Arquitecto de Software Full-Stack",
      en: "Full-Stack Software Architect",
    },
    summary: {
      es: "Plataforma de punto de venta retail con arquitectura Offline-First, cola FIFO en segundo plano, almacenamiento IndexedDB y reconciliación multitenant en NestJS.",
      en: "Offline-First retail point of sale platform decoupling checkout from connectivity via local IndexedDB storage and background FIFO sync worker.",
    },
    description: {
      es: "Un sistema de punto de venta (POS) e inventario Offline-First de grado empresarial diseñado para comercios y bodegas. Cuenta con una arquitectura multitenant autónoma que garantiza cero interrupciones durante caídas de red, utilizando almacenamiento reactivo local e inyección de transacciones FIFO hacia un microservicio NestJS central.",
      en: "A robust, enterprise-grade Offline-First Point of Sale (POS) and inventory control system engineered for retail and grocery stores. The application features an autonomous multi-tenant architecture designed to guarantee zero downtime during network outages, using local reactive storage with background FIFO synchronization to a centralized NestJS microservice.",
    },
    techStack: ["TypeScript", "React", "Next.js", "Vite", "Tailwind CSS", "Lucide React", "Dexie.js", "IndexedDB", "NestJS", "Node.js", "Prisma ORM", "PostgreSQL", "Docker", "REST API"],
    highlights: [
      {
        es: "Cola de Transacciones Offline-First & Bucle Reentrante: Almacenamiento local mediante IndexedDB y Dexie.js con estado PENDING instantáneo (<5ms), transmitido a NestJS mediante SyncService al reconectar.",
        en: "Offline-First Transaction Spooling & Reentrant Sync Loop: Implemented an asynchronous transactional pipeline using IndexedDB and Dexie.js committed locally with a PENDING status.",
      },
      {
        es: "Ingestión Polimórfica de Sesiones & Aislamiento Multitenant: Mecanismo de autenticación segura en NestJS con Prisma ORM, inyectando contexto de inquilino (UUID v4) directo en PostgreSQL.",
        en: "Polymorphic Session Ingestion & Multi-Tenant Isolation: Engineered a secure fallback authentication mechanism in NestJS using Prisma ORM injecting UUID v4 tenant context into PostgreSQL.",
      },
      {
        es: "Intercepción de Billeteras Digitales & Candados Manuales: Máquina de estados de pago que retiene operaciones hasta la validación del operador y bloquea llamadas concurrentes en modo Offline manual.",
        en: "Digital Wallet Interception & Manual Offline Safety Locks: Designed a conditional checkout state machine that holds dynamic wallet transactions until manual operator validation.",
      },
      {
        es: "Impresión Térmica Agnóstica & Aislamiento UI: Reglas CSS @media print integradas para impresión instantánea de comprobantes de 80mm desde la memoria del navegador sin peticiones al servidor.",
        en: "Hardware-Agnostic Thermal Printing & UI Isolation: Integrated native CSS @media print rules for 80mm thermal receipt generation using client-side memory without backend overhead.",
      },
    ],
    architectureNodes: [
      { id: "bod-1", label: "React POS Terminal (SPA)", type: "frontend", tech: "React / Next.js / Vite", status: "active", description: "Offline-capable storefront with barcode scanning, real-time stock deducts, thermal receipt print triggers and wallet checkout state machine." },
      { id: "bod-2", label: "IndexedDB + Dexie.js Layer", type: "backend", tech: "Dexie.js / IndexedDB", status: "active", description: "Local reactive database committing PENDING sales instantly at sub-5ms, decoupling checkout from network availability." },
      { id: "bod-3", label: "FIFO SyncService Worker", type: "queue", tech: "TypeScript / REST API", status: "active", description: "Non-blocking background queue that streams normalized payloads with X-Tenant-Id headers to NestJS on network reconnection." },
      { id: "bod-4", label: "NestJS Multi-Tenant API", type: "backend", tech: "NestJS / Prisma ORM", status: "active", description: "Resolves polymorphic session ingestion and injects UUID v4 tenant context into PostgreSQL isolation layers for strict cross-tenant boundaries." },
      { id: "bod-5", label: "PostgreSQL (Dockerized)", type: "database", tech: "PostgreSQL / Docker", status: "active", description: "Containerized relational store with schema-per-tenant isolation, inventory state, audit logs, and automated health checks." }
    ],
    metrics: {
      throughput: "~50 req/sec (FIFO Batch Sync)",
      latency: "< 5ms (IndexedDB Local Write)",
      uptime: "99.99% (Offline-First Zero Downtime)",
      customMetrics: [
        { label: "Local Write Latency", value: "< 5ms" },
        { label: "Sync Payload Headers", value: "X-Tenant-Id" },
        { label: "Offline Guarantee", value: "Zero Downtime" }
      ]
    },
    coverImage: "/projects/saas-bodegas-pos/cover.jpg",
    videoUrl: "https://youtu.be/oDbNjL_c7dI",
    demoVideoUrl: "https://youtu.be/oDbNjL_c7dI",
    demoUrl: "https://youtu.be/oDbNjL_c7dI",
    screenshots: [
      "/projects/saas-bodegas-pos/gallery/captura-de-pantalla-2026-07-29-104359.png",
      "/projects/saas-bodegas-pos/gallery/captura-de-pantalla-2026-07-29-104406.png",
      "/projects/saas-bodegas-pos/gallery/captura-de-pantalla-2026-07-29-104421.png",
      "/projects/saas-bodegas-pos/gallery/captura-de-pantalla-2026-07-29-104430.png",
      "/projects/saas-bodegas-pos/gallery/captura-de-pantalla-2026-07-29-104438.png",
      "/projects/saas-bodegas-pos/gallery/captura-de-pantalla-2026-07-29-104443.png",
      "/projects/saas-bodegas-pos/gallery/captura-de-pantalla-2026-07-29-104454.png",
      "/projects/saas-bodegas-pos/gallery/captura-de-pantalla-2026-07-29-104507.png",
      "/projects/saas-bodegas-pos/gallery/captura-de-pantalla-2026-07-29-104512.png",
      "/projects/saas-bodegas-pos/gallery/captura-de-pantalla-2026-07-29-104534.png",
      "/projects/saas-bodegas-pos/gallery/captura-de-pantalla-2026-07-29-104546.png",
    ],
    isFeatured: true
  },
  {
    id: "tienda-catys",
    slug: "tienda-catys",
    title: "Tienda Catys",
    category: "FULL-STACK ENTERPRISE SYSTEM / RESTAURANT ERP & POS",
    subtitle: {
      es: "ERP y Punto de Venta Gastronómico con Facturación Electrónica y Control de Comandas",
      en: "Restaurant ERP & Kitchen POS with Multi-Station Order Control & Electronic Invoicing",
    },
    tagline: {
      es: "ERP y Punto de Venta Gastronómico con Facturación Electrónica y Control de Comandas",
      en: "Restaurant ERP & Kitchen POS with Multi-Station Order Control & Electronic Invoicing",
    },
    role: {
      es: "Arquitecto Enterprise Full-Stack",
      en: "Full-Stack Enterprise Architect",
    },
    summary: {
      es: "ERP y punto de venta gastronómico con pantalla KDS Kanban para cocina, control Kardex de inventario y optimización de consultas JPA.",
      en: "Restaurant ERP & POS solution unifying table management, kitchen Kanban execution, customer loyalty tiering, and Kardex inventory.",
    },
    description: {
      es: "Tienda Catys es una solución de ERP y Punto de Venta (POS) de nivel empresarial diseñada para agilizar operaciones gastronómicas, comandas en cocina y reportes financieros. Basada en Spring Boot 3 y una aplicación React 19, unifica la gestión de mesas, el ciclo de pedidos mediante un tablero Kanban en cocina, la fidelización de clientes y el control de inventario mediante métricas Kardex.",
      en: "Tienda Catys is an enterprise-grade ERP and Point of Sale (POS) solution designed to streamline restaurant operations, kitchen execution, and financial reporting. Built on a robust Spring Boot 3 architecture and a modern React 19 single-page application, the system unifies table management, order lifecycle tracking via a real-time kitchen Kanban, automated customer loyalty tiering, and multi-tier Kardex inventory tracking.",
    },
    techStack: ["Java 17", "Spring Boot 3.2.5", "Spring Data JPA", "MS SQL Server 2022", "Hibernate ORM", "React 19.2", "Vite 8.0", "Tailwind CSS v4.0", "Lucide React", "Docker", "Docker Compose", "Maven", "RESTful APIs"],
    highlights: [
      {
        es: "Orquestación Transaccional Atómica de POS: Pipeline de caja unificado que sincroniza entidades JPA transaccionales sin discrepancias entre registros de venta, fidelización e inventario.",
        en: "Atomic Transactional POS Orchestration: Refactored the checkout pipeline by unifying relational JPA entities to guarantee zero data drift between sales, loyalty, and stock decrements.",
      },
      {
        es: "Arquitectura N-Capas Desacoplada: Diseño estricto N-Tier en Spring Boot 3 utilizando DTOs inmutables, patrón Strategy para descuentos promocionales y aislamiento de dominio.",
        en: "Decoupled N-Tier System Architecture: Designed a strict N-tier backend architecture using Spring Boot 3 record DTOs and Strategy Pattern for promotional discounts.",
      },
      {
        es: "Optimización de Consultas & Reducción de N+1: Consultas SQL optimizadas en Hibernate ORM que redujeron en un 65% la carga de la base de datos durante picos de ocupación.",
        en: "Optimized Data Pipeline & Reduced N+1 Bottlenecks: Streamlined SQL queries and ORM mappings across order endpoints, reducing database access overhead by 65% during peak occupancy.",
      },
      {
        es: "Infraestructura Dockerizada: Entorno con Docker Compose integrando MS SQL Server 2022, API Java REST multi-etapa y frontend React optimizado con Vite.",
        en: "Containerized Docker Infrastructure: Engineered a multi-container Docker Compose deployment isolating MS SQL Server 2022, Java REST API, and Vite-optimized React frontend.",
      },
    ],
    architectureNodes: [
      { id: "cat-1", label: "React 19.2 SPA (POS/KDS)", type: "frontend", tech: "React 19.2 / Vite 8.0 / Tailwind CSS v4", status: "active", description: "Customer-facing POS terminal and Kitchen Display System (KDS) Kanban board with real-time order lifecycle tracking and loyalty tier UI." },
      { id: "cat-2", label: "Nginx Reverse Proxy", type: "gateway", tech: "Nginx", status: "active", description: "Terminates HTTPS, routes API calls to the Spring Boot backend, and serves the Vite-compiled React SPA static bundle." },
      { id: "cat-3", label: "Spring Boot 3.2.5 REST API", type: "backend", tech: "Java 17 / Spring Boot 3.2.5", status: "active", description: "N-tier REST API managing POS checkout orchestration, kitchen order dispatching, loyalty increments, and Kardex inventory tracking with Strategy Pattern discount evaluation." },
      { id: "cat-4", label: "Hibernate ORM + Spring Data JPA", type: "backend", tech: "Hibernate ORM / Spring Data JPA", status: "active", description: "ORM layer with optimized join-fetch queries and transactional boundary controls eliminating N+1 bottlenecks across order and inventory endpoints." },
      { id: "cat-5", label: "MS SQL Server 2022 (Dockerized)", type: "database", tech: "MS SQL Server 2022", status: "active", description: "Primary enterprise relational store for sales ledgers, table state, customer loyalty records, Kardex inventory history, and kitchen fulfillment logs." }
    ],
    metrics: {
      throughput: "~1,200 req/sec Peak Capacity",
      latency: "< 45ms Sub-second API Response",
      uptime: "99.95% Availability (Dockerized)",
      customMetrics: [
        { label: "DB Overhead Reduction", value: "- 65%" },
        { label: "API Response Latency", value: "< 45ms" },
        { label: "Deployment Parity", value: "100% Docker" }
      ]
    },
    coverImage: "/projects/tienda-catys/cover.jpg",
    videoUrl: "https://youtu.be/jEqSSWqL214",
    demoVideoUrl: "https://youtu.be/jEqSSWqL214",
    demoUrl: "https://youtu.be/jEqSSWqL214",
    githubUrl: "https://github.com/juanj983009-eng/Tienda-Catys-Java",
    screenshots: [
      "/projects/tienda-catys/gallery/captura-de-pantalla-2026-08-07-151919.png",
      "/projects/tienda-catys/gallery/captura-de-pantalla-2026-08-07-151957.png",
      "/projects/tienda-catys/gallery/captura-de-pantalla-2026-08-07-152003.png",
      "/projects/tienda-catys/gallery/captura-de-pantalla-2026-08-07-152010.png",
      "/projects/tienda-catys/gallery/captura-de-pantalla-2026-08-07-152019.png",
      "/projects/tienda-catys/gallery/captura-de-pantalla-2026-08-07-152026.png",
      "/projects/tienda-catys/gallery/captura-de-pantalla-2026-08-07-152050.png",
      "/projects/tienda-catys/gallery/captura-de-pantalla-2026-08-07-152101.png",
      "/projects/tienda-catys/gallery/captura-de-pantalla-2026-08-07-152109.png",
      "/projects/tienda-catys/gallery/captura-de-pantalla-2026-08-07-152116.png",
      "/projects/tienda-catys/gallery/captura-de-pantalla-2026-08-07-152122.png",
      "/projects/tienda-catys/gallery/captura-de-pantalla-2026-08-07-152128.png",
      "/projects/tienda-catys/gallery/captura-de-pantalla-2026-08-07-152135.png",
      "/projects/tienda-catys/gallery/captura-de-pantalla-2026-08-07-152141.png",
      "/projects/tienda-catys/gallery/captura-de-pantalla-2026-08-07-152150.png"
    ],
    isFeatured: false
  },
  {
    id: "biblioteca-digital",
    slug: "biblioteca-digital",
    title: "Biblioteca Digital",
    category: "ENTERPRISE SYSTEM / DISTRIBUTED SYSTEMS",
    subtitle: {
      es: "Plataforma de Literatura Técnica con Motor de Contingencia Asíncrono e Interfaz 3D",
      en: "Resilient & High-Throughput Technical Literature Platform with Asynchronous Reconciled Checkout & Interactive 3D Interface",
    },
    tagline: {
      es: "Plataforma de Literatura Técnica con Motor de Contingencia Asíncrono e Interfaz 3D",
      en: "Resilient & High-Throughput Technical Literature Platform with Asynchronous Reconciled Checkout & Interactive 3D Interface",
    },
    role: {
      es: "Arquitecto Principal Full-Stack & Sistemas Distribuidos",
      en: "Lead Full-Stack & Distributed Systems Architect",
    },
    summary: {
      es: "Plataforma e-commerce con Arquitectura Hexagonal en Spring Boot 3.3, cache Redis 7, tolerancia a fallos Resilience4j y renderizado 3D en Next.js 16.",
      en: "Enterprise e-commerce ecosystem built with Hexagonal Architecture, Redis 7 session caching, Resilience4j Circuit Breakers, and WebGL 3D catalog rendering.",
    },
    description: {
      es: "Un ecosistema de comercio electrónico de alta concurrencia de nivel empresarial diseñado para la distribución de literatura técnica. La arquitectura integra un backend limpio con Arquitectura Hexagonal aprovechando Spring Boot 3.3, PostgreSQL y Redis, acoplado con un frontend interactivo en Next.js con renderizado WebGL/Three.js 3D en tiempo real. La plataforma prioriza la integridad transaccional, la tolerancia a fallos y la alta disponibilidad en entornos multicontenedor distribuidos.",
      en: "An enterprise-grade, high-concurrency e-commerce ecosystem designed for tech literature distribution. The architecture integrates a Hexagonal Clean Backend leveraging Spring Boot 3.3, PostgreSQL, and Redis, coupled with an interactive Next.js frontend featuring real-time WebGL/Three.js 3D viewport rendering. The platform prioritizes transactional integrity, fault tolerance, and high availability across distributed multi-container environments.",
    },
    techStack: [
      "Java 17",
      "Spring Boot 3.3",
      "Next.js 16 (App Router)",
      "React 19",
      "TypeScript",
      "PostgreSQL 16",
      "Redis 7",
      "Spring Data JPA / Hibernate",
      "Resilience4j",
      "TailwindCSS",
      "Three.js",
      "React Three Fiber",
      "Docker",
      "Docker Compose",
      "JUnit 5 / Testcontainers"
    ],
    highlights: [
      {
        es: "Arquitectura Hexagonal & Separación Limpia de Dominio: Patrón Puertos y Adaptadores en Java aislando entidades puras de infraestructura, con DTOs validados para prevenir masa de atributos.",
        en: "Hexagonal Architecture & Clean Domain Separation: Implemented strict Ports & Adapters design patterns within the Java backend, isolating pure domain entities from framework infrastructure.",
      },
      {
        es: "Motor de Contingencia & Resiliencia en Checkout: Sistema de recuperación asíncrona con Resilience4j y logs en PostgreSQL ante aislamientos de Redis, reconciliando transacciones en background.",
        en: "Resilient Distributed Checkout & Contingency Engine: Engineered an asynchronous transactional fallback system using Resilience4j Circuit Breakers combined with PostgreSQL audit logging.",
      },
      {
        es: "Persistencia de Doble Capa & Caching Multi-Nivel: Desacoplamiento de sesiones efímeras en Redis de la persistencia relacional en PostgreSQL 16 con bloqueo optimista (@Version).",
        en: "Dual-Layer Persistence & Multi-Level Caching: Optimized read/write operations by decoupling ephemeral session state (Redis) from relational persistent storage (PostgreSQL 16).",
      },
      {
        es: "Renderizado WebGL 3D Interactivo de Alto Rendimiento: Catálogo 3D inmersivo con @react-three/fiber y texturas procedimentales, gestionando memoria VRAM para evitar pérdida de contexto.",
        en: "High-Performance Interactive WebGL 3D Rendering: Built an immersive front-end catalog using @react-three/fiber and custom procedural Canvas textures for dynamic 3D book covers.",
      },
    ],
    architectureNodes: [
      { id: "bib-1", label: "Next.js 16 SPA (3D Catalog)", type: "frontend", tech: "Next.js 16 / React 19 / Three.js", status: "active", description: "Interactive e-commerce frontend with WebGL/Three.js 3D book covers, cart management, and checkout UI backed by Axios + TypeScript service layer." },
      { id: "bib-2", label: "Redis 7 Session Cache", type: "cache", tech: "Redis 7", status: "active", description: "Ephemeral in-memory store for user shopping carts and session state, decoupling read-heavy cart operations from ACID relational transactions." },
      { id: "bib-3", label: "Spring Boot 3.3 API (Hexagonal)", type: "backend", tech: "Java 17 / Spring Boot 3.3", status: "active", description: "Ports & Adapters hexagonal backend enforcing domain isolation, Strategy Pattern discount evaluation, and Resilience4j Circuit Breaker-guarded checkout orchestration." },
      { id: "bib-4", label: "Resilience4j Contingency Engine", type: "backend", tech: "Resilience4j", status: "active", description: "Circuit Breaker layer capturing orphaned checkout transactions into a PostgreSQL contingency queue, reconciled asynchronously by a background scheduler on Redis recovery." },
      { id: "bib-5", label: "PostgreSQL 16 (ACID Catalog)", type: "database", tech: "PostgreSQL 16 / Hibernate", status: "active", description: "Primary relational store with optimistic locking (@Version) for concurrent stock decrements, ACID checkout audit logs, and inventory catalog persistence." }
    ],
    metrics: {
      throughput: "~1,200 RPS (Peak Checkout Stress Test)",
      latency: "< 45ms Cache / < 180ms ACID Checkout",
      uptime: "99.95% Operational Uptime (Resilience4j)",
      customMetrics: [
        { label: "Cache Read Latency", value: "< 45ms" },
        { label: "ACID Checkout Latency", value: "< 180ms" },
        { label: "Circuit Breaker SLA", value: "99.95%" }
      ]
    },
    coverImage: "/projects/biblioteca-digital/cover.jpg",
    videoUrl: "https://youtu.be/-wGJQhYD_iI",
    demoVideoUrl: "https://youtu.be/-wGJQhYD_iI",
    demoUrl: "https://youtu.be/-wGJQhYD_iI",
    githubUrl: "https://github.com/juanj983009-eng/Libreria-Digital",
    screenshots: [
      "/projects/biblioteca-digital/gallery/captura-de-pantalla-2026-07-29-160125.png",
      "/projects/biblioteca-digital/gallery/captura-de-pantalla-2026-07-29-160131.png",
      "/projects/biblioteca-digital/gallery/captura-de-pantalla-2026-07-29-160142.png",
      "/projects/biblioteca-digital/gallery/captura-de-pantalla-2026-07-29-160150.png",
      "/projects/biblioteca-digital/gallery/captura-de-pantalla-2026-07-29-160159.png",
      "/projects/biblioteca-digital/gallery/captura-de-pantalla-2026-07-29-160212.png",
      "/projects/biblioteca-digital/gallery/captura-de-pantalla-2026-07-29-160225.png",
      "/projects/biblioteca-digital/gallery/captura-de-pantalla-2026-07-29-160236.png",
      "/projects/biblioteca-digital/gallery/captura-de-pantalla-2026-07-29-160241.png",
      "/projects/biblioteca-digital/gallery/captura-de-pantalla-2026-07-29-160251.png",
      "/projects/biblioteca-digital/gallery/captura-de-pantalla-2026-07-29-160256.png",
      "/projects/biblioteca-digital/gallery/captura-de-pantalla-2026-07-29-160302.png"
    ],
    isFeatured: true
  },
  {
    id: "clinicav2-stack",
    slug: "clinicav2-stack",
    title: "HealthTech 2026",
    category: "ENTERPRISE SOFTWARE ARCHITECTURE & REAL-TIME TELEMETRY",
    subtitle: {
      es: "Plataforma de Telemetría Clínica de UCI en Tiempo Real mediante Server-Sent Events (SSE)",
      en: "High-concurrency ICU monitoring platform built with Hexagonal Architecture, Server-Sent Events (SSE), and containerized microservices.",
    },
    tagline: {
      es: "Plataforma de Telemetría Clínica de UCI en Tiempo Real mediante Server-Sent Events (SSE)",
      en: "High-concurrency ICU monitoring platform built with Hexagonal Architecture, Server-Sent Events (SSE), and containerized microservices.",
    },
    role: {
      es: "Arquitecto de Sistemas Principal & Desarrollador Núcleo",
      en: "Lead Systems Architect & Core Developer",
    },
    summary: {
      es: "Sistema de monitoreo para Unidades de Cuidado Intensivo (UCI) con transmisión SSE en tiempo real (<200ms), arquitectura hexagonal y autenticación Keycloak.",
      en: "Production-grade clinical management and real-time telemetry platform for ICUs using Server-Sent Events streaming and Keycloak authentication.",
    },
    description: {
      es: "HealthTech 2026 es una plataforma de gestión clínica distribuida y telemetría vital en tiempo real para Unidades de Cuidados Intensivos (UCI). Diseñada para reemplazar sistemas monolíticos propensos al agotamiento de pools de base de datos durante lecturas intensivas, desacopla la lógica mediante Arquitectura Hexagonal y transmite métricas fisiológicas con eventos SSE asíncronos en tiempo real.",
      en: "HealthTech 2026 is a production-grade, distributed clinical management and real-time vital telemetry platform engineered for Intensive Care Units (ICUs). Designed to replace legacy monolithic systems prone to database pool exhaustion during high-frequency polling, HealthTech 2026 decouples domain logic from external frameworks using Hexagonal Architecture (Ports and Adapters). It ingests, processes, and displays real-time patient physiological metrics through asynchronous event streams while providing robust bed allocation, historical trend analysis, and dynamic alarm thresholding.",
    },
    techStack: [
      "Java 17",
      "Spring Boot 3.x",
      "Spring Security (OAuth2/OIDC)",
      "Spring Data JPA",
      "React 19",
      "TypeScript",
      "PostgreSQL 15",
      "Redis 7",
      "Keycloak 24.0.5",
      "Nginx Proxy",
      "Docker",
      "Docker Compose",
      "Server-Sent Events (SSE)",
      "Tailwind CSS",
      "Lucide React"
    ],
    highlights: [
      {
        es: "Arquitectura Hexagonal & Aislamiento de Dominio: Modelos clínicos puros (Patient, TriageStatus) desacoplados de JPA mediante el patrón Data Mapper y puertos de salida.",
        en: "Hexagonal Architecture & Domain Isolation: Implemented Domain-Driven Design (DDD) boundaries where core clinical models remain decoupled from Spring frameworks.",
      },
      {
        es: "Pipeline Asíncrono No Bloqueante SSE: Streaming mediante Server-Sent Events reemplazando consultas polling en base de datos, soportando hasta 50 transmisiones concurrentes en UCI.",
        en: "Asynchronous Non-Blocking SSE Pipeline: Replaced resource-intensive SQL database polling loops with an asynchronous Server-Sent Events (SSE) streaming gateway.",
      },
      {
        es: "Proxy Inverso Optimizado en Nginx: Configuración proxy_buffering off para evitar el almacenamiento en caché HTTP/1.1 y garantizar entregas sub-200ms a pantallas médicas.",
        en: "Optimized Reverse Proxy & Stream Tuning: Configured custom Nginx reverse proxy buffering controls (proxy_buffering off) to bypass HTTP/1.1 response caching.",
      },
      {
        es: "Motor de Estado Reactivo Acelerado por GPU: Búfer circular FIFO de 15 muestras por tarjeta de paciente en JS para evitar reflows de diseño y delegar el renderizado al hardware GPU.",
        en: "Hardware-Accelerated React State Engine: Designed a client-side state engine with a 15-sample FIFO circular memory buffer per patient card, delegating rendering directly to GPU.",
      },
    ],
    architectureNodes: [
      { id: "cli-1", label: "React ICU Dashboard", type: "frontend", tech: "React / EventSource API", status: "active", description: "Client-side TelemetryContext with 15-sample FIFO circular buffer per patient card, GPU-accelerated waveform rendering and hardware-triggered layout reflow elimination." },
      { id: "cli-2", label: "Nginx SSE Proxy", type: "gateway", tech: "Nginx (proxy_buffering off)", status: "active", description: "Custom reverse proxy with disabled HTTP/1.1 buffering to ensure SSE event frames reach the browser without caching delays." },
      { id: "cli-3", label: "Spring Boot SSE Gateway", type: "backend", tech: "Java 17 / Spring Boot", status: "active", description: "Thread-safe subscriber registry acting as event publisher. Manages up to 50 concurrent ICU bed streams with non-blocking SseEmitter lifecycle control." },
      { id: "cli-4", label: "Hexagonal Domain Core", type: "backend", tech: "DDD / Ports & Adapters", status: "active", description: "Pure clinical domain models (Patient, TriageStatus) fully isolated from Spring/JPA. Data Mapper pattern translates between in-memory entities and DB rows." },
      { id: "cli-5", label: "Keycloak IAM", type: "backend", tech: "Keycloak", status: "active", description: "Distributed identity governance issuing clinical-scoped JWT tokens with role-based access control for ROLE_MEDIC, ROLE_NURSE, ROLE_ADMIN claims." }
    ],
    metrics: {
      throughput: "60 FPS Waveform Rendering",
      latency: "< 200ms SSE Stream Delivery",
      uptime: "50 Concurrent ICU Bed Streams",
      customMetrics: [
        { label: "SSE Stream Delivery", value: "< 200ms" },
        { label: "Waveform Render Rate", value: "60 FPS" },
        { label: "Concurrent ICU Beds", value: "50 Streams" }
      ]
    },
    coverImage: "/projects/clinicav2-stack/cover.jpg",
    videoUrl: "https://youtu.be/xR0LZ8JPsU0",
    demoVideoUrl: "https://youtu.be/xR0LZ8JPsU0",
    demoUrl: "https://youtu.be/xR0LZ8JPsU0",
    githubUrl: "https://github.com/juanj983009-eng/Clinica_V2",
    screenshots: [
      "/projects/clinicav2-stack/gallery/captura-de-pantalla-2026-07-29-161811.png",
      "/projects/clinicav2-stack/gallery/captura-de-pantalla-2026-07-29-161816.png",
      "/projects/clinicav2-stack/gallery/captura-de-pantalla-2026-07-29-161822.png",
      "/projects/clinicav2-stack/gallery/captura-de-pantalla-2026-07-29-161828.png",
      "/projects/clinicav2-stack/gallery/captura-de-pantalla-2026-07-29-161833.png",
      "/projects/clinicav2-stack/gallery/captura-de-pantalla-2026-07-29-161840.png",
      "/projects/clinicav2-stack/gallery/captura-de-pantalla-2026-07-29-161844.png",
      "/projects/clinicav2-stack/gallery/captura-de-pantalla-2026-07-29-161851.png",
      "/projects/clinicav2-stack/gallery/captura-de-pantalla-2026-07-29-161858.png",
      "/projects/clinicav2-stack/gallery/captura-de-pantalla-2026-07-29-161903.png",
      "/projects/clinicav2-stack/gallery/captura-de-pantalla-2026-07-29-161913.png",
      "/projects/clinicav2-stack/gallery/captura-de-pantalla-2026-07-29-161918.png",
      "/projects/clinicav2-stack/gallery/captura-de-pantalla-2026-07-29-161927.png"
    ],
    isFeatured: false
  },
  {
    id: "olimpiadas-peru",
    slug: "olimpiadas-peru",
    title: "Olimpiadas Perú 2026",
    category: "FULL-STACK WEB ENGINEERING",
    subtitle: {
      es: "Sistema de Gestión Deportiva de Alto Rendimiento y Acreditación de Atletas en Tiempo Real",
      en: "High-Performance Olympic Games Management & Real-Time Athlete Accreditation Platform",
    },
    tagline: {
      es: "Sistema de Gestión Deportiva de Alto Rendimiento y Acreditación de Atletas en Tiempo Real",
      en: "High-Performance Olympic Games Management & Real-Time Athlete Accreditation Platform",
    },
    role: {
      es: "Ingeniero de Software Full-Stack",
      en: "Full-Stack Software Engineer",
    },
    summary: {
      es: "Aplicación web de gestión deportiva para acreditación de atletas y medallero con arquitectura asíncrona sobre Jakarta Servlets y PostgreSQL.",
      en: "Sports management web application optimizing real-time athlete accreditation, competition scheduling, and medal tracking via Jakarta Servlets.",
    },
    description: {
      es: "Olimpiadas Perú es una aplicación web de gestión deportiva de grado empresarial diseñada para optimizar la acreditación de atletas, la programación de competencias y el seguimiento de medallero en eventos deportivos panamericanos. Reemplaza recargas síncronas de página por flujos de datos asíncronos guiados por eventos sobre Jakarta Servlets y PostgreSQL.",
      en: "Olimpiadas Perú is an enterprise-grade sports management web application engineered to optimize real-time athlete accreditation, competition scheduling, and medal tracking for pan-american sporting events. Built with a decoupled client-server architecture, the platform replaces legacy synchronous page-refresh patterns with asynchronous event-driven data flows, delivering a seamless, low-latency operational experience for field coordinators.",
    },
    techStack: [
      "Java 17",
      "Jakarta Servlets",
      "Apache Tomcat 10",
      "PostgreSQL 15",
      "Docker & Docker Compose",
      "HikariCP",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3 / Design Tokens",
      "Bootstrap 5",
      "Maven"
    ],
    highlights: [
      {
        es: "Arquitectura Responsive Acelerada por GPU: Diseño Mobile-First en Bootstrap 5 con propiedades will-change para garantizar micro-interacciones estables a 60 FPS.",
        en: "Hardware-Accelerated Responsive UI Architecture: Engineered an institutional UI adhering to Mobile-First design principles using CSS custom properties and Bootstrap 5.",
      },
      {
        es: "Ingestión Asíncrona & Mutación de DOM: Eliminación de recargas globales mediante Fetch API en JS ES6 e inyección dinámica con delegación de eventos.",
        en: "Asynchronous Data Ingestion & DOM Mutation: Eliminated full-page reloads by implementing native JavaScript ES6 asynchronous execution with async/await and Fetch API.",
      },
      {
        es: "Validación Defensiva en Cliente: Filtros por expresiones regulares y tipos de entrada optimizados para teclados virtuales en dispositivos móviles.",
        en: "Defensive Client-Side Validation & Ergonomics: Mitigated unnecessary backend payload stress by enforcing client-side validation barriers.",
      },
      {
        es: "Entorno Contenedorizado & Persistencia Relacional: Infraestructura en Docker con Apache Tomcat 10, PostgreSQL 15 y pool HikariCP para transacciones atómicas.",
        en: "Containerized Environment & Relational Persistence: Architected a multi-container Docker infrastructure orchestrating Apache Tomcat 10 and PostgreSQL 15.",
      },
    ],
    architectureNodes: [
      { id: "ol-1", label: "JS ES6 SPA Frontend", type: "frontend", tech: "JavaScript / Bootstrap 5", status: "active", description: "Mobile-First client interface with GPU compositing (will-change), Fetch API async data ingestion, Event Delegation DOM mutation and client-side form validation." },
      { id: "ol-2", label: "Apache Tomcat 10", type: "backend", tech: "Apache Tomcat / Jakarta Servlets", status: "active", description: "Servlet container processing JSON API requests from the frontend, dispatching accreditation, scheduling and medal operations to the service layer." },
      { id: "ol-3", label: "Jakarta Servlet API Layer", type: "backend", tech: "Java / Jakarta Servlets", status: "active", description: "Stateless HTTP servlet controllers routing athlete accreditation, competition bracket management, and medal tally updates via lightweight JSON payloads." },
      { id: "ol-4", label: "HikariCP Connection Pool", type: "backend", tech: "Java / HikariCP", status: "active", description: "High-performance JDBC connection pool managing PostgreSQL connections with configurable pool size limits and connection timeout policies." },
      { id: "ol-5", label: "PostgreSQL 15 (Dockerized)", type: "database", tech: "PostgreSQL", status: "active", description: "Primary relational store with isolated Docker volume persistence for athlete records, competition schedules, medal tallies, and coordinator accounts." }
    ],
    metrics: {
      throughput: "1,200+ Requests / Min (RPM)",
      latency: "< 200ms TTI (Async Fetch)",
      uptime: "99.9% High Availability",
      customMetrics: [
        { label: "Async Fetch TTI", value: "< 200ms" },
        { label: "Peak Throughput", value: "1,200+ RPM" },
        { label: "Connection Pool", value: "HikariCP" }
      ]
    },
    coverImage: "/projects/olimpiadas-peru/cover.jpg",
    videoUrl: "https://youtu.be/KbHmRWK1-ws",
    demoVideoUrl: "https://youtu.be/KbHmRWK1-ws",
    demoUrl: "https://youtu.be/KbHmRWK1-ws",
    githubUrl: "https://github.com/juanj983009-eng/Olimpiadas-Peru",
    screenshots: [
      "/projects/olimpiadas-peru/gallery/captura-de-pantalla-2026-07-29-163441.png",
      "/projects/olimpiadas-peru/gallery/captura-de-pantalla-2026-07-29-163449.png",
      "/projects/olimpiadas-peru/gallery/captura-de-pantalla-2026-07-29-163455.png",
      "/projects/olimpiadas-peru/gallery/captura-de-pantalla-2026-07-29-163502.png",
      "/projects/olimpiadas-peru/gallery/captura-de-pantalla-2026-07-29-163509.png",
      "/projects/olimpiadas-peru/gallery/captura-de-pantalla-2026-07-29-163516.png",
      "/projects/olimpiadas-peru/gallery/captura-de-pantalla-2026-07-29-163523.png",
      "/projects/olimpiadas-peru/gallery/captura-de-pantalla-2026-07-29-163531.png",
      "/projects/olimpiadas-peru/gallery/captura-de-pantalla-2026-07-29-163541.png",
      "/projects/olimpiadas-peru/gallery/captura-de-pantalla-2026-07-29-163550.png",
      "/projects/olimpiadas-peru/gallery/captura-de-pantalla-2026-07-29-163602.png"
    ],
    isFeatured: false
  }
];

export default PROJECTS;
