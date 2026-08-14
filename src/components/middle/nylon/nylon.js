import { useState } from "react";
import nylon from "../../../assets/logos/middle/nylonplaceholder.png"
import "../../middle/middle.css"
import "./nylon.css"
import Specification from "./specification";
import Subtypes from "./subtype";
import Requestquote from "./quote";

function Nylon({ nextSlide, previousSlide }) {
    let [subtype, setsubtype] = useState("");

    return (
        <div className="nylon-section">

            <div className="nylon-card">

                <img
                    src={nylon}
                    alt="Nylon Fabric"
                    className="nylon-image"
                />

                <div className="nylon-content">

                    <h1>NYLON FABRIC</h1>

                    <h2>Premium Nylon Collection</h2>

                    <p>
                        High-performance nylon fabrics known for their strength, elasticity,
                        lightweight comfort and excellent resistance to wear, moisture and abrasion.
                        Engineered for durability and built to perform in every condition.
                    </p>

                    <p>
                        Ideal for activewear,
                        sportswear, outerwear, bags,
                        lifestyle products and a wide range of industrial and technical textile applications.
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

export default Nylon;