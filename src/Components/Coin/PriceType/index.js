import React, { useState } from 'react';
import "./style.css"
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function PriceType({priceType ,handlePriceTypeChange}) {
  
  return (
    <div className='toggle-prices'>
    <ToggleButtonGroup
      value={priceType}
      exclusive
      onChange={handlePriceTypeChange}
    
      sx={{
        // color : 'white',
        "& .Mui-selected": {
          color: "var(--blue) !important",
        },
        borderColor: "var(--blue)",
        border: "unset !important",
        "& .MuiToggleButtonGroup-grouped": {
          border: "1px solid  !important",  
          borderColor: "unset", 
          color: "var(--blue)",
        },
        "& .MuiToggleButton-standard": {
          color: "var(--blue)",
        },
        
        
      }}
    >
      <ToggleButton  value="prices" className='toggle-Btn' >Price</ToggleButton>
      <ToggleButton value="market_caps" className='toggle-Btn' >Market Cap</ToggleButton>
      <ToggleButton value="total_volumes" className='toggle-Btn'>Total Volume</ToggleButton>

    </ToggleButtonGroup>
    </div>
  );
}