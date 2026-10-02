import Image from "next/image";
import type { Project } from "@/lib/data";

export function ProjectCard({
  project,
  detailed = false,
}: {
  project: Project;
  detailed?: boolean;
}) {
  return (
    <article className="card card-hover overflow-hidden">
      <div className="relative h-44">
        <Image
          src={`/projects/${project.pid}.jpg`}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-black/15" />
        <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
          {project.cat}
        </span>
        {project.year && (
          <span className="absolute bottom-3 right-4 text-xs font-medium text-white/90">
            {project.year}
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-balance text-lg font-bold leading-snug tracking-tight">
          {project.name}
        </h3>

        {detailed ? (
          <dl className="mt-5 space-y-2 border-t border-line pt-4 text-[13px] text-muted">
            <div className="flex justify-between gap-3">
              <dt>Location</dt>
              <dd className="text-right font-medium text-ink">{project.loc}</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt>Client</dt>
              <dd className="text-right font-medium text-ink">{project.client}</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt>Value</dt>
              <dd className="text-right font-bold text-brick">{project.cost}</dd>
            </div>
          </dl>
        ) : (
          <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4 text-[13px] text-muted">
            <span>{project.loc}</span>
            <span className="font-bold text-brick">{project.cost}</span>
          </div>
        )}
      </div>
    </article>
  );
}
