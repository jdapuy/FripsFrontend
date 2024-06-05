import React from "react";
import friendsCountry from "/src/assets/images/friendsCountry.png";
import calendar from "/src/assets/images/calendar.png";
import Amigos from "/src/assets/images/Amigos.png";
import manosHifive from "/src/assets/images/manosHifive.jpg";
import plans from "/src/assets/images/plans.png";
import Calendario from "/src/assets/images/Calendario.png";
import imagenArchivos from "/src/assets/images/imagenArchivos.png";
import moneda from "/src/assets/images/moneda.png";
import manosDinero from "/src/assets/images/manosDinero.png";
import Viajero from "/src/assets/images/Viajero.png";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600">
      {/* Frips */}
      <Toaster />
      <div className="bg-gradient-to-r from-blue-600 to-purple-600">
        {/* Hero Section */}
        <div className=" flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
          <div className="mt-24 flex flex-col items-center">
            <h1 className="text-5xl md:text-8xl font-extrabold mb-4">
              <span className="text-yellow-400">FRI</span>ENDS & TRI
              <span className="text-yellow-400">PS</span>
            </h1>
            <p className="text-xl md:text-3xl font-light max-w-2xl">
              Descubre el mundo con tus amigos, planea cada detalle y comparte
              la emoción de cada viaje.
            </p>
          </div>
          <div className="mt-10">
            <Link
              to="/signin"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              <button className="px-6 py-3 bg-yellow-400 text-blue-800 text-xl font-semibold rounded-md shadow-lg hover:bg-yellow-500 transition duration-300">
                Empezar ahora
              </button>
            </Link>
          </div>
        </div>

        {/* Organiza viajes Section */}
        <div className="py-20 px-4 md:px-16  bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
          <p className="text-3xl md:text-4xl font-bold max-w-4xl mx-auto">
            Organiza viajes con tus amigos, todo en un solo lugar, compartido
            entre todos
          </p>
        </div>
      </div>

      {/* Buscas armar un viaje con amigos? */}
      <div className="py-10 px-4 md:px-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 px-4">
            <img
              src={friendsCountry}
              alt="Friend traveling"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mt-8 md:mt-0">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              ¿Buscás armar un viaje con tus amigos?
            </h2>
            <p className="text-xl md:text-2xl text-white mb-8">
              Deja que FRIPS te ayude a mantener informados a todos tus amigos,
              que no se pierdan ni un detalle!
            </p>
          </div>
        </div>
      </div>
      {/* invita a tus amigos */}
      <div className="py-10 px-4 md:px-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 px-4 mt-8 md:mt-0">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Invita a tus amigos a formar parte del plan
            </h2>
            <p className="text-xl md:text-2xl text-white mb-8">
              Crea un grupo de viaje junto a tus amigos
            </p>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <img
              src={Amigos}
              alt="add friends"
              className="w-full h-auto mt-10"
            />
          </div>
        </div>
      </div>
      {/* Detalla los planes */}
      <div className="py-10 px-4 md:px-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 px-4 mt-8 md:mt-0">
            <img src={plans} alt="planes toDo" className="w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Detalla los planes de cada momento
            </h2>
            <p className="text-xl md:text-2xl text-white mb-8">
              Para cada itinerario que tengas, puedes detallar varios planes,
              los cambios que hagas los verán tus amigos en tiempo real
            </p>
          </div>
        </div>
      </div>

      {/* HiFive km*/}
      <div className="py-10 px-4 md:px-16  text-center bg-gradient-to-r from-blue-600 to-purple-600">
        <img
          src={Viajero}
          alt="Viajero"
          className="inline-block w-32 md:w-64 mb-4"
        />
        <p className="text-center text-7xl font-comfortaa font-bold text-gray tracking-widest">
          <span className="inline-block text-orange-500">1000 KM</span>
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Mira que lejos hemos llegado!
        </h2>
        <p className="text-xl md:text-2xl text-white mb-8">
          Según los destinos que visites, FRIPS te ayuda a calcular cuántos
          kilómetros has recorrido
        </p>
      </div>

      {/* Manten el orden con el calendario */}
      <div className="py-10  px-4 md:px-16 bg-gradient-to-r from-blue-600 to-purple-600">
        {/* Calendario */}
        <div className="mt-10 md:mt-20 flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 px-4">
            <div className="h-80 md:h-96 flex flex-col justify-center items-center ">
              <img
                src={Calendario}
                alt="Calendario"
                className="w-full h-auto object-cover"
              />
              <p className="text-4xl md:text-6xl font-comfortaa font-bold text-white">
                Mantén el orden con nuestro calendario compartido
              </p>
            </div>
          </div>
        </div>

        {/* Archivos compartidos */}
        <div className="mt-10 md:mt-20 flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="w-full md:w-1/2 px-4">
            <div className="h-80 mt-40 md:h-96 flex justify-center items-center bg-gray-300">
              <img
                src={imagenArchivos}
                alt="Archivos compartidos"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* MArchivos compartidos*/}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600">
        <h1 className="text-4xl font-bold text-white mb-4">
          Espacio de archivos compartidos
        </h1>
        <p className="text-2xl dark:text-white  text-white my-5 ">
          Disponé para cada grupo de un espacio donde tu y tus amigos puedan
          econtrar los archivos importantes del viaje
        </p>
      </div>
      {/* Registro de gasto */}
      <div className=" mt-20 md:mt-60 bg-gradient-to-r from-yellow-300 to-orange-300 bg-yellow-500 flex flex-col md:flex-row rounded-lg h-auto md:h-60 w-full justify-center items-center p-4 md:p-8">
        <div className=" w-full md:w-1/2 flex justify-center md:justify-start mb-4 md:mb-0">
          <img
            src={moneda}
            alt="Registro de gastos"
            className="w-3/4 h-auto object-cover md:w-full"
          />
        </div>
        <div className=" w-full md:w-1/2 text-center md:text-left ">
          <p className="text-3xl md:text-4xl font-comfortaa font-bold text-white tracking-widest mb-4">
            Registro de gastos
          </p>
          <p className="text-lg md:text-2xl text-white dark:text-white">
            A partir de cada uno de tus planes en un itinerario que armes, se
            genera un recuento total del costo de este viaje.
          </p>
        </div>
      </div>

      {/* Divide los costos */}
      <div className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 mt-20 md:mt-40 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-4 md:p-8 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold dark:text-white text-white mb-4">
              Divide los costos
            </h1>
            <p className="text-lg md:text-2xl dark:text-white text-white mb-4 md:mb-10">
              Puedes dividir los costos entre tus amigos como tú prefieras y
              cada uno sabrá cuánto tiene que pagar.
            </p>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 lg:mt-20 flex justify-center md:justify-start mb-8 md:mb-0">
            <img
              src={manosDinero}
              alt="Manos con dinero"
              className="w-3/4 h-auto object-cover md:w-full"
            />
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 mb-32">
        <div className="flex items-center justify-center bg-white-100 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            ¡Podrás compartir más que solo el viaje!
          </h1>
        </div>

        <div className="flex items-center justify-center bg-white-100 min-h-60 px-4">
          <ul className="flex flex-wrap justify-center gap-8 list-none">
            <li className="m-4">
              <div className="flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full bg-cyan-600 text-white text-xl md:text-2xl">
                Km Viajados
              </div>
            </li>
            <li className="m-4">
              <div className="flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full bg-yellow-500 text-white text-xl md:text-2xl">
                Archivos Importantes
              </div>
            </li>
            <li className="m-4">
              <div className="flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full bg-cyan-600 text-white text-xl md:text-2xl">
                Itinerarios Diarios
              </div>
            </li>
            <li className="m-4">
              <div className="flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full bg-yellow-500 text-white text-xl md:text-2xl">
                Registro de gastos
              </div>
            </li>
            <li className="m-4">
              <div className="flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full bg-cyan-600 text-white text-xl md:text-2xl">
                Calendario de planes
              </div>
            </li>
          </ul>
        </div>
      </div>

      <footer className="bg-gray-800 text-white text-center py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold mb-8">Frips</h2>
          <h3 className="text-2xl font-semibold mb-4">Grupo 05</h3>
          <div className="flex flex-wrap justify-center">
            <p className="text-lg font-semibold mx-2 mb-4">Marck Rojas</p>
            <p className="text-lg font-semibold mx-2 mb-4">Diego Apuy</p>
            <p className="text-lg font-semibold mx-2 mb-4">Mariano</p>
            <p className="text-lg font-semibold mx-2 mb-4">Luis</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
