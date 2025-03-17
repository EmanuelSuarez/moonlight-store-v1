import { NextRequest, NextResponse } from 'next/server';
import { products } from '../productList';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const productId = parseInt(params.id, 10);
  const product = products.find((product) => product.id === productId);

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}