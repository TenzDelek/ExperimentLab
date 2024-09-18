import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ bio: [{ name: "Tenzin" ,age:22}] });
}

export async function POST(req:NextRequest) {
    const data=await req.json()
    return NextResponse.json({bio:data})
}