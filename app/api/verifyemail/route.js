/* eslint-disable no-console */
import { NextResponse } from 'next/server';
import { connectMongoDB, disconnectMongoDB } from '../../../lib/mongodb';
import User from '../../../models/userModel';

export async function POST(request) {
  try {
    await connectMongoDB();
    const reqBody = await request.json();
    const { token } = reqBody;
    console.log(token);

    const user = await User.findOne({ verifyToken: token, verifyTokenExpiry: { $gt: Date.now() } });

    if (!user) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 400 });
    }
    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;
    console.log(user, 'user after update');
    await user.save();

    return NextResponse.json({
      message: 'Email verified successfully',
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await disconnectMongoDB();
  }
}
