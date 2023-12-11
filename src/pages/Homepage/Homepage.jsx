import React from "react";
import { NavigationComponent } from "../../component/index.js";

const Homepage = () => {
  return (
    <>
      <NavigationComponent />

      {/* <h1 className="display-1 my-5 text-center text-secondary" >

        WELCOME TO THE EDCIL PROJECT MANAGMENT SYSTEM
      </h1> */}

      <div>
        <img
          src="src\pages\Homepage\homepageBanner.png"          
          className="img-responsive mx-auto d-block"
          style={{ height: "500px", width: "60%", }}
          alt="Responsive image"
        />
      </div>
    </>
  );
};

export default Homepage;
