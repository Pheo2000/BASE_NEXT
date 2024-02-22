import { User } from "./models";
import { connectToDB } from "./utils";

export const userFetch = async () => {
  try {
    console.log("userssssssssss", users)
    await connectToDB()
    const users = await User.find();
    return users;
  } catch (error) {
    console.log("sfsfsd", error);
    throw new Error("faied to fetch user");
  }
};
