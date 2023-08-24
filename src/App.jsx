import { useContext, useEffect, useState } from 'react'
import './App.css'
import QueryField from './Components/QueryField';
import DataField  from './Components/DataField'

import DatabaseContest from '../src/Context/DatabaseContext'
function App() {

  const context = useContext(DatabaseContest);
  const flag = context.flag;
  useEffect(()=>{
    context.getData();
  },[]);


  return (
    <div className='App'>
      <div className='container'>
       <QueryField ></QueryField>
    {
      !flag  ? (
        <div>Exoplanets are planets outside the Solar System. Explore them here.</div>
      ):(
        <DataField></DataField>
      )
    }
      

      </div>

    </div>
  )
}

export default App
