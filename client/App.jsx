import React, {useState, useEffect} from 'react';
// import ReactDOM from 'react-dom/client';

// import { EquipmentCards, Parentheses } from './components';
// import HeaderMain from './components/HeaderMain';
// import AddEquipment from './containers/AddEquipment';


// Get details for equipment from backend
//  use fetch and json parse data and place that data into the eqData array

export default function App() {
  // const [eqData, setEqData] = useState([]);
  // const [loading, setLoading] = useState(true);
  
  // // Create some state to keep track of whether we are adding equipment. If we are, we will render the add equipment component
  // const [addingEquip, setAddingEquip] = useState(false);

  // let eqArray;

  // useEffect( () => {
  //   const fetchFunction = async () =>{
  //     // setLoading(true) (default state)

  //     await fetch('/api/')
  //     .then(res => res.json())
  //     .then((data) => {
  //       if (!Array.isArray(data)) eqArray = [];
  //       console.log('fetch result:', data);
  //       setEqData(data);
  //       setLoading(false)
  //     })
  //     .catch(err => console.log('Equipment api fetch ERROR: ', err));      
  //   }
  //   fetchFunction();

  //   // return cleanup functions here
  //   // useEffect will call the cleanup function every time it is triggered

  // }, []); // The last argument here is dependencies, variables that are used in useEffect that are located outside useEffect

  // Could also do something like this to replace EquipmentCards below
  // const eq = eqData.map(x => ((<div>x</div>)))

  // If using Material UI, can use circular progress.
  // const MainDivRender = () => {
  //   if (addingEquip) return <AddEquipment />
  //   else if (loading) return <div>Loading!</div>
  //   else return <EquipmentCards eqData = {eqData} />
  // }

  // let myText = 'not called';

  const addEqButtonHandler = (e) => {
    console.log(e);
    e.preventDefault();
    // console.log(e);
    // myText = 'handleClick called'
    console.log('handleClick called');
    // setAddingEquip(true);
    // console.log({addingEquip});
  }
  
  return(
    <div> 
      {/* <header> */}
        {/* <form onSubmit={(e) => {addEqButtonHandler}}> */}
        {/* <form onSubmit={addEqButtonHandler}> */}
          <button onClick={ () => console.log('hello')}> 
            {/* {myText} */}test
            {/* {(addingEquip ? 'Return to Main' : 'Add_Equipment')} */}
          </button>
        {/* </form> */}
        {/* <form onSubmit={addEqButtonHandler}>
          {/* <input type="submit" value="Test" /> 
          <button type="submit">Test Button</button>
        </form> */}
        {/* <p>Search Bar Goes Here</p> */}
      {/* </header>  */}
      {/* <HeaderMain addingEquip = {addingEquip} setAddingEquip = {setAddingEquip}/> */}
      {/* <MainDivRender /> */}
    </div>
  )
}

