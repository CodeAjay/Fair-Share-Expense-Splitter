// import React from "react";

// function Footer() {
//   return <footer>This is the footer</footer>;
// }

// export default Footer;

import React from "react";

const Footer = () => {
  const githubUrl = "https://github.com/codeajay";

  return (
    <footer style={footerStyle}>
      <p>
        &copy; {new Date().getFullYear()} FairShare. All rights reserved.{" "}
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          CodeAjay
        </a>
      </p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "#4caf50",
  padding: "20px",
  textAlign: "center"
};

export default Footer;
