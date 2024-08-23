import React from "react";

const Preloader = () => {
  return (
    <div>
      <div className="wrapper">
        {/* Preloader */}
        <div className="preloader">
          <img
            src="dist/img/AdminLTELogo.png"
            alt="AdminLTELogo"
            height={60}
            width={60}
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
