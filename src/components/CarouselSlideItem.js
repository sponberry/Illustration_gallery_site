import React, { useState } from "react"

const CarouselSlideItem = ({pos, idx, activeIdx, createItem}) => {
  const [ message, setMessage ] = useState("")
  
  const item = createItem(pos, idx, activeIdx);

  const handleClick = link => {
    if (!link) {
      setMessage("Option not available for this illustration")
      setTimeout(() => {
        setMessage("")
      }, 3000)
    } else {
      window.open(link)
    }
  }

  return (
      <li className="carousel__slide-item" style={item.styles}>
          <div 
            className="carousel__slide-item-img-link" 
            onClick={() => handleClick(item.image.redBubble)}
          >
            <img 
              src={item.image.url.default} 
              alt={item.image.altText} 
              className="lozad"
            />
          </div>
          <div className="carousel-slide-item__body">
            <div className="message">
              {message}
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend" id="button-addon3 button-addon4">
                <button 
                  class="btn btn-outline-secondary" 
                  type="button"
                  onClick={() => handleClick(item.image.redBubble)}
                >
                  Buy Print
                </button>
                {/* remove extra-btn class if 3rd btn required */}
                <button className="btn btn-outline-secondary extra-btn" type="button"></button>
                <button 
                  className="btn btn-outline-secondary right-btn" 
                  type="button"
                  onClick={() => handleClick(item.image.stock)}
                >
                  Buy Stock Image
                </button>
              </div>
            </div>
          </div>
      </li>
  );
};

export default CarouselSlideItem