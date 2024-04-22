import React, { useState } from "react";
import ItineraryMenu from "./ItineraryMenu";

const ItineraryForm = () => {
  const [itinerary, setItinerary] = useState({
    name: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItinerary({ ...itinerary, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para enviar los datos del itinerario
    console.log("Datos del itinerario:", itinerary);
  };

  return (
    <div>
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
