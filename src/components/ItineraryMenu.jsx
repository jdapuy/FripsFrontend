import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ItineraryMenu = () => {
  const { groupId } = useParams();
  const [groupInfo, setGroupInfo] = useState(null);

  useEffect(() => {
    const serverUrl =
      import.meta.env.VITE_SERVER_URL || "http://localhost:3001";
    const user = JSON.parse(localStorage.getItem("user"));
    const getGroupInfo = async () => {
      try {
        const response = await axios.get(`${serverUrl}/api/grupo/${groupId}`, {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        });
        setGroupInfo(response.data);
      } catch (error) {
        console.error("Error fetching group info:", error);
      }
    };

    getGroupInfo();
  }, [groupId]);

  if (!groupInfo) {
    return <div>Loading...</div>;
  }
  return (
    <div className="bg-blue-500 flex flex-col justify-center align-middle text-white text-center p-4 pt-20 gap-4 ">
      <div className="opacity-25 absolute self-center justify-self-center">
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="128pt"
          height="64pt"
          viewBox="0 0 1280.000000 640.000000"
          preserveAspectRatio="xMidYMid meet"
          className=""
        >
          <g
            transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"
            fill="#ffffff"
            stroke="none"
          >
            <path
              d="M8541 5694 c118 -326 118 -327 100 -353 -27 -38 -983 -1386 -986
-1389 -2 -3 -108 -14 -730 -77 -247 -25 -535 -54 -640 -65 -374 -38 -1092
-111 -1190 -121 -178 -17 -640 -23 -811 -10 -186 14 -497 53 -610 76 -87 18
-210 63 -279 102 -25 13 -45 25 -45 26 0 1 13 71 28 155 l29 152 -134 0 -134
0 -37 -60 c-20 -32 -40 -58 -44 -57 -13 4 -191 167 -441 406 -223 212 -565
557 -1036 1045 l-123 128 -214 -54 c-118 -29 -214 -57 -214 -62 0 -5 261 -522
579 -1150 319 -627 581 -1147 583 -1155 2 -10 -16 -18 -59 -28 l-61 -14 20
-72 c11 -40 22 -79 25 -87 6 -21 -45 -38 -417 -140 -868 -240 -1571 -445
-1634 -477 -67 -33 -82 -82 -41 -131 39 -47 79 -59 250 -77 l160 -16 190 51
c105 28 305 82 445 120 140 38 399 107 575 155 176 47 413 111 527 141 l208
56 137 -60 c294 -130 755 -307 1088 -419 167 -56 207 -65 325 -78 74 -8 248
-29 385 -47 241 -32 262 -33 568 -32 175 1 317 0 315 -1 -2 -2 -97 -37 -213
-78 -115 -41 -349 -126 -520 -187 -588 -212 -811 -292 -1000 -360 -308 -110
-935 -336 -1140 -410 -528 -191 -694 -250 -700 -250 -3 0 -91 74 -196 165
-104 91 -195 165 -202 165 -46 1 -427 -36 -427 -41 0 -4 35 -38 77 -76 111
-99 357 -365 420 -455 68 -96 88 -113 177 -141 62 -19 93 -22 241 -22 l170 1
130 42 c72 24 252 83 400 132 2048 672 2192 719 3010 991 l740 246 53 -49 c30
-26 57 -48 60 -48 4 0 14 15 22 33 8 17 26 37 40 44 27 13 140 33 140 26 0 -3
-19 -26 -41 -51 -69 -77 -96 -155 -64 -182 14 -12 36 -10 91 6 18 5 25 -3 47
-48 40 -82 90 -134 161 -168 54 -25 84 -32 192 -41 76 -7 191 -8 279 -5 83 4
245 11 360 15 133 5 223 13 245 21 47 18 213 134 243 170 46 54 117 252 117
325 0 52 -56 251 -84 299 -29 50 -61 76 -138 111 -29 13 -46 24 -38 24 8 1 89
10 180 21 550 66 820 93 1240 125 984 76 2304 219 2566 280 272 63 603 246
836 464 84 79 118 138 125 219 4 51 1 62 -25 104 -46 70 -173 165 -387 288
-60 35 -130 81 -155 103 -67 59 -244 140 -405 186 -342 98 -468 126 -662 151
-178 22 -995 -27 -2011 -121 -183 -17 -335 -29 -338 -26 -3 3 88 292 202 643
113 352 207 642 208 645 0 4 -98 153 -219 332 l-220 326 -181 1 -181 0 118
-326z"
            />
          </g>
        </svg>
      </div>
      <h1 className="text-4xl font-bold py-4 mb-2">
        Grupo {groupInfo.grupo.nombre}
      </h1>
      <div className="top-0 left-0 w-full border-b-4 border-white opacity-15" />
      <div className="flex gap-8 justify-center space-x-4 mt-2">
        <Link to={`/group/${groupId}`}>
          <span className="text-white text-2xl hover:text-gray-300">
            Itinerarios
          </span>
        </Link>
        <Link to={`/group/${groupId}/cloud`}>
          <span className="text-white text-2xl hover:text-gray-300">
            Archivos del grupo
          </span>
        </Link>
        <Link to={`/group/${groupId}/gasto`}>
          <span className="text-white text-2xl hover:text-gray-300">
            Gastos
          </span>
        </Link>
        <Link to={`/group/${groupId}/calendar`}>
          <span className="text-white text-2xl hover:text-gray-300">
            Calendario
          </span>
        </Link>
        <Link to="/km-recorridos">
          <span className="text-white text-2xl hover:text-gray-300">
            Km Recorridos
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ItineraryMenu;
