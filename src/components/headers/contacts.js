import "./header.css";

import contactIcon from "../../assets/icons/headers/contactIcon.svg";
import whatsappicon from "../../assets/icons/headers/whatsappicon.svg";
import mailicon from "../../assets/icons/headers/mailicon.svg";

function Contact() {
    return (
        <div className="contact">

            {/* CALL */}
            <button className="callbutton">
                <a
                    className="callbox"
                    href="tel:+918195811761"
                >
                    <img
                        className="callicon"
                        src={contactIcon}
                        alt="contact number"
                    />

                    <span className="callno">
                        +91-8195811761
                    </span>
                </a>
            </button>


            {/* WHATSAPP */}
            <button className="whatsappbutton">
                <a
                    className="whatsappbox"
                    href="https://wa.me/918195811761"
                >
                    <img
                        className="whatsappicon"
                        src={whatsappicon}
                        alt="whatsapp"
                    />

                    <span className="whatsappno">
                        +91-8195811761
                    </span>
                </a>
            </button>


            {/* EMAIL */}
            <button className="mailbutton">
                <a
                    className="mailbox"
                    href="mailto:shivshaktifabrics@gmail.com"
                >
                    <img
                        className="mailicon"
                        src={mailicon}
                        alt="mail"
                    />

                    <span className="mailid">
                        shivshaktifabrics
                        <br />
                        @gmail.com
                    </span>
                </a>
            </button>

        </div>
    );
}

export default Contact;