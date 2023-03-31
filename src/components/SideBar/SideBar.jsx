import React from "react";
import SpentTime from "../SpentTime/SpentTime";

const SideBar = ({spentTime,blogNumber,title}) => {
    
  return (
    <div>
      <SpentTime spentTime={spentTime}></SpentTime>

     

        <h3>Bookmarked Blogs : {blogNumber}</h3>

        {
            title.map((singleTitle)=> <h4 className="border py-3 my-3">{singleTitle}</h4>)
        }
      
    </div>
  );
};

export default SideBar;
