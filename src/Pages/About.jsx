import React from "react";

function About() {
  return (
    <>
      <div className="about-container">
        <div className="about-content">
          {/* <img src={profilePic} alt="Profile Pic" className="about-image" /> */}
          <h2 className="about-heading">About Us</h2>
          <p className="about-description">
            FairShare, helps you to simplify the process of splitting expenses
            between groups of people. My React-based web application makes it
            easy to track shared expenses, allocate costs based on individual
            contributions, and automatically calculate each participant's share.
            Whether you're planning a weekend getaway with friends or organizing
            a company event, my app takes the burden of expense tracking off
            your shoulders, so you can focus on enjoying your trip or event
            without worrying about who owes what.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
