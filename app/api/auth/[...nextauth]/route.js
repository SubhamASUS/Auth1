import NextAuth from 'next-auth'
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
console.log("DEBUG GOOGLE_ID:", process.env.GOOGLE_ID);
console.log("DEBUG GOOGLE_SECRET:", process.env.GOOGLE_SECRET);
console.log("GOOGLE_ID:", process.env.GOOGLE_ID ? "Loaded" : "Missing");
console.log("GOOGLE_SECRET:", process.env.GOOGLE_SECRET ? "Loaded" : "Missing");


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
  ]
})
export {handler as GET, handler as POST }
