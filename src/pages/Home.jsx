import useFetch from '../hooks/useFetch';
import BlogList from '../components/BlogList';

const Home = () => {
    const { data: blogs, isLoading, error } = useFetch("http://localhost:8000/blogs")

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog =>blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    
    return (
        <div className="home">
            {error && <p>{ error }</p>}
            {isLoading && <p>Loading...</p>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    )
}

export default Home