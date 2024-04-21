/* eslint-disable no-console */
import { NextResponse } from 'next/server';
import { connectMongoDB, disconnectMongoDB } from '../../../lib/mongodb';
import { sendEmail } from '../../../lib/mailer';
import User from '../../../models/userModel';

export async function POST(request) {
  try {
    await connectMongoDB();
    const reqBody = await request.json();
    const { userEmail } = reqBody;
    const user = await User.findOne({ email: userEmail });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 400 });
    }
    // eslint-disable-next-line no-underscore-dangle
    await sendEmail({ email: userEmail, emailType: 'RESET', userId: user._id });
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
