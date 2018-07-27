import React from 'react';
import VideoListItem from './video_list_item'
// note react includes bootstrap 4
// this.props for class based components as an arguement, we cause this.props
// Use built in iterators


const VideoList = (props) => {
    const VideoItems = props.videos.map( (video)=> {
        return <VideoListItem key={video.etag} video={video} />
    });

    return (
        <ul className = "col-md-4 list-group">
            {VideoItems}
        </ul>
    );
}

export default VideoList;
