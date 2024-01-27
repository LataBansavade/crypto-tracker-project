import React, { useState } from "react";
import "./style.css"
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip,IconButton } from "@mui/material";
import { convertNumber } from "../../../functions/convertNumbers";
import { Link } from "react-router-dom";
import { removeFromWatchlist } from "../../../functions/removeFromWatchlist";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { hasBeenAdded } from "../../../functions/hasBeenAdded";
import { addToWatchlist } from "../../../functions/addToWatchlist";




const List =({coin,isWatchlistPage })=>{
    const [added, setAdded] = useState(hasBeenAdded(coin.id));
    return(
        <Link to={`/coin/${coin.id}`}>
       <tr className="list-row" style={{ display: isWatchlistPage && !added && "none" }}>
        <Tooltip title="Coin Logo" placement="bottom-start">
             <td className="td-img">
                <img src={coin.image} className="coin-logo"/>
              </td>
        </Tooltip>
        <Tooltip title="Coin Info" placement="bottom-start">
              <td>  
                <div className="name-col">
                    <p className="coin-symbol"> {coin.symbol}</p>
                    <p className="coin-name">{coin.name}</p>
                </div>  
            </td>
            </Tooltip>
            <Tooltip title="Price Change In 24HRs " placement="bottom-start">
               {/* conditionally rendring component */}
            {coin.price_change_percentage_24h > 0 ? ( 
            <td className="chip-flex">
                    <div className="price-chip">
                        {coin.price_change_percentage_24h.toFixed(2)}%
                    </div>
                    <div className="icon-chip  td-icon">
                        <TrendingUpRoundedIcon />
                    </div>
            </td>
             
           
            ) : (
            <td className="chip-flex">
                    <div className="price-chip red-chip">
                        {coin.price_change_percentage_24h.toFixed(2)}%
                    </div>
                    <div className="icon-chip-red td-icon">
                        <TrendingDownRoundedIcon />
                    </div>
             </td>)}
             </Tooltip>
                 {/* conditonally rendring styling */}
                 <Tooltip title="Current Price" >

                <td>
                    <h3 className="coin-price  td-center-align" style={{color:coin.price_change_percentage_24h < 0 ? "var(--red)":"var(--green)",}}>${coin.current_price.toLocaleString()}</h3>
                </td>
                </Tooltip>
                <Tooltip title="Total Volume" placement="bottom-end">
                <td>
                    <p className="total-volume td-right-align td-totalvol ">{coin.total_volume.toLocaleString()}</p>
                </td>
                </Tooltip>
                <Tooltip title="Market Cap" >
                <td className="desktop-td-mkt">
                    <p className="total-volume td-right-align ">${coin.market_cap.toLocaleString()}</p>
                </td>
              </Tooltip>

              <Tooltip title="Market Cap" >
                <td className="mobile-td-mkt">
                    <p className="total-volume td-right-align ">
                        ${convertNumber( coin.market_cap)}</p>
                </td>
              </Tooltip>

              <td>
      <IconButton className="iconBtn"
            onClick={(e) => {
              e.preventDefault();
              if (added) {
                console.log("Removing from watchlist:", coin.id);
                removeFromWatchlist(coin.id);
                setAdded(false);
              } else {
                console.log("Adding to watchlist:", coin.id);
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
      </td>
               
       </tr>
      </Link>
    )
   
}
export default List