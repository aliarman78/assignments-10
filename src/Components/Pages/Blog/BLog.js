import React from 'react';
import {
    Col,
    Row
} from 'react-bootstrap';

const BLog = () => {
    return (< div className='container shadow my-5 p-5' >
        < Row xs={
            1
        }
            md={
                2
            }
            className="g-4" >
            < Col >
                <h5> 1. Why are you using firebase ? What other options do you have to implement authentication ?</h5>
                <p> Answer : As a front-end developer, learning back-end technologies is probably not your original or main goal, and it can be time consuming. However, there is something that can help called Firebase. Firebase is a software development platform that started as a realtime database. To-date it has 20 services, such as Authentication, Cloud Storage, Hosting, Cloud Functions, etc.<br />
                </p> </Col>
            < Col >
                <h5> 2. What other services does firebase provide other than authentication ? </h5> <p> Answer: </p>
                <ul>
                    <li> Cloud Firestore, </li>
                    <li> Cloud Functions, </li>
                    <li> Cloud Storage, </li>
                    <li> Google Analytics, </li>
                    <li> Cloud Messaging, </li>
                    <li> Authentication, </li>
                    <li> Hosting, </li>
                    <li> Couchbase etc. </li>
                </ul>
            </Col>
            <Col>
                <h5>3. Difference between authorization and authentication</h5>
                <p>Answer: One of the more confusing topics in Hadoop is how authorization and authentication work in the system. The first and most important thing to recognize is the subtle, yet extremely important, differentiation between authorization and authentication. Authentication is the process of determining whether someone is who they claim to be. Authorization is the function of specifying access rights to resources.</p>
            </Col>
        </Row> </div>
    );
};

export default BLog;