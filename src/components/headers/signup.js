import { useState } from "react";
import { Modal } from "antd";
import SignupForm from "../../forms/SIGNUP/signupform";
import "./header.css"

function Signup() {

    const [open, setOpen] = useState(false);

    return (
        <div className="signup">

            <button onClick={() => setOpen(true)}>
                Signup
            </button>

            <Modal
                title="Signup"
                open={open}
                onCancel={() => setOpen(false)}
                footer={null}
                centered
            >
                <SignupForm />
            </Modal>

        </div>
    );
}

export default Signup;