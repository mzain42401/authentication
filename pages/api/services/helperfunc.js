import { compare, hash } from 'bcrypt'
import fs from 'fs'
import path from 'path'
const userPath=path.join(process.cwd(),"pages","data","user.json")


export const allData=()=>{
   const data= fs.readFileSync(userPath)
   return JSON.parse(data)
}


export const checkEmail=(email)=>{
const data=    allData()
return data.find((element)=>{
     return element.email===email
})
  }

  export const checkPassword=async(hashPassword,password)=>{
   const data=await compare(password,hashPassword)
   return data
  }
 


export const saveData=async(email,password)=>{
   


   const hasPassword= await hash(password,10)
    const data=allData()
    data.push({
        email,password:hasPassword
    })
    fs.writeFileSync(userPath,JSON.stringify(data))
 }



