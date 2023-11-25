import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Best </span>
        <span>Food</span>
        <span>In </span>
        <span>Town.</span>
      </div>
    </div>
  );
};

export default PreLoader;