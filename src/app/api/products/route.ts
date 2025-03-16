import { NextResponse } from 'next/server';
import { products } from './productList';

export async function GET() {
  return NextResponse.json(products);
}