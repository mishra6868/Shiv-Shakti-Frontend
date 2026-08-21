import { useState, useRef } from "react";

import Polyster from "./polyster/polyster";
import Cotton from "./cotton/cotton";
import Nylon from "./nylon/nylon";
import Blended from "./Blended/blended";

function Middle() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const sliderRef = useRef(null);

    const touchStartX = useRef(0);
    const touchEndX = useRef(0);


    /* =========================================
       NEXT SLIDE
    ========================================= */

    const nextSlide = () => {

        setCurrentSlide((prev) => {

            return (prev + 1) % 4;

        });

    };


    /* =========================================
       PREVIOUS SLIDE
    ========================================= */

    const previousSlide = () => {

        setCurrentSlide((prev) => {

            return (prev - 1 + 4) % 4;

        });

    };


    /* =========================================
       TOUCH START
    ========================================= */

    const handleTouchStart = (e) => {

        touchStartX.current = e.touches[0].clientX;

    };


    /* =========================================
       TOUCH END
    ========================================= */

    const handleTouchEnd = (e) => {

        touchEndX.current = e.changedTouches[0].clientX;

        const distance =
            touchStartX.current - touchEndX.current;


        /* Minimum swipe distance */

        if (Math.abs(distance) < 50) {

            return;

        }


        /* Swipe left */

        if (distance > 0) {

            nextSlide();

        }


        /* Swipe right */

        else {

            previousSlide();

        }

    };


    return (

        <div
            className="fabric-slider"
            ref={sliderRef}

            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >

            {/* =========================================
                FABRIC SLIDER TRACK
            ========================================= */}

            <div
                className="fabric-slider-track"

                style={{
                    transform: `translateX(-${currentSlide * 25}%)`
                }}
            >

                <div className="fabric-slide">

                    <Polyster
                        nextSlide={nextSlide}
                        previousSlide={previousSlide}
                    />

                </div>


                <div className="fabric-slide">

                    <Cotton
                        nextSlide={nextSlide}
                        previousSlide={previousSlide}
                    />

                </div>


                <div className="fabric-slide">

                    <Nylon
                        nextSlide={nextSlide}
                        previousSlide={previousSlide}
                    />

                </div>


                <div className="fabric-slide">

                    <Blended
                        nextSlide={nextSlide}
                        previousSlide={previousSlide}
                    />

                </div>

            </div>


            {/* =========================================
                MOBILE SLIDE DOTS
            ========================================= */}

            <div className="fabric-slide-dots">

                {[0, 1, 2, 3].map((index) => (

                    <span
                        key={index}

                        className={
                            currentSlide === index
                                ? "active"
                                : ""
                        }
                    ></span>

                ))}

            </div>

        </div>

    );

}

export default Middle;