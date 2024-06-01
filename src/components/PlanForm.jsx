import React, { useState } from "react";
import ItineraryMenu from "./ItineraryMenu";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const PlanForm = () => {
  const { groupId, itineraryId } = useParams();
  const navigateTo = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState({
    nombreLugar: "",
    descripcion: "",
    horaLlegada: "",
    horaSalida: "",
    puntoPartida: "",
    motivo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
      console.log(response.data);
      navigateTo(`/group/${groupId}/plan/itinerary/${itineraryId}`); // Redirige después de guardar el plan
    } catch (error) {
      console.error("Error creating plan:", error);
    }
  };

  return (
    <div>
      <ItineraryMenu />
      <h1 className="m-10 text-3xl font-bold">Nuevo Plan</h1>
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
          <input
            type="text"
            name="puntoPartida"
            value={formData.puntoPartida}
            onChange={handleChange}
            className="w-full mt-2 p-2 border rounded"
            required
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
