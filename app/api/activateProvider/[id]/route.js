import { NextResponse } from 'next/server';
import { connectMongoDB, disconnectMongoDB } from '../../../../lib/mongodb';
import User from '../../../../models/userModel';

export async function POST(req, context) {
  const userId = context.params.id;
  let status = false;
  try {
    await connectMongoDB();
    const data = await User.findOneAndUpdate(
      { _id: userId },
      {
        isVerified: true,
      },
    );
    if (data) {
      status = true;
    }
  } catch (error) {
    // console.error(error);
    throw new Error(error);
  } finally {
    await disconnectMongoDB();
    // eslint-disable-next-line no-unsafe-finally
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
