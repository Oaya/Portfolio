import React from "react";
import Github from "../images/icon/icons8-github-48.png";
import LinkedIn from "../images/icon/icons8-linkedin-48.png";
import Email from "../images/icon/icons8-mail-48.png";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__link">
        <a href="mailto: ayaaa.okzk@gmail.com">
          <img
            className="link__email"
            src={Email}
            alt="mail"
          />
        </a>
        <a href="https://github.com/Oaya">
          <img
            className="link__github"
            src={Github}
            alt="github"
          />
        </a>
        <a href="https://www.linkedin.com/in/aya-okizaki-3581271bb/">
          <img
            className="link__linkedin"
            src={LinkedIn}
            alt="linkedin"
          />
        </a>
      </div>

      <p className="copy-right">OAya © 2022.</p>
    </div>
  );
}

export default Contact;
