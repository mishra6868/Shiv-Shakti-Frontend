import { useState } from "react";
import "./loginform.css"

function Loginform() {

    let [email, setemail] = useState("");
    let [password, setpassword] = useState("");

    let login = async () => {

        let response = await fetch(
            `${process.env.REACT_APP_API_URI}/api/user/login`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }
        );

        let data = await response.json();

        console.log(data);
    };


    return (
        <div className="loginform">

            <input
                type="text"
                value={email}
                placeholder="Enter your email"
                onChange={e => setemail(e.target.value)}
            />

            <input
                type="password"
                value={password}
                placeholder="Enter your password"
                onChange={e => setpassword(e.target.value)}
            />

            <button onClick={login}>
                Login
            </button>

        </div>
    );
}

export default Loginform;