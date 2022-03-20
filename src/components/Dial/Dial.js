import React from 'react';


const dialStyle = {
    width: '300px',
    margin: '0 auto',
    padding: '1rem',
    border: '1px solid pink',
    marginTop: '1rem'
}


const Dial = (props) => {
    return (
        <div style={dialStyle}>
          <h2>this is Dial</h2>  
          <p>steps so far: {props.steps}</p>
        </div>
    );
};

export default Dial;