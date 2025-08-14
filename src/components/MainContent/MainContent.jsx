import React, { useState } from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import SocialMedia from "../ui/SocialMedia";
export default function MainContent() {
  const article = {
    title: "11 of Best Laptops Evaluated Based on Budget",
    author: "John Doe",
    date: "August 09, 2023",
    readTime: "11 min read",
    heroImage:
      "https://placehold.co/1200x600/1e1e1e/fff?text=Laptop+Hero+Image",
    body: [
      {
        type: "paragraph",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        type: "paragraph",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        type: "quote",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        type: "paragraph",
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      },
      {
        type: "paragraph",
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      },
      {
        type: "paragraph",
        text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      },
    ],
    tags: ["Laptops", "Tech"],
  };

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

  const [commentText, setCommentText] = useState("");

  const renderBodyContent = (content) => {
    return content.map((item, index) => {
      if (item.type === "paragraph") {
        return (
          <p key={index} className="text-foreground mb-4 leading-relaxed">
            {item.text}
          </p>
        );
      } else if (item.type === "quote") {
        return (
          <div
            key={index}
            className="bg-zinc-200 dark:bg-zinc-900 p-6 my-6 rounded-lg border-l-4 border-teal-500">
            <p className="italic text-bakground">"{item.text}"</p>
          </div>
        );
      }
      return null;
    });
  };

  return (
    <article>
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight text-foreground mb-2">
          {article.title}
        </h1>
        <div className="flex items-center text-sm text-foreground">
          <span className="mr-4">
            By <span className="text-teal-500">{article.author}</span>
          </span>
          <span className="mr-4">{article.date}</span>
          <span>{article.readTime}</span>
        </div>
      </header>

      {/* Hero Image */}
      <div className="mb-8 rounded-lg overflow-hidden">
        <img src={article.heroImage} alt="Laptop" className="w-full h-auto" />
      </div>

      {/* Body */}
      <div className="prose prose-invert max-w-none">
        {renderBodyContent(article.body)}
      </div>

      {/* Social Share */}
      <div className="flex items-center justify-between py-6 border-t border-b border-gray-700 mt-8">
        <div className="text-sm font-semibold text-foreground">Share This:</div>
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
        <h2 className="text-2xl font-bold text-foreground mb-6">3 Comments</h2>
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
            Your email address will not be published. Required fields are marked
            *
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
  );
}
