import React from 'react'
import Post from '../components/Post/Post'
import posts from "../data/content/rpn_posts";
import profile from "../data/profiles/reclaimedByNature.json";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from 'react';

function PostTemplate() {
  // const itemsPerLoad = 2;
  // const [startIndex, setStartIndex] = useState(0)
  // const [endIndex, setEndIndex] = useState(itemsPerLoad)
  const [dataSource, setDataSource] = useState(posts);
  const [hasMore, setHasMore] = useState(true);
  const fetchMoreData = () => {
    if(dataSource.length < posts.length) {
      // setStartIndex(startIndex + itemsPerLoad)
      // setEndIndex(endIndex + itemsPerLoad)
      //MAKING API CALL
        setDataSource(dataSource.concat(posts))
    // }
    } else {
      setHasMore(false);
    }
  }
  const squares = [];

  for(let i = 0; i < dataSource.length; i++) {
    if(dataSource[i].pinned) {
      squares.splice(dataSource[i].pinned - 3, 0, dataSource[i])
    } 
  }
  for(let i = 0; i < dataSource.length; i++) {
    if(!dataSource[i].pinned) {
      squares.push(dataSource[i])
    } 
  }
  return (
    <InfiniteScroll dataLength={dataSource.length} next={fetchMoreData} hasMore={true} loader={<div>{hasMore && "Loading..."}</div>}>
    {squares.map( (post) => {
      if(post.title) {
        return <Post id={post.creation_timestamp} media={post.media} description={post.title} location={post.location} user={profile} key={post.creation_timestamp}/>
      } else {
        return <Post id={post.media[0].creation_timestamp} media={post.media} description={post.media[0].title} location={post.media[0].location} user={profile} key={post.creation_timestamp}/>
      }
    }
    )}
    </InfiniteScroll>
  )
}

export default PostTemplate;