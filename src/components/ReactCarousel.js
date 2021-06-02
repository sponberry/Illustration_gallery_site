import React from "react"
import CarouselSlideItem from "./CarouselSlideItem"
import "../styles/carousel.scss"

/************************************
1. If you want to add or remove items you will need to change a variable called $slide-count in the CSS *minimum 3 slides

2. if you want to change the dimensions of the slides you will need to edit the slideWidth variable here 👇 and the $slide-width variable in the CSS.
************************************/
const slideWidth = 30;

// add reference to itemServices to download items from db
const _items = [
    {
        image: {
            url: require("../img/yogic_squat 2 IG copy.jpg"),
            altText: "A yogi smiles softly in a yogic squat postion"
          },
    },
    {
        image: {
            url: require("../img/yoga_tree_pose.jpg"),
            altText: "A yogi balances in tree pose on short chunky legs, she is backed by leaf-shaped wings"
          },
    },
    {
        image: {
            url: require("../img/yoga_mountain_1.jpg"),
            altText: "A yogi wearing a flower-crown raises their arms joyfully to the sky in a variation of mountain pose"
          },
    },
    {
        image: {
            url: require("../img/Pyramid_Pose.jpg"),
            altText: "A yogi reaches down in pyramid pose, her legs illustrated in the angular style of a pyramid"
          },
    },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
    // styles below centralises item on screen in the slide deck
    const item = {
        styles: {
            transform: `translateX(${position * slideWidth}rem)`,
        },
        image: _items[idx].image,
    };

    // item.styles determines effect to non-active slides,
    // default ensure this doesn't effect the active
    switch (position) {
        case length - 1:
        case length + 1:
            item.styles = {...item.styles, opacity: "25%", height: "80%"};
            break;
        case length:
            break;
        default:
            item.styles = {...item.styles, opacity: 0};
            break;
    }

    return item;
};

const keys = Array.from(Array(_items.length).keys());

const Carousel = () => {
    const [items, setItems] = React.useState(keys);
    const [isTicking, setIsTicking] = React.useState(false);
    const [activeIdx, setActiveIdx] = React.useState(0);
    const bigLength = items.length;

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map((_, i) => prev[(i + jump) % bigLength]);
            });
        }
    };

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength],
                );
            });
        }
    };

    const handleDotClick = (idx) => {
        if (idx < activeIdx) prevClick(activeIdx - idx);
        if (idx > activeIdx) nextClick(idx - activeIdx);
    };

    React.useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
    }, [isTicking]);

    React.useEffect(() => {
        setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
    }, [items]);

    return (
        <div className="carousel__wrap">
            <div className="carousel__inner">
                <button className="carousel__btn carousel__btn--prev" aria-label="previous image" onClick={() => prevClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--left" />
                </button>
                <div className="carousel__container">
                    <ul className="carousel__slide-list">
                        {items.map((pos, i) => (
                            <CarouselSlideItem
                                key={i}
                                idx={i}
                                pos={pos}
                                activeIdx={activeIdx}
                                createItem={createItem}
                            />
                        ))}
                    </ul>
                </div>
                <button className="carousel__btn carousel__btn--next" aria-label="next image" onClick={() => nextClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--right" />
                </button>
                <div className="carousel__dots">
                    {items.slice(0, length).map((pos, i) => (
                        <button
                            key={i}
                            onClick={() => handleDotClick(i)}
                            className={i === activeIdx ? 'dot active' : 'dot'}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel
