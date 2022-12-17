import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import { EquipmentCards, Parentheses } from './components';

// Create dummy array to test front end components
let eqArray = [ 
  {
    serial_number: 'qwerty1',
    removed_from_service: '12/1/2022',
    operating_hq: 'Athens',
    equipment_type: 'OH 1Ph Xfmr',
    kva_rating: '15',
    primary_voltage: '13800',
    secondary_voltage: '120/240',
    manufacturer: 'Cooper',
    PCB_status: 'Non-PCB',
    created_by: 'Jason Breen'
  },
  {
    serial_number: 'qwerty2',
    removed_from_service: '12/1/2022',
    operating_hq: 'Athens',
    equipment_type: 'OH 1Ph Xfmr',
    kva_rating: '15',
    primary_voltage: '13800',
    secondary_voltage: '120/240',
    manufacturer: 'Cooper',
    PCB_status: 'Non-PCB',
    created_by: 'Jason Breen'
  },
  {
    serial_number: 'qwerty3',
    removed_from_service: '12/1/2022',
    operating_hq: 'Athens',
    equipment_type: 'OH 1Ph Xfmr',
    kva_rating: '15',
    primary_voltage: '13800',
    secondary_voltage: '120/240',
    manufacturer: 'Cooper',
    PCB_status: 'Non-PCB',
    created_by: 'Jason Breen'
  },
]

// Get details for equipment from backend
//  use fetch and json parse data and place that data into the eqData array
fetch('/api/')
  .then(res => res.json())
  .then((data) => {
    if (!Array.isArray(data)) eqArray = [];
    console.log('fetch result:', data);
    return data;
  })
  .catch(err => console.log('Equipment api fetch: ERROR: ', err));

console.log(eqArray);

export default function App() {
  const [eqData, setEqData] = useState(eqArray);
  return(<div>  
    <Parentheses />
    <EquipmentCards eqData = {eqData}/>
  </div>
  )
}

