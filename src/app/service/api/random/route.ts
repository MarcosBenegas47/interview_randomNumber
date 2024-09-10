import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req:NextApiRequest) {
 try{ 
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  return NextResponse.json({
    value:randomNumber,
  })}catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: 'Ocurrió un error al generar el número aleatorio.',
      },
      { status: 500 }
    );
  }

}
