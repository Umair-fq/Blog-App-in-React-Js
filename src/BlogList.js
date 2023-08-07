// import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

//Actually we are creating this as a child component and we will get the props from the Home component
const BlogList = ({blogs, title}) => {
    // const blogs = props.blogs
    // const title = props.title
    return ( 
        <>
            <div className="BlogList">
                <h1>{title}</h1>
                {blogs.map((blog) => (
                <div key={blog.id} className="blogCard">
                    <Link to={`/blog/${blog.id}`}>
                        <h3>{blog.title}</h3><h1 className="blogTitle">{blog.title}</h1>
                        <p className="authorInfo">Written by: {blog.author}</p>
                        <p className="blogDescription">{blog.description}</p>
                    </Link>
                {/* <button className="deleteBtn" onClick={() => HandleDelete(blog.id)}><MdDelete /></button> */}
                </div>
    ))}
            </div>
        </>
    );
}

export default BlogList;