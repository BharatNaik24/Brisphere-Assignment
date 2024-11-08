import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementRoomsCount,
  incrementRoomsCount,
} from "../../redux/roomSlice";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { FaCirclePlus } from "react-icons/fa6";

function LandingPage() {
  const dispatch = useDispatch();
  const roomCount = useSelector((state) => state.room.roomsCount);

  return (
    <div className="container relative mx-auto my-8 p-2">
      <div
        style={{
          backgroundColor: "#ececec",
        }}
        className="rounded-lg flex flex-col md:flex-row items-center min-h-[500px] relative"
      >
        {/* Text and Social Icons Section */}
        <div className="md:w-1/2 text-start md:text-left p-6">
          <h1 className="text-7xl font-normal mb-4">Work From Ladakh</h1>
          <p className="text-xl font-bold mb-6">
            India’s first true digital tourism ecosystem
          </p>
          <div className="flex justify-center md:justify-start gap-6 mb-5">
            <FaFacebook size={50} />
            <RiInstagramFill size={50} />
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 h-full">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjb13lTBfnZ0vFWzvYlAWUDW9QHpCJIYYNDiekukmHy52XI4Nr-sj_XwuJ1fyphZVb3eCzXvUSiPiAGzNbogzOOl1T83mX5hlovu6A6lAQYiOes2iRFl3jxSejVgr74RRqhjtoWjQfp9oK0/s1600/DSC_0210.JPG"
            alt="Work From Ladakh"
            className="w-full h-[500px] object-cover rounded-b-lg md:rounded-none"
          />
        </div>
      </div>

      {/* Check-In Container */}
      <div className="absolute bg-white -bottom-5 left-1/2 transform -translate-x-1/2 flex justify-center flex-col md:flex-row gap-10 p-6 rounded-lg shadow-lg w-5/6 max-w-4xl text-center">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-4 text-center">
          {/* CHECK-IN Field */}
          <div className="flex flex-col items-center">
            <h6 className="font-semibold mb-1">CHECK-IN</h6>
            <input type="date" className="border rounded-md p-2 w-full" />
          </div>

          {/* CHECK-OUT Field */}
          <div className="flex flex-col items-center">
            <h6 className="font-semibold mb-1">CHECK-OUT</h6>
            <input type="date" className="border rounded-md p-2 w-full" />
          </div>

          {/* ROOMS Field */}
          <div className="flex flex-col items-center">
            <h6 className="font-semibold mb-1">ROOMS</h6>
            <div className="flex items-center gap-3">
              <button
                onClick={() => dispatch(decrementRoomsCount())}
                className="px-0 py-1 bg-white rounded"
                disabled={roomCount <= 0}
              >
                <CiCircleMinus size={25} />
              </button>
              <span>{roomCount}</span>
              <button
                onClick={() => dispatch(incrementRoomsCount())}
                className="px-0 py-1 bg-white rounded"
              >
                {roomCount < 1 ? (
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
              className="bg-blue-700 text-white py-3 px-8 rounded-lg"
              style={{
                backgroundColor: "#206d99",
                color: "#fff",
                padding: "20px 50px",
                borderRadius: "8px",
                marginRight: "30%",
              }}
            >
              BOOK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
