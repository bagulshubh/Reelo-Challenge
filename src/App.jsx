import { useContext, useEffect } from 'react'
import QueryField from './Components/QueryField';
import DataField from './Components/DataField'
import DatabaseContest from '../src/Context/DatabaseContext'
import './App.css'


function App() {

  const context = useContext(DatabaseContest);
  const flag = context.flag;

  useEffect(() => {
    context.getData();
  }, []);

  return (
    <div className='App'>
      <div className='container'>
        <QueryField ></QueryField>
        {
          !flag ? (
            <div>Exoplanets are planets outside the Solar System. Explore them here.</div>
          ) : (
            <DataField></DataField>
          )
        }

      </div>

    </div>
  )
}

export default App