import { useState, useRef } from "react";

import Polyster from "./polyster/polyster";
import Cotton from "./cotton/cotton";
import Nylon from "./nylon/nylon";
import Blended from "./Blended/blended";

function Middle() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const sliderRef = useRef(null);

    const nextSlide = () => {
        setCurrentSlide((prev) => {
            return (prev + 1) % 4;
        });
    };

    const previousSlide = () => {
        setCurrentSlide((prev) => {
            return (prev - 1 + 4) % 4;
        });
    };

    return (
        <div className="fabric-slider" ref={sliderRef}>

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

        </div>
    );
}

export default Middle;