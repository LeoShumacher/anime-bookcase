import { findUserByCredentials } from "@/src/lib/user";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

interface User {
  id: string;
  email: string;
  name?: string;
}

const handler = NextAuth({
  pages: {
    signIn: "/register",
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      authorize: async (credentials) => {
        const user = await findUserByCredentials(
          credentials?.email as string,
          credentials?.password as string
        );

        return user as User;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
