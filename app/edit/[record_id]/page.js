import { redirect } from 'next/navigation'
import React from 'react'

const page = async ({params}) => { 
   let {record_id} = params
   const singleRecord = await fetch(`http://localhost:3000/api/record/${record_id}`)
   const res = await singleRecord.json()

   const handleEdit = async (formdata)=>{
    "use server"

    let name = formdata.get("name");
    let contact = formdata.get("contact")
    let city= formdata.get("city")
    let email = formdata.get("email")
    let data = {name,contact,city,email}

    let res = await fetch(`http://localhost:3000/api/record/${record_id}`,{method:"PUT",body:JSON.stringify(data)});
    let updatedata = await res.json()
    console.log (updatedata,"msg")

    redirect("/")
   }


  return (
    <div className=' flex justify-center flex-1'>
        <div className='w-1/3 mt-5'>
            <div className='boredr p-4 rounded'>
            <h1 className='text-white font-semibold text-2xl mb-3'> This is edit page</h1>
            <form action={handleEdit} method="POST" className="border p-5 rounded">
            <div className="mb-3 flex flex-col gap-3">
              <label htmlFor="name">Name</label>
              <input type="text"  defaultValue={res.name}id="name" name="name" className="border text-black w-full rounded px-2 py-2" placeholder="enter your name"/>
            </div>
            <div className="mb-3 flex flex-col gap-3">
              <label htmlFor="contact">contact</label>
              <input type="text" defaultValue={res.contact} id="contact" name="contact" className="border text-black rounded w-full px-2 py-2" placeholder="enter your contact"/>
            </div>
            <div className="mb-3 flex flex-col gap-3">
              <label htmlFor="city">city</label>
              <input type="text" defaultValue={res.city} id="city" name="city" className="border rounded text-black w-full px-2 py-2" placeholder="enter your city"/>
            </div>
            <div className="mb-3 flex flex-col gap-3">
              <label htmlFor="email">email</label>
              <input type="text" defaultValue={res.email} id="email" name="email" className="border text-black rounded w-full px-2 py-2" placeholder="enter your email"/>
            </div>
            <div className="mb-3 flex flex-1">
              <button type="submit" className="bg-red-500 rounded text-white px-3 py-3 w-full">Edit Record</button>
            </div>
          </form>
            </div>
        </div>
    </div>
  )
}

export default page