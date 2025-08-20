'use client'

import { useLanguage } from '@/contexts/language-context'

export function ProfileContent() {
  const { t } = useLanguage()

  return (
    <>
      {/* Summary section */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-3">{t('summary.title')}</h3>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-xl">
          {t('summary.description')}
        </p>
      </section>

      {/* Experience section */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-3">{t('experience.title')}</h3>
        <div className="flex flex-col gap-6">
          <div>
            <div className="font-bold">{t('experience.hd_ventures.title')}</div>
            <div className="text-zinc-600 dark:text-zinc-400">{t('experience.hd_ventures.role')}</div>
            <div className="text-zinc-500 dark:text-zinc-400 text-sm mb-1">{t('experience.hd_ventures.duration')}</div>
            <div className="text-sm">{t('experience.hd_ventures.location')}</div>
          </div>
          <div>
            <div className="font-bold">{t('experience.ezycar.title')}</div>
            <div className="text-zinc-600 dark:text-zinc-400">{t('experience.ezycar.role')}</div>
            <div className="text-zinc-500 dark:text-zinc-400 text-sm mb-1">{t('experience.ezycar.duration')}</div>
            <div className="text-sm">{t('experience.ezycar.location')}</div>
          </div>
          <div>
            <div className="font-bold">{t('experience.poker_coach.title')}</div>
            <div className="text-zinc-600 dark:text-zinc-400">{t('experience.poker_coach.role')}</div>
            <div className="text-zinc-500 dark:text-zinc-400 text-sm mb-1">{t('experience.poker_coach.duration')}</div>
            <div className="text-sm">{t('experience.poker_coach.location')}</div>
          </div>
          <div>
            <div className="font-bold">{t('experience.airbnb.title')}</div>
            <div className="text-zinc-600 dark:text-zinc-400">{t('experience.airbnb.role')}</div>
            <div className="text-zinc-500 dark:text-zinc-400 text-sm mb-1">{t('experience.airbnb.duration')}</div>
            <div className="text-sm">{t('experience.airbnb.location')}</div>
          </div>
          <div>
            <div className="font-bold">{t('experience.petrovietnam.title')}</div>
            <div className="text-zinc-600 dark:text-zinc-400">{t('experience.petrovietnam.role')}</div>
            <div className="text-zinc-500 dark:text-zinc-400 text-sm mb-1">{t('experience.petrovietnam.duration')}</div>
            <div className="text-sm">{t('experience.petrovietnam.location')}</div>
          </div>
        </div>
      </section>
      
      {/* Education section */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-3">{t('education.title')}</h3>
        <div className="flex flex-col gap-6">
          <div className="flex gap-4 items-start">
            <div className="w-14 h-14 bg-zinc-200 rounded-full flex-shrink-0 flex items-center justify-center">
              {/* Placeholder for school logo */}
              <span className="text-2xl text-zinc-400">🎓</span>
            </div>
            <div>
              <div className="font-bold text-lg">{t('education.monash.title')}</div>
              <div className="text-zinc-600 dark:text-zinc-400">{t('education.monash.degree')}</div>
              <div className="text-zinc-500 dark:text-zinc-400 text-sm mb-1">{t('education.monash.duration')}</div>
              <div className="text-sm"><span className="font-semibold">{t('education.monash.skills')}</span> {t('education.monash.skills_list')}</div>
            </div>
          </div>
          <div className="border-t border-zinc-200 dark:border-zinc-700 my-2"></div>
          <div className="flex gap-4 items-start">
            <div className="w-14 h-14 bg-zinc-200 rounded-full flex-shrink-0 flex items-center justify-center">
              {/* Placeholder for school logo */}
              <span className="text-2xl text-zinc-400">🎓</span>
            </div>
            <div>
              <div className="font-bold text-lg">{t('education.lhp.title')}</div>
              <div className="text-zinc-500 dark:text-zinc-400 text-sm mb-1">{t('education.lhp.duration')}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}