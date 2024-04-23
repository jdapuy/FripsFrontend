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

const Home = () => {
  return (
    <div>
      {/* Frips */}
      <div
        className="h-80 flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/src/assets/images/wavesAzul.png")' }}
      >
        <p className="text-8xl font-amatica font-bold text-white my-4">
          <span className="text-yellow-500">FRI</span>ENDS & TRI
          <span className="text-yellow-500">PS</span>
        </p>
      </div>
      {/* Organiza viajes */}
      <div
        className="mt-2 h-60 flex justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/src/assets/images/wavesVerde.png")' }}
      >
        <div className="mx-52 mt-4">
          <p className=" text-3xl font-comfortaa font-bold text-white">
            Organiza viajes con tus amigos, todo en un solo lugar, compartido
            entre todos
          </p>
        </div>
      </div>
      {/* Buscas armar un viaje con amigos? */}
      <div className="flex items-center justify-center bg-white-100 mt-10">
        <div className="max-w-6xl mx-auto flex items-center">
          <div className="w-1/2">
            <img
              src={friendsCountry}
              alt="Friend traveling"
              className="w-full h-auto"
            />
          </div>
          <div className="w-1/2 p-8">
            <h1 className="text-4xl font-bold dark:text-white text-gray-800 mb-4">
              ¿Buscás armar un viaje con tus amigos?
            </h1>
            <p className="text-2xl dark:text-white text-gray-600 my-10">
              Deja que FRIPS te ayude a mantener informados a todos tus amigos,
              que no se pierdan ni un detalle!
            </p>
          </div>
        </div>
      </div>
      {/* invita a tus amigos */}
      <div className="flex items-center justify-center bg-white-100 min-h-60 mt-20">
        <div className="max-w-6xl mx-auto flex items-center">
          <div className="w-1/2 p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Invita a tus amigos a formar parte del plan
            </h1>
            <p className="text-2xl text-gray-600 my-10">
              Crea un grupo de viaje junto a tus amigos
            </p>
          </div>
          <div className="w-1/2">
            <img
              src={Amigos}
              alt="add friends"
              className="w-full h-auto mt-10"
            />
          </div>
        </div>
      </div>
      {/* HiFive */}
      <div className="mt-10 h-40 flex justify-center">
        <div className="mx-4">
          <img
            src={manosHifive}
            alt="Hifive"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Detalla los planes */}
      <div className="flex items-center justify-center bg-white-100 mt-10">
        <div className="max-w-6xl mx-auto flex items-center">
          <div className="w-1/2">
            <img
              src={plans}
              alt="planes toDo"
              className="w-full max-w-full h-auto"
            />
          </div>
          <div className="w-1/2 p-8">
            <h1 className="text-4xl font-bold dark:text-white text-gray-800 mb-4">
              Detalla los planes de cada momento
            </h1>
            <p className="text-2xl dark:text-white text-gray-600 my-10">
              Para cada itinerario que tengas, puedes detallar varios planes,
              los cambios que hagas los veran tus amigos en tiempo real
            </p>
          </div>
        </div>
      </div>
      {/* Manten el orden con el calendario */}
      <div
        className="mt-32 min-h-52 flex justify-center items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/src/assets/images/Calendario.png")' }}
      >
        <div className="mx-44">
          <p className="text-6xl font-comfortaa font-bold text-white">
            Manten el orden con el calendario automático
          </p>
        </div>
      </div>
      {/* Archivos compartidos */}
      <div className="mt-52 h-100 flex justify-center">
        <div className="mx-4">
          {" "}
          {/* Ajusta el valor del margen según sea necesario */}
          <img
            src={imagenArchivos}
            alt="Archivos compartidos"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold dark:text-white text-gray-800 mb-4">
          Espacio de archivos compartidos
        </h1>
        <p className="text-2xl dark:text-white text-gray-600 my-5">
          Disponé para cada grupo de un espacio donde tu y tus amigos puedan
          econtrar los archivos importantes del viaj
        </p>
      </div>
      {/* Registo de gasto */}
      <div className="mt-40 bg-neutral-300 flex rounded-lg h-60 w-full justify-center items-center">
        <div className="mr-auto">
          <img
            src={moneda}
            alt="Hifive"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="justify-center items-center w-3/4 mx-10">
          <p className="text-center text-4xl font-comfortaa font-bold text-gray tracking-widest">
            Registro de gastos
          </p>
          <p className="text-2xl dark:text-white text-gray-600 my-5">
            A partir de cada uno de los tus planes en un itinerario que armes,
            se genera un recuento total del costo total de este viaje
          </p>
        </div>
      </div>
      {/* Divide los costos */}
      <div className="flex items-center justify-center bg-white-100 mt-40">
        <div className="max-w-6xl mx-auto flex items-center">
          <div className="w-1/2">
            <img
              src={manosDinero}
              alt="Manos con dinero"
              className="w-full h-auto"
            />
          </div>
          <div className="w-1/2 p-8">
            <h1 className="text-4xl font-bold dark:text-white text-gray-800 mb-4">
              Divide los costos
            </h1>
            <p className="text-2xl dark:text-white text-gray-600 my-10">
              Puedes dividir los costos entre tus amigos como tu prefieras y
              cada uno sabra cuanto tiene que pagar
            </p>
          </div>
        </div>
      </div>
      {/* Kilometros recorridos */}
      <div className="mt-52 h-60 flex justify-center bg-cover bg-center bg-no-repeat">
        <div className="mx-52">
          <p className=" text-yellow-500 text-3xl font-comfortaa font-bold text-white tracking-widest">
            Mira que lejos hemos llegado!
          </p>
        </div>
      </div>

      <div className=" flex rounded-lg h-60 w-full justify-center items-center">
        <div className="mr-auto">
          <img
            src={Viajero}
            alt="Hifive"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-3/4 mx-10 mb-60">
          <p className="text-center text-7xl font-comfortaa font-bold text-gray tracking-widest">
            <span className="inline-block text-orange-500">1000 KM</span>
          </p>
          <div className="mt-5 h-1 w-full bg-orange-500"></div>
          <p className="text-2xl dark:text-white text-gray-600 my-10">
            Segun los destinos que visites, FRIPS te ayuda a calcular cuantos
            kilometros has recorrido
          </p>
        </div>
      </div>
      {/* Footer */}
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
                Registro de gastos
              </div>
            </li>
            <li className="m-8">
              <div className="flex items-center justify-center w-40 h-40 rounded-full bg-blue-600 text-white text-2xl font-amatica">
                Reseñas
              </div>
            </li>
            <li className="m-8">
              <div className="flex items-center justify-center w-40 h-40 rounded-full bg-yellow-500 text-white text-2xl font-amatica">
                Calendario de planes
              </div>
            </li>
          </ul>
        </div>
      </div>

      <section className="pb-16 pt-8 px-8 md:px-16 lg:px-32 bg-blue-600">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold text-white mb-16 font-amatica">
            Frips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Grupo 05
              </h3>
              <p className="text-lg text-white mb-8">Marck Rojas</p>
              <p className="text-lg text-white mb-8">Diego Apuy</p>
              <p className="text-lg text-white mb-8">Mariano</p>
              <p className="text-lg text-white mb-8">Luis</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
