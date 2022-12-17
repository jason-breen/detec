import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import { EquipmentCards, Parentheses } from './components';

// Get details for equipment from backend
//  use fetch and json parse data and place that data into the eqData array

export default function App() {
  const [eqData, setEqData] = useState([]);
  const [loading, setLoading] = useState(true);
  let eqArray;

  useEffect( () => {
    const fetchFunction = async () =>{
      // setLoading(true) (default state)

      await fetch('/api/')
      .then(res => res.json())
      .then((data) => {
        if (!Array.isArray(data)) eqArray = [];
        console.log('fetch result:', data);
        setEqData(data);
        setLoading(false)
      })
      .catch(err => console.log('Equipment api fetch ERROR: ', err));      
    }
    fetchFunction();

    // return cleanup functions here
    // useEffect will call the cleanup function every time it is triggered

  }, []); // The last argument here is dependencies, variables that are used in useEffect that are located outside useEffect

  // Could also do something like this to replace EquipmentCards below
  // const eq = eqData.map(x => ((<div>x</div>)))

  // If using Material UI, can use circular progress.

  return(<div>  
    { loading ? <div>Loading!</div> : <EquipmentCards eqData = {eqData} />}
  </div>
  )
}

