import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const posts = await prisma.Posts.findMany();
    return new NextResponse(JSON.stringify(posts, { status: 200 }));
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "field to fetch" }, { status: 500 })
    );
  }
};
