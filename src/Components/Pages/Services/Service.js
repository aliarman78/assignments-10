import {
    Button
} from "react-bootstrap";
import React from "react";
import {
    Card,
    Col
} from "react-bootstrap";
import {
    useNavigate
} from "react-router-dom";


const Service = ({
    service
}) => {
    const navigate = useNavigate()
    const {
        name,
        description,
        price,
        img,
        id
    } = service;
    return (<div >
        <Col >
            <Card className="border-0 shadow rounded" >
                <Card.Img height={
                    300
                }
                    variant="top"
                    src={
                        img
                    }
                /> <Card.Body >
                    <Card.Title > {
                        name
                    } </Card.Title> <Card.Text > {
                        description.slice(0, 100)
                    } </Card.Text> <Card.Text >
                        Price: $ {
                            price
                        } </Card.Text> <Card.Text >
                        <Button onClick={
                            () => navigate(`/service-detail/${id}`)
                        }
                            className="w-100"
                            variant="outline-primary"> Buy Now </Button> </Card.Text> </Card.Body> </Card> </Col> </div>
    );
};

export default Service;