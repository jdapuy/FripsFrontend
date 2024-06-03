import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ItineraryMenu from "./ItineraryMenu";

const ItinerariesContainer = () => {
  const { groupId } = useParams();
  const [itineraries, setItineraries] = useState([]);
  const [expenses, setExpenses] = useState({});
  const user = JSON.parse(localStorage.getItem("user"));
  const [deletedItineraries, setDeletedItineraries] = useState([]);
  const navigateTo = useNavigate();

  // Traer itinerarios
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

        // Fetch expenses for each itinerary
        response.data.itinerarios.Itinerarios.forEach((itinerary) => {
          fetchExpenses(itinerary.itinerarioId);
        });
      } catch (error) {
        console.error("Error fetching itineraries:", error);
      }
    };

    fetchItineraries();
  }, [deletedItineraries]);

  const fetchExpenses = async (itinerarioId) => {
    const serverUrl =
      import.meta.env.VITE_SERVER_URL || "http://localhost:3001";
    if (!user || !user.accessToken) {
      console.error("Access token not found");
      return;
    }

    try {
      const responseGastosPersonales = await axios.get(
        `${serverUrl}/api/gasto/itinerario/${itinerarioId}/user/${user.userId}`,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );

      const responseGastos = await axios.get(
        `${serverUrl}/api/gasto/itinerario/${itinerarioId}`,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );

      setExpenses((prevExpenses) => ({
        ...prevExpenses,
        [itinerarioId]: {
          gastosPersonales: responseGastosPersonales?.data || [],
          gastos: responseGastos?.data || [],
        },
      }));
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  const handleDelete = async (itineraryId) => {
    console.log(itineraryId);
    try {
      const serverUrl =
        import.meta.env.VITE_SERVER_URL || "http://localhost:3001";

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
      console.error("Error deleting itinerary:", error);
    }
  };

  const handlePlan = async (itineraryId) => {
    navigateTo(`/group/${groupId}/itinerary/${itineraryId}/plan`);
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
      <main className="p-8 flex flex-row md:flex-col mx-auto align-middle w-2/4 justify-center space-y-4">
        {itineraries.length > 0 ? (
          itineraries.map((itinerary) => (
            <div
              key={itinerary.itinerarioId}
              className="shadow-lg  rounded-lg p-4 flex flex-col items-center justify-center gap-2"
            >
              <div className="flex flex-row gap-4">
                <div className="flex flex-row gap-4">
                  <button
                    onClick={() => handlePlan(itinerary.itinerarioId)}
                    className="bg-blue-500 hover:bg-blue-600 text-2xl text-white rounded-full p-2"
                  >
                    📋
                  </button>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold">{itinerary.nombre}</h3>
                  <p className="text-gray-600">{formatDate(itinerary.fecha)}</p>
                </div>
                <div className="flex flex-col justify-end align-bottom">
                  <button
                    onClick={() => handleDelete(itinerary.itinerarioId)}
                    className="bg-red-500 hover:bg-red-600 text-white rounded-full p-2"
                  >
                    X
                  </button>
                </div>
              </div>

              <h3 className="text-xl font-semibold">Gastos</h3>
              <div className="flex gap-12 flex-row">
                <div className="flex gap-2 flex-col">
                  <h3 className="text-l font-semibold">Total</h3>
                  <p className="text-gray-600">
                    ₡{expenses[itinerary.itinerarioId]?.gastos?.totalGastos}
                  </p>
                </div>
                <div className="flex gap-2 flex-col">
                  <h3 className="text-l font-semibold">Personales</h3>
                  <p className="text-gray-600">
                    ₡
                    {
                      expenses[itinerary.itinerarioId]?.gastosPersonales
                        ?.totalGastos
                    }
                  </p>
                </div>
              </div>
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
