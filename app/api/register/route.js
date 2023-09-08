import { NextResponse } from 'next/server';
// eslint-disable-next-line import/no-extraneous-dependencies
import bcrypt from 'bcryptjs';
import { connectMongoDB, disconnectMongoDB } from '../../../lib/mongodb';
import User from '../../../models/userModel';

export async function POST(req) {
  try {
    await connectMongoDB();

    const { username, email, password, role, nameOftheFirm, ownerName, address, contactNumber, services, website } = await req.json();

    if (!username || !email || !password) {
      return NextResponse.json({ message: 'Please fill all the required fields' }, { status: 400 });
    }

    if (role !== 'customer') {
      if (!nameOftheFirm || !ownerName || !address || !contactNumber || !services || !website) {
        return NextResponse.json({ message: 'Please fill all the required fields' }, { status: 400 });
      }
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = {
      username,
      email,
      password: hashedPassword,
      role,
    };

    if (role !== 'customer') {
      userData.nameOftheFirm = nameOftheFirm;
      userData.ownerName = ownerName;
      userData.address = address;
      userData.contactNumber = contactNumber;
      userData.services = services;
      userData.website = website;
    }

    const newUser = await User.create(userData);

    // eslint-disable-next-line no-underscore-dangle
    const { password: userPassword, ...data } = newUser._doc;

    return NextResponse.json({ message: 'User Registered', data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Something went completely wrong' }, { status: 500 });
  } finally {
    await disconnectMongoDB();
  }
}
