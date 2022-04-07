import React from "react";
import Story from "./Story";

const StoryList = ({stories, addLike, unLike}) => {

    const storyNodes = stories.map((story, index) => {
        return <Story key={index} index={index} title={story.title} author={story.by} url={story.url} score={story.score} addLike={addLike} unLike={unLike}/>
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