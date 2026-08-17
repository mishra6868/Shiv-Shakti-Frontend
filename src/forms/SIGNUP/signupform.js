import { useState } from "react";
import "./signupform.css";

function SignupForm({ onSuccess }) {

    let [name, setname] = useState("");
    let [email, setemail] = useState("");
    let [password, setpassword] = useState("");
    let [confirmpassword, setconfirmpassword] = useState("");


    let signup = async () => {

        // NAME EMPTY
        if (!name.trim()) {
            alert("Please enter your name");
            return;
        }


        // NAME VALIDATION
        let nameRegex = /^[A-Za-z ]+$/;

        if (!nameRegex.test(name.trim())) {
            alert("Name should contain only letters");
            return;
        }


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


        // PASSWORD LENGTH
        if (password.length < 6) {
            alert("Password must be at least 6 characters");
            return;
        }


        // CONFIRM PASSWORD EMPTY
        if (!confirmpassword) {
            alert("Please confirm your password");
            return;
        }


        // PASSWORD MATCH
        if (password !== confirmpassword) {
            alert("Passwords do not match");
            return;
        }


        try {

            let response = await fetch(
                `${process.env.REACT_APP_API_URI}/api/user/signup`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        name: name.trim(),
                        email: email.trim(),
                        password: password,
                        confirmpassword: confirmpassword
                    })
                }
            );


            let data = await response.json();

            console.log(data);


            // SIGNUP FAILED
            if (!response.ok) {

                alert(data.message || "Signup failed");

                return;
            }


            // SIGNUP SUCCESS
            alert(data.message);


            // CLOSE MODAL
            onSuccess();


        } catch (error) {

            alert("Server error. Please try again.");

            console.log(error);

        }

    };


    return (
        <div className="signupform">

            <input
                type="text"
                placeholder="enter your name"
                value={name}
                onChange={e => setname(e.target.value)}
            />

            <input
                type="text"
                placeholder="enter your email"
                value={email}
                onChange={e => setemail(e.target.value)}
            />

            <input
                type="password"
                placeholder="enter your password"
                value={password}
                onChange={e => setpassword(e.target.value)}
            />

            <input
                type="password"
                placeholder="confirm your password"
                value={confirmpassword}
                onChange={e => setconfirmpassword(e.target.value)}
            />

            <button onClick={signup}>
                signup
            </button>

        </div>
    );
}

export default SignupForm;