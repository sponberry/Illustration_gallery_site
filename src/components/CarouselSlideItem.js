import React from "react"

const CarouselSlideItem = ({pos, idx, activeIdx, createItem}) => {
  const item = createItem(pos, idx, activeIdx);

  return (
      <li className="carousel__slide-item" style={item.styles}>
          <div className="carousel__slide-item-img-link">
              <img src={item.image.url.default} alt={item.image.altText} />
          </div>
          <div className="carousel-slide-item__body">
          <div class="input-group mb-3">
            <div class="input-group-prepend" id="button-addon3 button-addon4">
              <a href={item.image.redBubble} target="blank" rel="noreferrer">
                <button class="btn btn-outline-secondary" type="button">Buy Print</button>
              </a>
              {/* remove extra-btn class if 3rd btn required */}
              <button class="btn btn-outline-secondary extra-btn" type="button"></button>
              <button class="btn btn-outline-secondary right-btn" type="button">Buy Stock Image</button>
            </div>
          </div>
          </div>
      </li>
  );
};

export default CarouselSlideItem