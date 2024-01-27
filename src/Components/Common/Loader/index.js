import { CircularProgress } from "@mui/material";
import React from "react";
import "./style.css"

const Loader =()=>{
    return(
        <div className="loader-Conatiner">
            <CircularProgress/>
        </div>
    )
}

export default Loader