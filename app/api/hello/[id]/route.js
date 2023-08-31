import { NextResponse } from 'next/server';

export async function GET(req, context) {
  // eslint-disable-next-line no-console
  console.log(context.params);
  return NextResponse.json({ message: 'Hello There!' }, { status: 200 });
}
