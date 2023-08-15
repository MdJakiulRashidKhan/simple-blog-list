import React from 'react';
import Link from 'next/link';
const Navbar = () => {
    return (
        <div className='container justify-center mt-10'>
            <nav>
                <ul className={`flex justify-center bg-slate-500 p-5`}>
                    <li className="mr-10 text-base cursor-pointer py-2 px-5 text-white hover:text-red-800 hover:bg-lime-300"><Link href={`/`}>Home</Link></li>
                    <li className="mr-10 text-base cursor-pointer py-2 px-5 text-white hover:text-red-800 hover:bg-lime-300"><Link href={`/blog`}>Blog</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;