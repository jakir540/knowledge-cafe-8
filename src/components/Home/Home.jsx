import { useState } from "react";
import Blogs from "../Blogs/Blogs";
import QuestionAns from "../QuestionAns/QuestionAns";
import SideBar from "../SideBar/SideBar";

const Home = () => {
  const[spentTime,setSpentTime]=useState(0)
  const [blogNumber ,setBlogNumber]=useState(0)
  const [title,setTitle]= useState([])

  const handleTimeBtn =(time)=>{
    let totalTime = spentTime + time
    setSpentTime(totalTime);
  }

  const handleBookmarkBtn=(BlogTitle)=>{
    setBlogNumber(blogNumber+1);
    let header=[]
    if (title) {
      header=[...title,BlogTitle]
      setTitle(header);  

    }else{
      setTitle(BlogTitle);
    }    
    
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-between row container mx-auto">
        <div className="col-lg-8 border border-primary">
          <Blogs handleTimeBtn={handleTimeBtn} handleBookmarkBtn={handleBookmarkBtn}></Blogs>
        </div>
   
        <div className="col-lg-4 border border-info">
        <SideBar spentTime={spentTime} blogNumber={blogNumber} title={title} ></SideBar>
        </div>
      </div>
      <QuestionAns></QuestionAns>
    </div>
  );
};

export default Home;
