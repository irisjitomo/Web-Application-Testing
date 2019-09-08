import React from 'react';
import CountRules from './countRules';

function Display (props) {
    return(
        <div>
            <h1>Balls: {props.ballCount}</h1>
            <h1>Strikes: {props.strikeCount}</h1>
        </div>
    )
} 

export  default Display