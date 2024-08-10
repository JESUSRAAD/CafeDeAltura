import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Product from '../../../../models/Product.mjs';

let isConnected = false;
const connectToDatabase = async () => {
  if (isConnected) return;
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const products = await Product.find({});
    return NextResponse.json(products);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const newProduct = new Product(body);
    const savedProduct = await newProduct.save();
    return NextResponse.json(savedProduct);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}