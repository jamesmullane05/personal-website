import Image from 'next/image';
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          width={150}
          height={150}
          className="mb-8 rounded-full "
        />
        
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <h1 className="text-5xl font-bold text-black dark:text-white sm:text-6xl">Welcome to My Website</h1>
          <h2 className="text-2xl text-gray-700 dark:text-gray-300 sm:text-3xl"> James Mullane</h2>
        </div>

        <button className="mt-8 rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
          <a href="/cv.pdf" download="cv.pdf">Click Here to Download My CV</a>
        </button>
      </main>
    </div>
  );
}
