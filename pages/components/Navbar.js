import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const {data}=useSession()
  return (
    <>
      <nav className='w-full h-14 bg-slate-600 text-white flex justify-between items-center px-3'>
<div>logo</div>
<ul className='flex justify-center items-center'>
{
  data?<>
  <li className='mx-5'> home</li>

  <li className='mx-5'> profile</li>

  <li className='mx-5'> cart</li>
<li className='mx-5'><button onClick={signOut}>logout</button> </li>
  
  </>:
  <li className='mx-5'><Link href='/account/login'>login</Link> </li>
}


 

</ul>
      </nav>
    </>
  )
}

export default Navbar
