import { NextResponse } from 'next/server';
// eslint-disable-next-line import/no-extraneous-dependencies
import { connectMongoDB, disconnectMongoDB } from '../../../../lib/mongodb';
import WebsiteGallery from '../../../../models/websiteGalleryModel';

export async function DELETE(req, context) {
  try {
    await connectMongoDB();
    const { id } = context.params;
    const websiteGallery = await WebsiteGallery.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Website Gallery Deleted', data: websiteGallery }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Something went completely wrong' }, { status: 500 });
  } finally {
    await disconnectMongoDB();
  }
}
