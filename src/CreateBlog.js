import { useState } from "react";
import { useHistory } from 'react-router-dom';

const CreateBlog = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("Mario")
    const [isPending, setIsPending] = useState(false)
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author}
        setIsPending(true)
        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog created')
            // history.go(-1)
            history.push('/')
            setIsPending(false)
        })
    }

    return ( 
        
        
        <>
            <h2>Create New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text" name="title" id="title" required value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label>Blog body:</label>
                <textarea name="body" id="body" cols="30" rows="10" required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Select Author</label>
                <select name="author" id="author" value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Mario">Mario</option>
                    <option value="John">John</option>
                    <option value="Jordan">Jordan</option>
                </select>
                {!isPending && <button className="submit">Submit</button>}
                {isPending && <button className="AddingBlog" disabled>Adding Blog...</button>}
            </form>
        </>
     );
}
 
export default CreateBlog;