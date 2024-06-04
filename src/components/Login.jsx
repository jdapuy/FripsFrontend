import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serverUrl =
      import.meta.env.VITE_SERVER_URL || "http://localhost:3001";
    const { email, password } = formData;

    try {
      const response = await axios.post(`${serverUrl}/auth/login`, {
        email,
        password,
      });
      localStorage.setItem(
        "user",
        JSON.stringify({
          userId: response.data.userId,
          name: response.data.nombre,
          accessToken: response.data.accessToken,
          email: response.data.email,
        })
      );

      dispatch(
        addUser({
          userId: response.data.userId,
          name: response.data.nombre,
          accessToken: response.data.accessToken,
          email: response.data.email,
        })
      );
      toast.success(`Bienvenido ${response.data.nombre} 👋🏻`);
      // Redireccion
      // Esperar 4 segundos antes de redireccionar
      setTimeout(() => {
        navigateTo("/");
      }, 2500);
    } catch (error) {
      toast.error(`Lo sentimos, tu correo o contraseña son incorrectos`);
      console.error("Error al iniciar sesión:", error);
      // Aquí puedes mostrar un mensaje de error al usuario, manejarlo como desees
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <Toaster />
      <div className="w-full max-w-md bg-white rounded-lg border-gray-300 border-4 shadow-2xl  p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Correo electrónico"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Contraseña"
          />
          <div className="flex items-center justify-between flex-wrap">
            <Link
              to="#"
              className="text-sm text-blue-500 hover:underline mb-0.5"
            >
              Olvidaste tu contraseña?
            </Link>
            <p className="text-gray-900 ">
              {" "}
              Aún no estás Registrado?{" "}
              <Link
                to="/signin"
                className="text-sm text-blue-500 -200 hover:underline mt-4"
              >
                Sign In
              </Link>
            </p>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
