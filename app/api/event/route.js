import { NextResponse } from 'next/server';
// eslint-disable-next-line import/no-extraneous-dependencies
import { connectMongoDB, disconnectMongoDB } from '../../../lib/mongodb';
import Event from '../../../models/eventModel';

export async function POST(req) {
  try {
    await connectMongoDB();
    const { title, image } = await req.json();
    const event = await Event.create({
      title,
      image,
    });
    return NextResponse.json({ message: 'Event Posted', data: event }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Something went completely wrong' }, { status: 500 });
  } finally {
    await disconnectMongoDB();
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const events = await Event.find();
    return NextResponse.json({ message: 'Event Found', data: events }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Something went completely wrong' }, { status: 500 });
  } finally {
    await disconnectMongoDB();
  }
}
