import { useState } from "react";
import blended from "../../../assets/logos/middle/blendedplaceholder.png"
import "../../middle/middle.css"
import "./blended.css"
import Specification from "./specification";
import Subtypes from "./subtype";

import Requestquote from "./quote";

function Blended({ nextSlide, previousSlide }) {
    let [subtype, setsubtype] = useState("");

    return (
        <div className="blended-section">

            <div className="blended-card">

                <img
                    src={blended}
                    alt="Blended Fabric"
                    className="blended-image"
                />

                <div className="blended-content">

                    <h1>BLENDED FABRIC</h1>

                    <h2>Premium Blended Collection</h2>

                    <p>
                        High-quality blended fabrics engineered to combine the best properties of different fibers,
                        offering enhanced strength, softness, durability and comfort.
                        Designed for excellent performance, easy maintenance and long-lasting fabric quality.
                    </p>

                    <p>
                        Ideal for sportswear, casual wear, uniforms, activewear, workwear and premium garments,
                        with versatile applications across fashion, lifestyle and industrial textiles.
                    </p>

                    <button>Explore Collection</button>
                    <button
                        className="fabric-prev"
                        onClick={previousSlide}
                    >
                        ←
                    </button>

                    <button
                        className="fabric-next"
                        onClick={nextSlide}
                    >
                        →
                    </button>


                    <Requestquote />

                    <Subtypes setsubtype={setsubtype} />

                    <Specification subtype={subtype} />

                </div>

            </div>

        </div>
    );
}

export default Blended;