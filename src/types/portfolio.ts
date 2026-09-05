export type MultiLangString = string | { es: string; en: string };

export type ProjectCategory =
  | "personal"
  | "academic"
  | "experimental";
export type ProjectStatus =
  | "completed"
  | "functional"
  | "prototype"
  | "in-progress"
  | "concept";

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

export interface ProjectLinks {
  repository?: string;
  demo?: string;
  video?: string;
  live?: string;
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
  /** Human-readable technical area. It can be localized in future project data. */
  category?: MultiLangString;
  /** Honest portfolio grouping, independent from visual prominence. */
  projectCategory?: ProjectCategory;
  status?: ProjectStatus;
  tagline?: MultiLangString;
  subtitle?: MultiLangString;
  role?: MultiLangString;
  summary?: MultiLangString;
  description?: MultiLangString;
  /** Expanded explanation rendered in the project detail modal when available. */
  details?: MultiLangString;
  contribution?: MultiLangString;
  learnings?: MultiLangString[];
  transparencyNote?: MultiLangString;
  techStack?: string[];
  highlights?: MultiLangString[];
  architectureNodes?: ArchitectureNode[];
  conceptualArchitecture?: MultiLangString;
  metrics?: ProjectMetrics;
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
  links?: ProjectLinks;
  screenshots?: string[];
}
