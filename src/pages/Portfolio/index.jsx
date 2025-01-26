import React, { useContext, useRef } from 'react';
import { StyleModeContext } from '../../context/StyleModeProvider';

import PageTitle from '../../components/PageTitle';
import PortfolioItem from '../../components/PortfolioItem';

const Portfolio = ({ data }) => {
    const { response } = useContext(StyleModeContext);
    const filter = useRef(null);
    const filterItem = useRef(null);
    const lightbox = useRef(null);
    const lightboxImg = useRef(null);
    const lightboxText = useRef(null);
    const lightboxLink = useRef(null);
    const lightboxSkills = useRef(null);
    const lightboxDescription = useRef(null);

    const onClickTab = (category) => {
        Array.from(filter.current.children).forEach(child => {
            child.classList.toggle('active', child.getAttribute('data-filter') === category);
        });

        Array.from(filterItem.current.children).forEach(child => {
            const match = child.getAttribute('data-category') === category || category === 'all';
            child.classList.toggle('show', match);
            child.classList.toggle('hide', !match);
        });
    };

    const onClickItem = (imgSrc, label, link, description, skills) => {
        changeItem(imgSrc, label, link, description, skills);
        toggleLightbox();
    };

    const toggleLightbox = () => {
        lightbox.current.classList.toggle('open');
    };

    const changeItem = (imgSrc, label, link, description, skills) => {
        lightboxImg.current.src = imgSrc;
        lightboxText.current.innerHTML = label;
        lightboxLink.current.href = link;
        lightboxDescription.current.innerHTML = description;
        lightboxSkills.current.innerHTML = skills.map((val, idx) => `<span class='lightbox-skill-item' key=${idx}>${val}</span>`).join('');
    };

    const closeLightBox = (event) => {
        if (event.target === lightbox.current) {
            toggleLightbox();
        }
    };

    return (
        <>
            <div className="lightbox" ref={lightbox} onClick={closeLightBox}>
                <div className="lightbox-content">
                    <h2 style={{ textAlign: "center" }} className="caption-text" ref={lightboxText}>Title</h2>
                    <img src="" alt="" ref={lightboxImg} />
                    <div className='lightbox-skills' ref={lightboxSkills}></div>
                    <a className="caption-link" ref={lightboxLink} href="/" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-link"></i>
                    </a>
                    <p className="lightbox-caption" ref={lightboxDescription}></p>
                </div>
            </div>
            <section className={`portfolio section${response ? ' open' : ""} active`}>
                <div className="container">
                    <div className="row">
                        <PageTitle title={data.title} />
                    </div>
                    <div className="row">
                        <div className="portfolio-filter padd-15" ref={filter}>
                            <button type="button" onClick={() => onClickTab("all")} className="active" data-filter="all">All</button>
                            <button type="button" onClick={() => onClickTab("Game Development")} data-filter="Game Development">Game Development</button>
                            <button type="button" onClick={() => onClickTab("Web Development")} data-filter="Web Development">Web Development</button>
                            <button type="button" onClick={() => onClickTab("App Development")} data-filter="App Development">App Development</button>
                        </div>
                    </div>
                    <div className="row" ref={filterItem}>
                        {data.info.map((val, idx) => (
                            <PortfolioItem
                                key={`info-${idx}`}
                                onClickItem={onClickItem}
                                data={val}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Portfolio;
