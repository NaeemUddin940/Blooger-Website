import Image from "next/image";
import Link from "next/link";
import ContentHeaderAndViewAll from "../ui/ContentHeaderAndViewAll";
import {posts} from "@/Data/db"

const podcastArticles = [
  {
    id: 1,
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyVBUraFjs0v9qk0irqNXjFKKFL7TqaY6OL7ry4-OIyREp49hFXkqSIHj_mPF3CowHEl3KjO4H-Axnu_UImpMhH1xvOaNmYtwMP-5Ob1Td4gr9IiQm3cwzUYHG1yVQ4jpKiob-Cy-gy5I/s16000/pbt5.jpg",
    tag: "Health & Wellness",
    title: "The Role of Podcasts in Spreading Health Awareness",
    author: "Dr. Sarah Khan",
    date: "Aug 12, 2025",
  },
  {
    id: 2,
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5PnLy5OkASDljrIFAaSbXuX-2Rh1OIHVixow2me-93YtKDBstpgnQ54R9l4T8Px90sunUZbiK_uV_z8wihXfqDgToyP0ww2lSFP5gUy2xSCNo_OfzSlHl2KZWjrfgBXz-A5j1uxtztDg/s16000/pbt6.jpg",
    tag: "Fitness",
    title: "How Daily Walks Can Boost Your Mental Health",
    author: "John Lee",
    date: "Aug 10, 2025",
  },
  {
    id: 3,
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiUZOPTgJsnPA1gyMD7UyjfXIRhfPRQVGvlGK86XSDZ48WsqR4T7gqE84ghMGJNdYGn2_fzgaDDd1ZT87d2iG8oAJjGmatzfkpY0scjyjLnZc7VQ06bLf085lkkIfukzb7xpNRxStIDle8/s16000/pbt4.jpg",
    tag: "Nutrition",
    title: "5 Superfoods You Should Add to Your Diet",
    author: "Aisha Rahman",
    date: "Aug 08, 2025",
  },
  {
    id: 4,
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0T2QmKJfQG8Y9PDUeCGQXy7pvL_JjqiMVW6wFRZUqqXHBttSQpUTPr5pBy__DLVY3pcvFfYhiwqhvg9HyS0465PIHcpEjZa7_TIBml1I9WkqQuadOqfPa2EtQFk2ski_rN8KfuW53CJ4/s16000/pbt3.jpg",
    tag: "Mental Health",
    title: "Mindfulness Meditation: A Beginner’s Guide",
    author: "Michael Smith",
    date: "Aug 05, 2025",
  },
  {
    id: 5,
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTdKIWApgKy5ExxXvV3raO43WfnZSWxqNdjaaqIPcXO3bB_B2tMxcF9l5Fhqzp2CD84VL98p3exaApZs-yRtdvAyYOBSQrAoE-GGfUSBxHVU3eDxYltIU_lEqOgABemeMhO5WaV1NUfoc/s16000/pbt2.jpg",
    tag: "Sleep & Recovery",
    title: "7 Ways to Improve Sleep Quality Naturally",
    author: "Sophia Brown",
    date: "Aug 03, 2025",
  },
  {
    id: 6,
    imageUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEik8ToViOZzIODK-P-cC0VFFgK8f7CDY1uUwawHhopHAz4onS3Ks45FQkKK_dn_TszeEMnynjkPERIxHcDupmK_tUdXgBwJUSTF_Xt2z0DeRgWTitV_BwSLnzTToS2FTJ8igXO_v77BJ78/s16000/pbt1.jpg",
    tag: "Healthy Living",
    title: "Balancing Work and Health in a Busy World",
    author: "David Wilson",
    date: "Aug 01, 2025",
  },
];

export default function PodcastsSections() {
  const podcastSection = posts.filter((post) => post.category === "Podcast")
  return (
    <div>
        <ContentHeaderAndViewAll HeaderTitle={"Podcast"}  path="/podcast"/>
      <div className="lg:col-span-2 py-2 grid grid-cols-2 gap-5 md:grid-cols-2 lg:grid-cols-3 overflow-hidden">
        {podcastSection.map((featuredArticle) => (
          <Link key={featuredArticle.id} href={"#"} className="hover:scale-[1.02] hover:rounded-lg shadow-sm hover:shadow-lg transition-transform duration-300 ease-in-out">
            <div className="relative">
              <Image
                height={100}
                width={100}
                src={featuredArticle.image}
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
                <h1 className="text-lg line-clamp-2 hover:text-blue-600 font-extrabold leading-tight text-foreground">
                  {featuredArticle.title}
                </h1>
                <p className="text-sm text-primary mt-2">
                  by{" "}
                  <span className="text-blue-600 font-medium">
                    {featuredArticle.author}
                  </span>{" "}
                  - {featuredArticle.date}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
