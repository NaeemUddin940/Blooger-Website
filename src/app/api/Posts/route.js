import { NextResponse } from "next/server";
import connectDB from "../../../../libs/mongodb";
import Post from "../../../../models/postSchema";

export async function POST(request) {
  const { title, description, image, status, category, content, author } =
    await request.json();

  await connectDB();

  try {
    await Post.create({
      title,
      description,
      image,
      status,
      category,
      content,
      author,
    });
    return NextResponse.json({ message: "Post created successfully" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}
