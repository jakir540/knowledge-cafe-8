import { useState } from "react";
import Blogs from "../Blogs/Blogs";
import QuestionAns from "../QuestionAns/QuestionAns";
import SideBar from "../SideBar/SideBar";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const [spentTime, setSpentTime] = useState(0);
  const [blogNumber, setBlogNumber] = useState(0);
  const [title, setTitle] = useState([]);

  const handleTimeBtn = (time) => {
    let totalTime = spentTime + time;
    setSpentTime(totalTime);
  };
  const handleToast = (text) => {
    toast(text);
  };

  const handleBookmarkBtn = (blog_title, id) => {
    let bookmark = [];
    const blogDetails = { blog_title, id };
    if (title) {
      const isThisBookmarkedBlog = title.find((blog) => blog.id == id);
      if (isThisBookmarkedBlog) {
        handleToast("this blog already bookmarked");
      } else {
        bookmark.push(...title, blogDetails);
        setTitle(bookmark);
        setBlogNumber(blogNumber + 1);
      }
      } else {
        bookmark.push(blogDetails);
        setTitle(bookmark);
      }  
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between row container mx-auto">
        <div className="col-lg-8">
          <Blogs
            handleTimeBtn={handleTimeBtn}
            handleBookmarkBtn={handleBookmarkBtn}
          ></Blogs>
        </div>

        <div className="col-lg-4">
          <SideBar
            spentTime={spentTime}
            blogNumber={blogNumber}
            title={title}
          ></SideBar>
        </div>
      </div>
      <QuestionAns></QuestionAns>
    </div>
  );
};

export default Home;
