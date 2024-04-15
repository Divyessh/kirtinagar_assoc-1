import { NextResponse } from 'next/server';
import { connectMongoDB, disconnectMongoDB } from '../../../../lib/mongodb';
import Blog from '../../../../models/blogModel';

export async function GET(req, context) {
  try {
    await connectMongoDB();
    const user = await Blog.findById(context.params.id);
    return NextResponse.json({ message: 'User fetched successfully', data: user }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Something went completely wrong' }, { status: 500 });
  } finally {
    await disconnectMongoDB();
  }
}
