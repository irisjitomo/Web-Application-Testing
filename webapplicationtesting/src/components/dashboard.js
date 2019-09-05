import React from 'react';
import CountRules from './countRules';

function Dashboard (props) {
    return(
    <div>
    <button onClick={props.handleBallCount}>Add Ball</button>
    <button onClick={props.handleStrikeCount}>Add Strike</button>
    <button onClick={props.handleHitClick}>Add Hit</button>
    <button onClick={props.handleFoulCount}>Add Foul</button>
    </div>
    )
} 

export  default Dashboard