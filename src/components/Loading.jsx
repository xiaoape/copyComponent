import React from 'react';
import '../css/loading.css';

const Loading = ({boxStyle, circleStyle}) => {
    return (
        <div className='loadEffect' style={boxStyle}>
            <span className={'loadEffectSpan:nth-child'} style={circleStyle}></span>
            <span style={circleStyle}></span>
            <span style={circleStyle}></span>
            <span style={circleStyle}></span>
            <span style={circleStyle}></span>
            <span style={circleStyle}></span>
            <span style={circleStyle}></span>
            <span style={circleStyle}></span>
        </div>
    )
}

export default Loading;