import React, { useContext } from 'react';
import { StyleModeContext } from '../../context/StyleModeProvider';

const Home = ({ data }) => {
  const { response } = useContext(StyleModeContext);

  return (
    <section className={`home section${response ? ' open' : ""} active`}>
        <div className="container">
          <div className="intro">
            <img src={data.photoUrl} alt="profile" className="shadow-dark" />
            <h1>{data.userName}</h1>
            <div className="social-links">
              {data.linkBtn.map((val, idx) => (
                <a key={idx} href={val.href} target="_blank" rel="noopener noreferrer">
                  <i className={val.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
};

export default Home;
