import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';

import HeaderMain from './components/HeaderMain';
import AddEquipment from './containers/AddEquipment';
import EquipmentBoard from './containers/EquipmentBoard';

export default function App() {
  
  // Create some state to keep track of whether we are adding equipment. If we are, we will render the add equipment component
  const [addingEquip, setAddingEquip] = useState({bool: false, updating: false});
  const [eqData, setEqData] = useState([]);
  const [searchPattern, setSearchPattern] = useState("")
  
  // If using Material UI, can use circular progress.
  const MainDivRender = () => {
    if (addingEquip.bool) return <AddEquipment eqData={eqData} updating={addingEquip.updating} methods={{setAddingEquip, setEqData}} />
    else return <EquipmentBoard eqData={eqData} methods={{setAddingEquip, setEqData}} />
  }


  const addEqButtonHandler = (e) => {

    e.preventDefault();

    console.log('addEqButtonHandler called');
    if (addingEquip.bool) setAddingEquip({updating: false, bool: false});
    else setAddingEquip({...addingEquip, bool: true});
    
  }

  return(
    // <div className="bg-gradient-to-t from-slate-400 h-max"> 
    <div>
      <HeaderMain addingEquip = {addingEquip} addEqButtonHandler = {addEqButtonHandler}/>
      <MainDivRender />
    </div>
  )
}
