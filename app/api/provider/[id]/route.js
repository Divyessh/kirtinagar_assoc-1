import { NextResponse } from 'next/server';
import { connectMongoDB, disconnectMongoDB } from '../../../../lib/mongodb';
import User from '../../../../models/userModel';

export async function GET(req, context) {
  try {
    connectMongoDB();
    const user = await User.findById(context.params.id);
    return NextResponse.json({ message: 'User fetched successfully', data: user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Something went completely wrong' }, { status: 500 });
  } finally {
    disconnectMongoDB();
  }
}

export async function PUT(req, context) {
  try {
    connectMongoDB();
    const updatedData = await req.json();
    const user = await User.findByIdAndUpdate(context.params.id, updatedData, { new: true });
    return NextResponse.json({ message: 'User Updated successfully', data: user }, { status: 200 });
  } catch {
    return NextResponse.json({ message: 'Something went completely wrong' }, { status: 500 });
  } finally {
    disconnectMongoDB();
  }
}
