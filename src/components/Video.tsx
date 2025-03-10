import React from 'react';

const Video = ({ videoSrc, description } : { videoSrc : string; description : string}) => {
  // Extract the video ID from the YouTube link
  // const videoId = videoSrc.split('v=')[1];
  const embedUrl = `https://www.youtube.com/embed/${videoSrc}`;

  return (
    <div className="video-container flex flex-col items-center pt-4">
      <iframe 
        width="480" 
        height="300" 
        src={embedUrl} 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        title="YouTube video player"
      ></iframe>
      <h2 className='font-light text-left text-neutral-700 my-2 px-8'> { description } </h2>
    </div>
  );
};

export default Video;
