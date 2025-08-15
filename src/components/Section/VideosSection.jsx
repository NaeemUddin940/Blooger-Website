import React from "react";
import { PlayCircle } from "lucide-react"; // Example icon library for the play button
import ContentHeaderAndViewAll from "../ui/ContentHeaderAndViewAll";
import Image from "next/image";
import { posts } from "@/Data/db";
import Link from "next/link";

// Mock data for the videos
const featuredVideo = {
  id: 1,
  tag: "BMW",
  title: "What's in the Most Recent Upgrade Package",
  author: "John Doe",
  date: "July 31, 2021",
  imageUrl:
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgsKwK9QzbS1GiTjRXCDG1iFB4SqorsAjTCF6HVp8h6fwu71wlfRbFvmFg-WQ1V5Q1FMd4dnvb54BZltAMUD8HPyvVJOPE-G1EMgx1byZNFDoofx_ehchQPxpyXBUExumDcsGP0cOhZpJk/s16000/pbt35.jpg",
};

const otherVideos = [
  {
    id: 2,
    tag: "CARS",
    title: "Elegant Business Style Cars for Heavy Traffic",
    date: "July 31, 2021",
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEht7PCNDcNNuGQSq-WwUwt7a6lf58VqO3BS07Xa-FyG2ggW3o1rhMcMCf_41hfdGg-5XZbkXkZgUvqbSt93WJDrgNdF4N7AUGFNLl5QKVKDKQb1csUConsajDykGDrSS209oliNcNF4g_4/s16000/pbt34.jpg",
  },
  {
    id: 3,
    tag: "BMW",
    title: "Why Navigation System Doesn't Work Always",
    date: "July 31, 2021",
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhOoPd0o4DM4A7IewiTUKC7hwOzz9xJwNImhD82OCx0pj2F3MPheJKjphFTI08lzS3nxfHt30XbUGrX5v_B2bBuGNEZCXvWigfewnVHH28Ir6e7aUPETZTsD9q-fMUMnRsN8eWq0QAeTQU/s16000/pbt33.jpg",
  },
  {
    id: 4,
    tag: "BMW",
    title: "Do You Like the Maneuvers of Your Car?",
    date: "July 31, 2021",
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUbVNVZfQdWLjnHWDMvQVV5Jn-lA7qT73C_dF19OAAijj_MoOiQp5nad3N15Zo6vlrk3lF9cnGW2RvSQt7TNHWpo7iGY3A5RgG7gFINnnV_2o8WtIgntjV8BgQ7cDU60uyMRR28jvLRGM/s16000/pbt36.jpg",
  },
];

// Main VideosSection component
export const VideosSection = () => {
  const video = posts.filter((post) => post.category === "Video");

  return (
    <div>
      {/* Header section */}
      <ContentHeaderAndViewAll HeaderTitle={"Video"} path="/videos" />

      {/* Main content grid */}
      <div className="grid grid-cols-1 gap-8 py-2">
        {/* Featured Video section */}
        <div className=" overflow-hidden shadow-lg flex flex-col">
          {video
            .filter((video) => video.isFeatured)
            .map((featuredVideo) => (
              <div key={featuredVideo.id} className="relative">
                <iframe
                  src={featuredVideo.link}
                  title={featuredVideo.title}
                  className="w-full h-100 object-cover"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
              </div>
            ))}
        </div>

        {/* Other videos grid */}
        <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-8">
          {video
            .filter((video) => !video.isFeatured)
            .map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
        </div>
      </div>
    </div>
  );
};

// Reusable component for the smaller video cards
const VideoCard = ({ video }) => (
  <div className="overflow-hidden flex shadow-sm hover:shadow-lg flex-col cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-in-out">
    <div className="relative">
      <iframe
        src={video.link}
        title={video.title}
        className="w-full h-full object-cover"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
    </div>
    <div className="px-2 flex-1 flex flex-col justify-between py-2">
      <h3 className="text-lg md:text-xl line-clamp-2 font-medium leading-tight text-primary">
        {video.title}
      </h3>
      <p className="text-sm text-primary mt-2">{video.date}</p>
    </div>
  </div>
);
