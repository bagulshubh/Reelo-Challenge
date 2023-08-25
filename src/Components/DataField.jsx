import React, { useContext } from 'react'
import DatabaseContext from "../Context/DatabaseContext";
import Field from '../Components/Field'

const DataField = () => {

  const context = useContext(DatabaseContext);
  const data = context.dummyData;
  console.log(data);
  let  hnamearr = [];
  let namearr = [];
  let dm = [];
  let df = [];
  let dy = [];
  let  links = [];

  data.forEach(item => {
      hnamearr.push(item.Host_Name);
  });

  data.forEach(item => {
      namearr.push(item.Planet_Name);
  });
  data.forEach(item => {
      dm.push(item.Discovery_Method);
  });
  data.forEach(item => {
      df.push(item.Discovery_Station);
  });
  data.forEach(item => {
      dy.push(item.Discovery_Year);
  });

  for(let i = 0;i<namearr.length;i++){
    let pname = namearr[i].replace(/ /g, "-");
    let  hname = hnamearr[i].replace(" ", "%20");
    let link = `https://exoplanetarchive.ipac.caltech.edu/overview/${hname}#planet_${pname}_collapsible`;
    links.push(link);
  }

  console.log("namearr: ",dy);

  return (
    <div className='data-wrapper'>

      {
        !data ? (
          <div>Data is not present</div>
        ):(
          
          //need four colums to store the data in those coloums
          <div className='table-wrapper'>
            {
              <div className='table'>
                <Field name = "Planet Name" content = {namearr} links = {links}></Field>
                <Field name = "Host Name" content = {hnamearr}></Field>
                <Field name = "Discovery Method" content = {dm}></Field>
                <Field name = "Discovery Year" content = {dy}></Field>
                <Field name = "Discovery Facility" content = {df}></Field>
              </div>
            }
          </div>

        )
      }


    </div>
  )
}

export default DataField
