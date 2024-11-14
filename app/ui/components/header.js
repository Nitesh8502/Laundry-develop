import React from 'react'
import Image from 'next/image';
import logo from '../../images/logo.png';
import LinkButton from './linkButton';
import Link from 'next/link';
import { NAVIGATION } from '@/app/utilities/staticData';

export default function Header() {
    const Button = ({children, ...props}) => {
      return <button {...props}>{children}</button>
    }
    return <nav>
        <div className='flex justify-between ml-20 mr-20 navBar'>
          <Link className='p-5' href='/'><Image src={logo} alt='logo' width={133} height={37}/></Link>
          <div>
          {NAVIGATION.map((nav, idx) => <LinkButton key={idx} href={nav.href} name={nav.name} />)}
          <Button className='m-3 pl-5 pr-5  pt-3 pb-3  profile'>Profile</Button>
          <Button className='m-3 pl-5 pr-5  pt-3 pb-3 franchise'>Franchise</Button>
          </div>
        </div>
    </nav>
}