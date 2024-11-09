import { FaIndianRupeeSign } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ConfirmationPage() {
  const bookingDetails = useSelector((state) => state.booking);
  console.log(bookingDetails);

  // Debugging: Log the booking details
  console.log(bookingDetails);

  const navigate = useNavigate();

  const handleConfirmPayment = () => {
    navigate("/"); // Redirect to home or another page
  };

  return (
    <div className=" min-h-[500px]">
      <div className="container relative mx-auto my-8 p-2">
        <div
          style={{ backgroundColor: "#ececec" }}
          className="rounded-lg flex flex-col md:flex-row items-center min-h-[350px] relative"
        >
          {/* Text and Social Icons Section */}
          <div className="md:w-1/2 text-start md:text-left p-6">
            <h6 className="mb-0 font-bold">
              Name: {bookingDetails.name.toUpperCase() || "Unavailable"}
            </h6>
            <p className="m-0 font-bold">
              Email: {bookingDetails.email || "Unavailable"}
            </p>
            <p className="m-0 font-bold">
              Phone: {bookingDetails.phone || "Unavailable"}
            </p>
            <p className="m-0 font-bold">
              Accommodation: {bookingDetails.roomsCount} Adult
              <span> {bookingDetails.roomsCount * 2} Children</span>
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 h-full flex items-center">
            <img
              src="https://i.postimg.cc/qMXZ6ydN/https-www-pngguru-in-storage-uploads-images-green-check-mark-free-transparent-png-image-1717662247.png"
              alt="payments check Logo"
              className="h-40"
            />
            <div>
              <h4 className="mb-0 font-bold pr-3">Order Completed</h4>
              <p className="mb-0">Have Questions ?</p>
              <a
                href=""
                style={{
                  color: "",
                  textDecoration: "none",
                }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Check-In Container */}
        <div className="absolute bg-white -bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center flex-col md:flex-row gap-10 p-6 rounded-lg shadow-lg w-5/6 max-w-4xl text-center">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-4 text-center">
            {/* CHECK-IN Field */}
            <div className="flex flex-col items-center">
              <h6 className="font-semibold mb-1">CHECK-IN</h6>
              <p>{bookingDetails.checkIn || "Default Check-In"}</p>
            </div>

            {/* CHECK-OUT Field */}
            <div className="flex flex-col items-center">
              <h6 className="font-semibold mb-1">CHECK-OUT</h6>
              <p>{bookingDetails.checkOut || "Default Check-Out"}</p>
            </div>

            {/* ROOMS Field */}
            <div className="flex flex-col items-center">
              <h6 className="font-semibold mb-1">ROOMS</h6>
              <div className="flex items-center gap-3">
                {bookingDetails.roomsCount || "Default Rooms"}
              </div>
            </div>

            {/* BOOK Button */}
            <div className="flex flex-col items-center mt-1">
              <button
                onClick={handleConfirmPayment}
                className="bg-blue-700 text-white py-3 px-8 rounded-lg font-bold"
                style={{
                  backgroundColor: "#206d99",
                  color: "#fff",
                  padding: "20px 35px",
                  borderRadius: "8px",
                }}
              >
                <div className="flex items-center">
                  <FaIndianRupeeSign />
                  {12430 * bookingDetails.roomsCount}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPage;
