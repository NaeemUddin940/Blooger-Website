import Image from "next/image";
import ContentHeaderAndViewAll from "../ui/ContentHeaderAndViewAll";

// Mock data for a single column of articles
const articles = [
  {
    id: 1,
    tag: "APPLE",
    title: "11 of Best Laptops Evaluated Based on Budget",
    author: "John Doe",
    date: "August 02, 2021",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5O0ZY2WIUUAlZZC1w0fk2DRsAIiW2bqh1NrdKtCa4v3BibsgoJFnA_f6jEYLAMXKbDu8sMIMhwrD0vKXj7-JElNqK87Pxi0joMtMElNRaAFFGD-AvNzMw2fn02QfwSWw7UPBsD899wTI/s16000/pbt66.jpg",
  },
  {
    id: 2,
    tag: "LAPTOPS",
    title: "Apple Watch Series 5 is the Best One Yet By Consumer",
    author: "John Doe",
    date: "August 02, 2021",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgf8-arWDMvbTeZBWVxA4Ky1H6aExuTk9SEJNdjPnPWgW4O7YXw3iQW6KvRvVr6Fz9crqCwp1YgkIbi3pHFs2xlIiA9GwPsEdIPkdilF28j964yXzX59AU_4NMHTVfUOudE7Kc5vnb_-0/s16000/pbt65.jpg",
  },
  {
    id: 3,
    tag: "LAPTOPS",
    title: "Here's What People Think of iOS 13 New Dark Mode",
    author: "John Doe",
    date: "August 02, 2021",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUqASiDM5EEA5bWE5BxvKpAmitDCN37MT2LFNcgKY4i7K1EGip8XfmW1_s-IDaqD1aXN2Xfad5iOmNzF6SDWEG3wtlCGKAKtAa3iDMGrjlqYq-L528jopspUzR_yB3DheeAqK5PGpWeGI/s16000/pbt61.jpg",
  },
  {
    id: 4,
    tag: "APPLE",
    title: "18 Practices for Building Responsive Web Applications",
    author: "John Doe",
    date: "August 02, 2021",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKUIl2yc8d5warqlbvzvhxrk4yzGK0FXr4bnPDnW1iKNiJqg5YqvCuYFD4xX1q383w-wU_WJaN_5ZcCiNVDYSk26rQQo-iup04BZUdSkiDqbRuHWgYE9PmHpVjj_lyb1ozr3j4glvrfVs/s16000/pbt62.jpg",
  },
  {
    id: 5,
    tag: "LAPTOPS",
    title: "Opera Browser Lets You Apply Dark Mode to Web Page",
    author: "John Doe",
    date: "August 02, 2021",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKFmqRoUH6Ma7ZWQn79BnSTTCu1wR4wSgRim9PKKmWkQNrvnOPpVaBql52-V6_gKVDIBoUyA3Rhpt00g1nc8VvnyECAFIl0nRqiK8xL4Ym4x2Mf6eSdBtn7PMIaQBHjaEBmuIndG68Xrs/s16000/pbt63.jpg",
  },
  {
    id: 6,
    tag: "APPLE",
    title: "Apple Macbook Pro is the Best One Yet By Consumer",
    author: "John Doe",
    date: "August 02, 2021",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnYaSbBdDo7kLtg1v1cOW9m9ASvL9loMee1zewR4ITfgf_nXQC_LBuEtyqhLvF6jUoJd77kNtK6nOe43iJx6HB78o3RUxl78TyRJId1NjN1o6Decv0oNEJZ63vkmkVLxXxfnA9A79t4WQ/s16000/pbt64.jpg",
  },
];

// Reusable component for a single article card in the list
const ArticleCard = ({ article }) => (
  <div className="flex hover:scale-[1.02] shadow-sm hover:shadow-lg hover:rounded-lg transition-transform duration-300 ease-in-out items-start gap-5 py-2 cursor-pointer ">
    <div className="relative flex-shrink-0 ">
      <Image
        height={100}
        width={100}
        src={article.imageUrl}
        alt={article.title}
        className="w-full md:w-48 h-32 object-cover"
      />
      {/* Tag over the image */}
      <span className="absolute bottom-2 left-2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
        {article.tag}
      </span>
    </div>
    <div className="flex-1 mt-4 md:mt-0">
      <h3 className="text-lg md:text-xl font-extrabold leading-tight text-primary">
        {article.title}
      </h3>
      <p className="text-sm text-primary mt-2">
        by <span className="text-blue-600 font-medium">{article.author}</span> -{" "}
        {article.date}
      </p>
      <p className="text-primary lg:block text-sm mt-3 hidden">
        {article.description}
      </p>
    </div>
  </div>
);

// Main LatestSection component
export const LatestSection = () => {
  return (
    <div>
      {/* Header section */}
      <ContentHeaderAndViewAll HeaderTitle={"Latest News"}  path="/latest-news"/>

      {/* List of articles */}
      <div className="flex flex-col gap-4">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-4">
        <button className="bg-gray-800 cursor-pointer hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors">
          Load More
        </button>
      </div>
    </div>
  );
};
