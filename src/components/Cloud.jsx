import React, { useEffect, useRef, useState } from "react";
import ItineraryMenu from "./ItineraryMenu";
import { useParams } from "react-router-dom";
import axios from "axios";
import FilesTable from "./FilesTable";
import toast, { Toaster } from "react-hot-toast";
const Cloud = () => {
  const { groupId } = useParams();
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const [deletedSource, setDeletedSource] = useState();
  const [addedSource, setAddedSource] = useState();
  const [resources, setResources] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [myFileName, setMyFileName] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const serverUrl =
      import.meta.env.VITE_SERVER_URL || "http://localhost:3001";

    const fetchResources = async () => {
      try {
        const response = await axios.get(`${serverUrl}/api/cloud/${groupId}`, {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        });
        setResources(response.data);
      } catch (error) {
        console.error("Error fetching resources:", error);
      }
    };

    fetchResources();
  }, [groupId, , selectedType, deletedSource, addedSource]);

  useEffect(() => {
    const cloudName = import.meta.env.VITE_CLOUDNAME;
    const uploadPreset = import.meta.env.VITE_UPLOADPRESET;
    const openUploadWidget = () => {
      if (window.cloudinary) {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget(
          {
            cloudName,
            uploadPreset,
            folder: groupId,
            public_id: myFileName,
          },
          function (error, result) {
            if (error) {
              console.error("Upload Widget Error:", error);
            } else {
              setAddedSource(result);
            }
          }
        );
        widgetRef.current.open(); // Abre el widget después de configurarlo
      } else {
        console.error("Cloudinary is not available on window");
      }
    };

    if (myFileName) {
      openUploadWidget(); // Abre el widget si se ha proporcionado un nombre de archivo
      setAddedSource();
    }
  }, [myFileName]);

  const handleFolderClick = (type) => {
    setSelectedType(type);
  };

  const handleUploadClick = () => {
    const fileName = prompt("Ingrese el nombre del archivo:");
    if (fileName) {
      setMyFileName(fileName); // Guarda el nombre proporcionado por el usuario
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-600 to-purple-600">
      <Toaster />
      <ItineraryMenu />
      <h1 className="m-10 text-3xl font-bold text-white">Almacenamiento</h1>
      <div className="flex justify-center px-4 mb-4">
        <button
          onClick={handleUploadClick} // Cambiado aquí para llamar a handleUploadClick
          className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md"
        >
          Subir Archivo
        </button>
      </div>
      <main className="p-8 flex flex-col mx-auto align-middle w-2/4 justify-center space-y-4">
        <div className="flex flex-col md:flex-row gap-4 justify-between ">
          <p
            className="h-12 w-12 cursor-pointer text-4xl my-4 text-white"
            onClick={() => handleFolderClick("image")}
          >
            Image 📁
          </p>
          <p
            className="h-12 w-12 cursor-pointer text-4xl my-4 text-white"
            onClick={() => handleFolderClick("video")}
          >
            Video 📁
          </p>
          <p
            className="h-12 w-12 cursor-pointer text-4xl my-4 text-white"
            onClick={() => handleFolderClick("mp3")}
          >
            MP3 📁
          </p>
          <p
            className="h-12 w-12 cursor-pointer text-4xl my-4 text-white"
            onClick={() => handleFolderClick("raw")}
          >
            Otros... 📁
          </p>
        </div>
      </main>
      <div className="mx-4">
        {selectedType && (
          <FilesTable
            type={selectedType}
            resources={resources[selectedType]}
            setDeletedSource={setDeletedSource}
          />
        )}
      </div>
    </div>
  );
};

export default Cloud;
