"use client";
import { useState } from "react";
import SocialMedia from "../../../components/ui/SocialMedia";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { posts } from "../../../Data/db";
import { useParams } from "next/navigation";


const relatedPosts = [
  {
    id: 1,
    title: "5 Reasons to Visit Spain",
    image: "https://placehold.co/300x200/4a4a4a/fff",
    date: "Aug 09, 2023",
  },
  {
    id: 2,
    title: "Traveling on a Budget: 10 Tips",
    image: "https://placehold.co/300x200/4a4a4a/fff",
    date: "Aug 09, 2023",
  },
  {
    id: 3,
    title: "Top 5 Budget Laptops You Can Buy Right Now",
    image: "https://placehold.co/300x200/4a4a4a/fff",
    date: "Aug 09, 2023",
  },
];

const comments = [
  {
    id: 1,
    author: "Anonymous",
    date: "Aug 09, 2023",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    author: "John Doe",
    date: "Aug 09, 2023",
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

export default function PostContent() {
  const { id } = useParams();
  // function slugify(text) {
  //   return text
  //     .toLowerCase()
  //     .replace(/ /g, "-")
  //     .replace(/[^\w-]+/g, "");
  // }
  // const text = slugify("Hello World")
  // console.log(text);

  const post = posts.find((post) => (post.id) == id);

if(!post){
  return <div className="text-5xl text-center text-red-500">Post not Found!</div>
}

  const [commentText, setCommentText] = useState("");

  return (
    <div className="flex flex-col mt-1">
      <div>
        <article>
          {/* Header */}
          <div>
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight text-foreground mb-2">
                {post.title}
              </h1>
              <div className="flex items-center text-sm text-foreground">
                <span className="mr-4">
                  By <span className="text-teal-500">{post.author}</span>
                </span>
                <span className="mr-4">{post.date}</span>
                {/* <span>{article.readTime}</span> */}
              </div>
            </header>

            {/* Hero Image */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <img src={post.image} alt="Laptop" className="w-full h-auto" />
            </div>

            {/* Body */}
            <div className="">{post.content}</div>
          </div>

          {/* Social Share */}
          <div className="flex items-center justify-between py-6 border-t border-b border-gray-700 mt-8">
            <div className="text-sm font-semibold text-foreground">
              Share This:
            </div>
            <div className="flex gap-2">
              <SocialMedia />
            </div>
          </div>

          {/* Author Bio */}
          <div className="flex items-center gap-4 bg-background p-6 rounded-lg mt-8">
            <img
              src="https://placehold.co/80x80/2a2a2a/fff?text=JD"
              alt="Author"
              className="rounded-full"
            />
            <div>
              <h3 className="text-lg font-bold text-foreground">John Doe</h3>
              <p className="text-foreground text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              You Might Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <div
                  key={post.id}
                  className="rounded-lg overflow-hidden bg-background transition-colors duration-200 cursor-pointer group">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-foreground">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comments Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              3 Comments
            </h2>
            <div className="space-y-6">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className="flex gap-4 p-6 bg-background rounded-lg">
                  <img
                    src="https://placehold.co/50x50/333/fff?text=A"
                    alt="Avatar"
                    className="rounded-full h-12 w-12"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {comment.author}
                        </h4>
                        <span className="text-xs text-foreground">
                          {comment.date}
                        </span>
                      </div>
                      <button className="text-sm text-teal-500 hover:text-teal-400">
                        Reply
                      </button>
                    </div>
                    <p className="text-foreground">{comment.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Leave a Comment
              </h3>
              <p className="text-sm text-foreground mb-4">
                Your email address will not be published. Required fields are
                marked *
              </p>
              <form className="space-y-4">
                <textarea
                  className="w-full p-4 bg-background border border-gray-700 rounded-lg text-foreground placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                  rows="6"
                  placeholder="Comment *"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}></textarea>
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Name *"
                    className="flex-1 p-4 bg-background border border-gray-700 rounded-lg text-foreground placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    className="flex-1 p-4 bg-background border border-gray-700 rounded-lg text-foreground placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-teal-500 text-white font-bold rounded-lg hover:bg-teal-600 transition-colors duration-200">
                  Post Comment
                </button>
              </form>
            </div>
          </div>
        </article>
      </div>



      {/* Footer Navigation */}
      <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-700 text-sm text-gray-400">
        <a
          href="#"
          className="flex items-center gap-2 hover:text-teal-500 transition-colors duration-200">
          <ArrowLeft size={16} /> Previous Post
        </a>
        <a
          href="#"
          className="flex items-center gap-2 hover:text-teal-500 transition-colors duration-200">
          Next Post <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}
