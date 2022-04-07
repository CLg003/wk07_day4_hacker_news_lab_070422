import React from 'react';
import Like from './Like';

const Story = ({title, author, url, addLike, unLike, score, index}) => {

    return (
        <li>
            <a href={url}><h3>{title}</h3></a>
            <p>By {author}</p>
            <Like addLike={addLike} score={score} index={index} unLike={unLike}/>
        </li>
    );
}

export default Story;