import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';

import HeaderMain from './components/HeaderMain';
import AddEquipment from './containers/AddEquipment';
import EquipmentBoard from './containers/EquipmentBoard';

export default function App() {
  
  // Create some state to keep track of whether we are adding equipment. If we are, we will render the add equipment component
  const [addingEquip, setAddingEquip] = useState({bool: false, updating: false});
  
  // If using Material UI, can use circular progress.
  const MainDivRender = () => {
    console.log({addingEquip})
    if (addingEquip.bool) return <AddEquipment updating={addingEquip.updating} setAddingEquip={setAddingEquip} />
    else return <EquipmentBoard setAddingEquip={setAddingEquip} />
  }


  const addEqButtonHandler = (e) => {

    e.preventDefault();

    console.log('addEqButtonHandler called');
    if (addingEquip.bool) setAddingEquip({updating: false, bool: false});
    else setAddingEquip({...addingEquip, bool: true});
    console.log({addingEquip});
  }

  return(
    <div> 
      <HeaderMain addingEquip = {addingEquip} addEqButtonHandler = {addEqButtonHandler}/>
      <MainDivRender />
    </div>
  )
}
