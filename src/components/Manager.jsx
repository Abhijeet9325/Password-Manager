import React from 'react'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const [form, setForm] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])


    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])
    const copyText = (text) => {
        navigator.clipboard.writeText(text)
        toast('Copy To Clipboard!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }


    const savePassword = () => {
        if(!form.site || !form.username || !form.password){
            toast.error("Please fill all fields!",{
                position : 'top-right',
                autoClose : 2500,
                theme : "dark"
            });
            return;
        }
        toast.success("Password saved successfully!",{
            position : 'top-right',
            autoClose : 2500,
            theme : "dark"
        })
        setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
        console.log(passwordArray);
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
        
    }

    const deletePassword = (id) => {
        let conf = confirm("Do you really want to confirm delete this password?")
        if(conf){
            console.log("deleting id with password", id);
            setPasswordArray(passwordArray.filter(item => item.id !== id));
            localStorage.setItem("passwords",JSON.stringify(passwordArray.filter(item => item.id !== id)))
        }
    }
    const editPassword = (id) => {
        console.log("editing id with password", id);
        setForm(passwordArray.filter(i=>i.id === id)[0])
         setPasswordArray(passwordArray.filter(item => item.id !== id));
    }
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"

            />
            <div class="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-300 opacity-20 blur-[100px]"></div></div>
            <div className="  mycontainer pb-3 mx-40  my-10">
                <div className="text mx-12 pt-3 ">
                    <h1 className='text-2xl font-semibold text-center '> <span className='text-green-700'>&lt;</span>
                        Pass
                        <span className='text-green-700'> OP/&gt;</span></h1>
                    <p className='text-center '>Your own password manager</p>
                </div>
                <div className='flex flex-col'>
                    <input value={form.site} onChange={handleChange} className='border bg-white border-green-300 rounded-md ' type="text" name="site" id=""  placeholder='  Enter website URL' />
                    <div className='flex pb-2.5 my-5 justify-around gap-1'>
                        <input value={form.username} onChange={handleChange} className='border bg-white border-green-300  rounded-md' type="text"   placeholder=' Enter username' name="username" id="" />
                        <input value={form.password} onChange={handleChange} className='border bg-white border-green-300  rounded-md' type="password"  placeholder=' Enter password' name="password" id="" />
                    </div>
                </div>


                <button onClick={savePassword} className='bg-green-400 hover:bg-green-500 font-semibold w-fit justify-center  gap-2 items-center  flex px-4 border border-green-800 py-1 m-auto rounded-xl cursor-pointer '>
                    <lord-icon
                        src="https://cdn.lordicon.com/gzqofmcx.json"
                        trigger="hover">
                    </lord-icon> Save password</button>

            </div>
            <div className="showpasswordtable ">
                <h2 className='ml-[20vw] font-bold text-lg mb-2'>Your passwords</h2>
              
                {passwordArray.length === 0 && <div className='text-center'>No password shows here</div>}
                {passwordArray.length != 0 &&

                    <table className="table-auto w-[70%] mx-auto my-8 rounded-xl overflow-hidden">
                        <thead className="bg-green-800  text-white text-lg">
                            <tr>
                                <th className="py-2 border-1 border-slate-300 px-6 ">Site</th>
                                <th className="py-2 border-1 border-slate-300  px-6 ">Username</th>
                                <th className="py-2 border-1 border-slate-300  px-6 ">Password</th>
                                <th className="py-2 border-1 border-slate-300  px-6 ">Actions</th>
                            </tr>
                        </thead>

                        <tbody className="bg-green-100">
                            {passwordArray.map((item, index) => (
                                <tr
                                    key={index}

                                >
                                    {/* SITE */}
                                    <td className="py-2 px-4 border-1 border-white max-w-[200px]">
                                        <div onClick={() => { copyText(item.site) }} className="lordiconcopy flex items-center justify-between ml-12 ">
                                            <a
                                                href={
                                                    item.site.trim().startsWith("http")
                                                        ? item.site.trim()
                                                        : `https://${item.site.trim()}`
                                                }
                                                target="_blank"
                                                className="text-green-900 font-medium truncate max-w-[180px]"
                                            >
                                                {item.site}
                                            </a>
                                            <lord-icon
                                                style={{ height: "20px", width: "20px", cursor: "pointer" }}
                                                src="https://cdn.lordicon.com/xuoapdes.json"
                                                trigger="hover"
                                            />
                                        </div>
                                    </td>

                                    {/* USERNAME */}
                                    <td className="py-3 px-6 border-1 border-white">
                                        <div onClick={() => { copyText(item.username) }} className="lordiconcopy flex items-center justify-between">
                                            <span className="truncate max-w-[160px]">
                                                {item.username}
                                            </span>
                                            <lord-icon
                                                style={{ height: "20px", width: "20px", cursor: "pointer" }}
                                                src="https://cdn.lordicon.com/xuoapdes.json"
                                                trigger="hover"
                                            />
                                        </div>
                                    </td>

                                    {/* PASSWORD */}
                                    <td className="py-3 px-6 border-1 border-white">
                                        <div onClick={() => { copyText(item.password) }} className="lordiconcopy flex items-center justify-between">
                                            <span className="tracking-widest">
                                                {item.password}
                                            </span>
                                            <lord-icon
                                                style={{ height: "20px", width: "20px", cursor: "pointer" }}
                                                src="https://cdn.lordicon.com/xuoapdes.json"
                                                trigger="hover"
                                            />
                                        </div>
                                    </td>
                                    {/* {*Actions} */}
                                    <td className="py-2 px-4 border-1 border-white max-w-[135px]  gap-3">
                                        <div className="actioncontainer flex gap-4">
                                            <div className="Edit gap-2 font-semibold cursor-pointer flex items-center text-center" onClick={() => { editPassword(item.id) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/exymduqj.json"
                                                    trigger="hover"
                                                    colors="primary:#000000,secondary:#000000"
                                                    stroke="bold"
                                                    style={{ width: "20px", height: "20px" }}>
                                                </lord-icon>
                                                Edit
                                            </div>
                                            <div className="Delete gap-1 font-semibold cursor-pointer flex items-center text-center" onClick={() => { deletePassword(item.id) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/jzinekkv.json"
                                                    trigger="hover"
                                                    colors="primary:#000000,secondary:#000000"
                                                    stroke="bold"
                                                    style={{ width: "18px", height: "18px" }}>
                                                </lord-icon>
                                                Delete
                                            </div>
                                        </div>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                }
            </div>
        </>

    )
}

export default Manager
