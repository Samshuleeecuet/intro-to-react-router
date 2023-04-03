import React from 'react';
import './Post.css'
import { Link } from 'react-router-dom';
const Post = ({post}) => {
    //console.log(post);
    const {userId,title,body,id}=post;
    return (
        <div className='post'>
            <h2>Post Title </h2>
            <h3>{title}</h3>
            <p><Link to={`/post/${id}`}>Details Here</Link></p>
        </div>
    );
};

export default Post;