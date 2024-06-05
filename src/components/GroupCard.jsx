import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const GroupCard = ({ name, groupId, onDelete }) => {
  const handleDelete = async () => {
    try {
      const serverUrl =
        import.meta.env.VITE_SERVER_URL || "http://localhost:3001";

      const user = JSON.parse(localStorage.getItem("user"));
      await axios.delete(`${serverUrl}/api/grupo/${groupId}`, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      onDelete(groupId); // Llama a la función onDelete para actualizar la lista de grupos
    } catch (error) {
      console.error("Error deleting group:", error);
    }
  };

  return (
    <div className="w-[300px]  aspect-video rounded-lg shadow-lg flex flex-col items-center justify-center gap-4 bg-gradient-to-r from-blue-500 to-cyan-500 group relative transform hover:scale-105 transition duration-300">
      <button
        onClick={handleDelete}
        className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-2 hover:bg-red-700"
      >
        X
      </button>
      <Link to={`/group/${groupId}`} className="w-full">
        <div className="flex flex-col items-center p-8 rounded-md w-full sm:px-12 bg-white bg-opacity-75 text-gray-900">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold">Grupo</h2>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <p className="text-4xl">👨‍👧‍👦👨‍👩‍👧‍👦</p>
            <p className="text-lg font-semibold">{name}</p>
          </div>
        </div>
      </Link>
      <div className="flex justify-center px-4 mb-4">
        <Link
          to={`/group/${groupId}/addGuest`}
          className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md"
        >
          + Agregar invitado
        </Link>
      </div>
    </div>
  );
};

export default GroupCard;
