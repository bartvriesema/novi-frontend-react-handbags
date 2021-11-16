import React from 'react';

function Button(props) {
    if (props.disabled) {
        return (
            <button type='button' onClick={() => {
                console.log(props.consoleText)
            }} disabled>{props.buttonText}</button>
        )
    } else {
        return (
            <button type='button' onClick={() => {
                console.log(props.consoleText)
            }}>{props.buttonText}</button>
        );
    }

}

export default Button;