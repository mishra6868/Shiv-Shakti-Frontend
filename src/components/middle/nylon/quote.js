import { useState } from "react";
import { Modal } from "antd";
import Quotenylonform from "../../../forms/NYLON/nylonquote";
import "./nylon.css";

function Requestquote() {

    let [open, setOpen] = useState(false);

    return (
        <div className="requestquote">

            <button onClick={() => setOpen(true)}>
                Request Quote
            </button>

            <Modal
                title="Request Nylon Quote"
                open={open}
                onCancel={() => setOpen(false)}
                footer={null}
                centered
                width={500}
            >
                <Quotenylonform />
            </Modal>

        </div>
    );
}

export default Requestquote;