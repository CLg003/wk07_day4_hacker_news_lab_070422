import React, {useEffect, useState} from 'react';
import StoryList from '../components/StoryList';
import SearchBar from '../components/SearchBar';

const NewsBox = () => {

    const [storyIds, setStoryIds] = useState([]);

    const [stories, setStories] = useState([]);

    const [likes, setLikes] = useState(0);

    const addLike = () => {setLikes(likes + 1)};

    const handleSearch = (query) => {
        const filteredStories = stories.filter(story => story.title.toLowerCase().includes(query.toLowerCase()));
        setStories(filteredStories);
        };

    useEffect(() => {
        fetchStoryIds()
    }, [])

    useEffect(() => {
        fetchStories()
    }, [storyIds])

    const fetchStoryIds = () => {
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
        .then(response => response.json())
        .then(data => setStoryIds(data));
    }
    
    const fetchStories = () => {
        const storyRequests = storyIds.map(id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`));
        Promise.all(storyRequests)
        .then(storyRequests => Promise.all(storyRequests.map(request => request.json())))
        .then(data => setStories(data));
    };

    return (
        <>
            <h1>Hacker News</h1>
            <SearchBar handleSearch={handleSearch} stories={stories} />
            <StoryList stories={stories} likes={likes} addLike={addLike}/>
        </>
    );

}

export default NewsBox;



// SINGLE STORY DETAIL TEST FETCH:
    // const fetchStories = () => {
    //     fetch("https://hacker-news.firebaseio.com/v0/item/30939482.json")
    //     .then(response => response.json())
    //     .then(data => setStories([data]));

