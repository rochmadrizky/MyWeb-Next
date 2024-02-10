import React from "react";
import BlogContent from "../../components/blogs/BlogContent";

const Page = () => {
  return (
    <div>
      <div
        className="h-[484px] flex items-center justify-center"
        style={{ backgroundImage: `url('/background/topography.svg')` }}
      >
        {/* Konten di dalamnya */}
      </div>
      <BlogContent />
    </div>
  );
};

export default Page;
