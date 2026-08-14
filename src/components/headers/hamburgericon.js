import hamburgericon from "../../assets/icons/headers/hamburger.svg";

function Hamburgericon() {
    return (
        <details className="hamburgermenu">

            <summary>
                <img src={hamburgericon} alt="menu" />
            </summary>

            <div className="menubox">

                <a
                    href="https://www.google.com/maps/search/?api=1&query=Moti+Nagar,+Ludhiana,+Punjab"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    📍 Locate Us
                </a>

                <a href="#about-company">
                    🏢 About Our Company
                </a>

                <a href="#privacy-policy">
                    📜 Company Policy
                </a>

                <a href="#leadership">
                    👤 About the Owner
                </a>

            </div>

        </details>
    );
}

export default Hamburgericon;