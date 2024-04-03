import React from "react";
import { Link } from "react-router-dom";
import friendsCountry from "/src/assets/images/friendsCountry.png";
import calendar from "/src/assets/images/calendar.png";

const Home = () => {
  return (
    <div className="bg-white-100 min-h-screen">
      <div className="bg-white-100 min-h-screen flex items-center justify-center">
        <h1 className="text-8xl font-amatica font-bold text-blue-600 my-4">
          FRIENDS
        </h1>
        <h1 className="text-8xl font-amatica font-bold text-yellow-500 my-4">
          {" "}
          &{" "}
        </h1>
        <h1 className="text-8xl font-amatica font-bold text-blue-600 my-4">
          TRIPS
        </h1>
      </div>

      <div className="flex items-center justify-center bg-white-100 mt-10">
        <div className="max-w-6xl mx-auto flex items-center">
          <div className="w-1/2">
            <img src={friendsCountry} alt="FRIENDS" className="w-full h-auto" />
          </div>
          <div className="w-1/2 p-8">
            <h1 className="text-4xl font-bold dark:text-white text-gray-800 mb-4">
              ¿Buscás armar un viaje con tus amigos?
            </h1>
            <p className="text-2xl dark:text-white text-gray-600 my-10">
              Con FRIPS serás capaz de seleccionar que país quieren visitar con
              un simple click.
            </p>
            <p className="text-2xl text-gray-600 my-10">
              Solo deben colocar las opciones y ¡A votar!
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center bg-white-100 min-h-60 mt-20">
        <div className="max-w-6xl mx-auto flex items-center">
          <div className="w-1/2 p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              La organización es un punto muy importante
            </h1>
            <p className="text-2xl text-gray-600 my-10">
              Es por estos que podrás compartir el calendario con tus amigos.
            </p>
            <p className="text-2xl text-gray-600 my-10">
              Todos estarán al tanto la próxima aventura.
            </p>
          </div>
          <div className="w-1/2">
            <img src={calendar} alt="Company" className="w-full h-auto mt-10" />
          </div>
        </div>
      </div>

      <div className="bg-gray-white mt-48 mb-32">
        <div className="flex items-center justify-center bg-white-100">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            ¡Podrás compartir más que solo el viaje!
          </h1>
        </div>

        <div className="flex  items-center justify-center bg-white-100 min-h-60">
          <ul className="flex flex-col xl:flex xl:flex-row justify-between gap list-none">
            <li className="m-8 ">
              <div className="flex items-center justify-center w-40 h-40 rounded-full bg-blue-600 text-white text-2xl font-amatica">
                Km Viajados
              </div>
            </li>
            <li className="m-8">
              <div className="flex items-center justify-center w-40 h-40 rounded-full bg-yellow-500 text-white text-2xl font-amatica">
                Archivos Importantes
              </div>
            </li>
            <li className="m-8">
              <div className="flex items-center justify-center w-40 h-40 rounded-full bg-blue-600 text-white text-2xl font-amatica">
                Itinerarios Diarios
              </div>
            </li>
            <li className="m-8">
              <div className="flex items-center justify-center w-40 h-40 rounded-full bg-yellow-500 text-white text-2xl font-amatica">
                Gastos Totales
              </div>
            </li>
            <li className="m-8">
              <div className="flex items-center justify-center w-40 h-40 rounded-full bg-blue-600 text-white text-2xl font-amatica">
                Reseñas
              </div>
            </li>
          </ul>
        </div>
      </div>

      <section className="pb-16 pt-8 px-8 md:px-16 lg:px-32 bg-blue-600">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold text-white mb-16 font-amatica">
            Contáctanos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Email</h3>
              <p className="text-lg text-white mb-8">info@example.com</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Social Media
              </h3>
              <p className="text-lg text-white mb-8">
                Follow us on Facebook, Twitter, Instagram
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
