import owner from "../../assets/logos/footers/owner.png"
import coowner from "../../assets/logos/footers/co-owner.png"
import "./footer.css"
function Owners() {
    return (<div className="owners-section" id="leadership">
        <h4 className="header">OUR LEADERSHIP</h4>

        <div className="ownercard">
            <img className="ownerimage" src={owner} alt="owner" />
            <h5 className="ownerhead1">OWNER</h5>
            <h3 className="onwerhead2">Parmod Mishra</h3>
            <h5 className="ownerhead3">Founder</h5>

            <p className="text1">With deep industry knowledge and a passion for quality,
                Parmod Mishra leads the vision and growth of Shiv Shakti Fabrics.
            </p>
        </div>

        <div className="coownercard">
            <img className="coownerimage" src={coowner} alt="coowner" />
            <h5 className="coownerhead1">CO-OWNER</h5>

            <h3 className="coownerhead2">Baljinder Singh</h3>
            <h5 className="coownerhead3">Co-Founder</h5>
            <p className="text2">Baljinder Singh brings expertise in production and operations,
                ensuring excellence in every step of manufacturing.</p>

        </div>

    </div>);
}

export default Owners;