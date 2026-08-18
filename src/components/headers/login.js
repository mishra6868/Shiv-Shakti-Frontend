import { useState } from "react";
import { Modal } from "antd";
import LoginForm from "../../forms/LOGIN/loginform";
import "./header.css";

function Login() {

    const [open, setOpen] = useState(false);

    return (
        <div className="login">

            <button onClick={() => setOpen(true)}>
                Login
            </button>

            <Modal
                title="Login"
                open={open}
                onCancel={() => setOpen(false)}
                footer={null}
                centered
            >
                <LoginForm
                    onSuccess={() => setOpen(false)}
                />
            </Modal>

        </div>
    );
}

export default Login;