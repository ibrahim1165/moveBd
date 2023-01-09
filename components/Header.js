import Image from 'next/image'
import React from 'react'
import logo from '../public/logo (3).png'
import HeaderItem from './HeaderItem';
export const Header = () => {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
            <div className='lg:flex flex-grow justify-evenly max-w-2xl hidden lg:block'>
                <HeaderItem title="HOME"  />
                <HeaderItem title="About"   />
                <HeaderItem title="Contact"  />
                <HeaderItem title="Theme" />
                <HeaderItem title="Login"  />
                <HeaderItem title="SingIn"  />
            </div>
            <Image src={logo}
                width={130}
                height={120}
                className='object-contain'
                alt='logo'
            />
        </header>
    )
}
