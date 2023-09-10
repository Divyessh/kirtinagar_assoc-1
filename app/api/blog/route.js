import { NextResponse } from 'next/server';
// eslint-disable-next-line import/no-extraneous-dependencies
import { connectMongoDB, disconnectMongoDB } from '../../../lib/mongodb';
import Blog from '../../../models/blogModel';

export async function POST(req) {
  try {
    await connectMongoDB();
    const { title, postedBy, description, image } = await req.json();
    const blog = await Blog.create({
      title,
      postedBy,
      description,
      image,
    });
    return NextResponse.json({ message: 'Blog Posted', data: blog }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Something went completely wrong' }, { status: 500 });
  } finally {
    await disconnectMongoDB();
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const blogs = await Blog.find();
    return NextResponse.json({ message: 'Blog Found', data: blogs }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Something went completely wrong' }, { status: 500 });
  } finally {
    await disconnectMongoDB();
  }
}
