import React from "react";
import { useState, useEffect } from "react";

export const CovidContext = React.createContext();

export const CovidProvider = ({ children }) => {
  const [covid, setCovid] = useState([]);
  const[value,setValue]=useState('')
  useEffect(() => {
    fetch(`https://api.covid19api.com/total/dayone/country/${value}`)
      .then((res) => res.json())
      .then((res) => setCovid(res[1]));
    
  }, [value]);
  const getCountryName=(country)=>setValue(country)
  
 
  return (
    <CovidContext.Provider value={{ covid,getCountryName }}>{children}</CovidContext.Provider>
  );
};

export default CovidContext;
