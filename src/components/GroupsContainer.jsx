import React from "react";
import CreateGroupCard from "./CreateGroupCard";

const GroupsContainer = () => {
  return (
    <div className="container mx-auto px-4 mt-20">
      <h1 className="font-bold text-center mb-6">Grupos</h1>
      <div className="flex flex-wrap justify-around mt-10 gap-10">
        {/* la primera card es para crear un grupo */}
        <CreateGroupCard />
        <CreateGroupCard />
        <CreateGroupCard />
      </div>
    </div>
  );
};

export default GroupsContainer;
