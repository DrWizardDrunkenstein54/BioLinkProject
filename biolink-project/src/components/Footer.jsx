import React from "react";

import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
    return (
        <div id="footer" className="pb-4" style={{position: "relative", marginTop: "-220px"}}>
            <div className="d-flex flex-column align-items-center">
                <div className="m-1" style={{ color: "#FFF", fontFamily: "Gloria Hallelujah, cursive", fontSize: "4rem"}}>
                    BioLink
                </div>
                <div className="d-flex flex-row justify-content-center">
                    <BsFacebook className="mx-1" size={"1.8em"} style={{ color: "white" }} />
                    <AiFillInstagram className="mx-1" size={"2em"} style={{ color: "white" }} />
                    <FaDiscord className="mx-1" size={"2em"} style={{ color: "white" }} />
                    <MdEmail className="mx-1" size={"2em"} style={{ color: "white" }} />
                </div>
                <div className="" style={{ color: "#FFF", fontFamily: "Gloria Hallelujah, cursive", fontSize: "1.5rem" }}>
                          
                    <center>Developed by Brian Da Cruz and Brandon Yan</center>
                </div>
            </div>
        </div>
    );
}

export default Footer;