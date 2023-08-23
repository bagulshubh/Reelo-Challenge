import React, { useContext, useState } from "react";
import DatabaseContest from "../Context/DatabaseContext";

const QueryField = () => {
  const context = useContext(DatabaseContest);
  const hostName = context.hostName;
  const dFacility = context.dFacility;
  const dMethod = context.dMethod;
  const dYear = context.dYear;
  //console.log(hostName);

  //states to record what user wants to search
  const [name, setName] = useState("");
  const [facility, setFacility] = useState("");
  const [year, setYear] = useState("");
  const [method, setMethod] = useState("");

  return (
    <div className="query-wrapper">
      <div className="fileds-wrapper"> 
        <select
          name="name"
          className="option"
          onChange={(event) => {
            const selectedValue = event.target.value;
            setName(selectedValue);
            console.log(selectedValue);
          }}
        >
          <option value="" disabled selected>
            Host Name
          </option>
          {Array.from(hostName).map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>


        <select name="dmethod"
        className="option"
          onChange={(event) => {
            const selectedValue = event.target.value;
            setMethod(selectedValue);
            console.log(selectedValue);
          }}
        >
          <option value="" disabled selected>
            Discovery Method
          </option>
          {Array.from(dMethod).map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select name="dyear"
        className="option"
          onChange={(event) => {
            const selectedValue = event.target.value;
            setYear(selectedValue);
            console.log(selectedValue);
          }}
        >
          <option value="" disabled selected>
            Discovery Year
          </option>
          {Array.from(dYear).map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select name="dfacility"
        className="option"
          onChange={(event) => {
            const selectedValue = event.target.value;
            setFacility(selectedValue);
            console.log(selectedValue);
          }}
        >
          <option value="" disabled selected>
            Discovery Facility
          </option>
          {Array.from(dFacility).map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* Think about making them  components Pros and cons */}
      <div>
        <div onClick={()=>{
          context.searchData(name,method,year,facility);       
        }}>Search</div>

        <div onClick={()=>{
          setFacility("");
          setMethod("");
          setName("");
          setYear("");
          
          {/*  to clear those select fileds  we use traditional javascript */}
          document.getElementsByName("name")[0].selectedIndex = 0;
          document.getElementsByName("dmethod")[0].selectedIndex = 0;
          document.getElementsByName("dyear")[0].selectedIndex = 0;
          document.getElementsByName("dfacility")[0].selectedIndex = 0;

          context.clearData();
        }}>Clear</div>
      </div>
    </div>
  );
};

export default QueryField;
