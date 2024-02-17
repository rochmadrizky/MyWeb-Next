import React from "react";
import BlogContent from "../../components/blogs/BlogContent";
import IsiContent from "@/app/components/blogs/IsiContent";

const Page = () => {
  return (
    <div>
      <div
        className="h-[484px] flex items-center justify-center"
        style={{ backgroundImage: `url('/background/topography.svg')` }}
      >
        <BlogContent />
      </div>

      <div className="py-6">
        <IsiContent />
      </div>
    </div>
  );
};

export default Page;
