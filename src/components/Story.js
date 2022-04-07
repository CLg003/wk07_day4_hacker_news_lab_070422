import React from 'react';

const Story = ({title, author, url}) => {

    return (
        <li>

            <a href={url}><h3>{title}</h3></a>
            <p>By {author}</p>

        </li>
    );
}

export default Story;