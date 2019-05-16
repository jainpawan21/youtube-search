import React from 'react'
import VideoItem from './VideoItem';


export default function VideoList({videos}) {
    const renderList = videos.map(video =>{
        return <VideoItem video={video}/>
    });

    return (
    <div>
      {renderList}
    </div>
  );
}
