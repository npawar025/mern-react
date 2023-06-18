import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import Coach from "./Coach/Coach";


const BookNow = () => {
  const [seats, setSeats] = useState(Array(80).fill({ isReserved: false }));


  
  return (
    <div>
      <Row className="mt-3" gutter={[30, 30]}>
        <Col lg={12} xs={24} sm={24}>
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl primary-text">Train Number</h1>
            <h1 className="text-md">From: Pune - To: Solapur</h1>
            <hr />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-lg">
              <b>Train Capacity</b> : 80
            </h1>
            <h1 className="text-lg">
              <b>Seats Left</b> : 80
            </h1>
          </div>
          <div>
            <label for="numberOfSeats" className="text-lg">
              Number of Seats:
            </label>
            <input type="number" id="numberOfSeats" name="numberOfSeats" />
          </div>
          <div>
            <button className="btn btn-primary">Book Now</button>
          </div>
          <hr />
        </Col>
        <Col lg={12} xs={24} sm={24}>
          <Coach seats={seats} />
        </Col>
      </Row>
    </div>
  );
};

export default BookNow;
