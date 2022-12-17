import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';

function Parentheses() {
    return ( <h1> As usual we can call the function using name of the function followed by
    Parentheses </h1>);
    }
    


function EquipmentCards(props){

    function EquipmentCard (eqCardData){
        const defaultValue = 'NV'
        const localState = {
            serial_number: defaultValue,
            removed_from_service: defaultValue,
            operating_hq: defaultValue,
            equipment_type: defaultValue,
            kva_rating: defaultValue,
            primary_voltage: defaultValue,
            secondary_voltage: defaultValue,
            manufacturer: defaultValue,
            PCB_status: defaultValue,
            created_by: defaultValue,
            ...eqCardData
        }
        return (
        <div>
          <p>
            Serial: {localState.serial_number}<br /> 
            RFS: {localState.removed_from_service}<br /> 
            OpHQ: {localState.operating_hq} <br />
            Type: {localState.equipment_type}<br />
            KVA: {localState.kva_rating}<br />
            PV: {localState.primary_voltage}<br />
            SV: {localState.secondary_voltage}<br />
            Mfg: {localState.manufacturer}<br />
            PCB_Status: {localState.PCB_status}<br />
            Created By: {localState.created_by}<br />
           </p>
        </div>
      )
    }
   
    const eqCardsToRender = props.eqData.map(x => EquipmentCard(x));

    return (
    <div>
        {eqCardsToRender}
    </div>
    )
}

export {Parentheses, EquipmentCards}
