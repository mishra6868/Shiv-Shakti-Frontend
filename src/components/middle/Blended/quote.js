import { useState } from "react";
import { Modal } from "antd";
import Quoteblendedform from "../../../forms/BLENDED/blendedquote";

function Requestquote() {

    const [open, setOpen] = useState(false);

    return (
        <div className="requestquote">

            <button onClick={() => setOpen(true)}>
                Request Quote
            </button>

            <Modal
                title="Request Blended Quote"
                open={open}
                onCancel={() => setOpen(false)}
                footer={null}
                centered
                width={500}
            >
                <Quoteblendedform />
            </Modal>

        </div>
    );
}

export default Requestquote;