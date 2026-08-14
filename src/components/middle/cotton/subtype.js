import { useState, useEffect } from "react";
import "../../middle/middle.css"
import "./cotton.css"

function Subtypes({ setsubtype }) {

  let [fabric, setFabric] = useState({});

  let getData = async () => {

    let response = await fetch(
      "https://e50ee214-bf67-4671-a7a5-042634bf1e30.mock.pstmn.io/user/productlist"
    );

    let data = await response.json();

    let cotton = data.products.find(
      (item) => item.name === "Cotton"
    );

    setFabric(cotton);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {fabric.subTypes?.map((item) => (

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