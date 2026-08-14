import company1 from "../../assets/logos/footers/company1.png"
import "./footer.css"
function Aboutus() {
    return (<div className="aboutus" id="about-company">

        <img className="image1" src={company1} alt="company1" />


        <h4 className="header">ABOUT US</h4>
        <h2 className="header2">ABOUT SHIV SHAKTI FABRICS</h2>
        <h4 className="header3">Crafting Premium Fabrics with
            Innovation, Precision & Trust </h4>

        <p className="text">Shiv Shakti Fabrics is a trusted textile manufacturer specializing in premium cotton, polyester,
            PC blends, and customized fabrics. With modern machinery, experienced professionals, and strict quality control,
            we deliver fabrics that meet both domestic and international standards.</p>



    </div>);
}

export default Aboutus;