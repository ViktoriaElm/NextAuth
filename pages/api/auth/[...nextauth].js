/* eslint-disable import/no-anonymous-default-export */
import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
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
          return { id: "1", name: "J Smith", email: "jsmith@example.com" };
        } else {
          return null
        }
      }
    }),


    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })


  ]
};

const r = NextAuth(authOptions);

export default (...params) => {
  const [req] = params;
  console.log('pages/api/auth/[...nextauth].js');
  console.log('>', req.method, 'запрос на', req.url, req.query);
  return r(...params);
}