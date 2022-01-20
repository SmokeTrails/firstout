import React from 'react';
import './Title.css'

export default function Title(props) {
    return(
        <div className='titleContainer'>
            <h1>{props.title}</h1>
        </div>
    )
}
