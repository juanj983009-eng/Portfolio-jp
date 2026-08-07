import fs from "fs";
import path from "path";

/**
 * Server-only helper function to dynamically read project gallery images from public/projects/[projectId]/gallery/
 * MUST ONLY be executed in server environments (Server Components, API routes, getStaticProps).
 */
export function getProjectGalleryImages(projectId: string): string[] {
  try {
    // Project ids are used as a filesystem path segment. Do not allow a caller to
    // escape the projects directory (e.g. with `../`).
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/i.test(projectId)) {
      return [];
    }

    const galleryDir = path.join(
      process.cwd(),
      "public",
      "projects",
      projectId,
      "gallery",
    );

    if (!fs.existsSync(galleryDir)) {
      return [];
    }

    const files = fs.readdirSync(galleryDir, { withFileTypes: true });
    const imageExtensions = new Set([
      ".jpg",
      ".jpeg",
      ".png",
      ".webp",
      ".svg",
      ".gif",
      ".avif",
    ]);

    return [
      ...new Set(
        files
          .filter(
            (file) =>
              file.isFile() &&
              imageExtensions.has(path.extname(file.name).toLowerCase()),
          )
          .map((file) => file.name)
          .sort((a, b) =>
            a.localeCompare(b, undefined, {
              numeric: true,
              sensitivity: "base",
            }),
          )
          .map(
            (file) =>
              `/projects/${projectId}/gallery/${encodeURIComponent(file)}`,
          ),
      ),
    ];
  } catch (error) {
    console.error(`Error reading gallery for ${projectId}:`, error);
    return [];
  }
}

/**
 * Helper to enrich a list of project data objects with dynamic gallery images from disk on the server side.
 */
export function getEnrichedProjects<
  T extends {
    id: string;
    slug: string;
    screenshots?: string[];
    coverImage?: string;
  },
>(projects: T[]): T[] {
  return projects.map((project) => {
    const dynamicImages = getProjectGalleryImages(project.slug || project.id);
    // Vercel serves /public assets statically, but those files are not always
    // available to a serverless function through fs. Keep the declared static
    // paths when the directory scan cannot provide an image.
    return {
      ...project,
      screenshots:
        dynamicImages.length > 0 ? dynamicImages : (project.screenshots ?? []),
    };
  });
}
