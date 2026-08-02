import { NextResponse } from "next/server";
import { PROJECTS } from "@/config/projects";
import { getEnrichedProjects } from "@/lib/server/gallery";

export const dynamic = "force-dynamic";

/** Server boundary for client project views: gallery paths always come from disk. */
export function GET() {
  return NextResponse.json(getEnrichedProjects(PROJECTS));
}
