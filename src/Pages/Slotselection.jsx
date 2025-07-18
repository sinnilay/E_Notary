import React, { useState } from "react";
import { format, isBefore, startOfToday } from "date-fns";
import Loginlayout from "../Layouts/loginLayout";

export default function SlotSelection() {
  const today = startOfToday();
  const [selectedDate, setSelectedDate] = useState(format(today, "yyyy-MM-dd"));
  const [selectedTime, setSelectedTime] = useState("");

  function onContinue(){
    if(!selectedDate || !selectedTime){
        alert("Time or date should not be empty..")
    }
  }
  const timeSlots = [
    "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM",
    "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",
  ];

  const handleDateChange = (e) => {
    const chosenDate = e.target.value;
    if (!isBefore(new Date(chosenDate), today)) {
      setSelectedDate(chosenDate);
    }
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  return (
    <Loginlayout>
      <div className="min-h-screen w-full flex  justify-center bg-white p-4">
        <div className="bg-white w-full md:max-w-4xl rounded-none md:rounded-3xl shadow-xl px-6 h-[88vh]  md:h-[88vh] flex flex-col py-6 overflow-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-indigo-700 mb-6">
            Slot Selection
          </h2>

          {/* Date Picker */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">
              Select a Date:
            </label>
            <input
              type="date"
              min={format(today, "yyyy-MM-dd")}
              value={selectedDate}
              onChange={handleDateChange}
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Time Picker */}
          <div>
            <h3 className="text-gray-700 font-semibold mb-2 text-sm md:text-base">
              Select Time:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {timeSlots.map((time, idx) => (
                <button
                  key={idx}
                  onClick={() => handleTimeClick(time)}
                  className={`rounded-xl px-4 py-2 text-sm font-medium border 
                    ${
                      selectedTime === time
                        ? "bg-pink-500 text-white"
                        : "bg-gray-100 hover:bg-indigo-100"
                    }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Info */}
          <div className="mt-6 text-center text-sm text-gray-600">
            {selectedDate && selectedTime && (
              <>
                You selected <b>{selectedDate}</b> at <b>{selectedTime}</b>
              </>
            )}
          </div>
          <br />
           <p className="ml-1  text-sm md:text-center text-gray-500">Please select your preffered date and time get cannected by a notarizer  and  , you are aggering to thespan <br /> <span className="hidden md:block"> <span className="text-blue-600"> General Terms</span> For information on our privacy and data use practices please see <span className="text-blue-600">our policy</span> </span></p>
           <button onClick={onContinue}  type="submit" className=" absolute bottom-0 left-16 md:left-145 w-[75%] sm:w-[40%] bg-blue-600 text-white py-3 rounded-md text-lg hover:bg-blue-700 cursor-pointer">
          Continue
        </button>
        </div>
      </div>
    </Loginlayout>
  );
}
