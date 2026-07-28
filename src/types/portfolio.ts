export type MultiLangString = string | { es: string; en: string };

export function getLocalized(
  field: MultiLangString | null | undefined,
  lang: 'es' | 'en' | string
): string {
  if (!field) return "";
  if (typeof field === "string") return field;
  if (typeof field === "object") {
    const l = lang === "en" ? "en" : "es";
    return field[l as 'en' | 'es'] || field.es || field.en || "";
  }
  return String(field);
}

export interface ArchitectureNode {
  id: string;
  label: string;
  type: 'frontend' | 'backend' | 'database' | 'queue' | 'cache' | 'gateway' | 'iot' | 'microservice' | 'storage';
  tech: string;
  status?: 'active' | 'standby' | 'syncing' | 'healthy';
  description?: MultiLangString;
}

export interface MetricItem {
  label: MultiLangString;
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
  description: MultiLangString;
}

export interface Dataset {
  name: string;
  recordsCount: number;
  sizeFormatted: string;
  description: MultiLangString;
  schema: SchemaField[];
  sampleData: Array<Record<string, string | number | boolean | null>>;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline?: MultiLangString;
  subtitle?: MultiLangString;
  role: MultiLangString;
  summary: MultiLangString;
  description: MultiLangString;
  techStack: string[];
  highlights: MultiLangString[];
  architectureNodes: ArchitectureNode[];
  metrics: ProjectMetrics;
  dataset?: Dataset;
  isFeatured?: boolean;
  coverImage?: string;
  /** URL of the embeddable video asset rendered inside the Architecture & Pipeline section. */
  videoUrl?: string;
  /** External link to the live demo or demo recording (used in CTA buttons). */
  demoVideoUrl?: string;
  demoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  screenshots?: string[];
}
