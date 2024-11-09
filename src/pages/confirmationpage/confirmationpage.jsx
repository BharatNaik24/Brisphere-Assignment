// src/pages/ConfirmationPage.js or src/pages/PaymentsConfirmed.js

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ConfirmationPage() {
  const bookingDetails = useSelector((state) => state.booking);

  // If needed, you can use navigate for redirection or other purposes
  const navigate = useNavigate();

  // Handle actions like going back or confirming payment
  const handleConfirmPayment = () => {
    navigate("/"); // or any other page you want to navigate to after confirmation
  };

  return <div className="container"></div>;
}

export default ConfirmationPage;
{
  /* <h1>Booking Confirmation</h1>
      <div>
        <p>
          <strong>Name:</strong> {bookingDetails.name}
        </p>
        <p>
          <strong>Email:</strong> {bookingDetails.email}
        </p>
        <p>
          <strong>Phone:</strong> {bookingDetails.phone}
        </p>
        <p>
          <strong>Check-In:</strong> {bookingDetails.checkIn}
        </p>
        <p>
          <strong>Check-Out:</strong> {bookingDetails.checkOut}
        </p>
        <p>
          <strong>Rooms:</strong> {bookingDetails.roomsCount}
        </p>
      </div>

      <button onClick={handleConfirmPayment}>Confirm Payment</button> */
}
