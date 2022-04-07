import React, {useEffect, useState} from 'react';
import StoryList from '../components/StoryList';
import SearchBar from '../components/SearchBar';

const NewsBox = () => {

    const [storyIds, setStoryIds] = useState([]);

    const [stories, setStories] = useState([]);

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

    // const fetchStories = () => {
    //     fetch("https://hacker-news.firebaseio.com/v0/item/30939482.json")
    //     .then(response => response.json())
    //     .then(data => setStories([data]));
    // }
    
    const fetchStories = () => {
        const storyUrls = storyIds.map(id => `https://hacker-news.firebaseio.com/v0/item/${id}.json`);

        const storyRequests = storyUrls.map(url => fetch(url));

        // fetch.all(storyUrls)
        // .then(responses => responses.json())
        // .then(data => setStories(data));

        Promise.all(storyRequests)
            .then(responses => responses.forEach(
            response => response.json()))
            .then(data => setStories(data));

        // const jsonFunc = (arr) => {
        //     const newArr = arr.map(item => item.json);
        //     return newArr;
        // }

        // Promise.all(storyRequests)
        //     .then(jsonFunc(responses))
        //     .then(data => setStories(data));
    }

    return (
        <>
            <h1>NewsBox</h1>
            <SearchBar />
            <StoryList />
        </>
    );

}

export default NewsBox;