import { NextResponse } from "next/server";

export function GET(request: Request, { params }: { params: { name: string } }) {
    const param = params.name;
    return new NextResponse(`Hello ${param}!`);
}
