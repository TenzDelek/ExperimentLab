import { NextResponse } from "next/server";

export async function GET(){

    return NextResponse.json({
        name:'delek is best'
    })
}