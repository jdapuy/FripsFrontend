import React, { useEffect, useState } from "react";
import ItineraryMenu from "./ItineraryMenu";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const PlansContainer = () => {
  const { groupId, itineraryId } = useParams();
  const [deletedPlanes, setDeletedPlanes] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const [planes, setPlanes] = useState([]);
  const navigateTo = useNavigate();

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
      } catch (error) {
        console.error("Error fetching planes:", error);
      }
    };

    fetchPlanes();
  }, [itineraryId, deletedPlanes]);

  const handleExpense = (planId) => {
    navigateTo(
      `/group/${groupId}/itinerary/${itineraryId}/plan/${planId}/gastoForm`
    );
  };

  const handleDelete = async (planId) => {
    try {
      const serverUrl =
        import.meta.env.VITE_SERVER_URL || "http://localhost:3001";

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

  const handleDeleteGasto = async (gastoId) => {
    try {
      const serverUrl =
        import.meta.env.VITE_SERVER_URL || "http://localhost:3001";

      await axios.delete(`${serverUrl}/api/gasto/${gastoId}`, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      setDeletedPlanes((prevDeletedPlanes) => [...prevDeletedPlanes, gastoId]);
    } catch (error) {
      console.error("Error deleting gasto:", error);
    }
  };
  const getPersonalExpense = (plan) => {
    const userExpense = plan?.Gastos?.find(
      (gasto) => gasto.userId === user.userId
    );
    return userExpense ? userExpense.monto : 0;
  };

  const getTotalExpenses = (plan) => {
    return plan?.Gastos?.reduce((total, gasto) => total + gasto.monto, 0) || 0;
  };

  return (
    <div>
      <ItineraryMenu />
      <h1 className="m-10 text-3xl font-bold">Planes</h1>
      <div className="flex justify-center px-4 mb-4">
        <Link
          to={`/group/${groupId}/itinerary/${itineraryId}/planForm`}
          className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md"
        >
          + Nuevo Plan
        </Link>
      </div>
      <main className="p-8 flex flex-col mx-auto align-middle md:w-1/4 justify-center space-y-4">
        {planes?.Plans?.length > 0 ? (
          planes.Plans.map((plan, index) => (
            <div
              key={index}
              className="shadow-lg w-auto rounded-lg p-4 flex flex-col items-center justify-center gap-2"
            >
              <div className="flex flex-row justify-center gap-4">
                {plan?.Gastos?.some((gasto) => gasto.userId === user.userId) ? (
                  <div className="flex flex-row gap-4">
                    <button
                      disabled={true}
                      onClick={() => handleExpense(plan.planId)}
                      className="m-4 bg-gray-500 hover:bg-gray-600 text-xl text-white rounded-full p-2"
                    >
                      💸
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-row gap-4">
                    <button
                      disabled={false}
                      onClick={() => handleExpense(plan.planId)}
                      className="m-4 bg-blue-500 hover:bg-blue-600 text-xl text-white rounded-full p-2"
                    >
                      💸
                    </button>
                  </div>
                )}
                <div className="flex flex-col">
                  <h2 className="text-xl font-semibold">{plan.nombreLugar}</h2>
                  <p className="text-gray-600">{plan.descripcion}</p>
                </div>
                <div className="flex flex-col justify-end align-bottom">
                  <button
                    onClick={() => handleDelete(plan.planId)}
                    className="m-4 p-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-2"
                  >
                    X
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-semibold">Gastos</h3>
              <div className="flex  flex-col  justify-center align-middle items-center">
                <div className="flex gap-2 flex-row">
                  <h3>Total: </h3>
                  <p className="text-gray-600">₡{getTotalExpenses(plan)}</p>
                </div>
                <div className="flex gap-2 flex-row items-center">
                  <h3>Personales:</h3>
                  <p className="text-gray-600">₡{getPersonalExpense(plan)}</p>
                  {plan?.Gastos?.find(
                    (gasto) => gasto.userId === user.userId
                  ) ? (
                    <button
                      onClick={() => {
                        const personalGasto = plan?.Gastos?.find(
                          (gasto) => gasto.userId === user.userId
                        );
                        handleDeleteGasto(personalGasto?.gastoId);
                      }}
                      className="bg-red-500 hover:bg-red-600 text-white rounded-full text-xs"
                    >
                      X
                    </button>
                  ) : null}
                </div>
              </div>
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
