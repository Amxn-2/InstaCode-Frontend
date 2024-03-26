"use client"
import { useState } from "react";
import Link from "next/link";

const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const [containerName, setContainerName] = useState("");
    const [technology, setTechnology] = useState("");
    const [folderPath, setFolderPath] = useState("");

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleCreate = () => {
        console.log("Create button clicked");
        console.log("Container Name:", containerName);
        console.log("Technology:", technology);
        console.log("Folder Path:", folderPath);
        //logic to handle the creation process
        handleCloseModal();
    };

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-[#121212] rounded-lg border border-gray-500 mt-10">
            <div>
                <h1 className="text-5xl font-signature ml-8">
                    <Link href="/">
                        InstaCode
                    </Link>
                </h1>
            </div>

            <div>
                <button onClick={handleOpenModal} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 mr-8 rounded-lg">
                    Create +
                </button>
            </div>

            {showModal && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="bg-gray-800 bg-opacity-90 rounded-lg p-8 shadow-lg">
                        <h2 className="text-2xl mb-6 text-white">Create Your Container</h2>
                        <div className="mb-4">
                            <label htmlFor="containerName" className="text-white block mb-2">Container Name:</label>
                            <input
                                type="text"
                                id="containerName"
                                value={containerName}
                                onChange={(e) => setContainerName(e.target.value)}
                                className="input-field"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="technology" className="text-white block mb-2">Technology:</label>
                            <input
                                type="text"
                                id="technology"
                                value={technology}
                                onChange={(e) => setTechnology(e.target.value)}
                                className="input-field"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="folderPath" className="text-white block mb-2">Folder Path:</label>
                            <input
                                type="text"
                                id="folderPath"
                                value={folderPath}
                                onChange={(e) => setFolderPath(e.target.value)}
                                className="input-field"
                            />
                        </div>
                        <div className="flex justify-end">
                            <button onClick={handleCreate} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mr-2">Create</button>
                            <button onClick={handleCloseModal} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const ImageNavbar = ({ imageName }) => {
    return (
        <div className="mt-10">
            <div className="flex justify-between items-center w-full h-16 px-4 text-white bg-[#121212] rounded-lg border-t border-b border-green-500">
                <div>
                    <p className="text-lg">
                        <span className="opacity-50">Image Name:  </span>
                        <span>{imageName}</span>
                    </p>
                </div>

                <div>
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full mr-2">Start</button>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full mr-2">Stop</button>
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">Delete</button>
                </div>
            </div>
        </div>
    );
};
export { Home, ImageNavbar };
