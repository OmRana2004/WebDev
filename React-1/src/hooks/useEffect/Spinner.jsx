// Spinner.jsx
import React from "react";

function Spinner() {
  return (
    <div style={styles.overlay}>
      <div style={styles.spinner}></div>
    </div>
  );
}

const styles = {
  overlay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    backgroundColor: "black", // covers the whole screen
  },
  spinner: {
    width: "50px",
    height: "50px",
    border: "6px solid white",
    borderTop: "6px solid transparent",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};

// Add keyframes using a <style> tag
const styleSheet = document.styleSheets[0];
const keyframes =
  `@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default Spinner;
