import "./nylon.css"
import { useState, useEffect } from "react";
import Requestquote from "./quote";

import "./nylon.css"

function Specification({ subtype }) {
  let [specification, setSpecification] = useState(null);
  let [fabric, setFabric] = useState({});
  // First API - fabric image
  let getFabric = async () => {
    let response = await fetch(
      "https://e50ee214-bf67-4671-a7a5-042634bf1e30.mock.pstmn.io/user/productlist"
    );
    let data = await response.json();
    let nylon = data.products.find(
      (item) => item.name === "Nylon"
    );
    setFabric(nylon);
  };
  // Second API - specification + garments
  let getSpecification = async () => {
    let response = await fetch(
      "https://e50ee214-bf67-4671-a7a5-042634bf1e30.mock.pstmn.io/user/productlist/1/subtypes/101"
    );
    let data = await response.json();
    setSpecification(data.data);
  };


  useEffect(() => {
    getFabric();
  }, []);


  useEffect(() => {
    if (subtype) {
      getSpecification();
    }
  }, [subtype]);


  if (!specification) {
    return null;
  }


  return (
    <div className="specification">

      {/* FABRIC IMAGE */}

      <div className="fabric-mini">
        <img
          src={`/images/${fabric?.image}`}
          alt={fabric?.name}
        />
        <h2>{specification.name}</h2>
      </div>


      {/* SPECIFICATIONS */}
      <div className="specification-details">
        <h2>Specifications</h2>
        <p>
          GSM: {specification.gsm}
        </p>
        <p>
          Composition: {specification.composition}
        </p>
        <p>
          Width: {specification.width}
        </p>
        <p>
          Fabric Type: {specification.fabricType}
        </p>
        <p>
          Finish: {specification.finish}
        </p>

      </div>

      {/* AVAILABLE COLORS */}
      <div className="available-colors">
        <h2>Available Colors</h2>
        {specification.availableColors.map((color) => (
          <span key={color}>
            {color}
          </span>
        ))}

      </div>
      {/* AVAILABLE GARMENTS */}
      <div className="garment-section">
        <h2>Available Garments</h2>
        <div className="garment-list">
          {specification.garmentApplications.map((item) => (
            <div key={item.id}>
              <img
                src={`/images/${item.image}`}
                alt={item.name}
              />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      {/* FABRIC APPLICATIONS */}
      <div className="fabric-applications">
        <h2>Fabric Applications</h2>
        <div className="application-list">
          <div className="application-item">
            <div className="application-icon">⚽</div>
            <p>Sports Wear</p>
          </div>
          <div className="application-item">
            <div className="application-icon">🧥</div>
            <p>outerwear</p>
          </div>
          <div className="application-item">
            <div className="application-icon">🎒</div>
            <p>Bags and luggage</p>
          </div>
          <div className="application-item">
            <div className="application-icon">🏭</div>
            <p>Industry & Textiles</p>
          </div>
          <div className="application-item">
            <div className="application-icon">✉️</div>
            <p>Export Garments</p>
          </div>
        </div>

      </div>
      {/* MANUFACTURING PROCESS */}
      <div className="manufacturing-process">
        <h2>Manufacturing Process</h2>
        <div className="process-list">
          <div className="process-item">
            <div className="process-icon">🧶</div>
            <p>Yarn</p>
          </div>
          <span>→</span>
          <div className="process-item">
            <div className="process-icon">🕸️</div>
            <p>Knitting</p>
          </div>

          <span>→</span>

          <div className="process-item">
            <div className="process-icon">♨️</div>
            <p>Dyeing</p>
          </div>

          <span>→</span>

          <div className="process-item">
            <div className="process-icon">⚙️</div>
            <p>Finishing</p>
          </div>

          <span>→</span>

          <div className="process-item">
            <div className="process-icon">✓</div>
            <p>Quality Check</p>
          </div>

          <span>→</span>

          <div className="process-item">
            <div className="process-icon">📦</div>
            <p>Packaging</p>
          </div>

        </div>
      </div>
      {/* BOTTOM BUTTONS */}
      <div className="specification-buttons">
        <button><Requestquote /> </button>

        <button>
          Download Specification
        </button>
      </div>
    </div>
  );
}

export default Specification;