import React from "react";
import Story from "./Story";

const StoryList = ({stories}) => {

    const storyNodes = stories.map((story, index) => {
        return <Story key={index} title={story.title} author={story.by} url={story.url} />
    })

    return (
        <>
            <h2>Latest News Stories</h2>
            <ol>
                {storyNodes}
            </ol>
        </>
    );
}

export default StoryList;