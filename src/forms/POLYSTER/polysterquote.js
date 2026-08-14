import { useState } from "react";

import "./polysterquote.css"

function Polysterquote() {

    let [customerid, setcustomerid] = useState("");
    let [customername, setcustomername] = useState("");
    let [companyname, setcompanyname] = useState("");
    let [fabriccategory, setfabriccategory] = useState("");
    let [fabricsubtype, setfabricsubtype] = useState("");
    let [colour, setcolour] = useState("");
    let [gsmexpected, setgsmexpected] = useState("");
    let [quantityrequire, setquantityrequire] = useState("");
    let [phoneno, setphoneno] = useState("");
    let [email, setemail] = useState("");
    let [additionalmessage, setadditionalmessage] = useState("");


    let requestquote = async () => {

        let response = await fetch("https://e50ee214-bf67-4671-a7a5-042634bf1e30.mock.pstmn.io/user/productlist/ordering", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                "customer id": customerid,
                "Customer name": customername,
                "Company name": companyname,
                "fabric Category": fabriccategory,
                "fabric subtype": fabricsubtype,
                "Colour": colour,
                "gsm expected": gsmexpected,
                "quantity require kg/m": quantityrequire,
                "phone no": phoneno,
                "e mail": email,
                "additional message": additionalmessage

            })
        });

        let data = await response.json();

        console.log(data);
    };


    return (
        <div className="collections">

            <input
                type="text"
                placeholder="customer id"
                value={customerid}
                onChange={e => setcustomerid(e.target.value)}
            />

            <input
                type="text"
                placeholder="customer name"
                value={customername}
                onChange={e => setcustomername(e.target.value)}
            />

            <input
                type="text"
                placeholder="company name"
                value={companyname}
                onChange={e => setcompanyname(e.target.value)}
            />

            <input
                type="text"
                placeholder="enter fabric category"
                value={fabriccategory}
                onChange={e => setfabriccategory(e.target.value)}
            />

            <input
                type="text"
                placeholder="enter fabric subtype"
                value={fabricsubtype}
                onChange={e => setfabricsubtype(e.target.value)}
            />

            <input
                type="text"
                placeholder="enter colour"
                value={colour}
                onChange={e => setcolour(e.target.value)}
            />

            <input
                type="text"
                placeholder="gsm expected"
                value={gsmexpected}
                onChange={e => setgsmexpected(e.target.value)}
            />

            <input
                type="text"
                placeholder="quantity require kg/m"
                value={quantityrequire}
                onChange={e => setquantityrequire(e.target.value)}
            />

            <input
                type="number"
                placeholder="phone no."
                value={phoneno}
                onChange={e => setphoneno(e.target.value)}
            />

            <input
                type="text"
                placeholder="email"
                value={email}
                onChange={e => setemail(e.target.value)}
            />

            <input
                type="text"
                placeholder="additional message"
                value={additionalmessage}
                onChange={e => setadditionalmessage(e.target.value)}
            />

            <button onClick={requestquote}>
                Request Quote
            </button>

        </div>
    );
}

export default Polysterquote;