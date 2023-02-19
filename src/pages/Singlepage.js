import {useParams, Link, useNavigate, useLoaderData} from "react-router-dom";
import {useEffect, useState} from "react";

const Singlepage = () => {
    const {post, id} = useLoaderData();
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <div>
            <button onClick={goBack}>Go back</button>
            {
                post && (
                    <>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                        <Link to={`/posts/${id}/edit`}>Edit this post</Link>
                    </>
                )
            }
        </div>
    );
}

const postLoader = async ({params}) => {
    const id = params.id;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return res.json()
}

export {Singlepage, postLoader}