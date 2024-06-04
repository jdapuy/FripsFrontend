import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/userSlice";

const Navigation = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const userStore = useSelector((state) => state.user);

  useEffect(() => {
    // Obtener el usuario del localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, [userStore]);

  const handleLogout = () => {
    // Limpiar el usuario del localStorage y del estado
    localStorage.removeItem("user");
    dispatch(logout());
    setUser(null);
  };

  return (
    <>
      <nav className="bg-gray-800 w-full fixed top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between  h-16">
            <div className="hidden md:block">
              <div className="ml-10 flex justify-between space-x-4">
                <div className="ml-10 flex items-center space-x-4">
                  {/* Insert navigation links here */}
                  <Link
                    to="/"
                    className="text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Inicio
                  </Link>
                  {user ? (
                    <Link
                      to="/groups"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Grupos
                    </Link>
                  ) : null}
                </div>

                {/* More links */}
              </div>
            </div>
            <div className="hidden md:flex items-end ">
              {user ? (
                <>
                  <p className="text-gray-300 mr-4">Hola, {user.name}</p>
                  <p
                    onClick={handleLogout}
                    className="text-gray-300  hover:bg-gray-700 hover:text-white px-3 rounded-md  font-medium"
                  >
                    Logout
                  </p>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signin"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Sign In
                  </Link>
                </>
              )}
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {/* Icon for menu when closed */}
                {/* Icon for menu when open */}
                {isOpen ? (
                  /* X icon for closing */
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  /* Hamburger icon for opening */
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`${isOpen ? "block" : "hidden"} md:hidden`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Mobile navigation links */}
            <Link
              to="/"
              className="text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Inicio
            </Link>
            {user ? (
              <Link
                to="/groups"
                className="text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Grupos
              </Link>
            ) : null}
            {user ? (
              <>
                <p
                  onClick={handleLogout}
                  className="text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Logout
                </p>
                <p className="text-white block px-3 py-2 rounded-md text-base font-medium">
                  Hola, {user.name}
                </p>
              </>
            ) : (
              <div className="flex flex-col md:flex-row">
                <Link
                  to="/login"
                  className="text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/signin"
                  className="text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Sign In
                </Link>
              </div>
            )}
            {/* More links */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
