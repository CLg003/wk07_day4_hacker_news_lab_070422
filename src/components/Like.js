import React from 'react';

const Like = ({likes, addLike}) => {

    return (
        <div className='likes'>
            <button onClick={addLike}>Like</button>
            {likes === 1 ? <p>{likes} like</p> : <p>{likes} likes</p>}
        </div>
    )
}

export default Like;