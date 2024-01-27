import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import TabsComponent from "../Components/Dashboard/Tabs";
import Search from "../Components/Dashboard/Search";
import PaginationComponent from "../Components/Dashboard/Pagination";
import BackToTop from "../Components/Common/BackToTop";
import Loader from "../Components/Common/Loader";
import { get100Coins } from "../functions/get100Coins";

const DashboardPage = ()=>
{
    const [coins,setCoins] = useState([]);
    const [paginatedcoins,setPaginatedCoins] = useState([]);
    const [ search,setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [isLoading ,setIsLoading] = useState(true);

    const handlepageChange = (event, value) => {
        setPage(value);
        var prevoiusIndex = (value-1)*10;
        setPaginatedCoins(coins.slice(prevoiusIndex , prevoiusIndex+10));
    };


    const onSearchChange = (e) =>{
        // console.log(e.target.value);
        setSearch(e.target.value)
    }

    var filteredCoins = coins.filter((item)=>
    item.name.toLowerCase().includes(search.toLowerCase() ) 
    || item.symbol.toLowerCase().includes(search.toLowerCase())
    );
    

    useEffect(()=>{
        getData();
    },[]);

    const getData = async()=>{
        const myCoins = await get100Coins();
        if(myCoins){
            setCoins(myCoins);
            setPaginatedCoins(myCoins.slice(0 , 10));
            setIsLoading(false);
        }
        
    }
  

    return(
        <>
         <Header/>
         <BackToTop/>
        {isLoading ?<Loader /> : 
            <div>
            <Search search={search} onSearchChange={onSearchChange}/>
            <TabsComponent coins={search ? filteredCoins : paginatedcoins} />
            {!search &&  
                <PaginationComponent page ={page} handlepageChange={handlepageChange}/>
              }
        </div>
        }
       
        </>
    )
}

export default DashboardPage