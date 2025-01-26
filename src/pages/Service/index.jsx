import React, { useContext } from 'react';
import { StyleModeContext } from '../../context/StyleModeProvider';

import PageTitle from '../../components/PageTitle';
import ServiceItem from '../../components/ServiceItem';

const Service = ({ data }) => {
    const { response } = useContext(StyleModeContext);
    return (
        <section className={`service section${response ? ' open' : ""} active`}>
            <div className="container">
                <div className="row">
                    <PageTitle title={data.title} />
                </div>
                <div className="row">
                    {
                        data.info.map((val, idx) => <ServiceItem data={val} key={`info-${idx}`} />)
                    }
                </div>
            </div>
        </section>
    );
}

export default Service;