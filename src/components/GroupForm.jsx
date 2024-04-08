import React, { useState } from "react";

function GroupForm() {
  const [groupName, setGroupName] = useState("");
  const [guestEmails, setGuestEmails] = useState([""]);

  const handleGroupNameChange = (e) => {
    setGroupName(e.target.value);
  };

  const handleGuestEmailChange = (index, e) => {
    const newGuestEmails = [...guestEmails];
    newGuestEmails[index] = e.target.value;
    setGuestEmails(newGuestEmails);
  };

  const handleAddGuestEmail = () => {
    setGuestEmails([...guestEmails, ""]);
  };

  const handleDeleteGuestEmail = (index) => {
    // Aquí es donde se corrige el manejador para eliminar correctamente
    const newGuestEmails = [...guestEmails];
    newGuestEmails.splice(index, 1);
    setGuestEmails(newGuestEmails);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Nombre del grupo:", groupName);
    console.log("Correos de invitados:", guestEmails);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-2xl border-gray-300 border p-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="group-name"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre del grupo:
            </label>
            <input
              type="text"
              id="group-name"
              value={groupName}
              onChange={handleGroupNameChange}
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
            />
          </div>

          {guestEmails.map((email, index) => (
            <div key={index} className="flex items-center space-x-2">
              <label
                htmlFor={`guest-email-${index}`}
                className="block text-sm font-medium text-gray-700"
              >
                Correo del invitado {index + 1}:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => handleGuestEmailChange(index, e)}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
              />
              <button
                type="button"
                onClick={() => handleDeleteGuestEmail(index)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              >
                X
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={handleAddGuestEmail}
              className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Agregar otro invitado
            </button>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700"
            >
              Crear grupo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GroupForm;
