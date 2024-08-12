import { NextResponse } from 'next/server';
import clientPromise from '../../../../lib/mongodb.mjs';
import { ObjectId } from 'mongodb';

// Función auxiliar para añadir encabezados CORS
function addCorsHeaders(response) {
  response.headers.set('Access-Control-Allow-Origin', '*'); // Permite cualquier origen
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  return response;
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("tu_nombre_de_base_de_datos");
    const products = await db.collection("products").find({}).toArray();
    return addCorsHeaders(NextResponse.json(products));
  } catch (e) {
    console.error(e);
    return addCorsHeaders(NextResponse.json({ error: 'Error al obtener productos' }, { status: 500 }));
  }
}

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("tu_nombre_de_base_de_datos");
    const body = await request.json();
    const product = { ...body, _id: new ObjectId() };
    await db.collection("products").insertOne(product);
    return addCorsHeaders(NextResponse.json(product));
  } catch (e) {
    console.error(e);
    return addCorsHeaders(NextResponse.json({ error: 'Error al crear producto' }, { status: 500 }));
  }
}

// Manejar solicitudes OPTIONS para preflight CORS
export async function OPTIONS() {
  return addCorsHeaders(new NextResponse(null, { status: 200 }));
}