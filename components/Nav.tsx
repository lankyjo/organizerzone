'use client'

import Link from "next/link"
import { useEffect, useState } from "react";

const Nav = () => {
    const navItems =[
        {
            link: 'home', linkTo: '/'
        },
        {
            link: 'about', linkTo: '/'
        },
        {
            link: 'page', linkTo: '/'
        },
        {
            link: 'post', linkTo: '/'
        },
        {
            link: 'contact', linkTo: '/'
        },
    ]

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 10);
          console.log(window.scrollY);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

  return (
    <header className={`fixed top-0 w-full p-4 transition-all duration-300 z-50 ${
        isScrolled ? "bg-gray-600 shadow-md" : "bg-transparent"
      }`}>
        <nav className="flex justify-between">
            <div id="logo" className="flex items-center gap-10">
                <h1 className="text-3xl uppercase font-bold">
                <span className="text-primary">O</span>rganizer
                </h1>

                <ul className="flex gap-4">
                    {navItems.map((navItem)=> (
                        <li className="font-semibold uppercase" key={navItem.link}><Link href={navItem.linkTo}>{navItem.link}</Link></li>
                    ))}
                </ul>
            </div>
            
            <button id="CTA" className="px-5 py-2 bg-primary text-gray-950 rounded-3xl cursor-pointer duration-200 hover:text-white">
                <Link href="/">Get started</Link>
            </button>
        </nav>
    </header>
  )
}

export default Nav