import { useState } from "react";
import "./signupform.css"
function Signupform() {
    let [name, setname] = useState("")
    let [email, setemail] = useState("")
    let [password, setpassword] = useState("")
    let [confirmpassword, setconfirmpassword] = useState("")

    let signup = async () => {
        let response = await fetch("https://e50ee214-bf67-4671-a7a5-042634bf1e30.mock.pstmn.io/user/signup",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"

                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                    confirmpassword: confirmpassword
                })
            }
        )
        let data = await response.json();
        console.log(data)

    }
    return (<div className="signupform">
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


        <button onClick={signup}>signup</button>
    </div>);
}

export default Signupform;