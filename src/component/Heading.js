import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Heading = ()=>{
const [BtnNameReact, setBtnNameReact] = useState("Login");

    return (
        <div className="header">
            <div className="Logo-container">
                <img className="logo" 
                src={LOGO_URL} alt="Not displayed" />
            </div>
            <div className="nav-item">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link> </li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        BtnNameReact==="Login"?setBtnNameReact('Logout'):
                        setBtnNameReact('Login');

                    }}>{BtnNameReact}</button>
                    
                </ul>
                
            </div>

        </div>

    );
 };

 export default Heading;