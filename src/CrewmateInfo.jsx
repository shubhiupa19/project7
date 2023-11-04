import React from 'react';

const CrewmateInfo = ({crewmate}) => {
    return (
        <div>
            <h2>{crewmate.name}</h2>
            <p>Attribute: {crewmate.attribute}</p>
        </div>

    );
};

export default CrewmateInfo;