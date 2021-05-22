import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../styles/About.css"

const picture = require("../img/plant_lady.jpeg")

const paragraphs = {
  about: "I have a passion for well-being, health and self-care, which is the focus of many of my illustrations, and I’m committed to bringing helpful messages to your audience and encouraging feelings of fulfilment and self-compassion through the images I create.",
  projects: "I’ve worked with a number of clients across varying industries before, including Mr Swan’s Sweets, local bands such as The Red Rock Rivers and The Andrinis, Amelia’s Magazine, Hulls Angels Roller Derby and Juno Magazine.",
  contact: "Email me: abi@abigail-illustration.com for commissions, collaborations, product requests or even just to put out some feelers for your upcoming project. Or follow me below on socials."
}

const AboutSection = () => (
  <div className="about">
    <div className="row">
      <div className="col-md-6">
        <h2>about</h2>
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
          {paragraphs.contact}
        </p>
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
)

export default AboutSection