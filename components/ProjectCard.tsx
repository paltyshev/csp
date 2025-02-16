import React from 'react';
import { Clock, Home, Wrench } from 'lucide-react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  type: string;
  area: string;
  duration: string;
  description: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  type,
  area,
  duration,
  description,
  image
}) => {
  return (
    <div className="border border-[var(--border)] rounded-lg overflow-hidden hover:border-[var(--primary)] transition-colors">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={85}
          priority
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[var(--foreground)] mb-4">
          {title}
        </h3>
        <div className="flex flex-wrap gap-3 mb-4">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-sm">
            <Wrench className="w-4 h-4" />
            {type}
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--secondary)] text-[var(--secondary-foreground)] text-sm">
            <Home className="w-4 h-4" />
            {area}
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)] text-sm">
            <Clock className="w-4 h-4" />
            {duration}
          </span>
        </div>
        <p className="text-[var(--muted-foreground)] mb-4">
          {description}
        </p>
        <button className="text-[var(--primary)] hover:underline">
          Подробнее
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;