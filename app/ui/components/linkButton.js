'use client';
import React from "react";
import { usePathname } from 'next/navigation'
import Link from 'next/link';

export default function LinkButton({href, name}) {
    const pathname = usePathname();
    return <Link className={`${pathname.includes(name.toLowerCase().replace(' ','')) || pathname==='/'&&name==='Home' ? 'font-bold border-b-4 border-b-green-400 text-green-400' : 'text-black/[0.5]'} inline-block mt-5 mr-5 pb-5 hover:text-green-400`} href={href}>{name}</Link>
}