import cors from 'cors';
import { NextResponse } from 'next/server';

const corsMiddleware = cors({
  origin: ['http://localhost:3000', 'https://cafe-de-altura-hwi4lbaor-jesus-raad.vercel.app/'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
});

export function runMiddleware(request, response) {
  return new Promise((resolve, reject) => {
    corsMiddleware(request, response, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}