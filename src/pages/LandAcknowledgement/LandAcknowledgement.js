import React from "react";
import "./LandAcknowledgement.css";

const LandAcknowledgment = ({ indigenousLands }) => {

  const btnLearn = (e) => {
    e.preventDefault();
    window.location.href = "/learn-more";
  };

  return (
    <div className="land-acknowledgment">
      <h2 className="title">Land Acknowledgment</h2>
      <div className="content">
        {indigenousLands.length > 0 ? (
          <p className="land-paragraph">
            {`I am honored to be a guest on the traditional and unceded territories of the `}
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
        <button onClick={(e) => btnLearn(e)} className="cta-button">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default LandAcknowledgment;