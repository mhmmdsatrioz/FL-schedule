import React from "react";
import CalendarComponent from "./Calendar";
import { Toaster } from "react-hot-toast";
const Calendars = () => {
  return (
    <div>
      <Toaster />
      <CalendarComponent />
    </div>
  );
};

export default Calendars;
