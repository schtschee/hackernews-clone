import * as React from 'react';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchStoryIds, fetchStory } from '../api/hackerNewsApi';
import NewsItem from './NewsItem';

interface NewsListProps {
    type: string;
}

const NewsList: React.FC<NewsListProps> = ({ type }) => {
    const [storyIds, setStoryIds] = useState<number[]>([]);
    const [stories, setStories] = useState<any[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(0);

    useEffect(() => {
        const loadStoryIds = async () => {
            const ids = await fetchStoryIds(type);
            setStoryIds(ids);
            setStories(prevStories => []);
        };

        loadStoryIds();
    }, [type]);

    useEffect(() => {
        const loadStories = async () => {
            const newStories = await Promise.all(
                storyIds.slice(page * 30, (page + 1) * 30).map(id => fetchStory(id))
            );
            setStories(prevStories => [...prevStories, ...newStories]);
            setHasMore(newStories.length > 0);
            console.log(stories);
        };
        //console.log(storyIds);
        if (storyIds.length > 0) {
            loadStories();
        }
    }, [storyIds, page]);

    return (
        <InfiniteScroll
            dataLength={stories.length}
            next={() => setPage(prevPage => prevPage + 1)}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
        >
            {stories.map(story => (
                <NewsItem
                    key={story.id}
                    id={story.id}
                    title={story.title}
                    url={story.url}
                    score={story.score}
                    by={story.by}
                />
            ))}
        </InfiniteScroll>
    );
};

export default NewsList;
