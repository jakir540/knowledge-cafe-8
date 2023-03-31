import React from "react";
import SpentTime from "../SpentTime/SpentTime";

const SideBar = ({spentTime,blogNumber}) => {
  return (
    <div>
      <SpentTime spentTime={spentTime}></SpentTime>

     

        <h3>Bookmarked Blogs : {blogNumber}</h3>
      
    </div>
  );
};

export default SideBar;
