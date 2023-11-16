'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { LiaRobotSolid } from "react-icons/lia";

const NavBar = () => {
    const currentPath = usePathname();

    const links = [
        { label: 'Dashboard', href: '/'},
        { label: 'Issues', href:'/issues'},
    ]

    return (
        <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
            <Link href="/"><LiaRobotSolid /></Link>
            <ul className='flex space-x-6'>
                {links.map(link => 
                    <Link 
                      key={link.href} 
                      className={`${link.href === currentPath ? 'text-zinc-700' : 'text-zinc-300'} hover:text-zinc-600 transition-colors` }
                      href={link.href}>{link.label}</Link>)}
            </ul>
        </nav>
    )
}

export default NavBar