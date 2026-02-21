import { connect } from "@/app/lib/dbConnect";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // (e.g. 'Sign in with...')
      name: "Credentials",

      async authorize(credentials, req) {
        const { email, password } = credentials;

        // step 1: work with db
        const user = await connect("users").findOne({ email });
        if (!user) return null;

        // step 2: check credentials
        const isPassOk = await bcrypt.compare(password, user?.password);

        if (isPassOk) return user;

        return null;
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const isExists = await connect("users").findOne({ email: user?.email, provider: account?.provider })
      if (isExists) return true

      const newUser = {
        provider: account?.provider,
        name: user?.name,
        email: user?.email,
        image: user?.image,
      }
      const result = await connect("users").insertOne(newUser)
      
      return true
    },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl
    // },
    // async session({ session, token, user }) {
    //   return session
    // },
    // async jwt({ token, user, account, profile, isNewUser }) {
    //   return token
    // }
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
