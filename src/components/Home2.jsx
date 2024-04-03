import React from "react";
import { Link } from "react-router-dom";
import friendsCountry from "/src/assets/images/friendsCountry.png";
import calendar from "/src/assets/images/calendar.png";

const Home2 = () => {
  return (
    <div>

    <div className="h-80 flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("/src/assets/images/wavesAzul.png")'}}>
    <p className="text-8xl font-amatica font-bold text-white my-4">
    <span class="text-yellow-500">FRI</span>ENDS & TRI<span class="text-yellow-500">PS</span>
    </p>
   </div>
   <div className="mt-5 h-60 flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("/src/assets/images/wavesVerde.png")'}}>
    <p>Organiza viajes con tus amigos, todo en un solo lugar compartido entre todos</p>
   </div >

    </div>
  );
};

export default Home2;
