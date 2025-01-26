import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import { StyleModeContext } from "../../context/StyleModeProvider";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
    const { toggleResponse, currentRouter, toggleCurrentRouter } = useContext(StyleModeContext);

    const refAside = useRef();
    const refToggleBtn = useRef();
    const refUl = useRef();

    const navigate = useNavigate();
    const location = useLocation();

    const [activeRouter, setActiveRouter] = useState("home");

    const onClickStyleSwitcher = () => {
        toggleResponse();
        if (!refAside.current.classList.contains('open')) {
            refAside.current.classList.add('open');
            refToggleBtn.current.classList.add('open');
        } else {
            refAside.current.classList.remove('open');
            refToggleBtn.current.classList.remove('open');
        }
    };

    const clickRouter = useCallback((router) => {
        setActiveRouter(router);
        navigate(`/${router}`);
    }, [setActiveRouter, navigate])

    useEffect(() => {
        const url = location.pathname.split('/');
        const router = url[url.length - 1] === "" ? "home" : url[url.length - 1];
        setActiveRouter(router);
    }, [location]);

    useEffect(() => {
        if (currentRouter !== "") {
            clickRouter(currentRouter);
            toggleCurrentRouter("");
        }
    }, [currentRouter, clickRouter, toggleCurrentRouter]);

    return (
        <div className="aside" ref={refAside}>
            <div className="nav-toggler" ref={refToggleBtn} onClick={onClickStyleSwitcher}>
                <span></span>
            </div>
            <div className="aside-inner">
                <div className="logo justify-content-center">
                    <p onClick={() => clickRouter("home")} style={{ cursor: "pointer" }}>DOL</p>
                </div>
                <ul className="nav" ref={refUl}>
                    <li><h4 name="home" onClick={() => clickRouter("home")} className={activeRouter === "home" ? "active" : ""}><i className="fa fa-home"></i> Home</h4></li>
                    <li><h4 name="about" onClick={() => clickRouter("about")} className={activeRouter === "about" ? "active" : ""}><i className="fa fa-user"></i> About</h4></li>
                    <li><h4 name="services" onClick={() => clickRouter("services")} className={activeRouter === "services" ? "active" : ""}><i className="fa fa-list"></i> Services</h4></li>
                    <li><h4 name="portfolio" onClick={() => clickRouter("portfolio")} className={activeRouter === "portfolio" ? "active" : ""}><i className="fa fa-briefcase"></i> Portfolio</h4></li>
                    <li><h4 name="contact" onClick={() => clickRouter("contact")} className={activeRouter === "contact" ? "active" : ""}><i className="fa fa-comments"></i> Contact</h4></li>
                </ul>
                <div className="copyright-text">
                    © 2024 Teymur Babayev
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
