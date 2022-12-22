import React, {useState, useEffect} from 'react';

export default function HeaderMain(props){
    return (
        <div className="flex flex-row flex-wrap gap-3 p-3">
            <button className="bg-sky-700 text-white font-semibold hover:bg-sky-500 rounded px-2 py-1" onClick={props.addEqButtonHandler}>
                {(props.addingEquip.bool ? 'Return to Main' : 'Add Equipment')}
            </button>
            <p>Search Bar Goes Here</p>
        </div>
    )
    
}