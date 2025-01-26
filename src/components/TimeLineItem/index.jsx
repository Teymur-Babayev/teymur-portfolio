import React from 'react';
import { PropTypes } from 'prop-types'

const TimeLineItem = (props) => {
    const { date, title, text } = props;

    return (
        <div className="timeline-item">
            <div className="circle-dot"></div>
            <h6 className="timeline-date"><i className="fa fa-calendar"></i> {date}</h6>
            <h4 className="timeline-title">{title}</h4>
            <p className="timeline-text" dangerouslySetInnerHTML={{ __html: text }} />
        </div>
    );
}

TimeLineItem.typeProps = {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

// TimeLineItem.defaultProps = {
//     date: "2013 - 2015",
//     title: "Master In Computer Science",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque diam non nisi semper, et elementum lorem ornare."
// }

export default TimeLineItem;