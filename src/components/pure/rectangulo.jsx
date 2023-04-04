import React, { useState } from 'react';

const Rectangulo = () => {

    let r =0;
    let g =255;
    let b =200;

    const color = `rgb(${r},${g},${b})`

    const [colors, setColors] = useState(color);
    const [intervalProcess, setIntervalProcess] = useState(0);

    const getColor = () => {
        r = Math.floor(Math.random() * 255);
        g = Math.floor(Math.random() * 255);
        b = Math.floor(Math.random() * 255);
        const newColor= `rgb(${r},${g},${b})`;
        setColors(newColor);
    }

    function onChangeColor(){
        return setIntervalProcess(setInterval(getColor, 500));
    }

    function onStopChangeColor(){
        return clearInterval(intervalProcess);
    }

    function onClickChangeColor(){
        return clearInterval(intervalProcess)
    }

    return (
        <div id="square" onMouseOver={onChangeColor} onMouseLeave={onStopChangeColor} onDoubleClick={onClickChangeColor} style={{ width: '255px', height: '255px', backgroundColor: colors }}>
        </div>
    );
}
export default Rectangulo;
