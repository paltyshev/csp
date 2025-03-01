import React from 'react';
import { Clock, Home, Wrench, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  id: number;
  title: string;
  type: string;
  area: string;
  duration: string;
  description: string;
  image: string;
  location?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  type,
  area,
  duration,
  description,
  image,
  location
}) => {
  return (
    <div className="group border border-[var(--border)] rounded-lg overflow-hidden hover:border-[var(--primary)] hover:shadow-md transition-all duration-300">
      <Link href={`/portfolio/${id}`}>
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={85}
            priority={id <= 3}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          
          {/* Тип проекта как бейдж поверх изображения */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/60 text-white text-sm backdrop-blur-sm">
              <Wrench className="w-3 h-3" />
              {type}
            </span>
          </div>
        </div>
      </Link>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
            <Link href={`/portfolio/${id}`}>
              {title}
            </Link>
          </h3>
          <Link href={`/portfolio/${id}`} className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--muted)] group-hover:bg-[var(--primary)] text-[var(--foreground)] group-hover:text-white transition-colors">
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        {/* Характеристики проекта */}
        <div className="flex flex-wrap gap-y-2 gap-x-4 mb-4">
          <span className="inline-flex items-center gap-1 text-[var(--muted-foreground)] text-sm">
            <Home className="w-4 h-4" />
            {area}
          </span>
          <span className="inline-flex items-center gap-1 text-[var(--muted-foreground)] text-sm">
            <Clock className="w-4 h-4" />
            {duration}
          </span>
          {location && (
            <span className="text-[var(--muted-foreground)] text-sm">
              {location}
            </span>
          )}
        </div>
        
        <p className="text-[var(--muted-foreground)] mb-4 line-clamp-2">
          {description}
        </p>
        
        <Link 
          href={`/portfolio/${id}`} 
          className="text-[var(--primary)] hover:text-[var(--primary-hover)] inline-flex items-center text-sm font-medium"
        >
          Подробнее
          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;