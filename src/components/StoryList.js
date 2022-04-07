import React from "react";
import Story from "./Story";

const StoryList = ({stories, likes, addLike}) => {

    const storyNodes = stories.map((story, index) => {
        return <Story key={index} title={story.title} author={story.by} url={story.url} likes={likes} addLike={addLike}/>
    })

    return (
        <div className="news-stories">
            <h2>Latest News Stories</h2>
            <ol>
                {storyNodes}
            </ol>
        </ div>
    );
}

export default StoryList;