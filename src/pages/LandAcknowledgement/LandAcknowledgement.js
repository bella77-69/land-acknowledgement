import React, { useState } from "react";
import "./LandAcknowledgement.css";

const LandAcknowledgment = ({ indigenousLands }) => {
  const [currentAcknowledgmentIndex, setCurrentAcknowledgmentIndex] = useState(0);

  const btnLearn = (e) => {
    e.preventDefault();
    window.location.href = "/learn-more";
  };

  const indigenousLandVariations = [
    "I am honored to be a guest on the traditional and unceded territories of the ",
    "I acknowledge that I am on the traditional and unceded territories of the ",
    "Today, we gather on the ancestral lands of the  ",
    "We are grateful to gather on the traditional and unceded territories of the ",
    "We are gathered on the traditional and unceded territories of the ",
    "We are meeting on the traditional and unceded territories of the ",
    
  ];

  const changeAcknowledgment = () => {
    // Increment the current acknowledgment index and loop back to the first one if needed
    setCurrentAcknowledgmentIndex((prevIndex) =>
      prevIndex === indigenousLandVariations.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="land-acknowledgment">
      <h2 className="location-title">Land Acknowledgment</h2>
      <div className="content">
        {indigenousLands.length > 0 ? (
          <p className="land-paragraph">
             {indigenousLandVariations[currentAcknowledgmentIndex]}
            <span className="indigenous-names">
              {indigenousLands.map((land, index) => (
                <React.Fragment key={land.properties.Name}>
                  {index > 0 && ", "}
                  {land.properties.Name}
                
                </React.Fragment>
                
              ))}
            </span>
            {` First Nations.`}
          
          </p>
          
        ) : (
          <p>Loading Indigenous Lands information...</p>
        )}
      </div>
      <div className="cta">
      <button onClick={changeAcknowledgment} className="cta-button">
          Change Acknowledgment
        </button>
        <button onClick={(e) => btnLearn(e)} className="cta-button">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default LandAcknowledgment;