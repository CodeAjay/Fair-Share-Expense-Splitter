import React from "react";
import "../styles.css";

function Contact() {
  return (
    <>
      <div className="cntprn">
        This is our Contact Form
        <form className="cntfrm">
          <input type="email" placeholder="Your Email" />
          <br />
          <input type="text" placeholder="Your Name" />
          <br />
          <textarea rows="7" cols="30" placeholder="Message" />
          <br />
          <input type="submit" value="Send" className="cntbtn" />
        </form>
      </div>
    </>
  );
}

export default Contact;
