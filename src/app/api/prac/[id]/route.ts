import { NextRequest, NextResponse } from "next/server";
import data from '../../../../utils/data.json'

interface RouteContext {
  params: {
    id: string
  }
}

export async function GET(req: NextRequest, context: RouteContext) {
  const { params } = context
  const user = data.filter((user) => user.id.toString() === params.id)
  return NextResponse.json({
    user
  })
}