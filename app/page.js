import React from 'react'

import { redirect } from 'next/navigation';
import Link from 'next/link';

const page = async () => {
  const  res = await fetch("http://localhost:3000/api/record/" ,{cache:"no-cache"});
  const records = await res.json()
  
  const handleSubmit = async(formdata)=>{
    "use server"
     let name = formdata.get("name");
     let contact = formdata.get("contact")
     let city= formdata.get("city")
     let email = formdata.get("email")
     let data = {name,contact,city,email}

    const  res= await fetch("http://localhost:3000/api/record/" ,{method:"POST",body:JSON.stringify(data)});
   const records = await res.json()
   redirect("/")
  
  }
  const handleDelete = async(id,formdata)=>{
    "use server"
    const res = await fetch(`http://localhost:3000/api/record/${id}`,{method:"DELETE"})
    const records = await res.json()
   redirect("/");
  }

  return (
    <div>

      <div className="flex px-10 py-5 gap-10">
        <div className="w-1/3">
          <form action={handleSubmit} method="POST" className="border p-5 rounded">
            <div className="mb-3 flex flex-col gap-3">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" className="border text-black w-full rounded px-2 py-2" placeholder="enter your name"/>
            </div>
            <div className="mb-3 fl ex flex-col gap-3">
              <label htmlFor="contact">contact</label>
              <input type="text" id="contact" name="contact" className="border text-black rounded w-full px-2 py-2" placeholder="enter your contact"/>
            </div>
            <div className="mb-3 flex flex-col gap-3">
              <label htmlFor="city">city</label>
              <input type="text" id="city" name="city" className="border rounded text-black w-full px-2 py-2" placeholder="enter your city"/>
            </div>
            <div className="mb-3 flex flex-col gap-3">
              <label htmlFor="email">email</label>
              <input type="text" id="email" name="email" className="border text-black rounded w-full px-2 py-2" placeholder="enter your email"/>
            </div>
            <div className="mb-3 flex flex-1">
              <button type="submit" className="bg-red-500 rounded text-white px-3 py-3 w-full">create Record</button>
            </div>
          </form>
        </div>
        <div className="w-2/3">
          <table className="border w-full rounded p-4">
            <thead>
              <tr>
              <th className="border p-2 text-center">Id</th>
                <th className="border p-2 text-center">Name</th>
                <th className="border p-2 text-center">Contact</th>
                <th className="border p-2 text-center">City</th>
                <th className="border p-2 text-center">Email</th>
                <th className="border p-2 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                records.map((record,index) =>{
                  let id = record._id
                  let handleDeletewithId = handleDelete.bind(null,id)
                return(
                 
                  <tr key={index}>
                <td className="border p-2 text-center">{index+1}</td>
                <td className="border p-2 text-center">{record.name}</td>
                <td className="border p-2 text-center">{record.contact}</td>
                <td className="border p-2 text-center">{record.city}</td>
                <td className="border p-2 text-center">{record.email}</td>
                <td className="border p-2 text-center flex gap-3 ">
                  <form action={handleDeletewithId} method="POST">
                    <button type='submit' className='bg-red-900 rounded px-3 py-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg></button>
                  </form>
                  <Link href={`/edit/${record._id}`} className='bg-cyan-600 rounded text-white px-2 py-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg></Link>
                </td>
              </tr>
                )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default page
