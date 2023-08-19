import { getSession } from 'next-auth/react'
import React from 'react'

const index = () => {
  return (
    <>
      home
    </>
  )
}

export default index


export async function getServerSideProps({req}){
const session= await getSession({req})

  if (!session) {
    return{
      redirect:{
        destination:"/account/login",
        permanent:false
      }
    }
    
  }

return{
  props:{
    session
  }
}
}