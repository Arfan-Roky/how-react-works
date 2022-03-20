import React from 'react';
import Dial from '../Dial/Dial';



const displayStyle = {
    width: '300px',
    margin: '0 auto',
    padding: '1rem',
    border: '1px solid crimson',
    marginTop: '1rem'
}

const Disiplay = (props) => {

    return (
        <div style={displayStyle}>
            <h2>Name: {props.name}</h2>
            <p>So far state ToDay: {props.steps}</p>
            <Dial steps={props.steps}></Dial>
        </div>
    );
};

export default Disiplay;