"use client"
import React from "react";
import ContentHeaderAndViewAll from "../ui/ContentHeaderAndViewAll";
import Image from "next/image";

// Mock data for the two main sections
const gadgetSection = {
  sectionTitle: "GADGETS",
  href: "/gadgets",
  featured: {
    id: 1,
    tag: "GADGETS",
    title: "6 Wealth Building Alternatives Without Buying Stocks",
    author: "John Doe",
    date: "July 31, 2021",
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgD2vtjb6WXcbsCtSlioeW1sDEbEnpfhJNXiIOlp9xr6PFok-91BSHDiKXwHRaXd5zXMdrQ4FYCSMgLGz8CRPbizxdWJXJ7HHQ0tR7OlmA8TB0Cgci95GD-X6LqnE3znz_qMteFik_qO6s/s16000/pbt59.jpg",
  },
  list: [
    {
      id: 2,
      title: "Start a Digital Marketing Website for your Service",
      date: "July 31, 2021",
      imageUrl:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjRmtNg3annHl5Y6-kPdkWZipcUCEcb2qQAc5nfBz2JdxaMHWARMvH44G5g9fBrV3ijHCgkcTZZ14TPJLAElbKqX_YHLpo5wfWVJpX2JgY2giAI4WqekY6A3G1M2q8DSdJgTjE_9X1mE7I/s16000/pbt60.jpg",
    },
    {
      id: 3,
      title: "Part-time Trading on Forex as an Alternative Income",
      date: "July 31, 2021",
      imageUrl:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNuWSOmEKgsvK92dfOxtW_m_bmla-yqam2LDWmD3EdirVpqIRoTnc5SAlFO6r3aLAN0nS4t505g_cu3vauLjyv-Ovpn2XaUg_aFk3mlFfE16RLevD8Ga66eGuiS5324nBWZ9mEjTKaxKw/s16000/pbt58.jpg",
    },
    {
      id: 4,
      title: "Catch the Best iPhone X Deals Plus Your Favorite gadgets",
      date: "July 31, 2021",
      imageUrl:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_mzdhXxcGYgg5QtmnBjIXYLCYBrh1BthbuhKvIjJfKBd0ANNeq7owC5ghJjCeS_fN3qgPTZUZ0Y3h4M-raGAulnqWZZiFi8BsxhrQ72sWgqyeQeczG-xFvLgGK8Z9p1EhBzq_DY0viDQ/s16000/pbt57.jpg",
    },
  ],
};

const laptopSection = {
  sectionTitle: "LAPTOPS",
  href: "/laptop",
  featured: {
    id: 5,
    tag: "APPLE",
    title: "11 of Best Laptops Evaluated Based on Budget",
    author: "John Doe",
    date: "August 02, 2021",
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5O0ZY2WIUUAlZZC1w0fk2DRsAIiW2bqh1NrdKtCa4v3BibsgoJFnA_f6jEYLAMXKbDu8sMIMhwrD0vKXj7-JElNqK87Pxi0joMtMElNRaAFFGD-AvNzMw2fn02QfwSWw7UPBsD899wTI/s16000/pbt66.jpg",
  },
  list: [
    {
      id: 6,
      title: "Apple Watch Series 5 is the Best One Yet By Consumer",
      date: "August 02, 2021",
      imageUrl:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgf8-arWDMvbTeZBWVxA4Ky1H6aExuTk9SEJNdjPnPWgW4O7YXw3iQW6KvRvVr6Fz9crqCwp1YgkIbi3pHFs2xlIiA9GwPsEdIPkdilF28j964yXzX59AU_4NMHTVfUOudE7Kc5vnb_-0/s16000/pbt65.jpg",
    },
    {
      id: 7,
      title: "Here's What People Think of iOS 13 New Dark Mode",
      date: "August 02, 2021",
      imageUrl:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUqASiDM5EEA5bWE5BxvKpAmitDCN37MT2LFNcgKY4i7K1EGip8XfmW1_s-IDaqD1aXN2Xfad5iOmNzF6SDWEG3wtlCGKAKtAa3iDMGrjlqYq-L528jopspUzR_yB3DheeAqK5PGpWeGI/s16000/pbt61.jpg",
    },
    {
      id: 8,
      title: "18 Practices for Building Responsive Web Applications",
      date: "August 02, 2021",
      imageUrl:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKUIl2yc8d5warqlbvzvhxrk4yzGK0FXr4bnPDnW1iKNiJqg5YqvCuYFD4xX1q383w-wU_WJaN_5ZcCiNVDYSk26rQQo-iup04BZUdSkiDqbRuHWgYE9PmHpVjj_lyb1ozr3j4glvrfVs/s16000/pbt62.jpg",
    },
  ],
};

// Reusable component for the side article cards
const SideArticleCard = ({ article }) => (
  <div className="flex items-center gap-4 shadow-sm hover:shadow-lg hover:rounded-lg hover:scale-[1.02] transition-transform duration-300 py-1 ease-in-out rounded-lg  cursor-pointer">
    <img
      src={article.imageUrl}
      alt={article.title}
      className="w-24 h-16 object-cover "
    />
    <div className="flex-1">
      <h3 className="text-sm md:text-base line-clamp-2 font-bold text-primary">
        {article.title}
      </h3>
      <p className="text-xs text-gray-400 mt-1">{article.date}</p>
    </div>
  </div>
);

// Reusable component for a single news section
const NewsSection = ({ data }) => {
  console.log(data.href);
  return (
    <div className="flex-1 ">
      {/* Header section for each column */}
      <ContentHeaderAndViewAll
        HeaderTitle={data.sectionTitle}
        path={data.href}
      />

      {/* Featured Article */}
      <div className="overflow-hidden shadow-sm hover:shadow-lg flex flex-col hover:rounded-lg hover:scale-[1.02] transition-transform duration-300 ease-in-out">
        <div className="relative">
          <Image
            width={100}
            height={100}
            src={data.featured.imageUrl}
            alt={data.featured.title}
            className="w-full h-48 object-cover"
          />
          <span className="absolute bottom-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            {data.featured.tag}
          </span>
        </div>
        <div className="py-1 px-2">
          <h3 className="text-lg md:text-xl line-clamp-2 font-extrabold leading-tight text-primary">
            {data.featured.title}
          </h3>
          <p className="text-sm text-primary mt-2">
            by{" "}
            <span className="text-blue-600 font-medium">
              {data.featured.author}
            </span>{" "}
            - {data.featured.date}
          </p>
        </div>
      </div>

      {/* Side Articles List */}
      <div className="flex flex-col gap-4">
        {data.list.map((article) => (
          <SideArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

// Main GadgetAndLaptopSection component
const GadgetAndLaptopSection = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-2">
        {/* Gadget Section */}
        <NewsSection data={gadgetSection} />
        {/* Laptop Section */}
        <NewsSection data={laptopSection} />
      </div>
    </div>
  );
};

export default GadgetAndLaptopSection;
