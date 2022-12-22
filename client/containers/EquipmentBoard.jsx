import React, {useState, useEffect} from "react";
import EquipmentCard from "../components/EquipmentCard";

export default function EquipmentBoard(props){
  const [eqData, setEqData] = useState([]);
  const [loading, setLoading] = useState(true);

  let eqArray;

    // Get details for equipment from backend
    //  use fetch and json parse data and place that data into the eqData array

  // Set up useEffect to only run query on first load, or to get additional records for display / search. 

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
    if (eqData == []) {fetchFunction();}
    // return cleanup functions here
    // useEffect will call the cleanup function every time it is triggered
  }, []); // The last argument here is dependencies, variables that are used in useEffect that are located outside useEffect

    // Could also do something like this to replace EquipmentCards below
    // const eq = eqData.map(x => ((<div>x</div>)))
    
    const eqMethods = {
      handleDeleteButton: async (eqId) => {
        // const fetchFunction = async (eqId) =>{
          console.log(`attempting to delete asset with record ID: ${eqId}`)
          await fetch(`/api/equipment/${eqId}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'Application/JSON'},
            // body: JSON.stringify(eqId)
          })
          .then(res => res.json())
          .then((data) => {
            if (!Array.isArray(data)) eqArray = [];
            console.log('fetch result:', data);
            setEqData(eqData.filter(x => x.id !== eqId));
          })
          .catch(err => console.log('Equipment api fetch ERROR: ', err));      
        // }
        // fetchFunction(eqId);
      },

      handleModifyButton: (eqData) => {
        console.log('Modify button pressed for id: ', eqData.id);
        props.setAddingEquip({updating: eqData, bool: true});

      }
    }

    // const eqCardsToRender = props.eqData.map((x,i) => EquipmentCard(x,{key:i}));
    // const eqCardsToRender = props.eqData.map((x,i) => EquipmentCard({x, key:i}));
    const eqCardsToRender = eqData.map((x,i) => <EquipmentCard eqData={x} eqMethods={eqMethods} key={i} />);

    if (loading) return <div>Loading!</div>
    else return <div className="flex flex-row flex-wrap gap-3 p-3">{eqCardsToRender}</div>

}