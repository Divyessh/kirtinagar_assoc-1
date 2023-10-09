import { NextResponse } from 'next/server';
// eslint-disable-next-line import/no-extraneous-dependencies
import { connectMongoDB, disconnectMongoDB } from '../../../lib/mongodb';
import WebsiteGallery from '../../../models/websiteGalleryModel';

export async function POST(req) {
  try {
    await connectMongoDB();
    const { imgArr, title, description } = await req.json();
    const websiteGallery = await WebsiteGallery.create({
      imgArr,
      title,
      description,
    });
    return NextResponse.json({ message: 'Website Gallery Posted', data: websiteGallery }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Something went completely wrong' }, { status: 500 });
  } finally {
    await disconnectMongoDB();
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const websiteGallery = await WebsiteGallery.find();
    return NextResponse.json({ message: 'Website Gallery Found', data: websiteGallery }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Something went completely wrong' }, { status: 500 });
  } finally {
    await disconnectMongoDB();
  }
}
