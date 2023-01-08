import Image from 'next/image'
import React from 'react'
import logo from '../public/logo.png'
import HeaderItem from './HeaderItem';
export const Header = () => {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <HeaderItem title="HOME"  />
                <HeaderItem title="HOME"   />
                <HeaderItem title="HOME"  />
                <HeaderItem title="HOME" />
                <HeaderItem title="HOME"  />
                <HeaderItem title="HOME"  />
            </div>
            <Image src={logo}
                width={100}
                height={100}
                className='object-contain'
                alt='logo'
            />
        </header>
    )
}
