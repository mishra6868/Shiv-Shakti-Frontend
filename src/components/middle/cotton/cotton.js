import { useState } from "react";
import cotton from "../../../assets/logos/middle/cottonplaceholder.png"
import "../../middle/middle.css"
import "./cotton.css"
import Specification from "./specification";
import Subtypes from "./subtype";
import Requestquote from "./quote";

function Cotton({ nextSlide, previousSlide }) {
    let [subtype, setsubtype] = useState("");

    return (
        <div className="cotton-section">

            <div className="cotton-card">

                <img
                    src={cotton}
                    alt="Cotton Fabric"
                    className="cotton-image"
                />

                <div className="cotton-content">

                    <h1>COTTON FABRIC</h1>

                    <h2>Premium Cotton Collection</h2>

                    <p>
                        High-quality cotton fabrics manufactured using advanced
                        textile technology, offering exceptional softness,
                        breathability and durability. Designed for everyday
                        comfort and ideal for casual wear, premium garments
                        and a wide range of lifestyle applications.
                    </p>

                    <p>
                        Ideal for casual wear, soft & breathable, comfortable
                        for daily wear, perfect for T-shirts & hoodies,
                        skin-friendly fabric, great for summer clothing,
                        ideal for fashion & lifestyle wear.
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

export default Cotton;