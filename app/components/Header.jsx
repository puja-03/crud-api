"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Header = () => {

  let  router = useRouter();
  const handleLogout = async ()=>{
    let res = await fetch("http://localhost:3000/api/admin/logout",{method:"POST"})
    let data = await res.json();

    
    router.push("/")
  }
  return (
    <div className='flex flex-1 px-4 py-4 text-white justify-between bg-red-700 hover:bg-red-900'>
        <Link href="/" className=' txt-white font-bold text-2xl'>CRUD API</Link>
         <button onClick={handleLogout} type='button' className='justify-between bg-green-600 hover:bg-green-900 text-white px-3 py-2 rounded'>Logout</button>
    </div>
  )
}

export default Header