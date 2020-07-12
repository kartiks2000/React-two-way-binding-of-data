import React from 'react';

const Userinput = (props) => {

    return(
        <div>
            <input type="text" placeholder="Enter text" onChange={props.changed}></input>
            <h1>{props.text}</h1>
        </div>
    );
}

export default Userinput;

