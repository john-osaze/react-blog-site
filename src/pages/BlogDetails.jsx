import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const {data: blog, error, isLoading} = useFetch(`http://localhost:8000/blogs/${id}`);

    const navigate = useNavigate();

    const handleDelete = () => {
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: "DELETE"
        }).then(() => {
            navigate("/")
        })
    }

    return (
        <div className="blog-details">
            { isLoading && <p>Loading...</p> }
            { error && <p>{ error }</p> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <cite>Written by { blog.author }</cite>
                    <p>{ blog.body }</p>

                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    )
}

export default BlogDetails