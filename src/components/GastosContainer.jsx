import React from "react";
import ItineraryMenu from "./ItineraryMenu";
import { Link, useParams } from "react-router-dom";

const GastosContainer = () => {
  const { groupId, itineraryId, planId } = useParams();
  return (
    <div>
      <ItineraryMenu />
      <h1 className="m-10 text-3xl font-bold">Gastos</h1>
      <div className="flex justify-center px-4 mb-4">
        <Link
          to={`/group/${groupId}/plan/${planId}/gastoForm`}
          className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md"
        >
          + Agregar Gasto
        </Link>
      </div>
    </div>
  );
};

export default GastosContainer;
