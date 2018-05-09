import React from 'react';


/* const VideoListItem = (props) => {
  const video = props.video;
  return (
    <li>video</li>
  );
}

these code equal to below
*/
const VideoListItem = ({video}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.channelTitle;
  return (
    <li className="list-group-item">
      <div className="media media-left">
        <img className="media-object" src={imageUrl} />
      </div>
      <div className="media-heading">
        {title}
      </div>
    </li>
  );
}

export default VideoListItem;