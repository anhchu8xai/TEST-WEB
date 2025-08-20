
import Image from 'next/image'
import { ProfileContent } from './profile-content'

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
        <div className="flex flex-col justify-center" />
      </section>
      
      <ProfileContent />
    </main>
  )
}
