import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // Using state, we are storing the available blogs
  const [blogs, setBlogs] = useState([
    {
        id: 1,
        title: "Blog 1",
        description: "This is blog 1",
        author: "John",
    },
    {
        id: 2,
        title: "Blog 2",
        description: "This is blog 2",
        author: "Jane",
    },
    {
        id: 3,
        title: "Blog 3",
        description: "This is blog 3",
        author: "Robert",
    },
    {
        id: 4,
        title: "Blog 4",
        description: "This is blog 4",
        author: "John",
    }
    
]);

    useEffect(() => {
        console.log("HELLO")
        console.log(blogs)
    })

    // function for deleting a blog and we will pass it as a props to the child component
    const HandleDelete = (id) => {
        console.log(id);
        const newBlogs = blogs.filter((blog) => (
            blog.id !== id
        ))
        //now we are going to update the state of the blog
        setBlogs(newBlogs);
    } 

    

    return (
    <div className="container">
        {/* {blogs.map((blog) => (
        <div key={blog.id} className="blogCard">
        <h1 className="blogTitle">{blog.title}</h1>
        <p className="authorInfo">Written by: {blog.author}</p>
        <p className="blogDescription">{blog.description}</p>
        </div>
      ))} */}


        {/*Actually we are jut passing the blogs which are created using UseState hook to the child component which is BlogList  */}
        <BlogList blogs={blogs} title="All Blogs" HandleDelete={HandleDelete}/>

        {/* now we are going to filter the blogs on the basis of author*/}
        {/* <BlogList blogs={blogs.filter((blog) => (
            blog.author === "John"
        ))} title="John Blogs"/> */}


    </div>
);
};

export default Home;
