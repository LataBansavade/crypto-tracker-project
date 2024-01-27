import { useEffect, useState } from "react"
import Header from "../Components/Common/Header"
import SelectCoins from "../Components/ComparePage/SelectCoins"
import SelectDays from "../Components/Coin/SelectDays"
import { getCoinPrices } from "../functions/getCoinPrices"
import { getCoinData } from "../functions/getCoinData"
import { coinObject } from "../functions/convertObject"
import Loader from "../Components/Common/Loader"
import List from "../Components/Dashboard/List";
import CoinInfo from "../Components/Coin/CoinInfo"
import { settingChartData } from "../functions/settingChartData"
import LineChart from "../Components/Coin/LineChart"
import PriceType from "../Components/Coin/PriceType"


const ComparePage = ()=>{
    const [crypto1 , setCrypto1] = useState("bitcoin")
    const [crypto2 , setCrypto2] = useState("ethereum")
    const [days , setDays] =useState(30)
    const [crypto1Data, setcrypto1Data] = useState({})
    const [crypto2Data, setcrypto2Data] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [priceType , setPriceType] = useState("prices")
    const [chartData , setChartData] = useState({})

    async function handleDaysChange(event){
        setIsLoading(true)
            setDays(event.target.value)
            const price1 = await getCoinPrices(crypto1 ,event.target.value, priceType)
            const price2 = await getCoinPrices(crypto2 ,event.target.value, priceType)
            settingChartData(setChartData , price1 ,price2)
            setIsLoading(false)
    }

    const handlePriceTypeChange = async (event, newType) => {
        setIsLoading(true)
        setPriceType(newType);
        const price1 = await getCoinPrices(crypto1 ,days, newType)
        const price2 = await getCoinPrices(crypto2 ,days, newType)
        settingChartData(setChartData , price1 ,price2)
              setIsLoading (false)
            
          }
      

    useEffect(()=>{
       getData();
    },[])

    async function getData(){
        setIsLoading(true)
        const data1 =await getCoinData(crypto1)
        const data2 =await getCoinData(crypto2)
        if(data1){
            coinObject(setcrypto1Data ,data1)
        }

        if(data2){
            coinObject(setcrypto2Data ,data2)
        }

        if(data1 && data2){
            const price1 = await getCoinPrices(crypto1 ,days, priceType)
            const price2 = await getCoinPrices(crypto2 ,days, priceType)
            settingChartData(setChartData , price1 ,price2)
            console.log(price1 , price2);
            if(price1.length > 0 && price2.length > 0){ 
                console.log("Both prices fetches " , price1, price2);
                setIsLoading (false)
                }
            }
       }

    

    const handleCoinChange = async(event , isCoin2)=>
    {
    setIsLoading(true)
    if(isCoin2){
        setCrypto2(event.target.value)
        const data =await getCoinData(event.target.value)
        coinObject(setcrypto2Data ,data);
        const price1 = await getCoinPrices(crypto1 ,days, priceType)   
        const price2 = await getCoinPrices(crypto2 ,days, priceType)
        
    if(price1.length > 0 && price2.length > 0){
        console.log("prices are here");
        console.log("Both prices fetches " , price1, price2);
        setIsLoading (false)
        }
    }
    else{
        setCrypto1(event.target.value);
        const data =await getCoinData(event.target.value)
        coinObject(setcrypto1Data ,data)
        const price1 = await getCoinPrices(crypto1 ,days, priceType)   
        const price2 = await getCoinPrices(crypto2 ,days, priceType)
        setIsLoading (false)
        }
       
    }

    
    return(
        <div >
            <Header/>   {isLoading ? (<Loader/>
            ):( 
            <>
            <div className="coins-days-flex">
            <SelectCoins crypto1={crypto1} handleCoinChange={handleCoinChange} crypto2={crypto2} />
            <SelectDays noPTag={true} days={days} handleDaysChange={handleDaysChange} />
            </div>

            <div className="gray-wrapper" style={{padding: "0rem 1rem"}}>
            <List coin={crypto1Data} />
            </div>

            <div className="gray-wrapper" style={{padding: "0rem 1rem"}}>
            <List coin={crypto2Data} />
            </div>

            <div className="gray-wrapper">
                <PriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
               <LineChart chartData={chartData} priceType={priceType} multiAxis={true}/>
            </div>

            <CoinInfo  heading={crypto1Data.name} desc={crypto1Data.desc} />
            <CoinInfo  heading={crypto2Data.name} desc={crypto2Data.desc} />
            </>
            )}
        </div>
    )
}
export default ComparePage



