#  ARCHITECT_OS: Senior Portfolio & Data Systems Workspace

##  Visión del Proyecto
Portafolio web interactivo de alto impacto de nivel **Senior Lead Developer & Data Systems Architect**. Diseñado bajo un enfoque de **Single-Page Long-Scroll (Bento Grid Workspace)** inspirado en la estética industrial-técnica de herramientas de ingeniería modernas (como *xshack.app*, *Linear* y *Vercel*).

### Principios de Diseño
- **Estética:** Dark Industrial / Technical Hardware (Fondo `#09090b`, bordes ultra finos `#18181b`, acentos en naranja cobre `#ea580c` y verde esmeralda `#10b981`).
- **Tipografía:** Sans-serif (Geist/Inter) para lectura limpia + Monospace (Geist Mono/JetBrains Mono) para métricas y código.
- **Interacción:** Canvas de grafos interactivos con React Flow, In-Browser Data Lab con DuckDB-Wasm y micro-interacciones a 60 FPS.
- **Rendimiento:** 100/100 en Lighthouse, SEO optimizado y bundle ultraligero.

---

##  Stack Tecnológico

| Capa | Tecnología | Propósito |
| :--- | :--- | :--- |
| **Framework Base** | Next.js 15 (App Router, Strict TypeScript) | SSR/SSG y renderizado reactivo. |
| **Styling Engine** | Tailwind CSS + Lucide Icons + clsx | Estilizado declarativo y modular de alta densidad. |
| **Graph Canvas** | `@xyflow/react` (React Flow v12) | Diagramación de arquitecturas de software y pipelines ETL. |
| **In-Browser Data Engine** | `@duckdb/duckdb-wasm` | Consultas SQL reales en tiempo real sobre datasets Parquet/JSON. |
| **State & Flow** | `zustand` | Control global de proyectos activos, filtros y consola. |
| **Animations** | `framer-motion` | Transiciones de Bento Cards, entrada de secciones y micro-interacciones. |

---

##  Catalogo de 9 Proyectos de Producción

1. **SmartFleet V2** — *IoT & Real-Time Telemetry* (Python, FastAPI, Cassandra, Postgres, Kafka, React).
2. **Controller Production** — *Industrial OEE Monitoring* (Spring Boot, Java, Postgres, Redis, React).
3. **LogiCore Port Control** — *Port Logistics Microservices* (Spring Boot, Keycloak, Postgres, Docker).
4. **Podcast Streaming App** — *Media Delivery System* (FastAPI, Python, MinIO, Postgres, React).
5. **SaaS para Bodegas** — *Multi-Tenant POS* (Node.js, Postgres Schema-per-tenant, React PWA).
6. **Task Orchestration System** — *Distributed Queue Engine* (Python, Redis Queue, Postgres).
7. **Offline-First POS** — *Distributed Sync Engine* (React, IndexedDB, WebSockets, Node.js).
8. **ClinicaV2 Stack** — *Identity & Secure Microservices* (Spring Boot, Keycloak OIDC, Postgres).
9. **Olimpiadas Perú** — *Web Platform & Tomcat Cluster* (Java, Apache Tomcat, Docker, Postgres).

---

##  Roadmap de Ejecución Fase a Fase

### FASE 1: Setup, Architecture & Design System
- [ ] Inicialización de Next.js 15 con App Router y TypeScript Strict Mode.
- [ ] Configuración de `globals.css` con variables CSS de tema oscuro industrial y grillas CAD.
- [ ] Definición de tipos globales (`src/types/portfolio.ts`) para proyectos, nodos de React Flow y datasets.
- [ ] Creación de la fuente de verdad estática (`src/config/projects.ts`) cargando los 9 proyectos.
- [ ] Implementación del Header Sticky con badge de disponibilidad en vivo (`● AVAILABLE FOR LEAD ROLES`).

### FASE 2: Hero Section & Senior Identity Inspector
- [ ] Maquetación del Hero asimétrico en Grid CAD.
- [ ] Panel lateral con foto de perfil en marco de metadatos (`LOCATION: Lima, PE`, `SHIPPED: 09`, `STATUS: 200 OK`).
- [ ] CTAs principales con navegación suave y botón para descarga de CV.

### FASE 3: Bento Workspace & Canvas de Arquitecturas (React Flow)
- [ ] Integración de React Flow con tema industrial personalizado (nodos oscuros, conectores metálicos).
- [ ] Selector lateral / Dropdown de los 9 proyectos con filtros por categoría.
- [ ] Panel de inspección de nodos: Despliegue de métricas (Throughput, Latency) y explicación técnica al hacer clic.

### FASE 4: Technical Spec Sheet (Tech Stack Matrix)
- [ ] Maquetación en matriz de especificaciones de hardware/software organizada por capas:
  - *Distributed Backend & APIs*
  - *Data Engineering & Storage*
  - *Frontend & UI Systems*
  - *Infrastructure & DevOps*

### FASE 5: In-Browser Data Lab (DuckDB SQL Engine + Pipeline Simulator)
- [ ] Integración de DuckDB-Wasm para ejecución SQL local.
- [ ] Selector de datasets vinculados a los proyectos (`smartfleet_telemetry`, `oee_production_logs`, `port_container_events`, `task_queue_metrics`, `pos_sync_stream`).
- [ ] Consola de edición SQL con consultas predefinidas y tabla de resultados dinámica.
- [ ] Simulador visual de tasa de ingesta de eventos e indicadores de memoria/latencia.

### FASE 6: Contact API Hub, SEO & Production Polish
- [ ] Formulario de contacto con UI de terminal/petición HTTP (`POST /api/v1/contact`).
- [ ] Enlaces directos a GitHub, LinkedIn, Email y agendamiento vía Calendly.
- [ ] Auditoría con Lighthouse (100% Performance, Accessibility, Best Practices, SEO).