import React from 'react';

const HeaderItem = ({title}) => {
    return (
        <div className='flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white'>
            <p >{title}</p>
        </div>
    );
};

export default HeaderItem;