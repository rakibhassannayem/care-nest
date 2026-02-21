"use server";
import bcrypt from "bcrypt";

import { connect } from "@/app/lib/dbConnect";

export const postUser = async (payload) => {
  // check user exists or not
  const isExists = await connect("users").findOne({ email: payload?.email });
  if (isExists) {
    return {
      success: false,
      status: 400,
      message: "User already exists!",
    };
  }

  const hashPass = await bcrypt.hash(payload?.password, 10);

  // create new user
  const newUser = {
    ...payload,
    createdAt: new Date().toISOString(),
    password: hashPass,
  };

  // send user to database
  const result = await connect("users").insertOne(newUser);
  if (result.acknowledged) {
    return {
      success: true,
      status: 200,
      message: "User Created Successfully!",
    };
  }else{
    return {
      success: false,
      message: "Something went wrong!",
    };
  }
};
