import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ItineraryMenu from "./ItineraryMenu";

const ItinerariesContainer = () => {
  const { groupId } = useParams();
  const [itineraries, setItineraries] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const [deletedItineraries, setDeletedItineraries] = useState([]);
  const navigateTo = useNavigate();
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

  const handlePlan = async (itineraryId) => {
    navigateTo(`/group/${groupId}/plan/itinerary/${itineraryId}`);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Los meses empiezan desde 0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  return (
    <div className="pt-8 flex flex-col h-screen">
      <h1 className="m-10">Itinerarios</h1>
      <div className="flex justify-center px-4 mb-4">
        <Link
          to={`/group/${groupId}/itineraryForm`}
          className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md"
        >
          + Nuevo Itinerario
        </Link>
      </div>
      <main className="p-8  flex flex-row md:flex-col mx-auto align-middle w-2/4 justify-center space-y-4">
        {itineraries.length > 0 ? (
          itineraries.map((itinerary) => (
            <div
              key={itinerary.itinerarioId}
              className=" shadow-lg bg-gray-300 rounded-lg p-4 flex flex-row items-center justify-center gap-2"
            >
              <div>
                <h3 className="text-xl font-semibold">{itinerary.nombre}</h3>
                <p className="text-gray-600">{formatDate(itinerary.fecha)}</p>
              </div>
              <button
                onClick={() => handlePlan(itinerary.itinerarioId)}
                className="bg-blue-500 hover:bg-blue-600 text-2xl text-white rounded-full p-2"
              >
                📋
              </button>
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
