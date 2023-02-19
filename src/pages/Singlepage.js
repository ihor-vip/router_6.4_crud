import {useParams, Link, useNavigate, useLoaderData, Await, useAsyncValue} from "react-router-dom";
import {Suspense, useEffect, useState} from "react";

const Post = () => {
    const post = useAsyncValue();

    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
    )
}

const Singlepage = () => {
    const {post, id} = useLoaderData();
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <div>
            <button onClick={goBack}>Go back</button>
            <Suspense fallback={<h2>Post is loading...</h2>}>
               <Await resolve={post}>
                    <Post/>
               </Await>
           </Suspense>
            <Link to={`/posts/${id}/edit`}>Edit this post</Link>
        </div>
    );
}

async function getPostById(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return res.json()
}

const postLoader = async ({params}) => {
    const id = params.id;

   return {post: getPostById(id), id}
}

export {Singlepage, postLoader}