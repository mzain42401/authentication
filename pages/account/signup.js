import React, { useState } from 'react'
import Form from '../components/Form'
import { useRouter } from 'next/router'

const signup = () => {
const router=useRouter()

  const [error,seterror]=useState('')
  const submitted=async(email,password)=>{
   const response=await fetch('/api/hello',{
      method:"POST",
      body:JSON.stringify({email,password}),
      headers: {
        "Content-Type": "application/json",
      }
    })
    if (response.status===401) {
     const data=await response.json()
     seterror(data.error)
    }
    else{
      router.push('/home')
    }
  }
  return (
    <>
      <Form signin={false} submitted={submitted} error={error}/>
    </>
  )
}

export default signup
