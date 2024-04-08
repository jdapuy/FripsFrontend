import React from "react";
import { Link } from "react-router-dom";

const GroupCard = ({ name, groupId }) => {
  return (
    <div className="w-[300px] aspect-video rounded-lg shadow-2xl flex flex-col items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-teal-500 group">
      <Link to={`/group?groupId=${groupId}`}>
        <div className="flex flex-col items-center p-8 rounded-md w-full sm:px-12 bg-gray-150 text-gray-100">
          <div className="text-center">
            <h2 className="text-xl text-black mb-4 font-semibold">Grupo</h2>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <p className="text-4xl">👨‍👧‍👦👨‍👩‍👧‍👦</p>
            <p className="text-black">{name}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GroupCard;
