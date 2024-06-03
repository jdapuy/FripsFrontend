import React, { useEffect, useState } from "react";
import ItineraryMenu from "./ItineraryMenu";
import girlRunning from "../assets/images/girlRunning.png";
import map from "../assets/images/map.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import { LoadScript, DistanceMatrixService } from "@react-google-maps/api";

const KmRecorridos = () => {
  const { groupId } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));
  const apiKey = import.meta.env.VITE_MAPS_API_KEY;
  const [totalKm, setTotalKm] = useState(0);

  useEffect(() => {
    const fetchPlanes = async () => {
      if (!user || !user.accessToken) {
        console.error("Access token not found");
        return;
      }

      const serverUrl =
        import.meta.env.VITE_SERVER_URL || "http://localhost:3001";

      try {
        const response = await axios.get(
          `${serverUrl}/api/grupo/${groupId}/planes`,
          {
            headers: {
              Authorization: `Bearer ${user.accessToken}`,
            },
          }
        );
        const planes = response.data.planes;
        calculateTotalDistance(planes);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    const calculateTotalDistance = (planes) => {
      const service = new window.google.maps.DistanceMatrixService();

      let totalDistance = 0;
      const distancePromises = planes.map((plan) => {
        const puntoPartida = JSON.parse(plan.puntoPartida);
        const coordenadas = JSON.parse(plan.Lugar.coordenadas);

        return new Promise((resolve, reject) => {
          service.getDistanceMatrix(
            {
              origins: [puntoPartida],
              destinations: [coordenadas],
              travelMode: window.google.maps.TravelMode.DRIVING,
              unitSystem: window.google.maps.UnitSystem.METRIC,
            },
            (response, status) => {
              if (status === "OK") {
                const distanceText = response.rows[0].elements[0].distance.text;
                const distanceValue = parseFloat(
                  distanceText.replace(" km", "").replace(",", "")
                );
                totalDistance += distanceValue;
                resolve();
              } else {
                reject(status);
              }
            }
          );
        });
      });

      Promise.all(distancePromises)
        .then(() => {
          setTotalKm(totalDistance);
        })
        .catch((error) => {
          console.error("Error fetching distances:", error);
        });
    };

    if (window.google) {
      fetchPlanes();
    }
  }, [groupId, user]);

  return (
    <div className="h-screen flex flex-col">
      <LoadScript googleMapsApiKey={apiKey} />
      <ItineraryMenu />

      <main className="flex-1 bg-blue-300 flex flex-col md:flex-row justify-around items-center">
        <aside className="flex justify-center">
          <img src={map} alt="mapa" className="w-2/4 h-2/4 mt-20 m-16" />
        </aside>
        <div className="flex-1 bg-blue-300 flex flex-col justify-center items-center">
          <h1 className="text-white text-4xl font-bold mb-5">
            Kilómetros Recorridos:
          </h1>
          <div className="bg-white text-blue-300 text-6xl font-bold p-10 rounded-lg shadow-lg">
            {totalKm / 10} km
          </div>
        </div>
        <aside className="flex justify-center">
          <img
            src={girlRunning}
            alt="mujer corriendo"
            className="w-2/4 h-2/4 mt-20 m-16"
          />
        </aside>
      </main>
    </div>
  );
};

export default KmRecorridos;
