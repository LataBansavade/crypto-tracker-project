import React, { useState } from "react";
import "./style.css"
import Pagination from '@mui/material/Pagination';

export default function PaginationComponent({page , handlepageChange}) {
  
  return (
    <div className="pagination-component">
      <Pagination count={10} page={page} 
      onChange={(event , value)=>handlepageChange(event , value)}
      
      sx={{
        color :" var(--white)", "& .Mui-selected" :{backgroundColor:"var(--blue) !important" ,
           color : "#fff !important",
            borderColor : "var(--blue) !important"  ,}, "& . MuiPaginationItem-ellipsis" :{
                border: "0px soild var(--gray)!important",
            },
            "& .MuiPaginationItem-text":{
                color : "var(--white)",
                border :"1px solid var(--gray)",
            }

      }}
      />
    </div>
  );
}