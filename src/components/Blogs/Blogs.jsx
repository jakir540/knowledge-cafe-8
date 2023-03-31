import React from "react";
import { useState, useEffect } from "react";
import SingleBlog from "../SingleBlog/SingleBlog";

const Blogs = ({ handleTimeBtn, handleBookmarkBtn }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      {blogs.map((singleBlog) => (
        <SingleBlog
          key={singleBlog.id}
          singleBlog={singleBlog}
          handleTimeBtn={handleTimeBtn}
          handleBookmarkBtn={handleBookmarkBtn}
        ></SingleBlog>
      ))}
    </div>
  );
};

export default Blogs;
