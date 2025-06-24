import React from "react";
import "./AboutUs.css";
import teamMembers from "../Utils/MinistersData";
import Hero from "../Components/Hero";

function AboutUs() {
  return (
    <>
      <Hero title="About Us" />
      <div className="about-us-container">
        <div className="sub-header">Our Mission</div>
        <div className="content">
          We are a Bible believing church built on the end-time message of the seven
          seals and seven thunders as decleared in Rev.10 and revealed through God's prophet William Marrion Branham. Our mission is
          to win souls for Christ through full Gospel of the bible, calling the Predestinated, baptising in the name of the Lord Jesus Christ,
          and the filling of the Holy Ghost, as declared in Act 2:38.
          We strive to prepare a Bride without spot or wrinkle by the mystery of the word for the soon coming of the Lord.
        </div>
        <div className="sub-header">Our Ministers</div>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <img
                className="member-photo"
                src={member.photo}
                alt={member.name}
              />
              <div className="member-name">{member.name}</div>
              <div className="member-role">{member.role}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AboutUs;
