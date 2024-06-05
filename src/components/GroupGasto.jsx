import React, { useEffect, useState } from "react";
import axios from "axios";
import ItineraryMenu from "./ItineraryMenu";
import { useParams } from "react-router-dom";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import { format } from "date-fns"; // Asegúrate de que `date-fns` esté instalado

// Registrar todos los componentes necesarios de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const GroupGasto = () => {
  const { groupId } = useParams();
  const [itineraries, setItineraries] = useState([]);
  const [expensesByUser, setExpensesByUser] = useState({});
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [personalExpense, setPersonalExpense] = useState(0);
  const user = JSON.parse(localStorage.getItem("user"));
  const [backgroundColors, setBackgroundColors] = useState([]);
  const [itinerariesWithTotalExpense, setItinerariesWithTotalExpense] =
    useState([]);

  ////////////////////////////UseEffects///////////////////////////////////
  useEffect(() => {
    const serverUrl =
      import.meta.env.VITE_SERVER_URL || "http://localhost:3001";

    const fetchItineraries = async () => {
      if (!user || !user.accessToken) {
        console.error("Access token not found");
        return;
      }

      try {
        const response = await axios.get(
          `${serverUrl}/api/itinerario/${groupId}`,
          {
            headers: {
              Authorization: `Bearer ${user.accessToken}`,
            },
          }
        );

        setExpensesByUser(
          calculateTotalExpensesPerUserInGroup(
            response.data.itinerarios.Itinerarios
          )
        );
        setItineraries(response.data.itinerarios.Itinerarios);
      } catch (error) {
        console.error("Error fetching itineraries:", error);
      }
    };

    fetchItineraries();
  }, []);

  useEffect(() => {
    const expenses = calculateTotalExpensesPerUserInGroup(itineraries);
    setTotalExpenses(sumValues(expenses));
    const personalExpense = calculatePersonalExpense(itineraries);
    setPersonalExpense(personalExpense);

    const itinerariesWithTotalExpense = itineraries.map((itinerary) => ({
      fecha: itinerary.fecha,
      montoTotal: calculateItineraryTotalExpense(itinerary),
    }));
    setItinerariesWithTotalExpense(itinerariesWithTotalExpense);
  }, [itineraries]);

  useEffect(() => {
    const labels = Object.keys(expensesByUser);
    const backgroundColors = labels.map(() => getRandomColor());
    setBackgroundColors(backgroundColors);
  }, [expensesByUser]);

  ////////////////////////////FUNCIONES///////////////////////////////////
  const calculateTotalExpensesPerUserInGroup = (itineraries) => {
    const userExpenses = {};

    itineraries.forEach((itinerary) => {
      itinerary.Plans.forEach((plan) => {
        plan.Gastos.forEach((gasto) => {
          if (userExpenses[gasto.Usuario.nombre]) {
            userExpenses[gasto.Usuario.nombre] += gasto.monto;
          } else {
            userExpenses[gasto.Usuario.nombre] = gasto.monto;
          }
        });
      });
    });

    return userExpenses;
  };

  const calculatePersonalExpense = (itineraries) => {
    let totalPersonalExpense = 0;

    itineraries.forEach((itinerary) => {
      itinerary.Plans.forEach((plan) => {
        plan.Gastos.forEach((gasto) => {
          if (gasto.userId === user.userId) {
            totalPersonalExpense += gasto.monto;
          }
        });
      });
    });

    return totalPersonalExpense;
  };

  const sumValues = (obj) => {
    return Object.values(obj).reduce((acc, val) => acc + val, 0);
  };

  const calculateItineraryTotalExpense = (itinerary) => {
    let totalExpense = 0;

    itinerary.Plans.forEach((plan) => {
      plan.Gastos.forEach((gasto) => {
        totalExpense += gasto.monto;
      });
    });

    return totalExpense;
  };

  const getRandomColor = () => {
    return `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}, 0.5)`;
  };
  ////////////////////////////DATA DE PIE///////////////////////////////////
  const pieData = {
    labels: Object.keys(expensesByUser),
    datasets: [
      {
        label: "Gastos",
        data: Object.values(expensesByUser),
        backgroundColor: backgroundColors,
        borderColor: backgroundColors,
        borderWidth: 1,
      },
    ],
  };

  ////////////////////////////DATA DE BAR///////////////////////////////////
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
      },
    },
  };

  const barData = {
    labels: itinerariesWithTotalExpense.map((itinerary) =>
      format(new Date(itinerary.fecha), "dd/MM/yyyy")
    ),
    datasets: [
      {
        label: "Monto total",
        data: itinerariesWithTotalExpense.map(
          (itinerary) => itinerary.montoTotal
        ),
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-600 to-purple-600">
      <ItineraryMenu />
      <main className="container mx-auto mt-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6  rounded-lg shadow-md bg-gradient-to-r from-white to-purple-300">
            <h1 className="text-2xl font-bold mb-4">Gastos totales</h1>
            <p className="text-2xl text-orange-500">{totalExpenses}</p>
          </div>
          <div className="p-6  rounded-lg shadow-md bg-gradient-to-r from-white to-blue-300">
            <h1 className="text-2xl  font-bold mb-4">Mi Gasto</h1>
            <p className="text-2xl text-orange-500">{personalExpense}</p>
          </div>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8 mt-8">
          <div className="p-6  rounded-lg shadow-md  bg-gradient-to-r from-white to-purple-300">
            <h1 className="text-2xl font-bold mb-4">Integrantes</h1>
            <Pie data={pieData} />
          </div>
          <div className="p-6  rounded-lg shadow-md bg-gradient-to-r from-white to-blue-300">
            <h1 className="text-2xl font-bold mb-4">Itinerarios</h1>
            <Bar options={options} data={barData} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default GroupGasto;
