import { useState } from "react";
import Blogs from "../Blogs/Blogs";
import QuestionAns from "../QuestionAns/QuestionAns";
import SideBar from "../SideBar/SideBar";

const Home = () => {
  const[spentTime,setSpentTime]=useState(0)

  const handleTimeBtn =(time)=>{
    let totalTime = spentTime + time
    setSpentTime(totalTime);
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-between row container mx-auto">
        <div className="col-lg-8 border border-primary">
          <Blogs handleTimeBtn={handleTimeBtn}></Blogs>
        </div>
   
        <div className="col-lg-4 border border-info">
          <SideBar spentTime={spentTime}></SideBar>
        </div>
      </div>
      <QuestionAns></QuestionAns>
    </div>
  );
};

export default Home;
