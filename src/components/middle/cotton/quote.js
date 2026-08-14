import { useState } from "react";
import { Modal, Button } from "antd";
import Cottonquote from "../../../forms/COTTON/cottonquote";

function Requestquote() {

    const [open, setOpen] = useState(false);

    return (
        <div className="requestquote">

            <Button
                type="primary"
                onClick={() => setOpen(true)}
            >
                Request Quote
            </Button>

            <Modal
                title="Request Cotton Quote"
                open={open}
                onCancel={() => setOpen(false)}
                footer={null}
                width={600}
                centered
            >
                <Cottonquote />
            </Modal>

        </div>
    );
}

export default Requestquote;