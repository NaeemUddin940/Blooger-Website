import React from "react";
import { Facebook, Youtube, Twitter, Instagram } from "lucide-react";
import { HorizontalPostCard } from "../ui/HorizontalPostCard";
import Image from "next/image";

// Mock data for the popular posts
const popularPosts = [
  {
    id: 1,
    tag: "LAPTOPS",
    title: "11 of Best Laptops Evaluated Based on Budget",
    author: "John Doe",
    date: "August 02, 2021",
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5O0ZY2WIUUAlZZC1w0fk2DRsAIiW2bqh1NrdKtCa4v3BibsgoJFnA_f6jEYLAMXKbDu8sMIMhwrD0vKXj7-JElNqK87Pxi0joMtMElNRaAFFGD-AvNzMw2fn02QfwSWw7UPBsD899wTI/s16000/pbt66.jpg",
  },
  {
    id: 2,
    tag: "LAPTOPS",
    title: "Opera Browser Lets You Apply Dark Mode to Web Page",
    date: "August 02, 2021",
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5AcWi3HiMeQrvhHkF_Wd-uA4G71MMjiTmSZBx7lCYM31G_mIE_6wJxaUsuUsW64mpj3VoHcLaEM3kkz3AR4On4noLQE8ERw7QbNRhBP6-JhZsEqVucyM80kFcwk1Gig8wLPR-aKkk8tc/s16000/pbt42.jpg",
  },
  {
    id: 3,
    tag: "HEALTHY",
    title: "How to Get COVID-19 Related Alerts on Your Phone",
    date: "July 28, 2021",
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgl7kA3KaVish2moJyQZLILWySl_3p0rgokyAoYpA_36VpJ1gIAAP8SwgCq_-kCCSXt5O7uEME-r8ivcQB_jl5ZDwD91iRL1OWR3KiWHD1BN6wqms4Kjx23oSsH6wQ1SGEp98zyxpcQsOk/s16000/pbt41.jpg",
  },
  // {
  //   id: 4,
  //   tag: "HEALTHY",
  //   title: "How We Know Disinfectants Should Kill the Covid-19",
  //   date: "July 31, 2021",
  //   imageUrl: "https://placehold.co/150x100/2c3e50/ecf0f1?text=Disinfectants",
  // },
];

// Mock data for the travel posts
const travelPosts = [
  {
    id: 1,
    tag: "TRAVEL",
    title: "Top 10 Breathtaking Places for Honeymoon",
    date: "July 31, 2021",
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDtBDOq-WdjHY26qoxkVA5SX2ljFZDtCHgQ1gNXDn1nu-yYMnRfvJJpDxuYQBfNOGSnjde_RidLxbPuBi9Qnn-3rODNaUBvNm1NxGREbOl5VpNdKfXm-9DCnnRLVwkC0jOhCoNGeDT-lc/s0/pbt18.jpg",
  },
  {
    id: 2,
    tag: "TRAVEL",
    title: "Why It's Better to Travel with Friends",
    date: "July 31, 2021",
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjz9CFftOOAFf5ffZsvUFevQkYxgh7OBIK4YfBz3Z8teRlqfTifGILGJED6IIbX-O1_QJsl2qrml-coPfpT4f9h0rIXcKIijfe_Jc52OuEasogIGlkBjPtpXGvbbJl9PrSzAqy8dlJgnJw/s16000/pbt17.jpg",
  },
  {
    id: 3,
    tag: "TRAVEL",
    title: "The 5 Best Beach Destinations in The World",
    date: "July 31, 2021",
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXxIXPaP4jd_w4t13EqC00r1nHU8LE2XnsklxIFkUjrF37SGk58o_vDRkeSwxbzZi9HL6GPjRNt6p7jQylzKTNif-jRvwolZFntb5enFJmmdQsVHp6zgEtAiF4I3miAk-DbxA4uBeTyvc/s16000/pbt16.jpg",
  },
  {
    id: 4,
    tag: "TRAVEL",
    title: "5 Online Sites Rental Houses for Traveller",
    date: "July 31, 2021",
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYr8-VeKgvUHmpJkUmQKkMvXcbhtM9gqoozo2d1p57Wnbed6NKFLypXYJttRy48xJOBanZ5O8AleUvHIZlK0Zenv7-FlvWh6yo9gSPga6vxQY1K1VWSvc8xdVjZ_8DiYcCn1ZbR69w9Lo/s16000/pbt15.jpg",
  },
];

// Main RightSide component for the sidebar
export default function RightSide() {
  return (
    <div>
      {/* Follow Us Section */}
      <div className="mb-8">
        <h2 className="text-xl font-extrabold tracking-wide mb-4 border-b border-gray-700 pb-2">
          FOLLOW US
        </h2>
        <div className="grid grid-cols-2 gap-2">
          <button className="flex items-center cursor-pointer justify-center p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            <Facebook size={20} className="mr-2" /> Facebook
          </button>
          <button className="flex items-center cursor-pointer justify-center p-3 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors">
            <Youtube size={20} className="mr-2" /> Youtube
          </button>
          <button className="flex items-center cursor-pointer justify-center p-3 rounded-lg bg-sky-500 text-white hover:bg-sky-600 transition-colors">
            <Twitter size={20} className="mr-2" /> Twitter
          </button>
          <button className="flex items-center cursor-pointer justify-center p-3 rounded-lg bg-pink-500 text-white hover:bg-pink-600 transition-colors">
            <Instagram size={20} className="mr-2" /> Instagram
          </button>
        </div>
      </div>

      {/* Popular Posts Section */}
      <div className="mb-8">
        <h2 className="text-xl font-extrabold tracking-wide mb-4 border-b border-gray-700 pb-2">
          POPULAR POSTS
        </h2>
        <div className="flex flex-col gap-4">
          {popularPosts.map((post) => (
            <HorizontalPostCard key={post.id} article={post} />
          ))}
        </div>
      </div>

      {/* Travel Section */}
      <div className="mb-8">
        <h2 className="text-xl font-extrabold tracking-wide mb-4 border-b border-gray-700 pb-2">
          TRAVEL
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {travelPosts.map((post) => (
            <div
              key={post.id}
              className="relative overflow-hidden dark-Shadow cursor-pointer hover:scale-[1.02] hover:rounded-lg Shadow transition-transform duration-300 ease-in-out">
              <Image
                height={100}
                width={100}
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-32 object-cover"
              />
              <div className="absolute inset-0 flex items-end p-2 rounded-xl">
                <h3 className="text-xs font-bold text-white leading-tight">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mailchimp Form Section */}
      <div className=" mb-4">
        <h3 className="text-md font-bold mb-2">Mailchimp Form</h3>
        <p className="text-sm text-gray-400 mb-4">
          Subscribe to our mailing list to get the new updates.
        </p>
        <form>
          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-full p-3 rounded-lg bg-background text-foreground text-sm border-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            type="submit"
            className="mt-3 w-full p-3 rounded-lg bg-teal-600 text-white font-bold hover:bg-teal-700 transition-colors">
            Subscribe
          </button>
        </form>
      </div>

      {/* Categories Section */}
      <div className="mb-8">
        <h2 className="text-xl font-extrabold tracking-wide mb-4 border-b border-gray-700 pb-2">
          CATEGORIES
        </h2>
        <ul className="flex flex-col gap-2">
          {["Gadgets", "Healthy", "Podcasts", "Reviews"].map(
            (category, index) => (
              <li
                key={index}
                className="flex justify-between items-center text-gray-400 hover:text-teal-500  transition-colors cursor-pointer">
                <span>{category}</span>
                <span className="text-sm text-gray-500">
                  ({(index + 1) * 50})
                </span>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Main Tags Section */}
      <div className="mb-8">
        <h2 className="text-xl font-extrabold tracking-wide mb-4 border-b border-gray-700 pb-2">
          MAIN TAGS
        </h2>
        <div className="flex flex-wrap gap-2">
          {["Cars", "Gadgets", "Games", "Healthy", "Podcasts", "Reviews"].map(
            (tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-foreground text-sm font-medium rounded-full cursor-pointer hover:bg-teal-500 transition-colors">
                {tag}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}
