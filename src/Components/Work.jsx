import React from 'react';
import flowchart from "../assets/FlowChart.png";
import vector from "../assets/Vector1.png"
import person from "../assets/Programmer/standing/discussing.png"
import "./Work.css"

const Work = () => {
    return (
        <div className='work-wrapper'>
            <h3>How App will work??</h3>
            <img src={flowchart} alt="" />
            <img src={vector} alt="" />
            <img src={person} alt="" />
        </div>
    );
}

export default Work;