import { useContext, useEffect, useState } from 'react'
import './App.css'
import QueryField from './Components/QueryField';
import DataField  from './Components/DataField'

import DatabaseContest from '../src/Context/DatabaseContext'
function App() {

  const context = useContext(DatabaseContest);
  
  useEffect(()=>{
    context.getData();
  },[]);


  return (
    <div className='App'>
      <div className='container'>
       <QueryField ></QueryField>

       <DataField></DataField>

      </div>

    </div>
  )
}

export default App
