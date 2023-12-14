import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/router'

const CustomLink = ({href, title, classname = ''}) => {
  const router = useRouter();
    return (
        <Link href={href} className= {`${classname} relative group`}>
            { title }
            <span
            className={`h-[1px] inline-block w-0 bg-black absolute left-0 bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}
            >&nbsp;</span>
        </Link>
    )
}
const Navbar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
     <nav>
        <CustomLink href= "/" title= 'Home' classname='mr-4'/> 
        <CustomLink href="/about" title= 'About' classname='mx-4'/>
        <CustomLink href="/projects" title= 'Projects' classname='mx-4'/>
        <CustomLink href="/articles"  title= 'Articles' classname='ml-4'/>
     </nav>
     <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
     </div>
     <nav>
        Social Links
        {/* <Link href="/"> Home </Link>
        <Link href="/about"> About </Link>
        <Link href="/projects"> Projects </Link>
        <Link href="/articles"> Articles </Link> */}
     </nav>
    </header>
  )
}

export default Navbar