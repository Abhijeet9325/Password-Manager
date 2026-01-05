import React from 'react'

const Manager = () => {
    return (
        <>
            <div class="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-300 opacity-20 blur-[100px]"></div></div>
            <div className="  mycontainer pb-3 mx-40  my-10">
                <div className="text mx-12 pt-3 ">
                    <h1 className='text-2xl font-semibold text-center'> <span className='text-green-700'>&lt;</span>
                        Pass
                        <span className='text-green-700'> OP/&gt;</span></h1>
                    <p className='text-center'>Your own password manager</p>
                </div>
                <div className='flex flex-col'>
                    <input className='border border-green-300 rounded-md ' type="text" name="" id="" placeholder='  Enter website URL' />
                    <div className='flex pb-2.5 my-5 justify-around'>
                        <input className='border border-green-300  rounded-md' type="text" name="" id="" />
                        <input className='border border-green-300  rounded-md' type="text" name="" id="" />
                    </div>
                </div>
             

                    <button className='bg-green-400 hover:bg-green-500 font-semibold w-fit justify-center gap-2 items-center flex px-4 border border-green-800 py-1 m-auto rounded-xl cursor-pointer '>
                        <lord-icon
                            src="https://cdn.lordicon.com/gzqofmcx.json"
                            trigger="hover">
                        </lord-icon> Add password</button>
               
            </div>
        </>

    )
}

export default Manager
