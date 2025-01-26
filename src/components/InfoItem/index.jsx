import React from 'react';
import { PropTypes } from 'prop-types'
const InfoItem = (props) => {
    const { label, content } = props;

    return (
        <div className="info-item padd-15">
            <p className='item-title'>{label} : </p><p className='item-content'>{content}</p>
        </div>
    );
}

InfoItem.typeProps = {
    label: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}

export default InfoItem;