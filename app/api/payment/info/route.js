import { NextResponse } from 'next/server';
// eslint-disable-next-line import/extensions, import/no-unresolved
import { priceData } from '@/JSONapiData/paymentData/index.js';

// eslint-disable-next-line no-unused-vars
export async function GET(req) {
  return NextResponse.json(priceData, { status: 200 });
}
