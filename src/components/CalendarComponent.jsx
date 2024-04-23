import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useParams } from "react-router-dom";
import "./CSS/Calendar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ItineraryMenu from "./ItineraryMenu";
const localizer = momentLocalizer(moment);
const events = [
  {
    start: moment().toDate(),
    end: moment().add(1, "days").toDate(),
    title: "Plan #1",
    // Agrega cualquier otra propiedad necesaria para tus eventos
  },
];

const CalendarComponent = () => {
  const { groupId } = useParams();
  return (
    <div>
      <ItineraryMenu />
      <div className="Calendary pt-10 px-20">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    </div>
  );
};

export default CalendarComponent;
