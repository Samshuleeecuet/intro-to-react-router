import React from 'react';
import './Post.css'
import { Link, useNavigate } from 'react-router-dom';
const Post = ({post}) => {
    //console.log(post);

    const {userId,title,body,id}=post;
    const navigate = useNavigate();

    const handleNavigation = ()=>{
        navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <h2>Post Title </h2>
            <h3>{title}</h3>
            <Link to={`/post/${id}`}><button>Details Here</button></Link>
            <button onClick={handleNavigation}>With Button Handler</button>
        </div>
    );
};

export default Post;