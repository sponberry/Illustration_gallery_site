import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../styles/About.css"

const picture = require("../img/plant_lady.jpeg")

const paragraphs = {
  about: "I have a passion for well-being, health and self-care, which is the focus of many of my illustrations, and I’m committed to bringing helpful messages to the world and encouraging feelings of fulfilment and self-compassion through the images I create.",
  projects: "I’ve worked with a number of clients across varying industries before, including Peace, Love & Yoga With Kate, Mr Swan’s Sweets, local bands such as The Red Rock Rivers and The Andrinis, Amelia’s Magazine, Hulls Angels Roller Derby and Juno Magazine.",
}

const AboutSection = () => (
  <div className="about" id="about">
    <div className="row">
      <div className="col-md-6">
        <h2>about</h2>
      </div>
      <div className="col-md-6"></div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <img src={picture.default} alt="me" width="50%" />
      </div>
      <div className="col-md-6">
        <p>
          {paragraphs.about}
        </p>
      </div>
    </div>
    <div className="spacer"></div>

    <div className="row">
      <div className="col-md-6">
        <h2>projects</h2>
      </div>
      <div className="col-md-6">
        <p>
          {paragraphs.projects}
        </p>
      </div>
    </div>
    <div className="spacer"></div>

    <div className="row">
      <div className="col-md-6">
        <h2>contact</h2>
      </div>
      <div className="col-md-6">
        <p>
        I'm not currently taking commissions, but you can email me: <a href="mailto:abigailillustration@gmail.com?subject=Illustration Query">
          abi@abigail-illustration.com
          </a>
           {" "}with queries or print requests. Or follow me below on socials.
        </p>
        <div className="icon-set">
          <span className="icons">
            <a href="https://www.linkedin.com/in/abigailnottingham/" rel="noreferrer" target="blank">
              <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
            </a>
          </span>
          <span className="icons">
            <a href="https://twitter.com/Sponberry" rel="noreferrer" target="blank">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
          </span>
          <span className="icons">
            <a href="https://www.instagram.com/abigailillustration/" rel="noreferrer" target="blank">
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
)

export default AboutSection