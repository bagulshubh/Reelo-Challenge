import React, { useContext, useState } from "react";
import DatabaseContext from "../Context/DatabaseContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QueryField = () => {
  const context = useContext(DatabaseContext);
  const hostName = context.hostName;
  const dFacility = context.dFacility;
  const dMethod = context.dMethod;
  const dYear = context.dYear;
  const flag = context.flag;
  const [name, setName] = useState("");
  const [facility, setFacility] = useState("");
  const [year, setYear] = useState("");
  const [method, setMethod] = useState("");

  return (
    <div className="query-wrapper">
      <div className="fileds-wrapper">
        <select
          name="name"
          className="options"

          onChange={(event) => {
            const selectedValue = event.target.value;
            setName(selectedValue);
          }}>

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
          className="options"

          onChange={(event) => {
            const selectedValue = event.target.value;
            setMethod(selectedValue);
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
          className="options"

          onChange={(event) => {
            const selectedValue = event.target.value;
            setYear(selectedValue);
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
          className="options"

          onChange={(event) => {
            const selectedValue = event.target.value;
            setFacility(selectedValue);
          }}>

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

      
      <div className="btn-wrapper">

        <div className="btn" onClick={() => {
          if (name !== "" || facility !== "" || year !== "" || method !== "")
            context.searchData(name, method, year, facility);
          else {
            toast.error('Search Query Required', {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        }}>Search</div>

        <div className="btn" onClick={() => {
          setFacility("");
          setMethod("");
          setName("");
          setYear("");

          {/*  to clear those select fileds  we use traditional javascript */ }
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
