import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { checkEmail, checkPassword } from "../services/helperfunc";

export const authOptions = {
    secret:'kmkdmf',
    session:{
            jwt:true
        },
  providers: [
    CredentialsProvider({
        
        async authorize({email,password}) {
            const isEmail=checkEmail(email)
            if (isEmail===undefined) {
                throw new Error("user not found")
            }
         const isPassword=  await checkPassword(isEmail.password,password)
         if (!isPassword) {
            throw new Error("wrong password")
         }

         return{email}

        }
    }),
  ],
}

export default NextAuth(authOptions)