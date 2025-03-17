import { NextResponse } from 'next/server';
import { products } from '../productList';

export async function GET(request: Request, { params }: { params: { id: any } }) {
  const productId = params.id;
  const product = products.find((product) => product.id === productId);

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}

