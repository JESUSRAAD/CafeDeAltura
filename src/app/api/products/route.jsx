import { NextResponse } from 'next/server';
import clientPromise from '../../../../lib/mongodb.mjs';
import { ObjectId } from 'mongodb';

// Función auxiliar para añadir encabezados CORS
const addCorsHeaders=(response)=> {
  response.headers.set('Access-Control-Allow-Origin', '*'); // Permite cualquier origen
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  return response;
}

export const  GET=async()=> {
  try {
    const client = await clientPromise;
    const db = client.db("test");
    const products = await db.collection("products").find({}).toArray();
    return addCorsHeaders(NextResponse.json(products));
  } catch (e) {
    console.error(e);
    return addCorsHeaders(NextResponse.json({ error: 'Error al obtener productos' }, { status: 500 }));
  }
}

export const  POST=async(request)=> {
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
export const OPTIONS= async()=> {
  return addCorsHeaders(new NextResponse(null, { status: 200 }));
}