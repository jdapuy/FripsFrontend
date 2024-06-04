import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import axios from "axios";
import { useParams } from "react-router-dom";
import ItineraryMenu from "./ItineraryMenu";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const { groupId } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const serverUrl =
      import.meta.env.VITE_SERVER_URL || "http://localhost:3001";

    const fetchPlanes = async () => {
      if (!user || !user.accessToken) {
        console.error("Access token not found");
        return;
      }

      try {
        const response = await axios.get(
          `${serverUrl}/api/grupo/${groupId}/planes`,
          {
            headers: {
              Authorization: `Bearer ${user.accessToken}`,
            },
          }
        );

        const planes = response?.data?.planes || [];
        // Mapea los planes recibidos para formar los eventos
        const events = planes.map((plan) => {
          // Parsea las cadenas de tiempo en objetos moment
          const horaLlegadaMoment = moment(plan.horaLlegada, "HH:mm:ss");
          const horaSalidaMoment = moment(plan.horaSalida, "HH:mm:ss");

          return {
            start: moment(plan.fechaItinerario)
              .set({
                hour: horaLlegadaMoment.hours(),
                minute: horaLlegadaMoment.minutes(),
                second: horaLlegadaMoment.seconds(),
              })
              .toDate(), // Usa la fecha del itinerario + horaLlegada como inicio
            end: moment(plan.fechaItinerario)
              .set({
                hour: horaSalidaMoment.hours(),
                minute: horaSalidaMoment.minutes(),
                second: horaSalidaMoment.seconds(),
              })
              .toDate(), // Agrega la hora de salida al final del evento
            title: plan.nombreLugar, // Usa el nombre del lugar como título del evento
            // Agrega cualquier otra propiedad necesaria para tus eventos
          };
        });

        setEvents(events);
      } catch (error) {
        console.error("Error fetching planes:", error);
      }
    };

    fetchPlanes();
  }, [groupId]);

  return (
    <div>
      <ItineraryMenu />
      <div className="Calendary">
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
