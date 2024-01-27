import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { IconButton } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link } from 'react-router-dom';


export default function TemporaryDrawer() {
  const [state, setState] = useState(false);
   
  return (
    <div>
      
          <IconButton onClick={()=> setState(true)}>
            <MenuRoundedIcon className='link'/>
            </IconButton>
          <Drawer
            anchor={"right"} open={state} onClose={()=>setState(false)} >
                <div className='drawer-div'>
                <Link to="/"><p className="link">Home</p></Link>
                <Link to="/compare"><p className="link">Compare</p></Link>
                <Link to="/watchlist"><p className="link">Watchlist</p></Link>
                <Link to="/dashboard"><p className="link">Dashboard</p></Link>
                </div>
          
          </Drawer>
        
  
    </div>
  );
}