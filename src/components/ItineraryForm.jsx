import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ItineraryMenu from "./ItineraryMenu";
import toast, { Toaster } from "react-hot-toast";
const ItineraryForm = () => {
  const navigateTo = useNavigate();
  const { groupId } = useParams();
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null; // Parseamos el usuario desde localStorage si existe
  const [itinerary, setItinerary] = useState({
    name: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItinerary({ ...itinerary, [name]: value });
    console.log(user?.userId);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      console.error("No user found in localStorage");
      return; // Detenemos la ejecución si no hay usuario
    }

    const serverUrl =
      import.meta.env.VITE_SERVER_URL || "http://localhost:3001";
    const itineraryData = {
      nombre: itinerary.name,
      grupoId: groupId,
      fecha: itinerary.date,
      userId: user.userId,
    };

    try {
      const response = await axios.post(
        `${serverUrl}/api/itinerario/`,
        itineraryData,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );
      console.log("Itinerario creado:", response.data);
      toast.success(`Itinerario creado!!`);
      setTimeout(() => {
        navigateTo(`/group/${groupId}`);
      }, 2500);
      // Manejar la respuesta o redirigir según sea necesario
    } catch (error) {
      toast.error(`Lo siento ha sucedido un error`);
      console.error("Error al crear el itinerario:", error);
      // Manejar el error según sea necesario
    }
  };

  return (
    <div>
      <Toaster />
      <ItineraryMenu />
      <div className="flex items-center justify-center h-full">
        <div className="w-full max-w-md bg-white rounded-lg shadow-2xl border-gray-300 border p-8 mt-20">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="itinerary-name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre del itinerario:
              </label>
              <input
                type="text"
                id="itinerary-name"
                name="name"
                value={itinerary.name}
                onChange={handleInputChange}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              />
            </div>

            <div>
              <label
                htmlFor="itinerary-date"
                className="block text-sm font-medium text-gray-700"
              >
                Fecha del itinerario:
              </label>
              <input
                type="date"
                id="itinerary-date"
                name="date"
                value={itinerary.date}
                onChange={handleInputChange}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700"
              >
                Crear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ItineraryForm;
