import React, { useRef, useState } from 'react';
 
function TravelSlider({ visible }) {
    let [miles, setMiles] = useState(0);
    const milesSelected = useRef(null);
    const onMouseDown = () => {
        milesSelected.current.className = ""
    }
    const onMouseUp = () => {
        milesSelected.current.className = "hidden"
    }

    if (visible) {
        return <><span ref={milesSelected} id="milesSelected" className="hidden">{miles} mi</span>
                <div id="miles">
                    <input type="range" name="miles" min="10" step="1" max="100" onChange={e => setMiles(e.target.value)} onMouseDown={onMouseDown} onMouseUp={onMouseUp} defaultValue="10"/>
                </div>
                <label for="miles">Miles willing to commute (one-way)</label></>
    } else {
        return <div></div>
    }
}

export default TravelSlider;