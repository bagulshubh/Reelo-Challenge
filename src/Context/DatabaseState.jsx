import { useEffect, useState } from "react";
import Papa from 'papaparse'; 
import DatabaseContext from "./DatabaseContext";

const DatabaseState = (props) => {

  const [mainData, setMainData] = useState([]);
  let[dummyData,setDummyData] = useState([]);

  useEffect(()=>{
    setDummyData(mainData);
  },[mainData]);
  
  //data structures to  store the fileds unique values
  const [hostName , setHostName] = useState([]);
  const [dMethod , setDMethod] = useState([]);
  const [dYear , setDYear] = useState([]);
  const [dFacility , setDFacility] = useState([]);

  const[flag,setflag] = useState(false);

  const getData = ()=>{
    fetch('../src/assets/Database.csv')
      .then(response => response.text())
      .then(csvData => {
        const parsedData = Papa.parse(csvData, { header: true }).data;
        setMainData(parsedData);

        const HostNames = new Set();
        parsedData.forEach(item => {
          HostNames.add(item.Host_Name);
        });
        
        setHostName(HostNames);

        const DiscoveryM = new Set();
        parsedData.forEach(item =>{
          DiscoveryM.add(item.Discovery_Method);
        });
        setDMethod(DiscoveryM);

        const DiscoveryY = new Set();
        parsedData.forEach(item=>{
          DiscoveryY.add(item.Discovery_Year);
        });
        setDYear(DiscoveryY);
        
        const DiscoveryF = new Set();
        parsedData.forEach(item=>{
          DiscoveryF.add(item.Discovery_Station);
        });
        setDFacility(DiscoveryF);
        
      })
      .catch(error => {
        console.error('Error fetching CSV data:', error);
      });
  }

  const  searchData = (name,method,year,facility)=>{
      setflag(true);
      
      if(name!==""){
        dummyData = dummyData.filter(item =>{
          return  item.Host_Name === name;
        })
      }

      if(method!==""){
        dummyData = dummyData.filter(item =>{
          return item.Discovery_Method === method;
        })
      }

      if(year!==""){
        dummyData = dummyData.filter(item =>{
          return item.Discovery_Year === year;
        })
      }

      if(facility!==""){
        dummyData = dummyData.filter(item => {
          return item.Discovery_Station === facility;
        })
      }

      
      setDummyData(dummyData);
      
      const HostNames = new Set();
        dummyData.forEach(item => {
          HostNames.add(item.Host_Name);
        });
       
        setHostName(HostNames);

        const DiscoveryM = new Set();
        dummyData.forEach(item =>{
          DiscoveryM.add(item.Discovery_Method);
        });
        setDMethod(DiscoveryM);

        const DiscoveryY = new Set();
        dummyData.forEach(item=>{
          DiscoveryY.add(item.Discovery_Year);
        });
        setDYear(DiscoveryY);
        
        const DiscoveryF = new Set();
        dummyData.forEach(item=>{
          DiscoveryF.add(item.Discovery_Station);
        });
        setDFacility(DiscoveryF);


  }

  const clearData = () =>{
    
    setDummyData(mainData);
    setflag(false);

    const HostNames = new Set();
    mainData.forEach(item => {
      HostNames.add(item.Host_Name);
    });
    
    setHostName(HostNames);

    const DiscoveryM = new Set();
    mainData.forEach(item =>{
      DiscoveryM.add(item.Discovery_Method);
    });
    setDMethod(DiscoveryM);

    const DiscoveryY = new Set();
    mainData.forEach(item=>{
      DiscoveryY.add(item.Discovery_Year);
    });
    setDYear(DiscoveryY);
    
    const DiscoveryF = new Set();
    mainData.forEach(item=>{
      DiscoveryF.add(item.Discovery_Station);
    });
    setDFacility(DiscoveryF);

  }

    return (
      <DatabaseContext.Provider value={{ getData, mainData , hostName,dFacility,dMethod,dYear,searchData,clearData,dummyData,flag}}>
        {props.children}
      </DatabaseContext.Provider>
    );
}
export default DatabaseState;
