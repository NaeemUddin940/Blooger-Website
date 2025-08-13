import React from "react";
import { Facebook, Youtube, Twitter, Instagram } from "lucide-react";

// Mock data for the footer sections
const latestPosts = [
  {
    id: 1,
    title: "11 of Best Laptops Evaluated Based on Budget",
    date: "August 02, 2021",
    imageUrl:
      "http://localhost:3000/_next/image?url=https%3A%2F%2Fblogger.googleusercontent.com%2Fimg%2Fb%2FR29vZ2xl%2FAVvXsEi5O0ZY2WIUUAlZZC1w0fk2DRsAIiW2bqh1NrdKtCa4v3BibsgoJFnA_f6jEYLAMXKbDu8sMIMhwrD0vKXj7-JElNqK87Pxi0joMtMElNRaAFFGD-AvNzMw2fn02QfwSWw7UPBsD899wTI%2Fs16000%2Fpbt66.jpg&w=256&q=75",
  },
  {
    id: 2,
    title: "Apple Watch Series 5 is the Best One Yet By Consumer",
    date: "August 02, 2021",
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgf8-arWDMvbTeZBWVxA4Ky1H6aExuTk9SEJNdjPnPWgW4O7YXw3iQW6KvRvVr6Fz9crqCwp1YgkIbi3pHFs2xlIiA9GwPsEdIPkdilF28j964yXzX59AU_4NMHTVfUOudE7Kc5vnb_-0/s16000/pbt65.jpg",
  },
  {
    id: 3,
    title: "Here's What People Think of iOS 13 New Dark Mode",
    date: "August 02, 2021",
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKUIl2yc8d5warqlbvzvhxrk4yzGK0FXr4bnPDnW1iKNiJqg5YqvCuYFD4xX1q383w-wU_WJaN_5ZcCiNVDYSk26rQQo-iup04BZUdSkiDqbRuHWgYE9PmHpVjj_lyb1ozr3j4glvrfVs/s16000/pbt62.jpg",
  },
];

const popularPosts = [
  {
    id: 4,
    title: "11 of Best Laptops Evaluated Based on Budget",
    date: "August 02, 2021",
    imageUrl:
      "http://localhost:3000/_next/image?url=https%3A%2F%2Fblogger.googleusercontent.com%2Fimg%2Fb%2FR29vZ2xl%2FAVvXsEi5O0ZY2WIUUAlZZC1w0fk2DRsAIiW2bqh1NrdKtCa4v3BibsgoJFnA_f6jEYLAMXKbDu8sMIMhwrD0vKXj7-JElNqK87Pxi0joMtMElNRaAFFGD-AvNzMw2fn02QfwSWw7UPBsD899wTI%2Fs16000%2Fpbt66.jpg&w=256&q=75",
  },
  {
    id: 5,
    title: "Opera Browser Lets You Apply Dark Mode to Web Page",
    date: "August 02, 2021",
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKFmqRoUH6Ma7ZWQn79BnSTTCu1wR4wSgRim9PKKmWkQNrvnOPpVaBql52-V6_gKVDIBoUyA3Rhpt00g1nc8VvnyECAFIl0nRqiK8xL4Ym4x2Mf6eSdBtn7PMIaQBHjaEBmuIndG68Xrs/s16000/pbt63.jpg",
  },
  {
    id: 6,
    title: "How to Get COVID-19 Related Alerts on Your Phone",
    date: "July 31, 2021",
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5AcWi3HiMeQrvhHkF_Wd-uA4G71MMjiTmSZBx7lCYM31G_mIE_6wJxaUsuUsW64mpj3VoHcLaEM3kkz3AR4On4noLQE8ERw7QbNRhBP6-JhZsEqVucyM80kFcwk1Gig8wLPR-aKkk8tc/s16000/pbt42.jpg",
  },
];

// Reusable component for the list items
const FooterPostCard = ({ post }) => (
  <div className="flex gap-4 items-center py-2 cursor-pointer hover:text-white transition-colors">
    <div className="flex-shrink-0">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-16 h-12 object-cover"
      />
    </div>
    <div className="flex-1">
      <h3 className="text-sm font-bold leading-tight text-gray-200">
        {post.title}
      </h3>
      <p className="text-xs text-gray-400 mt-1">{post.date}</p>
    </div>
  </div>
);

// Main Footer component for the footer
export const Footer = () => {
  return (
    <footer>
      <div className="w-5xl mx-auto mt-5 border-t-1 border-gray-50">
        {/* Top section with categories and posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 lg:grid-cols-3 gap-8 mb-8 border-b border-gray-700 pb-8">
          {/* Categories & Main Tags */}
          <div>
            <h3 className="text-lg font-extrabold tracking-wide text-white mb-4">
              CATEGORIES
            </h3>
            <ul className="flex flex-col gap-2 mb-6">
              {["Gadgets", "Healthy", "Podcasts", "Reviews"].map(
                (category, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center text-gray-400 hover:text-white transition-colors cursor-pointer">
                    <span>{category}</span>
                    <span className="text-sm text-gray-500">(6)</span>
                  </li>
                )
              )}
            </ul>

            <h3 className="text-lg font-extrabold tracking-wide text-white mb-4">
              MAIN TAGS
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Gadgets", "Games", "Healthy", "Podcasts", "Reviews"].map(
                (tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800 text-gray-300 text-sm font-medium rounded-full cursor-pointer hover:bg-gray-700 transition-colors">
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Latest Posts */}
          <div className="lg:col-span-1 md:col-span-1">
            <h3 className="text-lg font-extrabold tracking-wide text-white mb-4">
              LATEST POSTS
            </h3>
            <div className="flex flex-col gap-4">
              {latestPosts.map((post) => (
                <FooterPostCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Popular Posts */}
          <div className="lg:col-span-1 md:col-span-1">
            <h3 className="text-lg font-extrabold tracking-wide text-white mb-4">
              POPULAR POSTS
            </h3>
            <div className="flex flex-col gap-4">
              {popularPosts.map((post) => (
                <FooterPostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>

        {/* About Us & Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4 border-b border-gray-700 mb-4">
          <div className="flex items-center flex-col md:flex-row text-center md:text-left mb-4 md:mb-0">
            <div className="flex-shrink-0 mb-2 md:mb-0">
              {/* SVG for 'newsspot' logo, assuming it's text-based or can be represented */}
              <h2 className="text-2xl font-bold text-white tracking-wide">
                newsspot
              </h2>
            </div>
            <div className="md:ml-4 max-w-sm">
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <a
              href="#"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-500 transition-colors">
              <Facebook size={20} className="text-gray-400 hover:text-black" />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-400 transition-colors">
              <Twitter size={20} className="text-gray-400 hover:text-black" />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-800 rounded-full hover:bg-red-500  transition-colors">
              <Youtube size={20} className="text-gray-400 hover:text-black" />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-800 rounded-full hover:bg-orange-500 transition-colors">
              <Instagram size={20} className="text-gray-400 hover:text-black" />
            </a>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs mt-4">
          <p>Design by - Pro Blogger Templates</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">
              Home
            </a>
            <a href="#" className="hover:text-white">
              About Us
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
