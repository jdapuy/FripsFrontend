import React from "react";
import CreateGroupCard from "./CreateGroupCard";
import GroupCard from "./GroupCard";

const GroupsContainer = () => {
  //TODO: se deben renderizar todos los grupos, se les envia por props en nombre del grupo
  return (
    <div className="container mx-auto px-4 mt-20">
      <h1 className="font-bold text-center mb-6">Grupos</h1>
      <div className="flex flex-wrap justify-around mt-10 gap-10">
        {/* la primera card es para crear un grupo */}
        <CreateGroupCard />
        <GroupCard name={"Grupo de viaje"} groupId={1} />
        <GroupCard name={"Familia"} groupId={2} />
        <GroupCard name={"Pareja"} groupId={3} />
      </div>
    </div>
  );
};

export default GroupsContainer;
