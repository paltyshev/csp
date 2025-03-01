import React from 'react'
import { Quote } from 'lucide-react'

interface TestimonialProps {
  text: string
  author: string
  position?: string
}

export default function Testimonial({ text, author, position }: TestimonialProps) {
  return (
    <div className="relative bg-[var(--muted)] rounded-lg p-6 mt-8">
      <div className="absolute -top-5 left-6 bg-[var(--primary)] rounded-full p-2 text-white">
        <Quote className="w-5 h-5" />
      </div>
      <div className="pt-2">
        <p className="text-[var(--foreground)] italic mb-4">
          &ldquo;{text}&rdquo;
        </p>
        <div className="flex items-center">
          <div>
            <p className="font-semibold text-[var(--foreground)]">{author}</p>
            {position && (
              <p className="text-sm text-[var(--muted-foreground)]">
                {position}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}