import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from './Home';
import About from './About';
import Service from './Service';
import Portfolio from './Portfolio';
import Contact from './Contact';
import {
    homeInfo,
    aboutInfo,
    serviceInfo,
    portfolioInfo,
    contactInfo
} from '../services/test.services';

const Page = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home data={homeInfo} />} />
            <Route path="/about" element={<About data={aboutInfo} />} />
            <Route path="/services" element={<Service data={serviceInfo} />} />
            <Route path="/portfolio" element={<Portfolio data={portfolioInfo} />} />
            <Route path="/contact" element={<Contact data={contactInfo} />} />
            <Route path="/" element={<Home data={homeInfo} />} />
        </Routes>
    );
}

export default Page;
