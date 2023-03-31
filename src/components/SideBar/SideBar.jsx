import React from "react";
import SpentTime from "../SpentTime/SpentTime";
import "./SideBar.css";

const SideBar = ({ spentTime, blogNumber, title }) => {
  console.log(title);

  return (
    <div className="bookmarksItem ms-2 p-2">
      <SpentTime spentTime={spentTime}></SpentTime>

      <h3 className="mb-5 fw-bold">Bookmarked Blogs : {blogNumber}</h3>

    
    {title.map((singleTitle) => (
        <h5 className="blogTitle border p-3 my-3 fw-semibold">
          {singleTitle.blog_title}
        </h5>
      ))}


   
    </div>
  );
};

export default SideBar;
