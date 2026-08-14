import logo from "../../assets/logos/headers/logo.png"
import "./header.css"

function Companylogo() {
    return (

        <div className="brand">

            <img src={logo} className="logo-symbol" alt="logo" />

            <div className="brand-text">
                <div>SHIV SHAKTI</div>
                <div>FABRICS</div>
            </div>

        </div>

    );
}

export default Companylogo;