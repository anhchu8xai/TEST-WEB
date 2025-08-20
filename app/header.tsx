'use client'
import { TextEffect } from '@/components/ui/text-effect'
import { LanguageToggle } from '@/components/ui/language-toggle'
import { useLanguage } from '@/contexts/language-context'
import Link from 'next/link'

export function Header() {
  const { t } = useLanguage()
  
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          {t('header.name')}
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          {t('header.title')}
        </TextEffect>
      </div>
      <div className="flex items-center">
        <LanguageToggle />
      </div>
    </header>
  )
}
