import React, { useEffect, useState } from "react";
import axios from "axios";
import CreateGroupCard from "./CreateGroupCard";
import GroupCard from "./GroupCard";

const GroupsContainer = () => {
  const [myGroups, setMyGroups] = useState([]);
  const [deletedGroups, setDeletedGroups] = useState([]);
  useEffect(() => {
    const serverUrl =
      import.meta.env.VITE_SERVER_URL || "http://localhost:3001";

    const getGroups = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        const response = await axios.get(`${serverUrl}/api/grupos`, {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        });
        const groups = response.data;
        const filteredGroups = groups.filter((group) =>
          group.usersIds.includes(user.userId)
        );
        setMyGroups(filteredGroups);
      } catch (error) {
        console.error("Error fetching groups:", error);
      }
    };

    getGroups();
  }, [deletedGroups]);

  const handleDeleteGroup = (groupId) => {
    setDeletedGroups((prevDeletedGroups) => [...prevDeletedGroups, groupId]);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-600 to-purple-600 flex flex-col items-center justify-center">
      <h1 className="mt-20 md:mt-0 text-5xl md:text-8xl font-extrabold mb-10 text-center text-yellow-400">
        ¡Explora tus Grupos!
      </h1>
      <div className="flex flex-wrap justify-center  gap-8">
        {/* La primera tarjeta es para crear un grupo */}
        <CreateGroupCard />
        {myGroups.map((group) => (
          <GroupCard
            key={group.grupo.grupoId}
            name={group.grupo.nombre}
            groupId={group.grupo.grupoId}
            onDelete={handleDeleteGroup}
          />
        ))}
      </div>
    </div>
  );
};

export default GroupsContainer;
