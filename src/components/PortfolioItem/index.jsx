import React from 'react';
import { PropTypes } from 'prop-types'

const PortfolioItem = ({ onClickItem, data }) => {

    return (
        <div className="portfolio-item padd-15" data-category={data.category} onClick={() => onClickItem(data.imgUrl, data.label, data.link, data.description, data.skills)}>
            <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                    <img src={data.imgUrl} alt={data.category} />
                </div>
                <div className="portfolio-info">
                    <h4>{data.label}</h4>
                    <div className="icon">
                        <i className="fa fa-search"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

PortfolioItem.typeProps = {
    label: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
}

// PortfolioItem.defaultProps = {
//     label: "Web Design",
//     imgUrl: "assets/images/portfolio/1.jpg",
//     category: "web-design",
// }

export default PortfolioItem;