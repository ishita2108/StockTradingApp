import React,{useState, useEffect} from 'react';
import finnHub from "../apis/finnHub"

const StockList = () => {
    const [watchList, setWatchList] = useState(["GOOGL","MSFT","AMZN"]);

    useEffect(() => {
      const fetchData = async () =>{
        try{
           const response = await finnHub.get("/quote?symbol=MSFT&token=cclf1a2ad3i7ei0cggo0cclf1a2ad3i7ei0cggog")
           console.log(response);
        }
        catch(error){
            console.log(error)
        }
      }
      fetchData();
    },[])
    
  return (
    <main>
        StockList
    </main>
  )
}

export default StockList