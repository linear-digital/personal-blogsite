// app/api/hasnode/route.ts
import { fetchHashnodeBlogs, getPostBySlug, getPosts } from "@/lib/hasnode";
import { NextRequest } from "next/server";

export async function GET(req) {
  const limit = req.nextUrl.searchParams.get("limit") || 20;
  const slug = req.nextUrl.searchParams.get("slug")
  if (slug) {
    const post = await getPostBySlug(slug);
    return new Response(JSON.stringify(post));
  }
  const blogs = await getPosts(Number(limit));
  return new Response(JSON.stringify(blogs));
}