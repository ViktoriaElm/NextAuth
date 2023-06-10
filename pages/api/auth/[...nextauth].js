import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    
    CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
        //   console.log('credentials', credentials);
    
          if ('3' === credentials.username && '3' === credentials.password) {
            return { id: "1", name: "J Smith", email: "jsmith@example.com"};
          } else {
            return null
          }
        }
      })

  ]
})






  
