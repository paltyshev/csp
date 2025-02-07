'use client'

import React, { useEffect, useRef } from 'react'
import type Typed from 'typed.js'

const AnimatedLocation = () => {
  const el = useRef<HTMLSpanElement>(null)
  const typed = useRef<Typed | null>(null)

  useEffect(() => {
    const loadTyped = async () => {
      const TypedConstructor = (await import('typed.js')).default
      
      if (!el.current) return

      typed.current = new TypedConstructor(el.current, {
        strings: ['Геленджике', 'Краснодаре'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        startDelay: 500,
        loop: true,
        smartBackspace: true,
        showCursor: false,
        onStringTyped: () => {
          if (el.current) {
            el.current.style.opacity = '1'
          }
        },
        preStringTyped: () => {
          if (el.current) {
            el.current.style.opacity = '0.6'
          }
        }
      })
    }

    loadTyped()

    return () => {
      if (typed.current) {
        typed.current.destroy()
      }
    }
  }, [])

  return (
    <span 
      ref={el}
      className="city-highlight px-1 bg-[var(--primary-light)] font-medium text-[var(--primary)] transition-opacity duration-500 ease-in-out"
    />
  )
}

export default AnimatedLocation