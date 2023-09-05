import React, { useEffect } from "react";

const Darkmode = () => {
  useEffect(() => {
    document.querySelector("body").classList.toggle("light");
  });

  const switchTheme = (e) => {
    console.log(e);
    document.querySelector("body").classList.toggle("light");
  };
  return (
    <button id="darkmode" onClick={(e) => switchTheme(e)}>
      <img
        className="light-icon"
        src={`${process.env.PUBLIC_URL}/images/icons/sun-01.svg`}
        alt="Sun images"
      />
      <img
        className="dark-icon"
        src={`${process.env.PUBLIC_URL}/images/icons/vector.svg`}
        alt="Sun images"
      />
    </button>
  );
};
export default Darkmode;
