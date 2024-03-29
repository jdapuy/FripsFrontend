import React, { useState } from "react";
import { Link } from "react-router-dom";
import waves from "../assets/waves.svg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed inset-0 w-full h-full z-[-1]">
        <svg
          id="visual"
          viewBox="0 0 900 450"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          preserveAspectRatio="xMidYMid slice"
          version="1.1"
        >
          <path
            d="M0 61L15 64C30 67 60 73 90 77C120 81 150 83 180 78C210 73 240 61 270 62C300 63 330 77 360 83C390 89 420 87 450 81C480 75 510 65 540 62C570 59 600 63 630 63C660 63 690 59 720 62C750 65 780 75 810 84C840 93 870 101 885 105L900 109L900 0L885 0C870 0 840 0 810 0C780 0 750 0 720 0C690 0 660 0 630 0C600 0 570 0 540 0C510 0 480 0 450 0C420 0 390 0 360 0C330 0 300 0 270 0C240 0 210 0 180 0C150 0 120 0 90 0C60 0 30 0 15 0L0 0Z"
            fill="#ffffff"
          ></path>
          <path
            d="M0 109L15 119C30 129 60 149 90 152C120 155 150 141 180 130C210 119 240 111 270 114C300 117 330 131 360 142C390 153 420 161 450 157C480 153 510 137 540 130C570 123 600 125 630 123C660 121 690 115 720 119C750 123 780 137 810 147C840 157 870 163 885 166L900 169L900 107L885 103C870 99 840 91 810 82C780 73 750 63 720 60C690 57 660 61 630 61C600 61 570 57 540 60C510 63 480 73 450 79C420 85 390 87 360 81C330 75 300 61 270 60C240 59 210 71 180 76C150 81 120 79 90 75C60 71 30 65 15 62L0 59Z"
            fill="#d3e3ff"
          ></path>
          <path
            d="M0 217L15 231C30 245 60 273 90 279C120 285 150 269 180 263C210 257 240 261 270 278C300 295 330 325 360 327C390 329 420 303 450 289C480 275 510 273 540 278C570 283 600 295 630 293C660 291 690 275 720 273C750 271 780 283 810 288C840 293 870 291 885 290L900 289L900 167L885 164C870 161 840 155 810 145C780 135 750 121 720 117C690 113 660 119 630 121C600 123 570 121 540 128C510 135 480 151 450 155C420 159 390 151 360 140C330 129 300 115 270 112C240 109 210 117 180 128C150 139 120 153 90 150C60 147 30 127 15 117L0 107Z"
            fill="#a2c7ff"
          ></path>
          <path
            d="M0 415L15 428C30 441 60 467 90 472C120 477 150 461 180 448C210 435 240 425 270 428C300 431 330 447 360 459C390 471 420 479 450 481C480 483 510 479 540 476C570 473 600 471 630 458C660 445 690 421 720 414C750 407 780 417 810 429C840 441 870 455 885 462L900 469L900 287L885 288C870 289 840 291 810 286C780 281 750 269 720 271C690 273 660 289 630 291C600 293 570 281 540 276C510 271 480 273 450 287C420 301 390 327 360 325C330 323 300 293 270 276C240 259 210 255 180 261C150 267 120 283 90 277C60 271 30 243 15 229L0 215Z"
            fill="#a2c7ff"
          ></path>
          <path
            d="M0 553L15 554C30 555 60 557 90 553C120 549 150 539 180 535C210 531 240 533 270 539C300 545 330 555 360 556C390 557 420 549 450 544C480 539 510 537 540 539C570 541 600 547 630 546C660 545 690 537 720 532C750 527 780 525 810 529C840 533 870 543 885 548L900 553L900 467L885 460C870 453 840 439 810 427C780 415 750 405 720 412C690 419 660 443 630 456C600 469 570 471 540 474C510 477 480 481 450 479C420 477 390 469 360 457C330 445 300 429 270 426C240 423 210 433 180 446C150 459 120 475 90 470C60 465 30 439 15 426L0 413Z"
            fill="#d3e3ff"
          ></path>
          <path
            d="M0 601L15 601C30 601 60 601 90 601C120 601 150 601 180 601C210 601 240 601 270 601C300 601 330 601 360 601C390 601 420 601 450 601C480 601 510 601 540 601C570 601 600 601 630 601C660 601 690 601 720 601C750 601 780 601 810 601C840 601 870 601 885 601L900 601L900 551L885 546C870 541 840 531 810 527C780 523 750 525 720 530C690 535 660 543 630 544C600 545 570 539 540 537C510 535 480 537 450 542C420 547 390 555 360 554C330 553 300 543 270 537C240 531 210 529 180 533C150 537 120 547 90 551C60 555 30 553 15 552L0 551Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
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
                  <Link
                    to="/groups"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Grupos
                  </Link>
                </div>

                {/* More links */}
              </div>
            </div>
            <div className="hidden md:flex items-end ">
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
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
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
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            {/* More links */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
