import React from "react";
import "./style.css";
import TemporaryDrawer from "./drawer";
import Button from "../Button";
import { Link } from "react-router-dom";
import CustomizedSwitches from "../ThemeButton";
import { ThemeProvider } from "../../LandingPage/ThemeContext";


function Header (){
    return(
        <ThemeProvider>
            <div className="header header-clr">
                <div>
                    <Link to="/"><h1 className="logo">CryptoTracker<span style={{ color:"var(--blue)"}}>.</span></h1></Link> 
                </div>

                <div className="links-container">
                    <div className="ab">
                    
                        <div className="links">
                            <CustomizedSwitches/>
                            <Link to="/"><p className="link">Home</p></Link>
                            <Link to="/compare"><p className="link">Compare</p></Link>
                            <Link to="/watchlist"><p className="link">Watchlist</p></Link>
                            <Link to="/dashboard"><Button text={"Dashboard"} outlined={true} onClick={()=>console.log("Button is Clicked")}/></Link>
                        </div>
                    </div>

                    <div className="mobile-drawer">
                        <TemporaryDrawer/>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Header;