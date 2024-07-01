import React, { useState } from "react";
import "./darkMode.css";

const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };
  return (
    <div className="darkMode">
      <input
        className="darkModeInput"
        type="radiobutton"
        id="darkModeToggle"
        onChange={toggleTheme}
      />
      <label className="darkModeLabel" for="darModeToggle">
        Sun
      </label>
    </div>
  );
};

export default DarkMode;
