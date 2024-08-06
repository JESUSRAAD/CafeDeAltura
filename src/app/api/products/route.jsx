import { NextResponse } from 'next/server';
//import clientPromise from '../../../../lib/mongodb';
import { v4 as uuidv4 } from 'uuid';
import mongoose from 'mongoose';
import Product from '../../../../models/Product.mjs';

let isConnected = false;
const connectToDatabase = async () => {
  if (isConnected) return;
  
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
}

export async function GET() {
  await connectToDatabase();
  const products = await Product.find({});
  return NextResponse.json(products);
}

export async function POST(request) {
  await connectToDatabase();
  const body = await request.json();
  const newProduct = new Product({ ...body, _id: uuidv4() });
  const savedProduct = await newProduct.save();
  return NextResponse.json(savedProduct);
}