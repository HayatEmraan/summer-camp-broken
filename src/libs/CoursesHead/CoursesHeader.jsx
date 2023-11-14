import React, { useState } from "react";
import Courses from "./Courses";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
const CoursesHeader = () => {
  const [selectCategory, setSelectCategory] = useState(null);
  const handleCategory = (e) => {
    setSelectCategory(e.target.value);
  };
  const [sort, setSort] = useState(false);
  const [trending, setTrending] = useState(false);
  return (
    <div className="mx-auto container mt-12">
      <div className="flex justify-end items-center">
        <div className="flex gap-4 items-center">
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => setSort(!sort)}
          >
            <h2>Price</h2>
            <div>
              {sort ? (
                <MdOutlineKeyboardArrowUp className="text-red-700"></MdOutlineKeyboardArrowUp>
              ) : (
                <MdOutlineKeyboardArrowUp></MdOutlineKeyboardArrowUp>
              )}
              <MdOutlineKeyboardArrowDown className="-mt-[8px]"></MdOutlineKeyboardArrowDown>
            </div>
          </div>
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => setTrending(!trending)}
          >
            <h2>Trending</h2>
            <div>
              {trending ? (
                <MdOutlineKeyboardArrowUp className="text-red-700"></MdOutlineKeyboardArrowUp>
              ) : (
                <MdOutlineKeyboardArrowUp></MdOutlineKeyboardArrowUp>
              )}
              <MdOutlineKeyboardArrowDown className="-mt-[8px]"></MdOutlineKeyboardArrowDown>
            </div>
          </div>
          <div>
            <select
              className="select select-bordered select-sm w-full max-w-xs"
              defaultValue={"DEFAULT"}
              name="categoryBtn"
              onChange={handleCategory}
            >
              <option disabled value="DEFAULT">
                Category
              </option>
              <option>Bangla</option>
              <option>Hindi</option>
              <option>Tamil</option>
              <option>Arabic</option>
              <option>Spanish</option>
            </select>
          </div>
        </div>
      </div>
      <div className="my-6">
        <Courses selectCategory={selectCategory} sort={sort} trending={trending}></Courses>
      </div>
    </div>
  );
};

export default CoursesHeader;
