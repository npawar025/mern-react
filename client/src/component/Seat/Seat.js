import React from "react";
import "./seat.css";

const Seat = ({ id, isReserved, onClick }) => {
  return (
    <div
      className={`seat ${isReserved ? "reserved" : ""}`}
      onClick={() => onClick(id)}
    >
      {id}
    </div>
  );
};

export default Seat;
