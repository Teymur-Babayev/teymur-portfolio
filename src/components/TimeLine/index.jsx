import React from 'react';
import { PropTypes } from 'prop-types'
import TimeLineItem from '../TimeLineItem';

const TimeLine = (props) => {
    const { data } = props;

    return (
        <div className={`${data.title} padd-15`}>
            <h3 className="title">{data.title[0].toUpperCase() + data.title.substring(1)}</h3>
            <div className="row">
                <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                        {
                            data.info.map((val, idx) => <TimeLineItem date={val.date} title={val.title} text={val.text}  key={`time-line-${idx}`}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

TimeLine.typeProps = {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

// TimeLine.defaultProps = {
//     date: "2013 - 2015",
//     title: "Master In Computer Science",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare."
// }

export default TimeLine;