// import React from "react";

// function Footer() {
//   return <footer>This is the footer</footer>;
// }

// export default Footer;

import React from "react";
import { Row, Col,Container } from "react-bootstrap";
import { FaInstagram,FaGithub,FaYoutube } from "react-icons/fa";
import "../styles.css";

const Footer = () => {
  const githubUrl = "https://github.com/codeajay";

  return (
    <footer style={footerStyle}>
      <Container>
        <Row className="ftrics">
          <Col md={6}>
            <a href="https://instagram.com/devlab01" target="_blank"><FaInstagram /></a>
            <a href="https://github.com/codeajay" target="_blank"><FaGithub /></a>
            <a href="https://youtube.com/@devlab01" target="_blank"><FaYoutube /></a>
          </Col>
          
        </Row>
      </Container>
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
