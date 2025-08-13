import ContentHeaderAndViewAll from "@/components/ui/ContentHeaderAndViewAll";
import { WorldNewsPost } from "../WorldNewsPost/WorldNewsPost";

export default function LeftSide() {
  return (
    <section>
      {/* <div className="grid grid-cols-4 grid-rows-4 gap-4">
        <div className="col-span-2 row-span-4">
          {" "}
          <Link href={"#"}>
            <div>
              <Image
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5AcWi3HiMeQrvhHkF_Wd-uA4G71MMjiTmSZBx7lCYM31G_mIE_6wJxaUsuUsW64mpj3VoHcLaEM3kkz3AR4On4noLQE8ERw7QbNRhBP6-JhZsEqVucyM80kFcwk1Gig8wLPR-aKkk8tc/s16000/pbt42.jpg"
                alt={"example"}
                width={100}
                height={100}
                className="w-full object-cover"
              />
            </div>
            <h2 className="text-xl hover:text-blue-600 font-bold text-foreground px-2">
              How to Get COVID-19 Related Alerts on Your Phone
            </h2>
          </Link>
          <p className="px-2">
            by <span className="text-blue-500 font-bold">author name</span> - July 31 2025
          </p>
          <p className="p-2 line-clamp-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, provident!</p>
        </div>
        <div className="col-span-2 col-start-3">
          <HorizontalPost/>
        </div>
        <div className="col-span-2 col-start-3 row-start-2"><HorizontalPost/></div>
        <div className="col-span-2 col-start-3 row-start-3"><HorizontalPost/></div>
        <div className="col-span-2 col-start-3 row-start-4"><HorizontalPost/></div>
      </div> */}
      <WorldNewsPost />
    </section>
  );
}
