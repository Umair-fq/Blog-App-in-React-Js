import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  //destructuring from custom hook
    const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
    

    return (
    <div className="container">
        {error && <div>{error}</div>}
        {isPending && <div>Loading</div>}
        {/* Actually we are using ampersand here which will firstly check the left hand side and then right hand side condition */}
        {/* because fetching blogs may take some time and we have initialized with null so for that we used ampersand here */}
        {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
    </div>
);
};

export default Home;
