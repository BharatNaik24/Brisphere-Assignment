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
          className="rounded-lg md:flex-row items-center min-h-[300px] relative"
        >
          <div className="flex w-100 gap-5 text-start md:text-left p-6">
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
          <div className="flex w-100 gap-5 text-start md:text-left p-6 ">
            <input
              type="text"
              placeholder="+91 - Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control w-full h-25 p-2 border rounded"
            />
            <p className="w-3/6 mt-0 text-center border rounded bg-white p-2">
              {roomsCount} Adult
            </p>
            <p className="w-3/6 mt-0 text-center border rounded bg-white p-2">
              {roomsCount * 2} Children
            </p>
          </div>
        </div>

        <div className="absolute bg-white -bottom-20 left-1/2 transform -translate-x-1/2 flex justify-center flex-col md:flex-row gap-10 p-6 rounded-lg shadow-lg w-3/4 max-w-4xl text-center">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-2 lg:grid-cols-4 text-center">
            {/* CHECK-IN Field */}
            <div className="flex flex-col items-center">
              <h6 className="font-semibold mb-1">CHECK-IN</h6>
              <input
                type="date"
                className="border rounded-md p-2 w-full"
                value={checkIn}
              />
            </div>

            {/* CHECK-OUT Field */}
            <div className="flex flex-col items-center">
              <h6 className="font-semibold mb-1">CHECK-OUT</h6>
              <input
                type="date"
                className="border rounded-md p-2 w-full"
                value={checkOut}
              />
            </div>

            {/* ROOMS Field */}
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

            {/* BOOK Button */}
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
                <FaIndianRupeeSign />{" "}
                <span className="font-bold">{12430 * roomsCount}</span>
              </button>
              <p className="">Click to pay token amount</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BooksPage;
