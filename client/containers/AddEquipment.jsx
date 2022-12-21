import React, {useState} from "react";

export default function AddEquipment(props){
    const [inputs, setInputs] = useState({serial_number: '', removed_from_service: '', operating_hq: '', equipment_type: '',kva_rating:0 ,primary_voltage: '',secondary_voltage: '',manufacturer: '',PCB_status: '',created_by: 0});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

    function handleFormSubmit(event){
        setInputs(values => ({...values, created_by: 1}))
        event.preventDefault();
        const body = inputs;
          fetch('/api/equipment', {
            method: 'POST',
            headers: {
              'Content-Type': 'Application/JSON'
            },
            body: JSON.stringify(body)
          })
            .then(resp => resp.json())
            .then((data) => {
              console.log(data);
            })
            .catch(err => console.log('AddEquipment fetch /api/equipment: ERROR: ', err));
    }

    return(
        <div>
            This is the container for adding equipment
            <form onSubmit={handleFormSubmit}>
                Serial Num: <input type="text" name="serial_number" value={inputs.serial_number || ""} onChange={handleChange} /><br />
                RFS Date: <input type="date" name="removed_from_service" value={inputs.removed_from_service || ""} onChange={handleChange} /><br />
                Op HQ: <input type="text" name="operating_hq" value={inputs.operating_hq || ""} onChange={handleChange} /><br />
                Eq Type: <input type="text" name="equipment_type" value={inputs.equipment_type || ""} onChange={handleChange} /><br />
                KVA: <input type="number" placeholder="15" name="kva_rating" value={inputs.kva_rating || 0} onChange={handleChange} /><br />
                PV: <input type="text" name="primary_voltage" value={inputs.primary_voltage || ""} onChange={handleChange} /><br />
                SV: <input type="text" name="secondary_voltage" value={inputs.secondary_voltage || ""} onChange={handleChange} /><br />
                Mfg: <input type="text" name="manufacturer" value={inputs.manufacturer || ""} onChange={handleChange} /><br />
                PCB Status: <input type="text" name="PCB_status" value={inputs.PCB_status || ""} onChange={handleChange} /><br />
                <input type="submit" />
            </form>
        </div>
    )
}