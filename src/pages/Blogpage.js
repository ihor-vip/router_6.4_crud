import {useEffect, useState} from "react";
import {Link, useSearchParams} from "react-router-dom";

const Blogpage = () => {
    const [posts, setPosts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const postQuery = searchParams.get('post') || '';

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    },[])

    return (
        <div>
            <h1>Our news</h1>

            <form autoComplete='off' onSubmit={handleSubmit}>

            </form>

            <Link to='/posts/new'>Add new post</Link>
            {
                posts.map(post => (
                    <Link key={post.id} to={`/posts/${post.id}`}>
                        <li>{post.title}</li>
                    </Link>
                ))
            }
        </div>
    );
}

export {Blogpage}