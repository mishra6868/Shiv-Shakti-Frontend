import { useState, useEffect } from "react";
import Requestquote from "./quote";
import "./cotton.css";
import cottonImage from "../../../assets/logos/middle/cottonplaceholder.png";

function Specification({ subtype }) {

  let [specification, setSpecification] = useState(null);

  useEffect(() => {

    if (!subtype) {
      return;
    }

    let getSpecification = async () => {

      try {

        let response = await fetch(
          `${process.env.REACT_APP_API_URI}/api/user/Cottonspecification?id=${subtype}`
        );

        let data = await response.json();

        setSpecification(data);

      } catch (error) {

        console.log("Specification error:", error);

      }

    };

    getSpecification();

  }, [subtype]);

  if (!specification) {
    return null;
  }

  return (

    <div className="specification">

      {/* FABRIC IMAGE */}

      <div className="fabric-mini">

        <img
          src={cottonImage}
          alt="Cotton"
        />

        <h2>
          {specification.name}
        </h2>

      </div>


      {/* SPECIFICATIONS */}

      <div className="specification-details">

        <h2>
          Specifications
        </h2>

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

        <h2>
          Available Colors
        </h2>

        {specification.availableColors &&
          specification.availableColors.map((color) => (

            <span key={color}>
              {color}
            </span>

          ))}

      </div>


      {/* AVAILABLE GARMENTS */}

      <div className="garment-section">

        <h2>
          Available Garments
        </h2>

        <div className="garment-list">

          {specification.garmentApplications &&
            specification.garmentApplications.map((item) => (

              <div key={item.id}>

                <img
                  src={`/images/${item.image}`}
                  alt={item.name}
                />

                <p>
                  {item.name}
                </p>

              </div>

            ))}

        </div>

      </div>


      {/* FABRIC APPLICATIONS */}

      <div className="fabric-applications">

        <h2>
          Fabric Applications
        </h2>

        <div className="application-list">

          <div className="application-item">

            <div className="application-icon">
              ⚽
            </div>

            <p>
              Sports Wear
            </p>

          </div>


          <div className="application-item">

            <div className="application-icon">
              🧥
            </div>

            <p>
              Hoodie
            </p>

          </div>


          <div className="application-item">

            <div className="application-icon">
              👕
            </div>

            <p>
              Tshirt
            </p>

          </div>


          <div className="application-item">

            <div className="application-icon">
              👶
            </div>

            <p>
              Kid wear
            </p>

          </div>


          <div className="application-item">

            <div className="application-icon">
              ✉️
            </div>

            <p>
              Export Garments
            </p>

          </div>

        </div>

      </div>


      {/* MANUFACTURING PROCESS */}

      <div className="manufacturing-process">

        <h2>
          Manufacturing Process
        </h2>

        <div className="process-list">

          <div className="process-item">

            <div className="process-icon">
              🧶
            </div>

            <p>
              Yarn
            </p>

          </div>

          <span>
            →
          </span>

          <div className="process-item">

            <div className="process-icon">
              🕸️
            </div>

            <p>
              Knitting
            </p>

          </div>

          <span>
            →
          </span>

          <div className="process-item">

            <div className="process-icon">
              ♨️
            </div>

            <p>
              Dyeing
            </p>

          </div>

          <span>
            →
          </span>

          <div className="process-item">

            <div className="process-icon">
              ⚙️
            </div>

            <p>
              Finishing
            </p>

          </div>

          <span>
            →
          </span>

          <div className="process-item">

            <div className="process-icon">
              ✓
            </div>

            <p>
              Quality Check
            </p>

          </div>

          <span>
            →
          </span>

          <div className="process-item">

            <div className="process-icon">
              📦
            </div>

            <p>
              Packaging
            </p>

          </div>

        </div>

      </div>


      {/* BOTTOM BUTTONS */}

      <div className="specification-buttons">

        <Requestquote />

        <button>
          Download Specification
        </button>

      </div>

    </div>

  );

}

export default Specification;