import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    image: { type: String, required: true },
    status: {
      type: String,
      enum: ["featured", "latest", "popular", "normal"],
      default: "normal",
    },
    category: { type: String, trim: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now },
    author: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

// Prevent duplicate model error in Next.js hot-reload
const Post = mongoose.models.Post || mongoose.models("Post", postSchema);

export default Post;
