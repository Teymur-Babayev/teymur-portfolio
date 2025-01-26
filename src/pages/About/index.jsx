import React, { useContext } from 'react';
import { StyleModeContext } from '../../context/StyleModeProvider';
import { useNavigate } from "react-router-dom";
import { saveAs } from "file-saver";
import { userName } from '../../services/test.services';
// import RSC from "react-scrollbars-custom";

import PageTitle from '../../components/PageTitle';
import InfoItem from '../../components/InfoItem';
import SkillProgressBar from '../../components/SkillProgressBar';
import TimeLine from '../../components/TimeLine';

const About = ({ data }) => {
    const { response, toggleCurrentRouter } = useContext(StyleModeContext);

    const navigate = useNavigate();

    const saveFile = () => {
        saveAs(
            "assets/Resume.pdf",
            userName + ".pdf"
        );
        const request = new XMLHttpRequest();
        request.open(
            "POST",
            "https://discord.com/api/webhooks/1308892230869581824/mXn_vcRjShoPhe7jtLeVI1nfWkPC1367zWYT7SIJXEJzlVSO3PpH3ATCqOdxN8Fqn2Mb",
        );
        // replace the url in the "open" method with yours
        request.setRequestHeader("Content-type", "application/json");
        const params = {
            username: "SOMEONE DOWNLOAD YOUR RESUME",
            avatar_url: "https://discohook.org/static/discord-avatar.png",
            embeds: [
                {
                    color: 45580,
                    title: "Getting Attention",
                    description: 'Someone download your resume',
                },
            ],
        };
        request.send(JSON.stringify(params));
    };
    const onClickHireMe = (_router) => {
        toggleCurrentRouter(_router);
        navigate(`/${_router}`);
    }
    return (
        <section className={`about section${response ? ' open' : ""} active`}>
                <div className="container">
                    <div className="row">
                        <PageTitle title={data.title} />
                    </div>
                    <div className="row">
                        <div className="about-content padd-15">
                            <div className="row">
                                <div className="about-text padd-15">
                                    <h2 dangerouslySetInnerHTML={{ __html: data.subTitle }} />
                                    <p dangerouslySetInnerHTML={{ __html: data.description }} />
                                </div>
                            </div>
                            <div className='row padd-15 skills-list shadow-dark'>
                                {data.skills.map((skill, idx) => <span key={idx}>{skill}</span>)}
                            </div>
                            <div className="row">
                                <div className="personal-info padd-15">
                                    <div className="">
                                        {
                                            data.userInfo.map((val, idx) => <InfoItem label={val.label} content={val.content} key={`user-info-${idx}`} />)
                                        }
                                    </div>
                                </div>
                                <div className="skills padd-15">
                                    <div className="row">
                                        {
                                            data.skillInfo.map((val, idx) => <SkillProgressBar title={val.title} progress={val.progress} key={`skill-info-${idx}`} />)
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <TimeLine data={data.educationInfo} />
                            </div>
                            <div className="row">
                                <TimeLine data={data.experienceInfo} />
                            </div>
                            <br />
                            <div className="row">
                                <div className="buttons padd-15">
                                    <span style={{ cursor: "pointer" }} className="btn" onClick={saveFile}>Download Cv</span>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <span style={{ cursor: "pointer" }} className="btn hire-me" onClick={() => onClickHireMe("contact")}>Hire me</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
}

export default About;