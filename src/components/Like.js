import React from 'react';

const Like = ({addLike, unLike, score, index}) => {

    return (
        <div className='likes'>
            <button value={index} onClick={addLike}>&#128077;</button>
            <button value={index} onClick={unLike}>&#128078;</button>
            {score === 1 ? <p>{score} like</p> : <p>{score} likes</p>}
        </div>
    )
}

export default Like;