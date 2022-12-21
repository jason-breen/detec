import React from "react";

export default function EquipmentCard(props){
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
        ...props.x
    }
    return (
    <div>
    <ul>
        <li>Serial: {localState.serial_number}</li> 
        <li>RFS: {localState.removed_from_service}</li> 
        <li>OpHQ: {localState.operating_hq} </li>
        <li>Type: {localState.equipment_type}</li>
        <li>KVA: {localState.kva_rating}</li>
        <li>PV: {localState.primary_voltage}</li>
        <li>SV: {localState.secondary_voltage}</li>
        <li>Mfg: {localState.manufacturer}</li>
        <li>PCB_Status: {localState.PCB_status}</li>
        <li>Created By: {localState.created_by}</li>
    </ul>
    </div>
    )
}