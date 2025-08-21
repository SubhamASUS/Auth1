import NextAuth from 'next-auth'
import GithubProvider from "next-auth/providers/github"
console.log("DEBUG GITHUB_ID:", process.env.GITHUB_ID);
console.log("DEBUG GITHUB_SECRET:", process.env.GITHUB_SECRET);
console.log("GITHUB_ID:", process.env.GITHUB_ID ? "Loaded" : "Missing");
console.log("GITHUB_SECRET:", process.env.GITHUB_SECRET ? "Loaded" : "Missing");


const handler = NextAuth({
  providers: [
     GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ]
})
export {handler as GET, handler as POST }