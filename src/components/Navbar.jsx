import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800 py-4'>
            <div className="cont justify-around flex">
            <div className="PassOp text-white font-bold">
                <span className='text-green-700'>&lt;</span>
                Pass
                <span className='text-green-700'> OP/&gt;</span>
            </div>
            <ul>
                <li className='flex gap-3'>
                    <a className='text-white font-semibold' href="/">Home</a>
                    <a className='text-white font-semibold' href="">About</a>
                    <a className='text-white font-semibold' href="">Contact Us</a>
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar
