import NextAuth from "next-auth";
import credentialsProvider from "next-auth/providers/credentials";

const handler=NextAuth({
    session:{
        strategy: 'jwt'
    },
    providers:[
        credentialsProvider({
            credentials: {
                email: { label: "Email", type: "text",  required: true,placeholder: "Enter your email" },

                password: { label: "Password", type: "password", required: true, placeholder: "Enter your password" }
            },
            async authorize(credentials) {
                if (!credentials) {
                    return null;
                }

                return true
            }
        })
    ]

})

export {handler as GET,handler as POST}