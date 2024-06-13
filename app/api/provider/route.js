import { NextResponse } from "next/server";
// eslint-disable-next-line import/no-extraneous-dependencies
import { connectMongoDB, disconnectMongoDB } from "../../../lib/mongodb";
import User from "../../../models/userModel";

export async function GET() {
  try {
    await connectMongoDB();
    const events = await User.find({ role: "provider" });
    return NextResponse.json(
      { message: "Provider Found", data: events },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went completely wrong" },
      { status: 500 }
    );
  } finally {
    await disconnectMongoDB();
  }
}

export const revalidate = 0;
