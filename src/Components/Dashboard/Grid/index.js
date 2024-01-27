import React, { useState } from "react";
import  "./style.css" 
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Link } from "react-router-dom";
import { IconButton } from '@mui/material';
import { removeFromWatchlist } from '../../../functions/removeFromWatchlist';
import { hasBeenAdded } from '../../../functions/hasBeenAdded';
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { addToWatchlist } from "../../../functions/addToWatchlist";



const Grid =({coin,isWatchlistPage})=>{
    const [added, setAdded] = useState(hasBeenAdded(coin.id));

    return(
        <Link to={`/coin/${coin.id}`}>
        {/* conditionally rendring class names */}
          <div className={`grid-container ${coin.price_change_percentage_24h < 0 && "grid-container-red"}`}
              style={{display:isWatchlistPage&&!added && 'none'}}>
              <div className="info-flex">
                  <img src={coin.image} className="coin-logo"/>
                  <div className="name-col">
                      <p className="coin-symbol"> {coin.symbol}</p>
                      <p className="coin-name">{coin.name}</p>
                  </div>  
            

          <IconButton className='ico'
              onClick={(e) => {
                e.preventDefault();
                if (added) {
                  removeFromWatchlist(coin.id);
                  setAdded(false);
                } else {
                  addToWatchlist(coin.id);
                  setAdded(true);
                }
              }}
            >
              {added ? (
                <StarRoundedIcon
                  className={`watchlist-icon ${
                    coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                  } `}
                  sx={{ fontSize: "2rem !important" }}
                />
              ) : (
                <StarBorderRoundedIcon
                  className={`watchlist-icon ${
                    coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                  } `}
                  sx={{ fontSize: "2rem !important" }}
                />
              )}
          </IconButton>
        </div>

                {/* conditionally rendring component */}
              {coin.price_change_percentage_24h > 0 ? ( 
              <div className="chip-flex">
                      <div className="price-chip">
                          {coin.price_change_percentage_24h.toFixed(2)}%
                      </div>
                      <div className="icon-chip">
                          <TrendingUpRoundedIcon />
                      </div>
              </div>
              ) : (
              <div className="chip-flex">
                      <div className="price-chip red-chip">
                          {coin.price_change_percentage_24h.toFixed(2)}%
                      </div>
                      <div className="icon-chip-red">
                          <TrendingDownRoundedIcon />
                      </div>
              </div>)}
              <div className="info-container">
                  {/* conditonally rendring styling */}
                <h3 className="coin-price" style={{color:coin.price_change_percentage_24h < 0 ? "var(--red)":"var(--green)",}}>${coin.current_price.toLocaleString()}</h3>
                
                <p className="total-volume">Total Volume : {coin.total_volume.toLocaleString()}</p>
                <p className="total-volume">Market Cap : ${coin.market_cap.toLocaleString()}</p>
                </div>
          </div>

        </Link>   
       
    )
}
export default Grid;
