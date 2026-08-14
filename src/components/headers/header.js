
import Companylogo from "./companylogo";
import Companyname from "./companyname";
import Contact from "./contacts";
import Hamburgericon from "./hamburgericon";
import "./header.css"
import Login from "./login";
import Signup from "./signup";

import Usericon from "./usersicon";

function Header() {
    return (<div className="header">
        <Companylogo />
        <Companyname />
        <Contact />
        <Usericon />
        <Login />
        <Signup />

        <Hamburgericon />
    </div>);
}

export default Header;