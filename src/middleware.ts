import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(req:NextRequest) {

    const timestamp = new Date().toISOString();
    console.log(`${timestamp} - ${req.method}`);
  

  return NextResponse.next();
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/service/api/random'],
}