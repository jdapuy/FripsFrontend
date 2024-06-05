import React, { useState } from "react";
import ItineraryMenu from "./ItineraryMenu";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Autocomplete from "react-google-autocomplete";

const PlanForm = () => {
  const { groupId, itineraryId } = useParams();
  const navigateTo = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const apiKey = import.meta.env.VITE_MAPS_API_KEY;
  const [formData, setFormData] = useState({
    nombreLugar: "",
    descripcion: "",
    horaLlegada: "",
    horaSalida: "",
    puntoPartida: "",
    motivo: "",
    ubicacion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePlaceSelected = (place, fieldName) => {
    const location = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: JSON.stringify(location),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serverUrl =
      import.meta.env.VITE_SERVER_URL || "http://localhost:3001";

    try {
      const response = await axios.post(
        `${serverUrl}/api/plan`,
        {
          ...formData,
          itinerarioId: itineraryId,
          userId: user.userId,
        },
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );
      navigateTo(`/group/${groupId}/itinerary/${itineraryId}/plan`); // Redirige después de guardar el plan
    } catch (error) {
      console.error("Error creating plan:", error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-600 to-purple-600">
      <ItineraryMenu />

      <h1 className="m-10 text-3xl font-bold text-white">Nuevo Plan</h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md space-y-4"
      >
        <div>
          <label className="block text-gray-700">Nombre del Lugar</label>
          <input
            type="text"
            name="nombreLugar"
            value={formData.nombreLugar}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Ubicación</label>
          <Autocomplete
            className="w-full mt-2 p-2 border rounded"
            apiKey={apiKey}
            options={{ fields: ["geometry.location"] }}
            onPlaceSelected={(place) => handlePlaceSelected(place, "ubicacion")}
          />
        </div>
        <div>
          <label className="block text-gray-700">Descripción</label>
          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700">Hora de Llegada</label>
          <input
            type="time"
            name="horaLlegada"
            value={formData.horaLlegada}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Hora de Salida</label>
          <input
            type="time"
            name="horaSalida"
            value={formData.horaSalida}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Punto de Partida</label>
          <Autocomplete
            className="w-full mt-2 p-2 border rounded"
            apiKey={apiKey}
            options={{ fields: ["geometry.location"] }}
            onPlaceSelected={(place) =>
              handlePlaceSelected(place, "puntoPartida")
            }
          />
        </div>
        <div>
          <label className="block text-gray-700">Motivo</label>
          <input
            type="text"
            name="motivo"
            value={formData.motivo}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full mt-4 p-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded"
        >
          Guardar Plan
        </button>
      </form>
    </div>
  );
};

export default PlanForm;
