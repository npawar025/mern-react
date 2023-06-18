import React from "react";
import Seat from "../Seat/Seat";
import "./coach.css";

const Coach = ({ seats, onSeatClick }) => {
  const renderSeats = () => {
    const rows = Math.ceil(seats.length / 7); // Calculate the number of rows

    let seatIndex = 0;
    const seatRows = [];

    for (let row = 0; row < rows; row++) {
      const rowSeats = [];
      const seatsInRow = row === rows - 1 ? 3 : 7; // The last row has 3 seats

      for (let i = 0; i < seatsInRow; i++) {
        const seat = seats[seatIndex];
        rowSeats.push(
          <Seat
            key={seatIndex}
            id={seatIndex + 1}
            isReserved={seat.isReserved}
            onClick={onSeatClick}
          />
        );
        seatIndex++;
      }

      seatRows.push(
        <div key={row} className="seat-row">
          {rowSeats}
        </div>
      );
    }

    return seatRows;
  };

  return (
    <div className="mx-5">
      <div className="coach-container">{renderSeats()}</div>
    </div>
  );
};

export default Coach;
