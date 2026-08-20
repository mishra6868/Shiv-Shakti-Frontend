import { useState, useEffect } from "react";

function Subtype({ setsubtype }) {

  let [subtypes, setSubtypes] = useState([]);

  useEffect(() => {

    let getData = async () => {

      try {

        let response = await fetch(
          `${process.env.REACT_APP_API_URI}/api/user/subtypes?name=Polyester`
        );

        let data = await response.json();

        setSubtypes(data);

      } catch (error) {

        console.log("Subtype error:", error);

      }

    };

    getData();

  }, []);

  return (
    <div className="subtype-column">

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

export default Subtype;