import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authConfig";
import { connectToDB } from "./app/lib/utils";
import { User } from "./app/lib/models";
import bcrypt from "bcrypt";

const login = async (credentials) => {
  try {
    connectToDB();
    const user = User.findOne({ username: credentials.username });
    if (!user) throw new Error("wrong to credentilas!");
    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!isPasswordCorrect) throw new Error("wrong to password!");

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("failed to login!");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
         console.log("user", user)
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
});
