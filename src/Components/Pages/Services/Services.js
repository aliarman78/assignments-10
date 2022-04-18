import React, {
    useEffect,
    useState
} from 'react';
import {
    Row
} from 'react-bootstrap';
import Service from './Service';

const Services = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (<div id='services'
        className='my-5' >
        <h2 style={{ color: '#699403' }} className='text-center my-5 fw-bold' > Our Food Services < br /> ____ </h2> <div className='container' >
            <Row xs={
                1
            }
                md={
                    3
                }
                className="g-4" > {
                    service.map(service => <Service key={
                        service.id
                    }
                        service={
                            service
                        } > </Service>)
                } </Row> </div> </div>
    );
};

export default Services;