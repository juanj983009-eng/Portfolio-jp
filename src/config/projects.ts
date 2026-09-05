import { Project } from "@/types/portfolio";

export const PROJECTS: Project[] = [
  {
    id: "smartfleet-v2",
    slug: "smartfleet-v2",
    title: "SMARTFLEET V2",
    category: { es: "PROYECTO PERSONAL", en: "PERSONAL PROJECT" },
    projectCategory: "personal",
    status: "prototype",
    subtitle: {
      es: "Prototipo personal para registrar, consultar y visualizar datos simulados de telemetría de flotas, explorando alternativas de persistencia relacional y NoSQL.",
      en: "Personal prototype for recording, querying, and visualizing simulated fleet telemetry data while exploring relational and NoSQL persistence alternatives.",
    },
    tagline: {
      es: "Prototipo personal para registrar, consultar y visualizar datos simulados de telemetría de flotas, explorando alternativas de persistencia relacional y NoSQL.",
      en: "Personal prototype for recording, querying, and visualizing simulated fleet telemetry data while exploring relational and NoSQL persistence alternatives.",
    },
    description: {
      es: "Prototipo personal para registrar, consultar y visualizar datos simulados de telemetría de flotas, explorando alternativas de persistencia relacional y NoSQL.",
      en: "Personal prototype for recording, querying, and visualizing simulated fleet telemetry data while exploring relational and NoSQL persistence alternatives.",
    },
    contribution: {
      es: "Definí el alcance funcional, integré los componentes del prototipo, realicé pruebas y corregí su comportamiento.",
      en: "I defined the functional scope, integrated the prototype components, tested its workflows, and corrected its behavior.",
    },
    learnings: [
      { es: "Modelado de datos de telemetría.", en: "Telemetry data modeling." },
      { es: "Comparación entre persistencia relacional y NoSQL.", en: "Comparison of relational and NoSQL persistence." },
      { es: "Integración entre interfaz, servicios y almacenamiento.", en: "Integration between interface, services, and storage." },
    ],
    techStack: ["React", "Spring Boot", "PostgreSQL", "Apache Cassandra", "MongoDB", "Docker", "Tailwind CSS"],
    coverImage: "/projects/smartfleet-v2/cover.jpg",
    links: {
      repository: "https://github.com/juanj983009-eng/SMARTFLEET_V2",
      video: "https://youtu.be/GWb8TBxducY",
    },
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
    category: { es: "PROYECTO PERSONAL", en: "PERSONAL PROJECT" },
    projectCategory: "personal",
    status: "prototype",
    subtitle: {
      es: "Prototipo personal inspirado en procesos industriales para registrar órdenes, operaciones y avances de producción en un entorno simulado.",
      en: "Personal prototype inspired by industrial processes for recording production orders, operations, and progress in a simulated environment.",
    },
    tagline: {
      es: "Prototipo personal inspirado en procesos industriales para registrar órdenes, operaciones y avances de producción en un entorno simulado.",
      en: "Personal prototype inspired by industrial processes for recording production orders, operations, and progress in a simulated environment.",
    },
    description: {
      es: "Prototipo personal inspirado en procesos industriales para registrar órdenes, operaciones y avances de producción en un entorno simulado.",
      en: "Personal prototype inspired by industrial processes for recording production orders, operations, and progress in a simulated environment.",
    },
    contribution: {
      es: "Convertí flujos industriales conocidos en requisitos y pantallas de software, integré los componentes y validé el funcionamiento del prototipo.",
      en: "I translated familiar industrial workflows into software requirements and interfaces, integrated the components, and validated the prototype.",
    },
    learnings: [
      { es: "Traducción de procesos industriales a flujos de software.", en: "Translating industrial processes into software workflows." },
      { es: "Modelado relacional de órdenes y operaciones.", en: "Relational modeling of orders and operations." },
      { es: "Diseño de interfaces para seguimiento operativo.", en: "Interface design for operational tracking." },
    ],
    techStack: ["Java 17", "Spring Boot 3.3.5", "PostgreSQL 16", "Flyway DB", "React 19", "Zustand 5.0", "Docker", "Docker Compose", "Nginx", "Tailwind CSS", "JWT (HS256)", "Maven"],
    coverImage: "/projects/controller-production/cover.jpg",
    links: {
      repository: "https://github.com/juanj983009-eng/Mecapro-mes-V1",
      video: "https://youtu.be/V4FemFCJsPg",
    },
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
    isFeatured: false
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
    isFeatured: false
  },
  {
    id: "tienda-catys",
    slug: "tienda-catys",
    title: "Tienda Catys",
    category: { es: "PROYECTO ACADÉMICO", en: "ACADEMIC PROJECT" },
    projectCategory: "academic",
    status: "prototype",
    subtitle: {
      es: "Prototipo académico de gestión gastronómica y punto de venta para practicar flujos de pedidos, productos e inventario.",
      en: "Academic restaurant-management and point-of-sale prototype for practicing order, product, and inventory workflows.",
    },
    tagline: {
      es: "Prototipo académico de gestión gastronómica y punto de venta para practicar flujos de pedidos, productos e inventario.",
      en: "Academic restaurant-management and point-of-sale prototype for practicing order, product, and inventory workflows.",
    },
    description: {
      es: "Prototipo académico de gestión gastronómica y punto de venta para practicar flujos de pedidos, productos e inventario.",
      en: "Academic restaurant-management and point-of-sale prototype for practicing order, product, and inventory workflows.",
    },
    contribution: {
      es: "Trabajé en la definición de los flujos, integración de la aplicación, pruebas funcionales y corrección del prototipo.",
      en: "I worked on workflow definition, application integration, functional testing, and prototype corrections.",
    },
    learnings: [
      { es: "Modelado de pedidos, productos e inventario.", en: "Modeling orders, products, and inventory." },
      { es: "Persistencia de información con SQL Server.", en: "Data persistence with SQL Server." },
      { es: "Comunicación entre la interfaz y la lógica de la aplicación.", en: "Communication between the interface and application logic." },
    ],
    techStack: ["Java 17", "Spring Boot 3.2.5", "Spring Data JPA", "MS SQL Server 2022", "Hibernate ORM", "React 19.2", "Vite 8.0", "Tailwind CSS v4.0", "Lucide React", "Docker", "Docker Compose", "Maven", "RESTful APIs"],
    coverImage: "/projects/tienda-catys/cover.jpg",
    links: {
      repository: "https://github.com/juanj983009-eng/Tienda-Catys-Java",
      video: "https://youtu.be/jEqSSWqL214",
    },
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
    isFeatured: true
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
    isFeatured: false
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
