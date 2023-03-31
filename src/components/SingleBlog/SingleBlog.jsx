import React from 'react';
import './SingleBlog.css'

const SingleBlog = ({singleBlog,handleTimeBtn,handleBookmarkBtn}) => {
  
  

  const {id,Author_name,author_img,blog_title,read_time,cover_img}=singleBlog
  return (
    <>
    <div className="card mb-3">
      <img src={cover_img} className="card-img-top" alt="..." />
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex m-2 align-items-center">
            <img
              className="rounded-circle author-image "
              src={author_img}
              alt=""
            />
            <div className="ms-3">
              <h4>{Author_name}</h4>
              <p className="text-muted">Mar 30 (1 Days ago)</p>
            </div>
          </div>

          <div className="d-flex m-2">
            <div className="mx-3 ">{read_time} min read </div>
            <svg

            onClick={()=>handleBookmarkBtn(blog_title,id)}


              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 logo"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
          </div>
        </div>

        <h1 className="card-title">{blog_title}</h1>
        <p className="text-muted">#beginners   #programming</p>

        <button onClick={()=> handleTimeBtn(read_time)} className="card-text  cursor-pointer border-0 btn"><a href="#">Mark as read</a></button>
      </div>
    </div>
  </>
  );
};

export default SingleBlog;