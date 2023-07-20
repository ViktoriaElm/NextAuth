/* eslint-disable import/no-anonymous-default-export */
import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import YandexProvider from "next-auth/providers/yandex";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions = {
  adapter: PrismaAdapter(prisma),
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

    YandexProvider({
      clientId: process.env.YANDEX_CLIENT_ID,
      clientSecret: process.env.YANDEX_CLIENT_SECRET
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // profile(profile) {
      //   return { role: profile.role ?? 'user' };
      // },
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log('>>> callbacks >> signIn', { user, account, profile, email, credentials });
      return true
    },
    async redirect({ url, baseUrl }) {
      console.log('>>> callbacks >> redirect', { url, baseUrl });
      return baseUrl
    },
    async session({ session, user, token }) {
      console.log('>>> callbacks >> session', { session, user, token });
      session.user.id = user.id;
      session.user.role = user.role;
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log('>>> callbacks >> jwt', { token, user, account, profile, isNewUser });
      return token
    }
  }
};

const r = NextAuth(authOptions);

export default (...params) => {
  const [req] = params;
  console.log('pages/api/auth/[...nextauth].js', params.length);
  console.log('>', req.method, 'запрос на', req.url, req.query);
  return r(...params);
}