import React from 'react';
import { PropTypes } from 'prop-types'

const PageTitle = (props) => {
    const { title } = props;

    return (
        <div className="section-title padd-15">
            <h2>{title}</h2>
        </div>
    );
}

PageTitle.typeProps = {
    title: PropTypes.string.isRequired
}

// PageTitle.defaultProps = {
//     title: "About Me"
// }

export default PageTitle;