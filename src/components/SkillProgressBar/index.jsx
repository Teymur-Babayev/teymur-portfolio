import React from 'react';
import { PropTypes } from 'prop-types'

const SkillProgressBar = (props) => {
    const { title, progress } = props;

    return (
        <div className="skill-item padd-15">
            <h5>{title}</h5>
            <div className="progress">
                <div className="progress-in" style={{ width: `${progress}%` }}></div>
                <div className="skill-porcent">
                    {progress}%
                </div>
            </div>
        </div>
    );
}

SkillProgressBar.typeProps = {
    title: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
}

export default SkillProgressBar;