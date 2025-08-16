import { posts } from "../../Data/db";
import HorizontalPostBigCard from "../../components/PostCard/HorizontalPostBigCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Health() {
  const content = posts.filter((post) => post?.category === "Health");
  console.log(content);
  if (content.length === 0) {
    return (
      <h1 className="text-2xl text-center mt-5 font-bold">
        No health posts found
      </h1>
    );
  }
  return (
    <div>
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {content.map((post) => (
        <HorizontalPostBigCard key={post.id} post={post} />
      ))}
    </div>
  );
}
