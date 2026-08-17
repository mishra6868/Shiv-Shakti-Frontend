import { useState } from "react";
import "../COTTON/cottonquote.css";

function Quotecottonform() {

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

        if (!customerid.trim()) {
            alert("Please enter customer ID");
            return;
        }

        if (!customername.trim()) {
            alert("Please enter customer name");
            return;
        }

        let nameRegex = /^[A-Za-z ]+$/;

        if (!nameRegex.test(customername.trim())) {
            alert("Customer name should contain only letters");
            return;
        }

        if (!companyname.trim()) {
            alert("Please enter company name");
            return;
        }

        if (!fabriccategory.trim()) {
            alert("Please enter fabric category");
            return;
        }

        if (!fabricsubtype.trim()) {
            alert("Please enter fabric subtype");
            return;
        }

        if (!colour.trim()) {
            alert("Please enter colour");
            return;
        }

        if (!gsmexpected.trim()) {
            alert("Please enter GSM");
            return;
        }

        if (!/^[0-9]+$/.test(gsmexpected.trim())) {
            alert("GSM should contain only numbers");
            return;
        }

        if (!quantityrequire.trim()) {
            alert("Please enter required quantity");
            return;
        }

        if (!/^[0-9]+(\.[0-9]+)?$/.test(quantityrequire.trim())) {
            alert("Quantity should contain only numbers");
            return;
        }

        if (!phoneno.trim()) {
            alert("Please enter phone number");
            return;
        }

        if (!/^[0-9]{10}$/.test(phoneno.trim())) {
            alert("Phone number must contain exactly 10 digits");
            return;
        }

        if (!email.trim()) {
            alert("Please enter email");
            return;
        }

        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email.trim())) {
            alert("Please enter a valid email");
            return;
        }


        try {

            let response = await fetch(
                `${process.env.REACT_APP_API_URI}/api/user/reqquote`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({

                        customer_id: customerid.trim(),
                        Customer_name: customername.trim(),
                        Company_name: companyname.trim(),
                        fabric_Category: fabriccategory.trim(),
                        fabric_subtype: fabricsubtype.trim(),
                        Colour: colour.trim(),
                        gsm_expected: gsmexpected.trim(),
                        quantity_require_kg_m: quantityrequire.trim(),
                        phone_no: phoneno.trim(),
                        email: email.trim(),
                        additional_message: additionalmessage.trim()

                    })
                }
            );

            let data = await response.json();

            if (!response.ok) {
                alert(data.message || "Something went wrong");
                return;
            }

            alert(data.message);

            console.log(data);

        } catch (error) {

            alert("Server error. Please try again.");

            console.log(error);

        }
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

export default Quotecottonform;