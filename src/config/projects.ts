import { Project } from "@/types/portfolio";

export const PROJECTS: Project[] = [
  {
    id: "smartfleet-v2",
    slug: "smartfleet-v2",
    title: "SmartFleet V2",
    category: "IoT / Real-Time Telemetry",
    tagline: "High-Throughput GPS & Sensor Telemetry Pipeline for Commercial Fleets",
    role: "Senior Fullstack & Data Architect",
    summary: "Distributed IoT platform processing 50,000+ real-time vehicle telemetry pings per second with sub-50ms ingestion latency and automated geofence evaluation.",
    description: "Architected a scalable IoT telemetry platform utilizing MQTT brokers, Apache Kafka, and DuckDB/TimescaleDB time-series storage. Implemented real-time anomaly detection, driver safety metrics, and interactive map visualizers with low-latency WebSocket streams.",
    techStack: ["React", "TypeScript", "Node.js", "MQTT", "Apache Kafka", "DuckDB", "TimescaleDB", "Tailwind CSS"],
    highlights: [
      "Sub-50ms ingestion latency across 10,000+ concurrent active IoT OBD-II devices.",
      "Custom geofence polygon collision engine in Rust/WASM for client-side spatial evaluation.",
      "Reduced cloud infrastructure storage cost by 40% using columnar compression and automated partitioning."
    ],
    architectureNodes: [
      { id: "node-1", label: "OBD-II IoT Devices", type: "iot", tech: "MQTT / TLS", status: "active", description: "Transmits GPS coordinates, speed, and engine diagnostics every 500ms." },
      { id: "node-2", label: "EMQX Broker Cluster", type: "gateway", tech: "EMQX / Erlang", status: "active", description: "Handles 50,000 req/s connection pool with automatic failover." },
      { id: "node-3", label: "Kafka Telemetry Queue", type: "queue", tech: "Apache Kafka", status: "active", description: "Buffers telemetry streams for stream analytics and persistence." },
      { id: "node-4", label: "Ingestion Worker Service", type: "backend", tech: "Node.js / Go", status: "active", description: "Validates payloads, enriches metadata, and calculates spatial vectors." },
      { id: "node-5", label: "Time-Series Store", type: "database", tech: "TimescaleDB / DuckDB", status: "active", description: "Columnar time-series store for ultra-fast query execution." },
      { id: "node-6", label: "Real-Time Fleet Dashboard", type: "frontend", tech: "React / Deck.gl", status: "active", description: "Interactive map visualization layer with WebGL rendering." }
    ],
    metrics: {
      throughput: "50,000 msg/s",
      latency: "< 45ms",
      uptime: "99.99%",
      activeDevices: "12,500+",
      customMetrics: [
        { label: "Data Ingested/Day", value: "1.2 TB" },
        { label: "Geofence Engine Latency", value: "3.2 ms" },
        { label: "Compression Ratio", value: "8.4x" }
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
    demoVideoUrl: "/projects/smartfleet-v2/demo.mp4",
    screenshots: [
      "/projects/smartfleet-v2/gallery/01.jpg",
      "/projects/smartfleet-v2/gallery/02.jpg"
    ],
    isFeatured: true
  },
  {
    id: "controller-production",
    slug: "controller-production",
    title: "Controller Production",
    category: "Industrial OEE Monitoring",
    tagline: "Overall Equipment Effectiveness (OEE) & Industrial IoT Telemetry System",
    role: "Lead Systems Architect",
    summary: "Real-time industrial plant telemetry monitoring overall equipment effectiveness, downtime root-causes, and production output across 24 factory lines.",
    description: "Designed a mission-critical OEE dashboard and SCADA integration layer for industrial manufacturing lines. Captured PLC signals via Modbus TCP / OPC-UA, computed availability, performance, and quality metrics in real time, and delivered interactive shop-floor monitoring displays.",
    techStack: ["React", "TypeScript", "OPC-UA", "Modbus TCP", "PostgreSQL", "Redis", "Tailwind CSS", "Recharts"],
    highlights: [
      "Zero-data-loss telemetry buffer during factory network outages via local SQLite edge buffering.",
      "Calculated live OEE metrics (Availability, Performance, Quality) with 100ms update frequency.",
      "Deployed on industrial touch PCs with optimized DOM footprint and hardware-accelerated SVG charts."
    ],
    architectureNodes: [
      { id: "cp-1", label: "Siemens/Allen-Bradley PLCs", type: "iot", tech: "OPC-UA / Modbus", status: "active", description: "Factory floor controllers monitoring cycle times and defect counts." },
      { id: "cp-2", label: "Edge Gateway Collector", type: "gateway", tech: "Python / C++", status: "active", description: "Normalizes PLC protocols and buffers data locally during network drops." },
      { id: "cp-3", label: "OEE Calculation Engine", type: "backend", tech: "Node.js / Express", status: "active", description: "Aggregates minute-level availability, speed loss, and scrap rates." },
      { id: "cp-4", label: "Redis State Cache", type: "cache", tech: "Redis Cluster", status: "active", description: "Maintains live state of active shifts, line status, and error alerts." },
      { id: "cp-5", label: "Production Timescale DB", type: "database", tech: "PostgreSQL / Timescale", status: "active", description: "Stores historical production shifts and downtime classifications." },
      { id: "cp-6", label: "Shopfloor Touch HMI", type: "frontend", tech: "React / Vite", status: "active", description: "High-contrast dark mode industrial dashboard for operator touchscreens." }
    ],
    metrics: {
      throughput: "12,000 pings/s",
      latency: "< 25ms",
      uptime: "99.95%",
      customMetrics: [
        { label: "Active Factory Lines", value: "24 Lines" },
        { label: "OEE Efficiency Uplift", value: "+ 14.2%" },
        { label: "Downtime Reaction Time", value: "- 35%" }
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
    screenshots: [
      "/projects/controller-production/gallery/01.jpg",
      "/projects/controller-production/gallery/02.jpg"
    ],
    isFeatured: true
  },
  {
    id: "logicore-port-control",
    slug: "logicore-port-control",
    title: "LogiCore Port Control",
    category: "Port Logistics Microservices",
    tagline: "Container Terminal Operating System & Customs Microservice Architecture",
    role: "Principal Microservice Engineer",
    summary: "Distributed port management suite handling container movement, vessel berthing schedules, customs clearance workflows, and gate access control.",
    description: "Engineered event-driven microservices for maritime port operations. Automated container crane dispatches, EDIFACT invoice parsing, and integrated secure OAuth2/mTLS communication channels between port authorities and logistics fleets.",
    techStack: ["React", "TypeScript", "NestJS", "PostgreSQL", "RabbitMQ", "Docker", "Kubernetes", "Tailwind CSS"],
    highlights: [
      "Engineered EDIFACT / X12 EDI parser processing vessel manifests 15x faster than legacy systems.",
      "Implemented optimistic concurrency control for container yard slot allocations under high loads.",
      "Achieved sub-100ms API response times across 35 microservices using gRPC internal RPC channels."
    ],
    architectureNodes: [
      { id: "lc-1", label: "Gate RFID & OCR Cameras", type: "iot", tech: "REST / Webhooks", status: "active", description: "Scans truck license plates and container ISO codes at port gates." },
      { id: "lc-2", label: "API Gateway (Traefik)", type: "gateway", tech: "Traefik / mTLS", status: "active", description: "Authenticates requests, rate limits, and routes to internal services." },
      { id: "lc-3", label: "Vessel Schedule Service", type: "microservice", tech: "NestJS / TypeScript", status: "active", description: "Manages berth allocations and estimated arrival/departure times." },
      { id: "lc-4", label: "Yard Inventory Service", type: "microservice", tech: "Go / gRPC", status: "active", description: "Tracks 3D coordinates of 40,000+ stacked containers." },
      { id: "lc-5", label: "RabbitMQ Event Mesh", type: "queue", tech: "RabbitMQ", status: "active", description: "Publishes container state changes and customs approval events." },
      { id: "lc-6", label: "Terminal Control Center", type: "frontend", tech: "React / Zustand", status: "active", description: "Real-time yard overview with interactive container lookup." }
    ],
    metrics: {
      throughput: "8,500 req/s",
      latency: "< 60ms",
      uptime: "99.99%",
      customMetrics: [
        { label: "Daily Container Turns", value: "14,200 TEU" },
        { label: "EDI Processing Time", value: "120 ms" },
        { label: "Gate Dwell Time Cut", value: "- 28%" }
      ]
    },
    coverImage: "/projects/logicore-port-control/cover.jpg",
    screenshots: [
      "/projects/logicore-port-control/gallery/01.jpg",
      "/projects/logicore-port-control/gallery/02.jpg"
    ],
    isFeatured: true
  },
  {
    id: "podcast-streaming-app",
    slug: "podcast-streaming-app",
    title: "Podcast Streaming Platform",
    category: "Media Delivery System",
    tagline: "Global Audio Streaming, Adaptive Bitrate & Dynamic Ad Injection Platform",
    role: "Fullstack Architecture Lead",
    summary: "High-performance audio streaming infrastructure serving millions of podcast listens with progressive HLS delivery, dynamic ad insertion, and analytics.",
    description: "Built an end-to-end audio delivery ecosystem featuring automated MP3/AAC transcode pipelines to HLS, audio waveform generation, dynamic ID3 tag insertion for programmatic advertising, and offline audio syncing for mobile progressive web apps.",
    techStack: ["Next.js", "TypeScript", "FFmpeg", "AWS S3", "CloudFront CDN", "Redis", "Tailwind CSS", "Web Audio API"],
    highlights: [
      "Developed web-based audio waveform visualization engine using Web Audio API and AudioContext.",
      "Optimized CDN caching strategies yielding 98.4% edge hit ratio for global audio segment delivery.",
      "Integrated resilient background audio service worker for seamless continuous playback."
    ],
    architectureNodes: [
      { id: "pod-1", label: "Creator Studio Portal", type: "frontend", tech: "Next.js App Router", status: "active", description: "Allows podcasters to upload raw WAV/MP3 files and schedule episodes." },
      { id: "pod-2", label: "Transcoding Pipeline", type: "backend", tech: "Node.js / FFmpeg", status: "active", description: "Converts audio uploads into HLS multi-bitrate streams." },
      { id: "pod-3", label: "Media Object Storage", type: "storage", tech: "AWS S3 / CloudFront", status: "active", description: "Global edge CDN delivering segmented .ts audio files." },
      { id: "pod-4", label: "Ad Injection Engine", type: "microservice", tech: "Go", status: "active", description: "Stitches targeted audio sponsor ads at mid-roll cue points." },
      { id: "pod-5", label: "Listener Web App", type: "frontend", tech: "React / HTML5 Audio", status: "active", description: "Custom HTML5 audio engine with offline caching capabilities." }
    ],
    metrics: {
      throughput: "25,000 req/s",
      latency: "< 35ms",
      uptime: "99.98%",
      customMetrics: [
        { label: "Global Edge Hit Rate", value: "98.4%" },
        { label: "Audio Transcode Speed", value: "4.5x Realtime" },
        { label: "Monthly Active Listeners", value: "1.8M" }
      ]
    },
    coverImage: "/projects/podcast-streaming-app/cover.jpg",
    screenshots: [
      "/projects/podcast-streaming-app/gallery/01.jpg",
      "/projects/podcast-streaming-app/gallery/02.jpg"
    ],
    isFeatured: false
  },
  {
    id: "saas-bodegas-pos",
    slug: "saas-bodegas-pos",
    title: "SaaS para Bodegas",
    category: "Multi-Tenant POS",
    tagline: "Multi-Tenant Cloud Point of Sale & Inventory Platform for Convenience Stores",
    role: "Fullstack Lead Architect",
    summary: "Cloud-native multi-tenant SaaS platform empowering 1,200+ local retail stores with barcode scanning, automated inventory restocking, and electronic invoicing.",
    description: "Engineered a multi-tenant POS application with tenant-isolated database schemas, real-time inventory synchronization across multi-register stores, SUNAT/Tax authority compliance integrations, and offline receipt printing support.",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Redis", "Tailwind CSS", "Zustand"],
    highlights: [
      "Designed schema-per-tenant isolation architecture delivering robust security and zero data leakage.",
      "Implemented instant USB/Bluetooth thermal printer integration via Web Serial API.",
      "Sub-200ms transaction checkout flow optimized for high-volume retail counter interactions."
    ],
    architectureNodes: [
      { id: "bod-1", label: "Store POS Terminals", type: "frontend", tech: "React / Web Serial API", status: "active", description: "Barcode scanner and receipt printer interface." },
      { id: "bod-2", label: "Multi-Tenant Gateway", type: "gateway", tech: "Next.js Middleware", status: "active", description: "Extracts store subdomain and routes requests to tenant context." },
      { id: "bod-3", label: "Core POS API", type: "backend", tech: "Node.js / Prisma", status: "active", description: "Executes stock deducts, discount rules, and payment processing." },
      { id: "bod-4", label: "Tax E-Invoicing Worker", type: "queue", tech: "BullMQ / Redis", status: "active", description: "Generates signed XML receipts for government tax authority compliance." },
      { id: "bod-5", label: "Tenant Postgres DBs", type: "database", tech: "PostgreSQL", status: "active", description: "Isolated store databases with automated daily snapshots." }
    ],
    metrics: {
      throughput: "3,200 req/s",
      latency: "< 80ms",
      uptime: "99.95%",
      customMetrics: [
        { label: "Active Retail Tenants", value: "1,250+" },
        { label: "Processed Transactions", value: "18.5M" },
        { label: "Average Checkout Time", value: "4.8 sec" }
      ]
    },
    coverImage: "/projects/saas-bodegas-pos/cover.jpg",
    screenshots: [
      "/projects/saas-bodegas-pos/gallery/01.jpg",
      "/projects/saas-bodegas-pos/gallery/02.jpg"
    ],
    isFeatured: true
  },
  {
    id: "task-orchestration-system",
    slug: "task-orchestration-system",
    title: "Task Orchestration Engine",
    category: "Distributed Queue Engine",
    tagline: "Resilient Distributed Task Scheduler & Workflow Execution Engine",
    role: "Backend Architect",
    summary: "Distributed workflow scheduler capable of executing millions of asynchronous jobs daily with cron triggers, dependency DAGs, exponential backoff retries, and dead-letter queues.",
    description: "Designed a lightweight, highly available task orchestrator similar to Temporal/Airflow. Built in TypeScript/Node.js with Redis stream queues, worker pool autoscaling, and real-time execution DAG visualization.",
    techStack: ["React", "TypeScript", "Node.js", "Redis Streams", "PostgreSQL", "Docker", "Tailwind CSS"],
    highlights: [
      "Directed Acyclic Graph (DAG) task engine allowing parallel execution of dependent sub-tasks.",
      "Built resilient worker heartbeat system with automatic task reassignment upon worker node crashes.",
      "Custom visual DAG builder rendering workflow execution states in real-time."
    ],
    architectureNodes: [
      { id: "task-1", label: "Workflow Builder UI", type: "frontend", tech: "React / XYFlow", status: "active", description: "Visual node graph editor for orchestrating task dependencies." },
      { id: "task-2", label: "Orchestrator Leader", type: "backend", tech: "Node.js", status: "active", description: "Evaluates task dependency graphs and enqueues runnable steps." },
      { id: "task-3", label: "Redis Stream Queue", type: "queue", tech: "Redis Streams", status: "active", description: "High-speed message queue with consumer group ack management." },
      { id: "task-4", label: "Worker Pool Nodes", type: "backend", tech: "Node.js / Docker", status: "active", description: "Autoscaled worker containers executing heavy async background tasks." },
      { id: "task-5", label: "Execution History DB", type: "database", tech: "PostgreSQL", status: "active", description: "Stores job logs, input parameters, and execution timelines." }
    ],
    metrics: {
      throughput: "35,000 jobs/min",
      latency: "< 15ms",
      uptime: "99.99%",
      customMetrics: [
        { label: "Daily Executed Jobs", value: "4.2M" },
        { label: "Failed Task Recovery", value: "99.8%" },
        { label: "Queue Latency P99", value: "18 ms" }
      ]
    },
    coverImage: "/projects/task-orchestration-system/cover.jpg",
    screenshots: [
      "/projects/task-orchestration-system/gallery/01.jpg",
      "/projects/task-orchestration-system/gallery/02.jpg"
    ],
    isFeatured: false
  },
  {
    id: "offline-first-pos",
    slug: "offline-first-pos",
    title: "Offline-First POS Engine",
    category: "Distributed Sync Engine",
    tagline: "Resilient Offline-First Point of Sale with Conflict-Free Replicated Data Types (CRDT)",
    role: "Lead Systems Engineer",
    summary: "Commercial POS system engineered for remote locations with intermittent connectivity, guaranteeing 100% transaction continuity using local IndexedDB and CRDT delta synchronization.",
    description: "Architected a local-first retail software engine using RxDB and IndexedDB on the client, synchronized with a central Node.js backend using state-based CRDTs (Conflict-free Replicated Data Types) to seamlessly resolve simultaneous multi-register inventory edits without central locking.",
    techStack: ["React", "TypeScript", "IndexedDB", "RxDB", "CRDTs", "Node.js", "WebSocket", "Tailwind CSS"],
    highlights: [
      "100% offline transaction processing capabilities; store operates indefinitely without internet access.",
      "Bi-directional delta syncing protocol with automatic background reconnect and conflict resolution.",
      "IndexedDB storage layer handling 500,000+ local product catalog items with instant search indices."
    ],
    architectureNodes: [
      { id: "off-1", label: "Client Register App", type: "frontend", tech: "React / Progressive Web App", status: "active", description: "Executes sales locally and updates client state." },
      { id: "off-2", label: "Local IndexedDB Engine", type: "database", tech: "IndexedDB / RxDB", status: "active", description: "Local client database preserving offline sales and stock levels." },
      { id: "off-3", label: "CRDT Sync Protocol", type: "microservice", tech: "TypeScript / CRDT", status: "active", description: "Calculates state deltas and merges conflicting edits automatically." },
      { id: "off-4", label: "Sync WebSocket Relay", type: "gateway", tech: "Node.js / WebSockets", status: "active", description: "Listens for network restoration and pushes queued mutations." },
      { id: "off-5", label: "Central Master Database", type: "database", tech: "PostgreSQL", status: "active", description: "Aggregates global store metrics, financial reports, and inventory." }
    ],
    metrics: {
      throughput: "2,400 sync/s",
      latency: "< 10ms (Local)",
      uptime: "100% Local Uptime",
      customMetrics: [
        { label: "Offline Duration Tested", value: "14 Days" },
        { label: "Conflict Resolution Rate", value: "100%" },
        { label: "Local Query Speed", value: "< 2 ms" }
      ]
    },
    coverImage: "/projects/offline-first-pos/cover.jpg",
    screenshots: [
      "/projects/offline-first-pos/gallery/01.jpg",
      "/projects/offline-first-pos/gallery/02.jpg"
    ],
    isFeatured: true
  },
  {
    id: "clinicav2-stack",
    slug: "clinicav2-stack",
    title: "ClinicaV2 Stack",
    category: "Identity & Secure Microservices",
    tagline: "HIPAA-Compliant Electronic Health Records (EHR) & Identity Microservice Architecture",
    role: "Lead Security & Cloud Architect",
    summary: "Secure medical records ecosystem connecting hospitals, diagnostic laboratories, and patient portals with end-to-end payload encryption and RBAC identity management.",
    description: "Built a compliant clinical platform featuring microservices for patient identity verification, encrypted medical file storage (DICOM/HL7), automated appointment scheduling, and granular OAuth2 / OpenID Connect role-based access control.",
    techStack: ["Next.js", "TypeScript", "Node.js", "OAuth2 / OIDC", "PostgreSQL", "Redis", "Docker", "Tailwind CSS"],
    highlights: [
      "Zero-trust security architecture with field-level encryption for sensitive patient health data.",
      "HL7 / FHIR protocol integration for seamless interoperability with hospital lab equipment.",
      "Comprehensive audit trail recording every medical record access attempt for compliance verification."
    ],
    architectureNodes: [
      { id: "cli-1", label: "Patient & Doctor Portals", type: "frontend", tech: "Next.js / Tailwind", status: "active", description: "Encrypted web application for consultation logs and lab results." },
      { id: "cli-2", label: "Identity & OAuth Server", type: "backend", tech: "Node.js / OIDC", status: "active", description: "Issues JWT access tokens with granular medical scope claims." },
      { id: "cli-3", label: "HL7 Data Router", type: "microservice", tech: "Go / FHIR", status: "active", description: "Parses and routes hospital lab machine output files." },
      { id: "cli-4", label: "Encrypted DB Cluster", type: "database", tech: "PostgreSQL (pgcrypto)", status: "active", description: "Stores encrypted patient demographics and consultation notes." },
      { id: "cli-5", label: "DICOM Image Vault", type: "storage", tech: "AWS S3 / AES-256", status: "active", description: "Secure storage for X-rays, MRIs, and high-resolution medical scans." }
    ],
    metrics: {
      throughput: "4,500 req/s",
      latency: "< 50ms",
      uptime: "99.99%",
      customMetrics: [
        { label: "Patient Records Managed", value: "350,000+" },
        { label: "Security Compliance", value: "HIPAA / GDPR" },
        { label: "Payload Encryption Speed", value: "4.2 ms" }
      ]
    },
    coverImage: "/projects/clinicav2-stack/cover.jpg",
    screenshots: [
      "/projects/clinicav2-stack/gallery/01.jpg",
      "/projects/clinicav2-stack/gallery/02.jpg"
    ],
    isFeatured: false
  },
  {
    id: "olimpiadas-peru",
    slug: "olimpiadas-peru",
    title: "Olimpiadas Perú Platform",
    category: "Web Platform & Tomcat Cluster",
    tagline: "High-Concurrency Live Sports Scoring & Fan Engagement Platform",
    role: "Principal Infrastructure Lead",
    summary: "National sports event platform delivering live score updates, medal tallies, and high-resolution video streams to millions of simultaneous web users during national games.",
    description: "Engineered the high-traffic web platform for national Olympic events. Deployed a load-balanced Apache Tomcat / NGINX cluster capable of absorbing 100,000+ peak concurrent users with zero downtime, backed by a Redis pub/sub real-time score distribution layer.",
    techStack: ["Java", "Spring Boot", "Apache Tomcat", "NGINX", "Redis", "JavaScript", "CSS3", "MySQL"],
    highlights: [
      "Managed peak traffic spikes of 120,000 concurrent active users during gold medal finals.",
      "Optimized NGINX reverse-proxy caching layer to handle 95% of static dynamic traffic without hitting backend databases.",
      "Sub-second live match event updates delivered via Server-Sent Events (SSE)."
    ],
    architectureNodes: [
      { id: "ol-1", label: "Public Web Portal", type: "frontend", tech: "Vanilla JS / CSS3", status: "active", description: "Lightweight mobile-first UI optimized for high concurrency." },
      { id: "ol-2", label: "NGINX Edge Cluster", type: "gateway", tech: "NGINX / Keepalived", status: "active", description: "Load balances incoming traffic and serves cached static assets." },
      { id: "ol-3", label: "Apache Tomcat Farm", type: "backend", tech: "Java / Spring Boot", status: "active", description: "Cluster of application servers processing match scoring events." },
      { id: "ol-4", label: "Redis Score Pub/Sub", type: "cache", tech: "Redis Cluster", status: "active", description: "Distributes live score notifications across connected WebSockets." },
      { id: "ol-5", label: "Master Match Database", type: "database", tech: "MySQL Cluster", status: "active", description: "Relational store for athlete stats, historical records, and medal counts." }
    ],
    metrics: {
      throughput: "65,000 req/s",
      latency: "< 30ms",
      uptime: "100%",
      customMetrics: [
        { label: "Peak Concurrent Users", value: "120,000" },
        { label: "Total Page Views", value: "45.8M" },
        { label: "Live Score Delay", value: "< 250 ms" }
      ]
    },
    coverImage: "/projects/olimpiadas-peru/cover.jpg",
    screenshots: [
      "/projects/olimpiadas-peru/gallery/01.jpg",
      "/projects/olimpiadas-peru/gallery/02.jpg"
    ],
    isFeatured: false
  }
];
