// import React from "react";
// import "./Hero.css";

// function Hero() {
//   const btnClick = (e) => {
//     e.preventDefault();
//     window.location.href = "/location";
//   };

//   return (
//     <div className="hero-section">
//       <div className="hero-overlay"></div>
//       <div className="hero-content">
//         <h1>Welcome to Acknowledging Our Lands</h1>
//         <p>
//           <strong>Acknowledging Our Lands!</strong> This app will help you
//           detect your location and guide you through the process of making a
//           meaningful territory acknowledgment.
//         </p>
//         <p>
//           Thanks to the valuable dataset provided by Native Land Digital, our
//           project has been able to accurately map and acknowledge the Indigenous
//           territories and traditional lands. Visit their website at{" "}
//           <a
//             className="hero-link"
//             href="https://native-land.ca/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Native Land
//           </a>{" "}
//           to learn more about their important work.
//         </p>
//         <button
//           onClick={(e) => btnClick(e)}
//           className="get-acknowledgment-button"
//         >
//           Get Started
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Hero;import React from "react";
import "./Hero.css";

function Hero() {
  const btnClick = (e) => {
    e.preventDefault();
    window.location.href = "/location";
  };

  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Welcome to Acknowledging Our Lands</h1>
        <p>
          <strong>Acknowledging Our Lands!</strong> This app will help you
          detect your location and guide you through the process of making a
          meaningful territory acknowledgment.
        </p>
        <p>
          Thanks to the valuable dataset provided by Native Land Digital, our
          project has been able to accurately map and acknowledge the Indigenous
          territories and traditional lands. Visit their website at{" "}
          <a
            className="hero-link"
            href="https://native-land.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Native Land
          </a>{" "}
          to learn more about their important work.
        </p>
        <button onClick={btnClick} className="get-acknowledgment-button">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;