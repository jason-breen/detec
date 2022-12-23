import React, {useState} from "react";

export default function EquipmentCard(props){
        
    // Throw an error if id is not on incoming props.x
    if(!props.eqData.id) throw new Error("Card attemped to render without an id")
    const [showButtons, setShowButtons] = useState(false)

    const defaultValue = 'NV'
    const localState = {
        id: defaultValue,
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
        ...props.eqData
    }

    const handleMenuClick = () => {
        if (showButtons) setShowButtons(false)
        else setShowButtons(true)
    }

    function cardButtons(){
        return(
            <div>
            <button className="bg-sky-700 text-white font-semibold hover:bg-buttonHover rounded px-2 py-1 mr-2" onClick={() => props.eqMethods.handleModifyButton(props.eqData)}> Modify </button>
            <button className="bg-sky-100 text-slate-300 font-semibold hover:bg-buttonHover rounded px-2 py-1" onClick={() => props.eqMethods.handleDeleteButton(props.eqData.id)}>Delete </button>
            </div>
        )
    }

    return (
    <div className="p-3 ring-2 rounded-lg shadow-lg bg-white w-60">
    <ul className = "divide-y">
        <li className="font-semibold underline text-slate-800">Serial: {localState.serial_number}</li> 
        <li>RFS: {localState.removed_from_service}</li> 
        <li>OpHQ: {localState.operating_hq} </li>
        <li>Type: {localState.equipment_type}</li>
        <li>KVA: {localState.kva_rating}</li>
        <li>PV: {localState.primary_voltage}</li>
        <li>SV: {localState.secondary_voltage}</li>
        <li>Mfg: {localState.manufacturer}</li>
        <li>PCB_Status: {localState.PCB_status}</li>
        {/* <li>Created By: {localState.created_by}</li> */}
    </ul>
    <div className="flex flex-row pt-3">
    <div className="flex-col justify-center pr-2 py-1" onClick={handleMenuClick}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
        </svg>
    </div>
    <button className="bg-sky-700 text-white font-semibold hover:bg-buttonHover rounded px-2 py-1 mr-2" onClick={() => props.eqMethods.handleModifyButton(props.eqData)}> Modify </button>
    <button className="bg-sky-100 text-slate-300 font-semibold hover:bg-buttonHover rounded px-2 py-1" onClick={() => props.eqMethods.handleDeleteButton(props.eqData.id)}> Delete </button>
    </div>
    </div>
    )
}