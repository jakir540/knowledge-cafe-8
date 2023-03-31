import React from "react";
import { useState,useEffect } from "react";
import SingleBlog from "../SingleBlog/SingleBlog";





const Blogs = () => {
 const [blogs,setBlogs]=useState([])

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);


  return (
    <div>
      <p>this is the blog components</p>


     {
      blogs.map((singleBlog) => <SingleBlog key={singleBlog._id} singleBlog = {singleBlog}></SingleBlog>)
     }
    </div>
  );
};

export default Blogs;
