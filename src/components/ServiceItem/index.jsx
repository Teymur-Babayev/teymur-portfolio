import React from 'react';
import { PropTypes } from 'prop-types'

const ServiceItem = ({ data }) => {

    return (
        <div className="service-item padd-15">
            <div className="service-item-inner">
                <div className="icon"><i className={data.icon}></i></div>
                <h4>{data.label}</h4>
                <p>{data.content}</p>
            </div>
        </div>
    );
}

ServiceItem.typeProps = {
    label: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

// ServiceItem.defaultProps = {
//     label: "Web Design",
//     content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum.",
//     icon: "fa fa-laptop"
// }

export default ServiceItem;