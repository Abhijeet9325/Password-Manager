import React from 'react'
import { useState, useEffect } from 'react'

const Manager = () => {
    const [form, setForm] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])


    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])

    const savePassword = () => {
        setPasswordArray([...passwordArray, form])
        console.log(passwordArray);
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
    }
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div class="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-300 opacity-20 blur-[100px]"></div></div>
            <div className="  mycontainer pb-3 mx-40  my-10">
                <div className="text mx-12 pt-3 ">
                    <h1 className='text-2xl font-semibold text-center '> <span className='text-green-700'>&lt;</span>
                        Pass
                        <span className='text-green-700'> OP/&gt;</span></h1>
                    <p className='text-center '>Your own password manager</p>
                </div>
                <div className='flex flex-col'>
                    <input value={form.site} onChange={handleChange} className='border bg-white border-green-300 rounded-md ' type="text" name="site" id="" placeholder='  Enter website URL' />
                    <div className='flex pb-2.5 my-5 justify-around gap-1'>
                        <input value={form.username} onChange={handleChange} className='border bg-white border-green-300  rounded-md' type="text" placeholder=' Enter username' name="username" id="" />
                        <input value={form.password} onChange={handleChange} className='border bg-white border-green-300  rounded-md' type="password" placeholder=' Enter password' name="password" id="" />
                    </div>
                </div>


                <button onClick={savePassword} className='bg-green-400 hover:bg-green-500 font-semibold w-fit justify-center  gap-2 items-center  flex px-4 border border-green-800 py-1 m-auto rounded-xl cursor-pointer '>
                    <lord-icon
                        src="https://cdn.lordicon.com/gzqofmcx.json"
                        trigger="hover">
                    </lord-icon> Add password</button>

            </div>
            <div className="showpasswordtable">
                <h2 className='ml-[20vw] font-bold text-lg mb-2'>Your passwords</h2>
                {passwordArray.length === 0 && <div className='text-center'>No passwords show here</div>}
                {passwordArray.length != 0 &&

                    <table class="table-auto w-[60vw] rounded-md overflow-hidden m-auto  ">
                        <thead className='bg-green-800  text-white'>
                            <tr>
                                <th>Site</th>
                                <th>Username</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100  '>
                            {passwordArray.map((item) => {
                                return<><tr>
                                <td className='py-2 border border-white text-center w-32 '>{item.site} </td>
                                <td className='py-2 border border-white text-center w-30'>{item.username}</td>
                                <td className='py-2 border border-white text-center w-30'>{item.password}</td>
                            </tr>
                            </>
                            })}
                            {/* <tr>
                            <td className='py-2 border border-white text-center w-30'>Witchy Woman</td>
                            <td className='py-2 border border-white text-center w-30'>The Eagles</td>
                            <td className='py-2 border border-white text-center w-30'>1972</td>
                        </tr>
                        <tr>
                            <td className='py-2 border border-white text-center w-30'>Shining Star</td>
                            <td className='py-2 border border-white text-center w-30'>Earth, Wind, and Fire</td>
                            <td className='py-2 border border-white text-center w-30'>1975</td>
                        </tr> */}
                        </tbody>
                    </table>
                }
            </div>
        </>

    )
}

export default Manager
