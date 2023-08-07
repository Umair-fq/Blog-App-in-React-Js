import {useParams} from 'react-router-dom'
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom'


const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/'+id);
    const history = useHistory()
    const HandleDelete = () => {
        fetch('http://localhost:8000/blogs/'+id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }
    return ( 

        <>
            {isPending && <div>Loading....</div>}
            {error && <div>{error}</div>}
            <div className="blog-details">
                    {/* <h2>Blog Details - {id}</h2> */}
            </div>
            {blog && (<div className='blog'>
                    <article className='blogArticle'>
                        <h1 className='title'>{blog.title}</h1>
                        <p className='author'>written by: {blog.author}</p>
                        <div className='body'>{blog.body}</div>
                        <button className="delete" onClick={HandleDelete}>Delete</button>
                    </article>
                </div>)}
        
        </>
    );
}
 
export default BlogDetails;