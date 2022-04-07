import React from 'react';
import Like from './Like';

const Story = ({title, author, url, likes, addLike}) => {

    return (
        <li>
            <a href={url}><h3>{title}</h3></a>
            <p>By {author}</p>
            <Like likes={likes} addLike={addLike}/>
        </li>
    );
}

export default Story;