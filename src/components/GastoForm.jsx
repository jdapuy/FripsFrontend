import React, { useState } from "react";
import ItineraryMenu from "./ItineraryMenu";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const GastoForm = () => {
  const { groupId, itineraryId, planId } = useParams();
  const navigateTo = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState({
    monto: "",
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

    console.log(
      planId,
      parseInt(formData.monto, 10),
      formData.motivo,
      user?.userId
    );
    try {
      const response = await axios.post(
        `${serverUrl}/api/gasto`,
        {
          planId,
          monto: parseInt(formData.monto, 10),
          motivo: formData.motivo,
          userId: user?.userId,
        },
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );
      console.log(response.data);
      navigateTo(`/group/${groupId}/itinerary/${itineraryId}/plan`); // Redirige después de guardar el gasto
    } catch (error) {
      console.error("Error creating gasto:", error);
    }
  };

  return (
    <div>
      <ItineraryMenu />
      <h1 className="m-10 text-3xl font-bold">Nuevo Gasto</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md space-y-4"
      >
        <div>
          <label className="block text-gray-700">Monto</label>
          <input
            type="number"
            name="monto"
            value={formData.monto}
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
          Guardar Gasto
        </button>
      </form>
    </div>
  );
};

export default GastoForm;
