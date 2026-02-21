import { connect } from "@/app/lib/dbConnect";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // (e.g. 'Sign in with...')
      name: "Credentials",

      // credentials: {
      //   email: {
      //     label: "Email",
      //     type: "email",
      //     placeholder: "jsmith@example.com",
      //   },
      //   password: {
      //     label: "Password",
      //     type: "password",
      //     placeholder: "Your Password",
      //   },
      // },

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
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
