import React from "react";
import "./style.css";
import Button from "../../Common/Button";
import phone from "../../../asstets/phone 1.png"
import gradient from "../../../asstets/gradient 1.png"
import {motion} from "framer-motion";
import { RWebShare } from "react-web-share";

const MainComponent = ()=>{
    return ( 
    <div className="flex-info"> 
        <div className="left-component">
            <motion.h1 className="track-heading"

            initial={{opacity:0, y:50}}
            animate={{opacity:1, y:0}}
            transition={{duration : 0.5}}

            >Track Crypto</motion.h1>

            <motion.h1 className="realtime-heading"
             initial={{opacity:0, y:50}}
             animate={{opacity:1, y:0}}
             transition={{duration : 0.5 , delay:0.5}}

            >Real Time.</motion.h1>

            <motion.p className="info-text"
            initial={{opacity:0, y:50}}
            animate={{opacity:1, y:0}}
            transition={{duration : 0.5 , delay:1}}
            
            >Track crypto through a public api in real time. visit the dashboard to do so! </motion.p>

            <motion.div className="info-btn"
            initial={{opacity:0, x:50}}
            animate={{opacity:1, x:0}}
            transition={{duration : 0.5 , delay:1.5}} >
                {/* <Button text={"Dashboard"}/> */}
                <a href="/dashboard">
                 <Button text="Dashboard" />
                </a>
                <Button text={"Share"} outlined ={"true"}/>
            {/* <RWebShare
                    data={{
                    text: "Crypto Dashboard made using React JS.",
                    url: "https://crypto-dashboard-dec.netlify.app/",
                    title: "CryptoDashboard.",
                    }}
                    onClick={() => console.log("shared successfully!")}>
                <Button text="Share App" outlined={true} />
            </RWebShare> */}

            </motion.div>
        </div>

        <div className="right-component">
           <motion.img className="phone" 
                initial={{y:-10}}
                animate={{y:10}}
                transition={{type:"smooth",repeatType:"mirror", duration : 2 , repeat:Infinity}}

           src={phone}/>
           <img className="gradient" src={gradient}/>

        </div>
       
     </div>
         )
   
}
export default MainComponent