import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function POST(req: Request) {
  const res = await req.json();
  try {
    const result = await prisma.message.create({
      data: {
        name: res.name,
        email: res.email,
        message: res.message,
        phone: res.phone,
      },
    });
    console.log("all ok", result);
    return NextResponse.json(result);
  } catch (err) {
    console.log("all not ok", err);
    return err;
  }
}
