
import React, { useState } from "react";
import "./style.css";

const CoinInfo = ({ heading, desc }) => {
    const shortDesc = desc.slice(0, 250)+"<span style='color:var(--gray)'> Read More...</span>"
    const LongDesc = desc + "<span style='color:var(--gray)'> Read Less...</span>"

    const [flag , setFlag] =useState(false);
  return (
    <div className="gray-wrapper" style={{padding: "0rem 1rem"}}>
      <h2 className="coin-info-heading">{heading}</h2>

      { desc.length >250 ?(<p  onClick={()=>setFlag(!flag)}
        className="coin-info-desc"
        dangerouslySetInnerHTML={{ __html: !flag ?shortDesc : LongDesc }}
      />): (<p dangerouslySetInnerHTML={{ __html:desc  }}/>)
      }
    </div>
  );
};

export default CoinInfo;
