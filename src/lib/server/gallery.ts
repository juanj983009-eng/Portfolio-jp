import fs from 'fs';
import path from 'path';

/**
 * Server-only helper function to dynamically read project gallery images from public/projects/[projectId]/gallery/
 * MUST ONLY be executed in server environments (Server Components, API routes, getStaticProps).
 */
export function getProjectGalleryImages(projectId: string): string[] {
  try {
    const galleryDir = path.join(process.cwd(), 'public', 'projects', projectId, 'gallery');
    
    if (!fs.existsSync(galleryDir)) {
      return [];
    }

    const files = fs.readdirSync(galleryDir);
    const imageExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.svg', '.gif', '.avif']);

    return files
      .filter(file => imageExtensions.has(path.extname(file).toLowerCase()))
      .map(file => `/projects/${projectId}/gallery/${file}`);
  } catch (error) {
    console.error(`Error reading gallery for ${projectId}:`, error);
    return [];
  }
}

/**
 * Helper to enrich a list of project data objects with dynamic gallery images from disk on the server side.
 */
export function getEnrichedProjects<T extends { id: string; slug: string; screenshots?: string[]; coverImage?: string }>(projects: T[]): T[] {
  return projects.map((project) => {
    const dynamicImages = getProjectGalleryImages(project.slug || project.id);
    return { ...project, screenshots: dynamicImages };
  });
}
