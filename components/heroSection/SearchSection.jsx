import React from "react";
import CategoryDropdown from "./categoryDropdown";
import Socials from "./socials";
import BgCarousel from "./bgCarousel";

const SearchSection = () => {
  return (
    <div className="flex-col col-span-6 pb-[1px] rounded-[10px] px-[9px] ">
      <div className="col-span-6 pb-[1px] rounded-[10px] h-[40vh] md:h-[65vh] px-[9px] flex items-end relative">
        <BgCarousel />
        <Socials />
      </div>
      <CategoryDropdown />
    </div>
  );
};

export default SearchSection;
