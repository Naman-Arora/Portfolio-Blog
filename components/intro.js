import Link from "next/link";

export default function Intro({ blog }) {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      {blog ? (
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
          <Link href="/">
            <a className="hover:underline pr-4">Naman Arora</a>
          </Link>
        </h1>
      ) : (
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
          Naman Arora
        </h1>
      )}

      <div className="flex tracking-tighter text-2xl font-bold">
        <h3 className="text-center md:text-left mt-5 md:pl-8">
          <Link href="/aboutme">
            <a className="hover:underline pr-4">About Me</a>
          </Link>
        </h3>
        <h3 className="text-center md:text-left mt-5 md:pl-8">
          <Link href="/blog">
            <a
              className={
                blog
                  ? "text-blue-900 hover:underline pr-4"
                  : "hover:underline pr-4"
              }
            >
              Blog
            </a>
          </Link>
        </h3>
        <h3 className="text-center md:text-left mt-5 md:pl-8">
          <Link href="/contact">
            <a className="hover:underline">Contact</a>
          </Link>
        </h3>
      </div>
    </section>
  );
}
