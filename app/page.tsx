
import Image from 'next/image'

export default function ProfilePage() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <section className="flex items-center mb-10">
        <Image
          src="/lieng ai.jpeg"
          alt="Profile Picture"
          width={100}
          height={100}
          className="rounded-full border-4 border-zinc-200 dark:border-zinc-700 mr-6"
        />
        <div className="flex flex-col justify-center">
        </div>
      </section>
      {/* Summary section */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-3">Summary</h3>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-xl">
          Entrepreneur, LHPer, Monash Alumni, Poker Coach, Airbnb Super Host &amp; a good Soccer player.
        </p>
      </section>





  {/* Work Experience section removed */}



      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-3">Education</h3>
        <div className="flex flex-col gap-6">
          <div className="flex gap-4 items-start">
            <div className="w-14 h-14 bg-zinc-200 rounded-full flex-shrink-0 flex items-center justify-center">
              {/* Placeholder for school logo */}
              <span className="text-2xl text-zinc-400">🎓</span>
            </div>
            <div>
              <div className="font-bold text-lg">Monash University</div>
              <div className="text-zinc-600 dark:text-zinc-400">Bachelor of Commerce (B.Com.), Accounting and Finance</div>
              <div className="text-zinc-500 dark:text-zinc-400 text-sm mb-1">2006 - 2009</div>
              <div className="text-sm"><span className="font-semibold">Skills:</span> Finance · High Pressure · Financial Analysis · Data Analysis · Crypto</div>
            </div>
          </div>
          <div className="border-t border-zinc-200 dark:border-zinc-700 my-2"></div>
          <div className="flex gap-4 items-start">
            <div className="w-14 h-14 bg-zinc-200 rounded-full flex-shrink-0 flex items-center justify-center">
              {/* Placeholder for school logo */}
              <span className="text-2xl text-zinc-400">🎓</span>
            </div>
            <div>
              <div className="font-bold text-lg">Le Hong Phong High school</div>
              <div className="text-zinc-500 dark:text-zinc-400 text-sm mb-1">1998 - 2001</div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-3">Experience</h3>
        <div className="flex flex-col gap-6">
          <div>
            <div className="font-bold">HD Ventures</div>
            <div className="text-zinc-600 dark:text-zinc-400">Managing Director</div>
            <div className="text-zinc-500 dark:text-zinc-400 text-sm mb-1">June 2021 - Present (4 years 3 months)</div>
            <div className="text-sm">Ho Chi Minh City, Vietnam</div>
          </div>
          <div>
            <div className="font-bold">EZYCAR SERVICE</div>
            <div className="text-zinc-600 dark:text-zinc-400">Founder &amp; CEO</div>
            <div className="text-zinc-500 dark:text-zinc-400 text-sm mb-1">May 2018 - March 2020 (1 year 11 months)</div>
            <div className="text-sm">Thao Dien, District 2, Ho Chi Minh City</div>
          </div>
          <div>
            <div className="font-bold">Poker Coach Vietnam</div>
            <div className="text-zinc-600 dark:text-zinc-400">Founder, Poker Coach. Poker Player</div>
            <div className="text-zinc-500 dark:text-zinc-400 text-sm mb-1">July 2013 - December 2017 (4 years 6 months)</div>
            <div className="text-sm">Blue Sapphire Residence Vung Tau</div>
          </div>
          <div>
            <div className="font-bold">Super Host @ Airbnb</div>
            <div className="text-zinc-600 dark:text-zinc-400">Super Host</div>
            <div className="text-zinc-500 dark:text-zinc-400 text-sm mb-1">January 2017 - October 2017 (10 months)</div>
            <div className="text-sm">Vung Tau</div>
          </div>
          <div>
            <div className="font-bold">PetroVietnam Finance Corporation</div>
            <div className="text-zinc-600 dark:text-zinc-400">Corporate Finance Officer</div>
            <div className="text-zinc-500 dark:text-zinc-400 text-sm mb-1">August 2010 - July 2013 (3 years)</div>
            <div className="text-sm">Ho Chi Minh City</div>
          </div>
        </div>
      </section>
        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-3">Education</h3>
          <div className="flex flex-col gap-6">
            <div className="flex gap-4 items-start">
              <div className="w-14 h-14 bg-zinc-200 rounded-full flex-shrink-0 flex items-center justify-center">
                {/* Placeholder for school logo */}
                <span className="text-2xl text-zinc-400">🎓</span>
              </div>
              <div>
                <div className="font-bold text-lg">Monash University</div>
                <div className="text-zinc-600 dark:text-zinc-400">Bachelor of Commerce (B.Com.), Accounting and Finance</div>
                <div className="text-zinc-500 dark:text-zinc-400 text-sm mb-1">2006 - 2009</div>
                <div className="text-sm"><span className="font-semibold">Skills:</span> Finance · High Pressure · Financial Analysis · Data Analysis · Crypto</div>
              </div>
            </div>
            <div className="border-t border-zinc-200 dark:border-zinc-700 my-2"></div>
            <div className="flex gap-4 items-start">
              <div className="w-14 h-14 bg-zinc-200 rounded-full flex-shrink-0 flex items-center justify-center">
                {/* Placeholder for school logo */}
                <span className="text-2xl text-zinc-400">🎓</span>
              </div>
              <div>
                <div className="font-bold text-lg">Le Hong Phong High school</div>
                <div className="text-zinc-500 dark:text-zinc-400 text-sm mb-1">1998 - 2001</div>
              </div>
            </div>
          </div>
        </section>
    </main>
  )
}
