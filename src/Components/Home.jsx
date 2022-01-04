import { useState } from "react";
import { Blogs } from "../data/Blogs";

export default function Home() {
  const [blogs, updateBlogs] = useState(Blogs);

  function formatDate(date){
      return date.toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ");
  }

  return (
    <div>
      {blogs.map((blog) => {
        return (
          <div key={blog.id+Math.random()}onDoubleClick={()=>console.log(JSON.stringify(blog.id))} className="container">
            <div className="blog__left">
              <span className="blog__title">
                <i>{blog.title}</i>
              </span>
              <span className="blog__date">
                <strong>{formatDate(blog.id)}</strong>
              </span> 
            </div>
            <p>{blog.summary}</p>
          </div>
        );
      })}
    </div>
  );
}
