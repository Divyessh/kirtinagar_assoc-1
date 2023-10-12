import { NextResponse } from 'next/server';
// eslint-disable-next-line import/no-extraneous-dependencies
import { connectMongoDB, disconnectMongoDB } from '../../../../lib/mongodb';
import User from '../../../../models/userModel';
import Gallery from '../../../../models/galleryModel';

export async function PUT(req, context) {
  try {
    await connectMongoDB();

    const { gallery } = await req.json();
    const user = await User.findById(context.params.id);
    // eslint-disable-next-line no-underscore-dangle
    const newgallery = await Gallery.create({ userId: user._id, gallery });
    // eslint-disable-next-line no-underscore-dangle
    await User.findByIdAndUpdate(context.params.id, {
      // eslint-disable-next-line no-underscore-dangle
      $push: { gallery: gallery._id },
    });
    return NextResponse.json({ message: 'Image added successfully', data: newgallery }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Something went completely wrong' }, { status: 500 });
  } finally {
    await disconnectMongoDB();
  }
}

export async function GET(req, context) {
  try {
    await connectMongoDB();

    const gallery = await User.findById(context.params.id);
    return NextResponse.json({ message: 'Gallery fetched successfully', data: gallery }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Something went completely wrong' }, { status: 500 });
  } finally {
    await disconnectMongoDB();
  }
}
