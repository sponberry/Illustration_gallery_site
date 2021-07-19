import React from "react"
import "../styles/FirstSection.css"

const gardenSunLarge = require("../img/1024_img.jpg")
const gardenSunMedium = require("../img/800_img.png")
const gardenSunSmall = require("../img/736_img.png")
const gardenSunSmallPortrait = require("../img/425_img.png")

const FirstSection = () => (
  <div className="sectionOne" id="home">
    <picture>
      <source srcSet={gardenSunLarge.default} media="(min-width: 1024px)" />
      <source srcSet={gardenSunMedium.default} media="(min-width: 800px)" />
      <source srcSet={gardenSunSmall.default} media="(min-width: 667px)" />
      <source srcSet={gardenSunSmallPortrait.default} media="(min-width: 375px)" />
      <img 
        src={gardenSunLarge.default}
        alt="background illustration of woman relaxing in the sun"
        className="background-img lozad"
      />
    </picture>

      <a href="#gallery">
        <button className="btn btn-light">View All Illustrations</button>
      </a>
      {/* <a href="#gallery">
        <button className="btn btn-light alt-btn">View All Illustrations</button>
      </a> */}
  </div>
)

export default FirstSection