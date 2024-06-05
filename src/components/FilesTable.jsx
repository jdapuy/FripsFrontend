import React, { useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
const FilesTable = ({ type, resources, setDeletedSource }) => {
  const handleDelete = async (publicId, type) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const serverUrl =
      import.meta.env.VITE_SERVER_URL || "http://localhost:3001";
    try {
      await axios.delete(`${serverUrl}/api/cloud`, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
        data: { publicId, type },
      });
      setDeletedSource(publicId.slice(2));
      toast.success(`Archivo ${publicId.slice(2)} eliminado`);
    } catch (error) {
      console.error("Error deleting resource:", error);
      toast.error(`Error deleting resource!`);
    }
  };

  const handleDownload = async (url, filename) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = filename;
      link.click();
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };
  return (
    <div className="  p-6">
      <h1 className="text-3xl font-bold mb-6 text-white">Tipo {type}</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-gray-100  ">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Tipo</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {resources?.map((resource) => (
              <tr key={resource.public_id} className="border-b">
                <td className="px-4 py-2">{resource.public_id.slice(2)}</td>
                <td className="px-4 py-2">{resource.resource_type}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() =>
                      handleDownload(resource.secure_url, resource.public_id)
                    }
                    className="mr-2 inline-flex items-center px-3 py-1 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition duration-300"
                  >
                    Descargar
                  </button>
                  <button
                    onClick={() =>
                      handleDelete(resource.public_id, resource.resource_type)
                    }
                    className="inline-flex items-center px-3 py-1 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md transition duration-300"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FilesTable;
