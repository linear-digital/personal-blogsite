// app/api/hasnode/route.ts
import { fetchHashnodeBlogs } from "@/lib/hasnode";
import { NextRequest } from "next/server";

export async function GET(req) {
    const limit = req.nextUrl.searchParams.get("limit") || 10;
  const blogs = await fetchHashnodeBlogs(Number(limit));
  return new Response(JSON.stringify(blogs));
}