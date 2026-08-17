import { useState, useEffect } from "react";
import "../../middle/middle.css";
import "./blended.css";

function Subtypes({ setsubtype }) {

  let [subtypes, setSubtypes] = useState([]);

  let getData = async () => {

    try {

      let response = await fetch(
        `${process.env.REACT_APP_API_URI}/api/user/subtypes?name=Blended%20Fabrics`
      );

      let data = await response.json();

      setSubtypes(data);

    } catch (error) {

      console.log("Blended subtype error:", error);

    }

  };

  useEffect(() => {
    getData();
  }, []);

  return (

    <div>

      {subtypes.map((item) => (

        <button
          key={item.id}
          onClick={() => setsubtype(item.id)}
        >
          {item.name}
        </button>

      ))}

    </div>

  );

}

export default Subtypes;