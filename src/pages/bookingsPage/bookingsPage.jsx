import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementRoomsCount,
  incrementRoomsCount,
  setBookingDetails,
} from "../../redux/roomSlice";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { FaCirclePlus, FaIndianRupeeSign } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function BooksPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const roomsCount = useSelector((state) => state.room.roomsCount);
  const checkIn = useSelector((state) => state.booking.checkIn);
  const checkOut = useSelector((state) => state.booking.checkOut);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Local state for handling date input
  const [localCheckIn, setLocalCheckIn] = useState(checkIn || "");
  const [localCheckOut, setLocalCheckOut] = useState(checkOut || "");
  const [formError, setFormError] = useState(false);

  useEffect(() => {
    // Ensure Redux store is updated with the date inputs
    if (localCheckIn) {
      dispatch(setBookingDetails({ checkIn: localCheckIn }));
    }
    if (localCheckOut) {
      dispatch(setBookingDetails({ checkOut: localCheckOut }));
    }
  }, [localCheckIn, localCheckOut, dispatch]);

  function validateForm() {
    let isValid = true;
    const currentDate = new Date().toISOString().split("T")[0]; // Current date in YYYY-MM-DD format

    if (name.trim() === "") {
      console.log("Name is required.");
      isValid = false;
    }
    if (email.trim() === "") {
      console.log("Email is required.");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      console.log("Enter a valid email address.");
      isValid = false;
    }
    if (phone.trim() === "") {
      console.log("Phone number is required.");
      isValid = false;
    } else if (!/^\+?\d{10,13}$/.test(phone)) {
      console.log("Enter a valid phone number.");
      isValid = false;
    }

    // Check-in and Check-out validation
    if (!localCheckIn) {
      console.log("Check-in date is required.");
      isValid = false;
    } else if (localCheckIn < currentDate) {
      console.log("Check-in date cannot be in the past.");
      isValid = false;
    }

    if (!localCheckOut) {
      console.log("Check-out date is required.");
      isValid = false;
    } else if (localCheckOut <= localCheckIn) {
      console.log("Check-out date must be after the check-in date.");
      isValid = false;
    }

    // Room Quantity validation
    if (roomsCount <= 0) {
      console.log("Please select at least one room.");
      isValid = false;
    }

    return isValid;
  }

  const handleCliking = () => {
    if (validateForm()) {
      navigate("/payments-confirmed", {
        state: {
          name,
          email,
          phone,
          checkIn: localCheckIn,
          checkOut: localCheckOut,
          roomsCount,
        },
      });
    } else {
      setFormError(true);
    }
  };

  return (
    <div className="min-h-[550px]">
      <div className="container relative mx-auto my-8 p-5">
        <div
          style={{ backgroundColor: "#ececec" }}
          className="rounded-lg flex-col md:flex-row items-center min-h-[300px] relative"
        >
          {/* User Input Fields */}
          <div className="flex w-full gap-5 text-start md:text-left pt-3 px-3">
            <div className="w-100">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control w-full p-2 border rounded"
              />
              <span className="text-danger">
                {formError && name.trim() === ""
                  ? "Please enter your name"
                  : ""}
              </span>
            </div>
            <div className="w-100 pt-0 px-2">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control w-full border rounded"
              />
              <span className="text-danger">
                {formError && !/\S+@\S+\.\S+/.test(email)
                  ? "Please enter a valid email"
                  : ""}
              </span>
            </div>
          </div>

          <div className="flex flex-col  md:flex-row justify-between w-full gap-5 text-start md:text-left p-6">
            <div className="w-100">
              <input
                type="text"
                placeholder="+91 - Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-control p-2 w-100 border rounded"
              />
              <span className="text-danger">
                {formError && !/^\d{10}$/.test(phone)
                  ? "Please enter a valid phone number"
                  : ""}
              </span>
            </div>
            <div className="flex gap-5 w-100 md:flex-row">
              <p className="w-3/6 mt-0 text-center border rounded bg-white p-2">
                {roomsCount} Adult
              </p>
              <p className="w-3/6 mt-0 text-center border rounded bg-white p-2">
                {roomsCount * 2} Children
              </p>
            </div>
          </div>
        </div>

        {/* Responsive Positioned Container */}
        <div className="bg-white p-8 rounded-lg shadow-lg text-center mt-10 md:mt-8 md:relative md:left-20 md:w-3/4 md:translate-x-0 md:-translate-y-40 lg:absolute lg:-bottom-10 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:flex lg:justify-center lg:gap-10 lg:w-3/4 lg:max-w-4xl lg:translate-y-0">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-2 lg:grid-cols-4 text-center">
            {/* Check-In Field */}
            <div className="flex flex-col items-center">
              <h6 className="font-semibold mb-1">CHECK-IN</h6>
              <input
                type="date"
                className="border rounded-md p-2 w-full"
                value={localCheckIn}
                onChange={(e) => {
                  const newCheckIn = e.target.value;
                  setLocalCheckIn(newCheckIn);
                  dispatch(setBookingDetails({ checkIn: newCheckIn }));
                }}
              />
              <span className="text-danger">
                {formError && !localCheckIn
                  ? "Check-in date is required and should not be in the past."
                  : ""}
              </span>
            </div>

            {/* Check-Out Field */}
            <div className="flex flex-col items-center">
              <h6 className="font-semibold mb-1">CHECK-OUT</h6>
              <input
                type="date"
                className="border rounded-md p-2 w-full"
                value={localCheckOut}
                onChange={(e) => {
                  const newCheckOut = e.target.value;
                  setLocalCheckOut(newCheckOut);
                  dispatch(setBookingDetails({ checkOut: newCheckOut }));
                }}
              />
              <span className="text-danger">
                {formError && localCheckOut <= localCheckIn
                  ? "Check-out date should be after check-in date."
                  : ""}
              </span>
            </div>

            {/* Rooms Field */}
            <div className="flex flex-col items-center">
              <h6 className="font-semibold mb-1">ROOMS</h6>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => dispatch(decrementRoomsCount())}
                  className="px-0 py-1 bg-white rounded"
                  disabled={roomsCount <= 0}
                >
                  <CiCircleMinus size={25} />
                </button>
                <span>{roomsCount}</span>
                <button
                  onClick={() => dispatch(incrementRoomsCount())}
                  className="px-0 py-1 bg-white rounded"
                >
                  {roomsCount < 1 ? (
                    <CiCirclePlus size={25} />
                  ) : (
                    <FaCirclePlus size={25} />
                  )}
                </button>
              </div>
              <span className="text-danger">
                {formError && roomsCount <= 0
                  ? "Please select at least one room."
                  : ""}
              </span>
            </div>

            {/* Book Button */}
            <div className="flex flex-col items-center mt-1">
              <button
                className="bg-blue-700 flex items-center text-white py-3 px-8 rounded-lg"
                style={{
                  backgroundColor: "#206d99",
                  color: "#fff",
                  padding: "20px 30px",
                  borderRadius: "8px",
                }}
                onClick={handleCliking}
              >
                <FaIndianRupeeSign />
                <span className="font-bold">{12430 * roomsCount}</span>
              </button>
              <p>Click to pay token amount</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BooksPage;
