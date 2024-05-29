import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ItineraryMenu from "./ItineraryMenu";

const ItinerariesContainer = () => {
  const { groupId } = useParams();
  const [itineraries, setItineraries] = useState([]);
  const user = JSON.parse(localStorage.getItem("user")); // Asegúrate de que el objeto `user` esté disponible
  const [deletedItineraries, setDeletedItineraries] = useState([]);
  useEffect(() => {
    const serverUrl =
      import.meta.env.VITE_SERVER_URL || "http://localhost:3001";
    const fetchItineraries = async () => {
      if (!user || !user.accessToken) {
        console.error("Access token not found");
        return;
      }

      try {
        const response = await axios.get(
          `${serverUrl}/api/itinerario/${groupId}`,
          {
            headers: {
              Authorization: `Bearer ${user.accessToken}`,
            },
          }
        );
        setItineraries(response.data.itinerarios.Itinerarios);
        console.log(response.data.itinerarios.Itinerarios);
      } catch (error) {
        console.error("Error fetching itineraries:", error);
      }
    };

    fetchItineraries();
  }, [deletedItineraries]);

  const handleDelete = async (itineraryId) => {
    console.log(itineraryId);
    try {
      const serverUrl =
        import.meta.env.VITE_SERVER_URL || "http://localhost:3001";

      const user = JSON.parse(localStorage.getItem("user"));
      await axios.delete(`${serverUrl}/api/itinerario/${itineraryId}`, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      setDeletedItineraries((prevDeletedItineraries) => [
        ...prevDeletedItineraries,
        itineraryId,
      ]);
    } catch (error) {
      console.error("Error deleting group:", error);
    }
  };
  return (
    <div className="pt-8 flex flex-col h-screen">
      <div className="flex justify-center px-4 mb-4">
        <Link
          to={`/group/${groupId}/itineraryForm`}
          className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4 2a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm10 3a2 2 0 11-4 0 2 2 0 014 0zm-5 9a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
          Nuevo Itinerario
        </Link>
      </div>
      <main className="p-8 flex flex-col mx-auto align-middle justify-center space-y-4">
        {itineraries.length > 0 ? (
          itineraries.map((itinerary) => (
            <div
              key={itinerary.itinerarioId}
              className="bg-white shadow-md rounded-lg p-4 flex flex-row items-center justify-center gap-2"
            >
              <div>
                <h3 className="text-xl font-semibold">{itinerary.nombre}</h3>
                <p className="text-gray-600">{itinerary.fecha}</p>
              </div>
              <button
                onClick={() => handleDelete(itinerary.itinerarioId)}
                className="bg-red-500 hover:bg-red-600 text-white rounded-full p-2"
              >
                X
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No hay itinerarios disponibles.</p>
        )}
      </main>
    </div>
  );
};

export default ItinerariesContainer;
