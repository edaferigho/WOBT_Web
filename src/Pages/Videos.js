import React from "react";
import "./Videos.css";
import Box from "../Components/Box";
import VideoData from "../Utils/VideoData";
import Hero from "../Components/Hero";



function Videos() {
  

  try {
   
  } catch (error) {
    console.log("An error occured")
  }
  return (
    
    <div className="header">
      <Hero title="Uploaded Videos" />
      <div className="cards_vertical">
        {VideoData.map((video) => (
          <a key={video.id} href={video.url}>
            <Box image={video.image} title={video.title} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Videos;
