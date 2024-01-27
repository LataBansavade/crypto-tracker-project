import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Common/Header";
import Loader from "../Components/Common/Loader";
import { coinObject } from "../functions/convertObject";
import List from "../Components/Dashboard/List";
import CoinInfo from "../Components/Coin/CoinInfo";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../Components/Coin/LineChart";
import { convertDate } from "../functions/convertDate";
import SelectDays from "../Components/Coin/SelectDays";
import { settingChartData } from "../functions/settingChartData";
import PriceType from "../Components/Coin/PriceType";


const CoinPage = ()=>{
    const {id} = useParams();
    const [isLoading , setIsLoading] = useState(true)
    const [coinData , setCoinData] = useState();
    const [ days , setDays] = useState(30);
    const [chartData , setChartData] = useState({})
    const [priceType, setPriceType] = useState('prices');

    useEffect(()=>{
       if(id){
            getData()
           
            }
    },[id])


    async function  getData(){
        const data =await getCoinData(id)
        if(data){
            coinObject(setCoinData ,data)
            const price = await getCoinPrices(id ,days,priceType)
            if(price.length > 0){
                console.log("prices are here");
                settingChartData(setChartData , price)
                setIsLoading (false)
                }
        }
    }

    const handleDaysChange = async (event) => {
      setIsLoading(true)
      setDays(event.target.value);
      const price = await getCoinPrices(id , event.target.value,priceType)
      if(price.length > 0){
            settingChartData(setChartData , price)
            setIsLoading (false)
        }
    };


    const handlePriceTypeChange = async (event, newType) => {
      setIsLoading(true)
      setPriceType(newType);
      const price = await getCoinPrices(id , days ,newType)
      if(price.length > 0){
            settingChartData(setChartData , price)
            setIsLoading (false)
          
        }
    };
  

    return(
        <div>
          <Header/>
          {isLoading ? (<Loader/>):( <>
          <div className="gray-wrapper" style={{padding: "0rem 1rem"}}>
          <List coin={coinData} />
          </div>
          <div className="gray-wrapper">
               <SelectDays days={days} handleDaysChange={handleDaysChange}/>
               <PriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
               <LineChart chartData={chartData} priceType={priceType}/>
          </div>
          <CoinInfo  heading={coinData.name} desc={coinData.desc} />
          </>)}
        </div>
    )
}

export default CoinPage