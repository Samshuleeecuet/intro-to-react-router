import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend =useLoaderData();
    //console.log(friend);
    return (
        <div>
           <h3>Everything about {friend.name} is here</h3>
           <h4>Name: {friend.name} </h4>
           <p>Phone: {friend.phone}</p>
        </div>
    );
};

export default FriendDetails;