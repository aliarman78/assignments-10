import React from "react";
import {
    Col,
    Row
} from "react-bootstrap";
import bannerImg from "../../../img/bannerImg.png";
import "./Banner.css";

const Banner = () => {
    return (< div className="container mx-auto" >
        < Row className="d-flex align-items-center" >
            < Col lg={
                6
            }
                sm={
                    12
                } >
                <h4 className="text-uppercase fw-bold "> Welcome to <span style={{ color: '#699403' }}>Home Food</span></h4>

                <p> We are provide three types of food those food are really good for health also we are providing cheap prices food but the food quality was really good. I hope you like our food services. Also, We are always trying to give our best services.</p>
                <button className="btns"> Food</button> </Col> < Col lg={
                    6
                }
                    sm={
                        12
                    } >
                < img className="img-fluid"
                    src={
                        bannerImg
                    }
                    alt="" />
            </Col> </Row> </div>
    );
};

export default Banner;