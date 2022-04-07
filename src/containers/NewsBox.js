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
    
    const fetchStories = () => {
        const storyRequests = storyIds.map(id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`));
        Promise.all(storyRequests)
        .then(storyRequests => Promise.all(storyRequests.map(request => request.json())))
        .then(data => setStories(data));
    };

    // SINGLE STORY DETAIL TEST FETCH:
    // const fetchStories = () => {
    //     fetch("https://hacker-news.firebaseio.com/v0/item/30939482.json")
    //     .then(response => response.json())
    //     .then(data => setStories([data]));

    return (
        <>
            <h1>NewsBox</h1>
            <SearchBar />
            <StoryList />
        </>
    );

}

export default NewsBox;


// Promise.all(storyRequests)
        //     .then(responses.forEach(
        //     response => console.log(response)))



        // fetch.all(storyUrls)
        // .then(responses => responses.json())
        // .then(data => setStories(data));

        

        // const jsonFunc = (arr) => {
        //     const newArr = arr.map(item => item.json);
        //     return newArr;
        // }

        // Promise.all(storyRequests)
        //     .then(jsonFunc(responses))
        //     .then(data => setStories(data));