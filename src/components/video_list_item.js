import React from 'react';


/* const VideoListItem = (props) => {
  const video = props.video;
  return (
    <li>video</li>
  );
}

these code equal to below
*/
const VideoListItem = ({video, onSelectedVideo}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.channelTitle;
  return (
    <li onClick={()=>{onSelectedVideo(video)}} className="list-group-item">
      <div className="media">
        <img className="media-object" src={imageUrl} />
      </div>
      <div className="media-heading">
        {title}
      </div>
    </li>
  );
}

export default VideoListItem;