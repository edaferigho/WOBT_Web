import React from "react";
import "./Events.css";
import EventData from "../Utils/EventData";
import Box from "../Components/Box";
import Hero from "../Components/Hero";
import Swiper from "../Components/Swiper"

function Events() {
  return (
    <div className="header">
      
      <Hero title="Up Comming Events" />
      <br/>
      <Swiper />
      <div className="event_cards">
        {EventData.map((event) => (
          <Box
            key={event.id}
            image={event.image}
            title={event.title}
            date={event.date}
            description={event.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Events;
