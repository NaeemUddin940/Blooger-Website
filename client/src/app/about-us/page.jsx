import React from "react";

export default function page() {
  return (
    <div>
      <div className="container mx-auto px-4 mt-4">
        <div className="bg-background rounded-3xl shadow-2xl space-y-12">
          {/* Header Section */}
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-indigo-700 mb-4 tracking-tight">
              Blogger Website
            </h1>
            <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto">
              Welcome to Our Blogger Website! We're so glad you're here. This
              space is dedicated to exploring{" "}
              <span className="font-semibold">[main topic 1]</span>, sharing
              insights on <span className="font-semibold">[main topic 2]</span>,
              and celebrating the community around{" "}
              <span className="font-semibold">[main topic 3]</span>.
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* Our Mission Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
            <p className="text-foreground leading-relaxed">
              Our mission is simple: to{" "}
              <span className="font-semibold">
                [explain your primary goal, e.g., "provide honest reviews and
                helpful tips," "inspire creativity and personal growth," or
                "share delicious recipes and cooking techniques"]
              </span>
              . We believe that by{" "}
              <span className="font-semibold">
                [mention a core belief, e.g., "sharing our journey," "creating a
                supportive community," or "focusing on quality over quantity"]
              </span>
              , we can make a positive impact on your day-to-day life. We aim to
              be your go-to resource for{" "}
              <span className="font-semibold">
                [list key benefits for the reader]
              </span>
              .
            </p>
          </section>

          {/* The Story Behind the Blog Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              The Story Behind the Blog
            </h2>
            <p className="text-foreground leading-relaxed">
              [Your Blog Name] started in{" "}
              <span className="font-semibold">[Year]</span> as a passion project
              born out of{" "}
              <span className="font-semibold">
                [describe the origin, e.g., "a late-night conversation with a
                friend," "a personal challenge I set for myself," or "a desire
                to document my travels"]
              </span>
              . I found myself constantly searching for{" "}
              <span className="font-semibold">[what was missing online?]</span>,
              and decided to create the resource I wished I had. Over time, it
              grew from a simple hobby into the vibrant community you see today.
            </p>
            <p className="text-foreground leading-relaxed">
              Every article, post, and guide you find here is written with{" "}
              <span className="font-semibold">
                [mention a core value, e.g., "sincerity and authenticity," "a
                deep commitment to research," or "a dash of humor"]
              </span>
              . Our journey is a continuous one, and we're excited to have you
              along for the ride.
            </p>
          </section>

          {/* Meet the Author Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              Meet the Author
            </h2>
            <p className="text-foreground leading-relaxed italic">
              (This section is optional, but it's a great way to connect with
              your readers.)
            </p>
            <p className="text-foreground leading-relaxed">
              Hi there, I'm <span className="font-semibold">[Your Name]</span>!
              I'm the face and voice behind [Your Blog Name]. I'm a{" "}
              <span className="font-semibold">[Your Profession/Passion]</span>{" "}
              who loves{" "}
              <span className="font-semibold">
                [list a few personal interests, e.g., "sipping coffee and
                reading a good book," "hiking with my dog," or "experimenting
                with new recipes"]
              </span>
              .
            </p>
            <p className="text-foreground leading-relaxed">
              My background in{" "}
              <span className="font-semibold">
                [mention your relevant experience or expertise]
              </span>{" "}
              has given me a unique perspective on{" "}
              <span className="font-semibold">[your blog's topic]</span>, and I
              love sharing what I've learned. When I'm not writing, you can find
              me{" "}
              <span className="font-semibold">
                [describe a hobby or activity]
              </span>
              .
            </p>
            <p className="text-foreground leading-relaxed">
              Feel free to reach out and say hello!
            </p>
          </section>

          {/* Let's Connect Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">
              Let's Connect!
            </h2>
            <p className="text-foreground leading-relaxed">
              We'd love to hear from you. You can connect with us on social
              media or send us an email.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <a
                href="mailto:[your-email@example.com]"
                className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="font-medium">[your-email@example.com]</span>
              </a>
              <a
                href="https://instagram.com/[YourInstagramHandle]"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="font-medium">@[YourInstagramHandle]</span>
              </a>
              <a
                href="https://twitter.com/[YourTwitterHandle]"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter">
                  <path d="M22 4s-.7 2.1-2 3.4c-.1 7.2-2.5 14.5-16 16 2.5 0 3.7-1 5.6-2-2-.3-4-1.2-4-4 0-.9.2-1.5.5-2.5-1.5 0-2.8-1-3.6-2 .9 0 1.7.2 2.5.5C3.3 10.3 2.5 9 3 7c1.1 1.7 2.5 3 4 3 0-1.5-.7-2.9-2-3.8 2.2 0 4 1 5 2C13 4 15 2 17 2c1 0 2 .5 2.5.8C20.5 2.5 22 2 22 2z" />
                </svg>
                <span className="font-medium">@[YourTwitterHandle]</span>
              </a>
              <a
                href="https://pinterest.com/[YourPinterestHandle]"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-pinterest">
                  <path d="M12 1a9 9 0 0 0-3.653 17.202c-.092 1.408-.517 2.87-1.125 3.868-.261.425-.372.638-.593.593-.217-.043-.496-.345-.88-.868-.383-.523-.747-.991-1.353-.991-.606 0-1.21.328-1.564.838-.354.51-.59.988-.59 1.488 0 .499.303 1.096.793 1.595.49.5 1.05.812 1.834.812.986 0 2.222-1.026 3.08-1.026 1.464 0 2.443 1.026 3.208 1.026 1.13 0 2.21-.868 2.922-.868.91 0 1.624.593 1.624 1.595 0 .93-.728 1.565-1.565 1.565-1.066 0-1.92-1.095-2.92-1.095-1.002 0-1.625.593-2.124.593-.5 0-1.155-.812-1.625-.812-.47 0-.74.195-.91.439-1.22.464-1.954.915-2.98.915-.987 0-1.745-.44-2.528-.44-1.22 0-2.344.915-3.08.915-1.13 0-2.316-.948-3.08-1.066-.764-.118-1.397-.568-1.78-.968-.415-.425-.793-1.095-1.185-1.095-.592 0-1.184.44-1.943.44-1.465 0-2.48-.991-3.208-.991-.834 0-1.624.568-1.624 1.595 0 .618.34 1.21.794 1.765.454.555.948 1.026 1.884 1.258.935.232 1.943.328 2.98.328 1.464 0 2.92-.99 3.83-1.488.91-.498 1.684-.967 2.458-.967.607 0 1.155.328 1.763.328 1.13 0 2.155-.84 2.922-.84.766 0 1.53.38 2.05.38.52 0 1.01-.225 1.503-.225.493 0 1.156.452 1.625.452 1.003 0 1.91-1.095 2.92-1.095.607 0 1.185.354 1.78.354 1.184 0 1.943-.794 2.55-1.455.51-.555.968-.967 1.488-.967 1.066 0 1.78.618 2.212.967.43.35.81.74 1.344.74.535 0 .915-.39 1.346-.967.43-.576.793-1.257 1.185-1.257.392 0 .886.415 1.355.415.47 0 .81-.355.945-.618.135-.262.303-.54.66-.54.354 0 .54.195.91.438.372.245.727.477 1.353.477.592 0 1.155-.225 1.564-.748.409-.523.59-.99.59-1.488 0-.499-.262-1.155-.655-1.78a10.993 10.993 0 0 0-.693-1.095c.557-.59 1.026-1.28 1.026-2.124 0-.91-.568-1.503-1.31-1.503-.742 0-1.465.592-2.124.592-.658 0-1.185-.44-1.683-.44-.499 0-.84-.225-.99-.618-.15-.392-.354-.747-.59-.99-.236-.243-.44-.39-1.005-.39-.565 0-1.397.747-2.18.747-.833 0-1.425-.793-2.124-.793-.728 0-1.488.355-1.92.355-.43 0-1.096-.693-1.45-1.22-.355-.523-.66-1.129-.91-1.488-.25-.36-.618-.84-.81-1.205-.194-.365-.415-.826-.74-.968-.324-.143-.687.195-1.005.195-.317 0-.585-.164-1.15-.164-.565 0-.934.34-1.303.34-1.408 0-2.155-1.03-2.92-1.03-.765 0-1.258.465-1.78.465-.523 0-1.066-.465-1.565-.465-.499 0-.748.194-.967.438-.22.244-.41.522-.84.522-.43 0-.948-.44-1.31-.44-.365 0-.728.194-1.096.194-.94 0-1.595-.727-2.124-.727-.53 0-1.13-.39-1.596-.39-.466 0-.81.166-.99.41a4.237 4.237 0 0 0-.41.67C3.393 2.125 3.393 1.94 3.528 1.715.703 5.433 1.93 11.233 7.02 11.233 8.35 11.233 12 8.784 12 5.093v-4.092z" />
                </svg>
                <span className="font-medium">@[YourPinterestHandle]</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
