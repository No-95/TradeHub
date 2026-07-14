import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    return NextResponse.json(
      {
        success: true,
        message: "Registration received successfully",
        data: body,
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to parse request body" },
      { status: 400 },
    )
  }
}
