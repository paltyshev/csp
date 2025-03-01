import React from 'react'
import { Tag } from 'lucide-react'
import Link from 'next/link'

interface ProjectTagsProps {
  tags: string[]
}

export default function ProjectTags({ tags }: ProjectTagsProps) {
  if (!tags || tags.length === 0) return null
  
  return (
    <div className="mt-6">
      <div className="flex items-center gap-2 mb-3">
        <Tag className="w-4 h-4 text-[var(--muted-foreground)]" />
        <span className="text-sm text-[var(--muted-foreground)]">Теги:</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Link
            key={index}
            href={`/portfolio?tag=${encodeURIComponent(tag)}`}
            className="px-3 py-1 text-xs rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90 transition-colors"
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  )
}