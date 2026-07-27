export interface ArchitectureNode {
  id: string;
  label: string;
  type: 'frontend' | 'backend' | 'database' | 'queue' | 'cache' | 'gateway' | 'iot' | 'microservice' | 'storage';
  tech: string;
  status?: 'active' | 'standby' | 'syncing' | 'healthy';
  description?: string;
}

export interface MetricItem {
  label: string;
  value: string;
  change?: string;
  unit?: string;
}

export interface ProjectMetrics {
  throughput?: string;
  latency?: string;
  uptime?: string;
  recordCount?: string;
  activeDevices?: string;
  customMetrics?: MetricItem[];
}

export interface SchemaField {
  field: string;
  type: string;
  description: string;
}

export interface Dataset {
  name: string;
  recordsCount: number;
  sizeFormatted: string;
  description: string;
  schema: SchemaField[];
  sampleData: Array<Record<string, string | number | boolean | null>>;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  role: string;
  summary: string;
  description: string;
  techStack: string[];
  highlights: string[];
  architectureNodes: ArchitectureNode[];
  metrics: ProjectMetrics;
  dataset?: Dataset;
  isFeatured?: boolean;
  coverImage?: string;
  demoVideoUrl?: string;
  githubUrl?: string;
  screenshots?: string[];
}
