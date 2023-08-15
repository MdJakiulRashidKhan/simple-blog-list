
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to My Website!</h1>
        <div className="mt-5">
          <p className="text-lg md:text-2xl">
            Explore my blog to read interesting posts.
          </p>
          <button className="mt-5 px-6 py-3 rounded-full bg-green-400 text-white hover:bg-green-900 transition duration-300">
            <Link href={`/blog`}>Go to Blog</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
