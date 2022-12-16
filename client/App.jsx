import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';

function Parentheses() {
return ( <h1> As usual we can call the function using name of the function followed by
Parentheses </h1>);
}

function EquipmentCard(){
  // const {serial_number, removed_from_service, operating_hq, equipment_type, kva_rating, primary_voltage, secondary_voltage, manufacturer, PCB_status, created_by} = eqData;
  return (
    <div>
      <p>
        Serial: <br /> 
        RFS: <br /> 
        OpHQ:  <br />
        Type: <br />
        KVA: <br />
        PV: <br />
        SV: <br />
        Mfg: <br />
        PCB_Status: <br />
        Created By: <br />
      </p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(EquipmentCard());
