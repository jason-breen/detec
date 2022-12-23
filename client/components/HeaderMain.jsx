import React, {useState, useEffect} from 'react';

export default function HeaderMain(props){
    return (
        <div className="gap-3 p-3">
            <h1 className="text-slate-800 font-bold text-2xl">DETEC - Distribution Equipment Tracking and Environmental Compliance</h1>
            <div className="flex flex-row flex-wrap gap-3 py-3">
                <button className="bg-sky-700 text-white font-semibold hover:bg-sky-500 rounded px-2 py-1" onClick={props.addEqButtonHandler}>
                    {(props.addingEquip.bool ? 'Return to Main' : 'Add Equipment')}
                </button>
                {/* <p>Search Bar Goes Here</p> */}
            </div>
        </div>
    )
    
}