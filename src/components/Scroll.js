import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
    return (
        <div className= 'scroll' style = {{overflowY: 'scroll', border: '5px solid black', height: '350px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;