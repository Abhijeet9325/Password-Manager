import React from 'react'

const Manager = () => {
    return (
        <>
            <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
            <div className=" bg-slate-50 mycontainer pb-3 mx-40  my-20">
                <div className="text mx-12 pt-3 ">
                    <h1 className='text-2xl font-semibold text-center'> <span className='text-green-700'>&lt;</span>
                        Pass
                        <span className='text-green-700'> OP/&gt;</span></h1>
                    <p className='text-center'>Your own password manager</p>
                </div>
                <div className='flex flex-col'>
                    <input className='bg-green-100 rounded-full ' type="text" name="" id="" placeholder='Enter a url' />
                    <div className='flex pb-2.5 my-5 justify-around'>
                        <input className='bg-green-100 rounded-full' type="text" name="" id="" />
                        <input className='bg-green-100 rounded-full' type="text" name="" id="" />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Manager
