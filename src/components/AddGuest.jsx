import React, { useState } from "react";
import HombreMapa from "../assets/images/HombreMapa.png";
import amigosComputadora from "../assets/images/amigosComputadora.png";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
function AddGuest() {
  const { groupId } = useParams();
  const navigateTo = useNavigate();
  const [guestEmails, setGuestEmails] = useState([""]);
  const serverUrl = import.meta.env.VITE_SERVER_URL || "http://localhost:3001";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      console.log("user:", user);
      guestEmails.push(user.email);
      console.log("Correos de invitados:", guestEmails);

      const createdGroup = await axios.post(
        `${serverUrl}/api/grupo/invitados`,
        {
          grupoId: groupId,
          userEmails: guestEmails,
        },
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );
      toast.success(`Agregaste más invitados al grupo!!`);
      setTimeout(() => {
        navigateTo("/groups");
      }, 2500);
    } catch (error) {
      toast.error(`Lo siento ha sucedido un error`);
      console.error("error", error);
    }
  };

  return (
    <>
      <Toaster />
      <div className="flex flex-col lg:flex-row items-center justify-around h-screen">
        <aside className="hidden lg:block mb-4 lg:mb-0 md:mr-4">
          <img
            src={HombreMapa}
            alt="Hombre con mapa"
            className="w-fit h-fit mt-10 m-16 "
          />
        </aside>
        <div className="mt-32 lg:mt-0">
          <h1 className="py-4 w-full max-w-md">Agregar Invitados</h1>
          <main className="w-full max-w-md   bg-white rounded-lg shadow-2xl  border-gray-300 border p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              {guestEmails.map((email, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <label
                    htmlFor={`guest-email-${index}`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Correo del usuario {index + 1}:
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

              <div className="flex gap-6 justify-between flex-col md:flex-row items-center">
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
                  Agregar al grupo
                </button>
              </div>
            </form>
          </main>
        </div>
        <aside className=" m-16">
          <img
            src={amigosComputadora}
            alt="Amigos con computadora"
            className="w-full h-auto"
          />
        </aside>
      </div>
    </>
  );
}

export default AddGuest;
