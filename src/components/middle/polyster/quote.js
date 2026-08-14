import { useState } from "react";
import { Modal } from "antd";
import Quotepolyster from "../../../forms/POLYSTER/polysterquote";

function Requestquote() {

    let [open, setOpen] = useState(false);

    return (
        <div className="requestquote">

            <button onClick={() => setOpen(true)}>
                Request Quote
            </button>

            <Modal
                title="Request Polyster Quote"
                open={open}
                onCancel={() => setOpen(false)}
                footer={null}
                centered
                width={900}
            >
                <Quotepolyster />
            </Modal>

        </div>
    );
}

export default Requestquote;