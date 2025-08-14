import React from "react";
import { PlayCircle } from "lucide-react"; // Example icon library for the play button
import ContentHeaderAndViewAll from "../ui/ContentHeaderAndViewAll";
import Image from "next/image";

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

// Reusable component for the smaller video cards
const VideoCard = ({ video }) => (
  <div className="overflow-hidden flex hover:rounded-lg Shadow dark-Shadow flex-col cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-in-out">
    <div className="relative">
      <Image
      width={100}
      height={100}
        src={video.imageUrl}
        alt={video.title}
        className="w-full h-48 object-cover"
      />
      {/* Play icon */}
      <div className="absolute inset-0 flex items-center justify-center bg-opacity-40 transition-opacity opacity-0 hover:opacity-100">
        <PlayCircle size={48} className="text-white" />
      </div>
      {/* Tag over the image */}
      <span className="absolute bottom-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
        {video.tag}
      </span>
    </div>
    <div className="px-2 flex-1 flex flex-col justify-between py-2">
      <h3 className="text-lg md:text-xl line-clamp-2 font-medium leading-tight text-primary">
        {video.title}
      </h3>
      <p className="text-sm text-primary mt-2">{video.date}</p>
    </div>
  </div>
);

// Main VideosSection component
export const VideosSection = () => {
  return (
    <div>
      {/* Header section */}
      <ContentHeaderAndViewAll HeaderTitle={"Video"} />

      {/* Main content grid */}
      <div className="grid grid-cols-1 gap-8 py-2">
        {/* Featured Video section */}
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col">
          <div className="relative">
            <img
              src={featuredVideo.imageUrl}
              alt={featuredVideo.title}
              className="w-full h-auto object-cover"
            />
            {/* Play icon and tag for the featured video */}
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-40 transition-opacity opacity-0 hover:opacity-100">
              <PlayCircle size={64} className="text-white" />
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                {featuredVideo.tag}
              </span>
              <h1 className="text-2xl md:text-4xl font-extrabold leading-tight mt-2 text-primary drop-shadow-md">
                {featuredVideo.title}
              </h1>
              <p className="text-sm text-primary mt-2">
                by <span className="font-medium text-blue-600">{featuredVideo.author}</span> -{" "}
                {featuredVideo.date}
              </p>
            </div>
          </div>
        </div>

        {/* Other videos grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};
