import { NextResponse } from 'next/server';
import { connectMongoDB, disconnectMongoDB } from '../../../../lib/mongodb';
import User from '../../../../models/userModel';

export async function POST(req, context) {
  const userId = context.params.id;
  let status = false;
  try {
    console.log(1);
    await connectMongoDB();
    const data = await User.findOneAndUpdate(
      { _id: userId },
      {
        isVerified: true,
      },
    );
    console.log(data);
    if (data) {
      status = true;
    }
  } catch (error) {
    // console.error(error);
    throw new Error(error);
  } finally {
    await disconnectMongoDB();
    return NextResponse.json(
      {
        message: status ? 'success' : 'failed',
      },
      {
        status: 200,
      },
    );
  }
}
