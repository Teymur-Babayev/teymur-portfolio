import React from 'react';
import PropTypes from 'prop-types'

const ContactItem = ({ data }) => {
    return (
        <div className="contact-info-item padd-15">
            <div className="icon">
                <i className={data.icon}></i>
                <h4>{data.title}</h4>
                <p>{data.description}</p>
            </div>
        </div>
    );
}

ContactItem.typeProps = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

export default ContactItem;