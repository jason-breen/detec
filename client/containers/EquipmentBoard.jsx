import React, {useState, useEffect} from "react";
import EquipmentCard from "../components/EquipmentCard";

export default function EquipmentBoard(props){
  const [eqData, setEqData] = useState([]);
  const [loading, setLoading] = useState(true);

  let eqArray;

    // Get details for equipment from backend
    //  use fetch and json parse data and place that data into the eqData array

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
    
    // const eqCardsToRender = props.eqData.map((x,i) => EquipmentCard(x,{key:i}));
    // const eqCardsToRender = props.eqData.map((x,i) => EquipmentCard({x, key:i}));
    const eqCardsToRender = eqData.map((x,i) => <EquipmentCard x={x} key={i} />);

    if (loading) return <div>Loading!</div>
    else return <div>{eqCardsToRender}</div>

}