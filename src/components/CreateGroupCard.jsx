import React from "react";

const CreateGroupCard = () => {
  return (
    <div className="w-[300px] aspect-video rounded-lg shadow-2xl flex flex-col items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-teal-500 group">
      <div className="flex flex-col items-center p-8 rounded-md w-full sm:px-12 bg-gray-150 text-gray-100">
        <div className="text-center">
          <h2 className="text-xl text-black mb-4 font-semibold">Grupo</h2>
        </div>
        <p className="text-4xl">🛬</p>
        <div className="text-black mb-2 text-3xl font-semibold">+</div>
        <p className="text-black">Crear</p>
      </div>
    </div>
  );
};

export default CreateGroupCard;
