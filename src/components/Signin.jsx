import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigateTo = useNavigate();
  const serverUrl = import.meta.env.VITE_SERVER_URL;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;
    try {
      const response = await axios.post(`${serverUrl}/auth/register`, {
        nombre: name,
        email,
        password,
      });
      toast.success(`Registro exitoso ✔`);
      // Redireccion
      // Esperar 4 segundos antes de redireccionar
      setTimeout(() => {
        navigateTo("/login");
      }, 2500);
      // Aquí puedes redirigir a la página de inicio de sesión o mostrar un mensaje de éxito, etc.
    } catch (error) {
      toast.error(`Lo sentimos, ha ocurrido un error`);
      console.error("Error al registrar:", error);
      // Aquí puedes mostrar un mensaje de error al usuario, manejarlo como desees
    }
  };

  return (
    <div>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 h-screen">
          <div className="w-full bg-white rounded-lg shadow-2xl border-gray-300 border-4 md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Registro
              </p>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Nombre
                </label>
                <input
                  placeholder="Nombre"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Correo
                </label>
                <input
                  placeholder="Correo@email.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Contraseña
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="••••••••"
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Confirmar contraseña
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder="••••••••"
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>

              <button
                className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white"
                type="submit"
              >
                Crear cuenta
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signin;
