import React, { useState } from 'react'
import Form from '../components/Form'
import { signIn } from "next-auth/react"
import { useRouter } from 'next/router'

const login = () => {
const [error,setError]=useState('')
const router=useRouter()

  const submitted=async(email,password)=>{

   const respose=await signIn('credentials',{
      redirect:false,email,password
    })
    if (respose.error===null) {
      router.push('/home')
    }
    else{
      setError(respose.error)
    }
  }
  return (
    <>
     <Form signin={true} submitted={submitted} error={error}/>
    </>
  )
}

export default login
