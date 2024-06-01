import React, { useEffect, useState } from "react";
import ItineraryMenu from "./ItineraryMenu";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const PlansContainer = () => {
  const { groupId, itineraryId } = useParams();
  const [deletedPlanes, setDeletedPlanes] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const [planes, setPlanes] = useState([]);

  useEffect(() => {
    const serverUrl =
      import.meta.env.VITE_SERVER_URL || "http://localhost:3001";

    const fetchPlanes = async () => {
      if (!user || !user.accessToken) {
        console.error("Access token not found");
        return;
      }

      try {
        const response = await axios.get(
          `${serverUrl}/api/plan/${itineraryId}`,
          {
            headers: {
              Authorization: `Bearer ${user.accessToken}`,
            },
          }
        );
        setPlanes(response?.data?.planes || []);
        console.log(response.data.planes);
      } catch (error) {
        console.error("Error fetching planes:", error);
      }
    };

    fetchPlanes();
  }, [itineraryId, deletedPlanes]);

  const handleDelete = async (planId) => {
    console.log(planId);
    try {
      const serverUrl =
        import.meta.env.VITE_SERVER_URL || "http://localhost:3001";

      const user = JSON.parse(localStorage.getItem("user"));
      await axios.delete(`${serverUrl}/api/plan/${planId}`, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      setDeletedPlanes((prevDeletedPlanes) => [...prevDeletedPlanes, planId]);
    } catch (error) {
      console.error("Error deleting plan:", error);
    }
  };

  return (
    <div>
      <ItineraryMenu />
      <h1 className="m-10 text-3xl font-bold">Planes</h1>
      <div className="flex justify-center px-4 mb-4">
        <Link
          to={`/group/${groupId}/planForm/${itineraryId}`}
          className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md"
        >
          + Nuevo Plan
        </Link>
      </div>
      <main className="p-8 flex flex-col mx-auto align-middle w-2/4 justify-center space-y-4">
        {planes?.Plans?.length > 0 ? (
          planes.Plans?.map((plan, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-xl font-semibold">{plan.nombreLugar}</h2>
              <p className="text-gray-600">{plan.descripcion}</p>
              <button
                onClick={() => handleDelete(plan.planId)}
                className="bg-red-500 hover:bg-red-600 text-white rounded-full p-2"
              >
                X
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No hay planes disponibles.</p>
        )}
      </main>
    </div>
  );
};

export default PlansContainer;
