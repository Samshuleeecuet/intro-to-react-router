import React from 'react';
import './friend.css';
import { Link } from 'react-router-dom';
const Friend = ({friend}) => {
   // console.log(friend);
    const {id,email,name,phone,username,website,address,company}= friend;
    return (
        <div className='friend'>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p><Link to={`/friend/${id}`}>Show me details</Link> </p>
        </div>
    );
};

export default Friend;