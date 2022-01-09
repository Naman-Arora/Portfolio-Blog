//The header for all the websites except the blog home page and the index page

import Link from 'next/link'
import Container from './container'


export default function Header({aboutme, blog, contact}) {

  return (
    <header className='bg-accent-7 border-t border-t-accent-7' >
      <Container>
    <div className='flex-col md:flex-row flex items-center md:justify-between mt-10 mb-10 md:mb-10 py-4 '>
    <h2 className="text-6xl md:text-6xl font-bold leading-tight mb-10 mt-0 font-baron" >
      <Link href="/">
        <a className="hover:underline">Naman Arora</a>
      </Link>
    </h2>
    <div className='flex tracking-tighter text-2xl font-bold'>
        <h3 className="text-center md:text-left mb-10 md:pl-8">
          <Link href="/aboutme">
            <a className={aboutme ? ("text-blue-400 hover:underline pr-4") : ("hover:underline pr-4")} >About Me</a>
          </Link>
        </h3>
        <h3 className="text-center md:text-left mb-10 md:pl-8">
          <Link href="/blog">
            <a className={blog ? ("text-blue-400 hover:underline pr-4") : ("hover:underline pr-4")}>Blog</a>
          </Link>
        </h3>
        <h3 className="text-center md:text-left mb-10 md:pl-8">
          <Link href="/contact">
            <a className={contact ? ("text-blue-400 hover:underline pr-4") : ("hover:underline pr-4")}>Contact</a>
          </Link>
        </h3>
      </div>
    </div>
    </Container>
    </header>
  )
}
