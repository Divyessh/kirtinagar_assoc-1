/* eslint-disable no-console */
import { NextResponse } from 'next/server';
// eslint-disable-next-line import/no-extraneous-dependencies
import bcrypt from 'bcryptjs';
import { connectMongoDB, disconnectMongoDB } from '../../../lib/mongodb';
import User from '../../../models/userModel';

export async function POST(request) {
  try {
    await connectMongoDB();
    const reqBody = await request.json();
    const { id, newPassword } = reqBody;

    const user = await User.findById(id);
    if (!user) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 400 });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    console.log(user, 'user after update');
    await user.save();

    return NextResponse.json({
      data: user,
      message: 'Password Updated successfully',
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    await disconnectMongoDB();
  }
}
