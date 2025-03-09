import React from 'react';

const Video = ({ videoSrc } : { videoSrc : string}) => {
  // Extract the video ID from the YouTube link
  const videoId = videoSrc.split('v=')[1];
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-container">
      <iframe 
        width="350" 
        height="200" 
        src={embedUrl} 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default Video;
