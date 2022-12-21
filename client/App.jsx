import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';

import HeaderMain from './components/HeaderMain';
import AddEquipment from './containers/AddEquipment';
import EquipmentBoard from './containers/EquipmentBoard';

export default function App() {
  
  // Create some state to keep track of whether we are adding equipment. If we are, we will render the add equipment component
  const [addingEquip, setAddingEquip] = useState(false);
  
  // If using Material UI, can use circular progress.
  const MainDivRender = () => {
    if (addingEquip) return <AddEquipment />
    else return <EquipmentBoard />
  }


  const addEqButtonHandler = (e) => {

    e.preventDefault();

    console.log('handleClick called');
    if (addingEquip) setAddingEquip(false);
    else setAddingEquip(true);
    console.log({addingEquip});
  }

  return(
    <div> 
      <header>
          <button onClick={addEqButtonHandler}> 
            {/* {myText} */}
            {(addingEquip ? 'Return to Main' : 'Add Equipment')}
          </button>
        <p>Search Bar Goes Here</p>
      </header> 
      {/* <HeaderMain addingEquip = {addingEquip} setAddingEquip = {setAddingEquip}/> */}
      <MainDivRender />
    </div>
  )
}
