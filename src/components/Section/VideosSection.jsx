import React from "react";
import ContentHeaderAndViewAll from "../ui/ContentHeaderAndViewAll";
import { posts } from "@/Data/db";

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
      <p className="text-sm text-primary mt-2">{video.date} <span className="text-teal-500">{video.author}</span></p>
    </div>
  </div>
);
