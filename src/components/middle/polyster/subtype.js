import { useState, useEffect } from "react";

function Subtype({ setsubtype }) {

  let [subtypes, setSubtypes] = useState([]);

  let getData = async () => {

    let response = await fetch(
      `${process.env.REACT_APP_API_URI}/api/user/subtypes?name=Polyester`
    );

    let data = await response.json();

    setSubtypes(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="polyester-subtypes">
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