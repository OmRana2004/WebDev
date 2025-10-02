import CredentialsProvider from "next-auth/providers/credentials"

import NextAuth from "next-auth"
import { use } from "react"

const handler = NextAuth({
 providers: [
    CredentialsProvider({
        name: "Login with email",
        credentials: {
            username: { lable: "Username", type: "text", placeholder: "om@gmail.com" },
            password: { lable: "Password", type: "password" }
        },
        async authorize(credentials, req) {
            const username = credentials?.username
            const password = credentials?.password
            console.log(username, password)
            // db related code here
            const user = {
                name: "Om",
                id: "1",
                username: "om@gmail.com"
            }
            if (user) {
                return user
            } else {
                return null
        }
        }
    })
 ] 
})

export { handler as GET, handler as POST }