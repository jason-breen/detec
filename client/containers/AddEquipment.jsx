import React, {useState} from "react";

export default function AddEquipment(props){
    // Create react hook for form inputs. If inputs are passed (e.g. updating an existing record, then populate the form with its data)

    const [inputs, setInputs] = useState(props.updating || {serial_number: '', removed_from_service: '', operating_hq: '', equipment_type: '',kva_rating:0 ,primary_voltage: '',secondary_voltage: '',manufacturer: '',PCB_status: '',created_by: 1});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

    function handleFormSubmit(event){
        // setInputs(values => ({...values, created_by: 1}))
        event.preventDefault();

        if(props.updating){
          fetch(`/api/equipment/${props.updating.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'Application/JSON'
            },
            body: JSON.stringify(inputs)
          })
            .then(resp => resp.json())
            .then((data) => {
              console.log({data});
              data[0].removed_from_service = data[0].removed_from_service.slice(0,10);
              // We're done updating equipment, so change setAddingEquip to false
              props.methods.setEqData([
                ...props.eqData.map(x => {
                  if (x.id === props.updating.id) return data[0];
                  else return x;
                })
              ])
              props.methods.setAddingEquip({updating: false, bool: false});
              
            })
            .catch(err => console.log('AddEquipment fetch (method: UPDATE) /api/equipment: ERROR: ', err));
        }else{
          fetch('/api/equipment', {
            method: 'POST',
            headers: {
              'Content-Type': 'Application/JSON'
            },
            body: JSON.stringify(inputs)
          })
            .then(resp => resp.json())
            .then((data) => {
              console.log({data});
              data[0].removed_from_service = data[0].removed_from_service.slice(0,10);
              // We're done adding equipment, so change setAddingEquip to false
              props.methods.setEqData([
                ...props.eqData, 
                data[0]
              ])
              props.methods.setAddingEquip({updating: false, bool: false});

              
            })
            .catch(err => console.log('AddEquipment fetch /api/equipment: ERROR: ', err));
        }
    }

    return(
      <div className="flex flex-row flex-wrap gap-3 p-3">
        <div className="p-3 ring-2 rounded-md shadow-lg bg-white">
          <span className="font-semibold underline text-slate-800">Add Equipment Information Below</span>
            <form onSubmit={handleFormSubmit}>
                <ul className = "divide-y">
                  <li> Serial Num: <input autoFocus type="text" name="serial_number" value={inputs.serial_number || ""} onChange={handleChange} /></li>
                  <li> RFS Date: <input type="date" name="removed_from_service" value={inputs.removed_from_service || ""} onChange={handleChange} /></li>
                  <li> Op HQ: <input type="text" name="operating_hq" value={inputs.operating_hq || ""} onChange={handleChange} /></li>
                  <li> Eq Type: <input type="text" name="equipment_type" value={inputs.equipment_type || ""} onChange={handleChange} /></li>
                  <li> KVA: <input type="number" placeholder="15" name="kva_rating" value={inputs.kva_rating || 0} onChange={handleChange} /></li>
                  <li> PV: <input type="text" name="primary_voltage" value={inputs.primary_voltage || ""} onChange={handleChange} /></li>
                  <li> SV: <input type="text" name="secondary_voltage" value={inputs.secondary_voltage || ""} onChange={handleChange} /></li>
                  <li> Mfg: <input type="text" name="manufacturer" value={inputs.manufacturer || ""} onChange={handleChange} /></li>
                  <li> PCB Status: <input type="text" name="PCB_status" value={inputs.PCB_status || ""} onChange={handleChange} /></li>
                  <input className="bg-sky-700 text-white font-semibold hover:bg-buttonHover rounded px-2 py-1" type="submit" />
                </ul>
            </form>
        </div>
        </div>
    )
}