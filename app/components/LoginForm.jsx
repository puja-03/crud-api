"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const LoginForm = () => {
    const router = useRouter();
    const [username,setUsername] = useState("");
    const [password ,setPassword] = useState("");

    const handleSubmit = async (e)=>{
        e.preventDefault()
        let records = ({username,password});
        let data =await fetch("http://localhost:3000/api/admin/login",{method:"POST",body:JSON.stringify(records)});
        let res = await data.json();
        if(res.success){
            router.push("/");
        }
        else{
            alert(res.msg);
        }
    }
  return (
    <div className="justify-center mt-10 flex  ">
          <form  onSubmit={handleSubmit} method="POST" encType='multipart/form-data' className="border p-5 w-1/3 rounded">
            <h2 className="text-5xl"> Login  Here  </h2>
            <div className="mb-3 mt-7 flex flex-col gap-3">
              <label htmlFor="username">UserName</label>
              <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}  className="border text-black w-full rounded px-2 py-2" placeholder="enter your Username"/>
            </div>
            <div className="mb-3 flex flex-col gap-3">
              <label htmlFor="password">Password</label>
              <input type="passsword"  value={password} onChange={(e)=>setPassword(e.target.value)}  className="border text-black rounded w-full px-2 py-2" placeholder="enter your "/>
            </div>
        
            <div className="mb-3 flex flex-1 justify-between">
              <button type="submit"  className="bg-red-500 rounded text-white px-3 py-3 w-full ">Login Here</button>
            </div>
            <a href='/signup'>create an account</a>
          </form>
        </div>
  )
}

export default LoginForm