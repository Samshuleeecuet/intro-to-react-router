import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData()
    console.log(post);
    const navigate = useNavigate();
    const handleGoBack = ()=>{
        navigate(-1);
    }
    return (
        <div>
            <h2>Post Details of {post.id}</h2>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;