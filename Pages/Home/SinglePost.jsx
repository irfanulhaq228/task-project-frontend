import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { ImageUrl } from "../../src/URLs";

const SinglePost = ({ item }) => {
    return (
        <div className="singlePostMain">
            <div className="textStyle postHeader" style={{ paddingLeft: "0.5rem" }}>
                <img src={`${ImageUrl}/${item?.owner?.profileImage}`} className="postProfileImage" />
                <b>{item?.owner?.name}</b>
            </div>
            <hr className="singlePostLine" />
            <Carousel>
                {item?.images?.map((image) => (
                    <Carousel.Item>
                        <div style={{ textAlign: "center" }}>
                            <img src={`${ImageUrl}/${image}`} className="singlePostStyle" />
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
            <div style={{ paddingLeft: "0.5rem", marginTop: "0.5rem" }}>
                <b>{item?.heading}</b>
                <p style={{ fontSize: "0.7rem", color: "grey" }}>{item?.description}</p>
            </div>
        </div>
    )
}

export default SinglePost