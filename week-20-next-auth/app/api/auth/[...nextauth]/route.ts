import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"


const handler = NextAuth({
 providers: [
    CredentialsProvider({
        name: "Login with email",
        credentials: {
            username: { lable: "Username", type: "text", placeholder: "om@gmail.com" },
            password: { lable: "Password", type: "password" }
        },
        async authorize(credentials, req) {

            return{
             username: "om",
             id: "1",
             email: "om@gmail.com"
            }
        }
    })
]
});
export { handler as GET, handler as POST }