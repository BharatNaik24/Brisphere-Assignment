import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementRoomsCount,
  incrementRoomsCount,
} from "../../redux/roomSlice";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { FaCirclePlus, FaIndianRupeeSign } from "react-icons/fa6";

function BooksPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const roomsCount = useSelector((state) => state.room.roomsCount);
  const checkIn = useSelector((state) => state.booking.checkIn);
  const checkOut = useSelector((state) => state.booking.checkOut);
  const dispatch = useDispatch();

  return (
    <div className="min-h-[550px]">
      <div className="container relative mx-auto my-8 p-5">
        <div
          style={{ backgroundColor: "#ececec" }}
          className="rounded-lg flex-col md:flex-row items-center min-h-[300px] relative"
        >
          {/* User Input Fields */}
          <div className="flex w-full gap-5 text-start md:text-left p-6">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control w-full p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control w-full p-2 border rounded"
            />
          </div>

          <div className="flex m-0 pt-0 justify-between w-full gap-5 text-start md:text-left p-6">
            <div className="w-100">
              <input
                type="text"
                placeholder="+91 - Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-control p-2 w-100 border rounded"
              />
            </div>
            <div className="flex gap-5 flex-col w-100 md:flex-row">
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
        <div className="bg-white p-8 rounded-lg shadow-lg text-center mt-10 md:mt-8 md:relative md:left-20 md:w-3/4 md:translate-x-0 md:-translate-y-40 lg:absolute lg:-bottom-10 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:flex lg:justify-center lg:gap-10 lg:w-3/4 lg:max-w-4xl lg:translate-y-0 ">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-2 lg:grid-cols-4 text-center">
            {/* Check-In Field */}
            <div className="flex flex-col items-center">
              <h6 className="font-semibold mb-1">CHECK-IN</h6>
              <input
                type="date"
                className="border rounded-md p-2 w-full"
                value={checkIn}
              />
            </div>

            {/* Check-Out Field */}
            <div className="flex flex-col items-center">
              <h6 className="font-semibold mb-1">CHECK-OUT</h6>
              <input
                type="date"
                className="border rounded-md p-2 w-full"
                value={checkOut}
              />
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
