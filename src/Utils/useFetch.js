
import { useState,useEffect } from "react";

function useFetch(url){
   const [data, setdata] = useState(null);
   const [Error, setError] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(()=>{
    const fetchData = async ()=>{

        try{
            const response = await fetch(url);
            const result = await response.json();
            setdata(result)
   
        }catch(error){
             setError(error)
        }finally{
            setLoading(false)
        }

      }
   fetchData();

   
   },[url])
   return {data, Error, loading};

 
  
}


export default useFetch;