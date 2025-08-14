import ContentHeaderAndViewAll from "@/components/ui/ContentHeaderAndViewAll";
import { HorizontalPostCard } from "../ui/HorizontalPostCard";
import Link from "next/link";
// Mock data for the articles
const featuredArticle = {
  id: 1,
  tag: "HEALTHY",
  title: "How to Get COVID-19 Related Alerts on Your Phone",
  author: "John Doe",
  date: "July 31, 2021",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
  imageUrl:
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5AcWi3HiMeQrvhHkF_Wd-uA4G71MMjiTmSZBx7lCYM31G_mIE_6wJxaUsuUsW64mpj3VoHcLaEM3kkz3AR4On4noLQE8ERw7QbNRhBP6-JhZsEqVucyM80kFcwk1Gig8wLPR-aKkk8tc/s16000/pbt42.jpg",
};

const sideArticles = [
  {
    id: 2,
    title: "How We Know Disinfectants Should Kill the Covid-19",
    date: "July 31, 2021",
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgl7kA3KaVish2moJyQZLILWySl_3p0rgokyAoYpA_36VpJ1gIAAP8SwgCq_-kCCSXt5O7uEME-r8ivcQB_jl5ZDwD91iRL1OWR3KiWHD1BN6wqms4Kjx23oSsH6wQ1SGEp98zyxpcQsOk/s16000/pbt41.jpg",
  },
  {
    id: 3,
    title: "Car Safety Tips to Protect you and your Family",
    date: "July 31, 2021",
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_Yg3mLs2Ql59M1QYiHTJDnFxIA4eFVneSi-GZ-iy7gwkLRaKzB1DVdsEykZKOUzifk1f1cm25fQDAqJMU-jva0V3AvfxmyV5JUtSmN3JCfTOEVMwpuC46wm-Jqu8fxODvWmHF1cc9yPI/s16000/pbt40.jpg",
  },
  {
    id: 4,
    title: "Know-How to Protect Your Health When Going Out",
    date: "July 31, 2021",
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgrF9WB5fOlRXqNsj2JFujGX2vwssliXkewpUXuXcmidhAsLc6kdm7I01Aok4tRs6tnXxTyxCoYYphj02oAg1t1ICgf3NqARVqboWNoI3NOG3RgC8TiKvTbZj0XcfBg2Jjs0IRAMcaAPzA/s16000/pbt39.jpg",
  },
  {
    id: 5,
    title: "Tracking Public and Private Response to the COVID-19",
    date: "July 31, 2021",
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZcd90d9g6ZUGP3mBOi9d7-wOe9wDkWU1J2i4kOsYr9dFOH6kwK7n6vrGdjCDtYivw-QI9rdMA3Y1TgdRMjYkGB1i2-70mFDrV6NCVKGHPRaQ13DqVTOj45qWKH2JtrIGhWBZwn7sz5fU/s16000/pbt38.jpg",
  },
];

// Reusable component for the side article cards

// Main App component
export const WorldNewsPost = () => {
  return (
    <div>
      <ContentHeaderAndViewAll HeaderTitle="World News" />

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
        {/* Featured Article section */}
        <Link href={"#"} className="lg:col-span-2 py-2 hover:rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.02] transition-transform duration-300  ease-in-out overflow-hidden flex flex-col">
          <div className="relative">
            <img
              src={featuredArticle.imageUrl}
              alt={featuredArticle.title}
              className="w-full h-40 object-cover"
            />
            {/* Tag over the image */}
            <span className="absolute bottom-4 left-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              {featuredArticle.tag}
            </span>
          </div>
          <div className="px-2 flex-1 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl md:text-2xl line-clamp-2 hover:text-blue-600 font-extrabold leading-tight text-foreground">
                {featuredArticle.title}
              </h1>
              <p className="text-sm text-primary mt-2">
                by{" "}
                <span className="text-blue-600 font-medium">
                  {featuredArticle.author}
                </span>{" "}
                - {featuredArticle.date}
              </p>
              <p className="text-primary text-base mt-4">
                {featuredArticle.description}
              </p>
            </div>
          </div>
        </Link>

        {/* Side Articles List */}
        <div className="lg:col-span-2 flex flex-col gap-4 p-2">
          {sideArticles.map((article) => (
            <HorizontalPostCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};
