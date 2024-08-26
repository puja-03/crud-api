import { redirect } from "next/navigation";


const page = () => {
    const handleSubmit = async (formData)=>{
        "use server"
        let username = formData.get("username");
        let password = formData.get("password")
        let records = ({username,password})
;
        let data =await fetch("http://localhost:3000/api/admin/register",{method:"POST",body:JSON.stringify(records)});
        let res = await data.json();

        redirect("/login")
    }
  return (
    <div className="justify-center mt-10 flex  ">
          <form action={handleSubmit} method="POST" className="border p-5 w-1/3 rounded">
            <h2 className="text-5xl"> SignUp Here  </h2>
            <div className="mb-3 mt-7 flex flex-col gap-3">
              <label htmlFor="username">UserName</label>
              <input type="text"  name="username" className="border text-black w-full rounded px-2 py-2" placeholder="enter your Username"/>
            </div>
            <div className="mb-3 flex flex-col gap-3">
              <label htmlFor="password">Password</label>
              <input type="passsword" name="password" className="border text-black rounded w-full px-2 py-2" placeholder="enter your "/>
            </div>
        
            <div className="mb-3 flex flex-1">
              <button type="submit" className="bg-red-500 rounded text-white px-3 py-3 w-full">SignUp</button>
            </div>
          </form>
        </div>
  )
}

export default page