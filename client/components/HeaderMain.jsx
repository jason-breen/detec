import React, {useState, useEffect} from 'react';

export default function HeaderMain(props){
    return (
        <div>
            <button onClick={props.setAddingEquip(false)}>
                Add Equipment
            </button>
            <p>Search Bar Goes Here</p>
        </div>
    )
    
}