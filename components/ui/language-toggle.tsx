'use client'

import { AnimatedBackground } from '@/components/ui/animated-background'
import { GlobeIcon } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import { useEffect, useState } from 'react'

const LANGUAGE_OPTIONS = [
  {
    label: 'English',
    id: 'en',
    flag: '🇺🇸',
  },
  {
    label: 'Tiếng Việt',
    id: 'vi',
    flag: '🇻🇳',
  },
]

export function LanguageToggle() {
  const [mounted, setMounted] = useState(false)
  const { language, setLanguage } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex items-center gap-2">
      <GlobeIcon className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
      <AnimatedBackground
        className="pointer-events-none rounded-lg bg-zinc-100 dark:bg-zinc-800"
        defaultValue={language}
        transition={{
          type: 'spring',
          bounce: 0,
          duration: 0.2,
        }}
        enableHover={false}
        onValueChange={(id) => {
          setLanguage(id as 'en' | 'vi')
        }}
      >
        {LANGUAGE_OPTIONS.map((lang) => {
          return (
            <button
              key={lang.id}
              className="inline-flex h-8 px-3 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50 text-sm font-medium"
              type="button"
              aria-label={`Switch to ${lang.label}`}
              data-id={lang.id}
            >
              <span className="mr-1">{lang.flag}</span>
              {lang.id.toUpperCase()}
            </button>
          )
        })}
      </AnimatedBackground>
    </div>
  )
}