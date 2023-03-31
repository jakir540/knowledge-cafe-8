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
    const product = { blog_title, id };
    if (title) {
      const isThisBookmarkedBlog = title.find((blog) => blog.id == id);
      if (isThisBookmarkedBlog) {
        handleToast("this blog already bookmarked");
      } else {
        bookmark.push(...title, product);

        setTitle(bookmark);
      }
    } else {
      bookmark.push(product);

      setTitle(bookmark);
    }

    if (blogNumber == id) {
      handleToast("blog number already bookmarked");
    } else {
      setBlogNumber(blogNumber + 1);
    }
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between row container mx-auto">
        <div className="col-lg-8 border border-primary">
          <Blogs
            handleTimeBtn={handleTimeBtn}
            handleBookmarkBtn={handleBookmarkBtn}
          ></Blogs>
        </div>

        <div className="col-lg-4 border border-info">
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
