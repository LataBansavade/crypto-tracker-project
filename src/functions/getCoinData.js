import axios from "axios";

export const getCoinData  =(id)=>{
   const myData =
     axios.get(`https://api.coingecko.com/api/v3/coins/${id}?x_cg_demo_api_key=CG-WvJdL5nQMuuzt4bdiQ7oEwvQ`)
    .then((response) => {
        console.log("RESPONSE IS 2nd ===>>> ",  response.data);
        // coinObject(setCoinData,response.data)()
        return response.data
         })
     .catch((error) => {
         console.log("error ===>>> ", error);
         })
         return myData
        };



       