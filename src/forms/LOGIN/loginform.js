import { useState } from "react";
import "./loginform.css";

function LoginForm({ onSuccess }) {

    let [email, setemail] = useState("");
    let [password, setpassword] = useState("");


    let login = async () => {

        // EMAIL EMPTY
        if (!email.trim()) {
            alert("Please enter your email");
            return;
        }


        // EMAIL VALIDATION
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email.trim())) {
            alert("Please enter a valid email");
            return;
        }


        // PASSWORD EMPTY
        if (!password) {
            alert("Please enter your password");
            return;
        }


        try {

            // API CALL
            let response = await fetch(
                `${process.env.REACT_APP_API_URI}/api/user/login`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        email: email.trim(),
                        password: password
                    })
                }
            );


            let data = await response.json();

            console.log(data);


            // LOGIN FAILED
            if (!response.ok) {

                alert(data.message || "Login failed");

                return;
            }


            // LOGIN SUCCESS
            alert(data.message);


            // CLOSE MODAL
            onSuccess();


        } catch (error) {

            alert("Server error. Please try again.");

            console.log(error);

        }

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

export default LoginForm;