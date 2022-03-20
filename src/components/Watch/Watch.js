import React, { useEffect, useState } from 'react';
import Disiplay from '../Display/Disiplay';

const Watch = () => {

    const [steps, setSteps] = useState(0);

    const increaseSteps = ()=>{
        setSteps(steps + 1)
    }
    
    useEffect( () => {
        console.log(steps);
        
    }, [steps])

    const ButtonStyle ={
        padding: '.6rem 1rem',
        outline: 'none',
        border: 'none',
        backgroundColor: 'crimson', 
        borderRadius: '5px',
        fontSize: '1rem',
        color: 'white',
        fontWeight: 'bold'
    }

    
const watchStyle = {
    width: '300px',
    margin: '0 auto',
    padding: '1rem',
    border: '1px solid limeGreen',
    marginTop: '1rem'
}


    return (
        <div style={watchStyle}>
            <h3>This is my smart Watch.....</h3>
            <h3>My Current Steps: {steps}</h3>
            <button style={ButtonStyle} onClick={increaseSteps}>De Dour.......</button>

            <Disiplay name="Garmin" steps={steps}></Disiplay>
        </div>
    );
};

export default Watch;