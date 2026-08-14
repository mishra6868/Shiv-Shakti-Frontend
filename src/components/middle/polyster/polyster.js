import Subtypes from "./subtype";
import Specification from "./specification";
import { useState } from "react";
import polyster from "../../../assets/logos/middle/polysterplaceholder.png";
import "../middle.css";
import "./polyster.css"

import Requestquote from "./quote";


function Polyester({ nextSlide, previousSlide }) {
    let [subtype, setsubtype] = useState("");

    return (
        <div className="polyester-section">

            <div className="polyester-card">

                <img
                    src={polyster}
                    alt="Polyester Fabric"
                    className="polyester-image"
                />


                <div className="polyester-content">

                    <h1>POLYESTER FABRIC</h1>

                    <h2>Premium Polyester Collection</h2>

                    <p>
                        High-performance polyester fabrics designed for
                        durability, comfort, vibrant colors, and premium
                        garment manufacturing.
                    </p>

                    <p>
                        Ideal for sportswear, uniforms, fashion apparel,
                        and industrial textile applications.
                    </p>

                    {/* Future me yahan tumhare functions/components */}
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

export default Polyester;