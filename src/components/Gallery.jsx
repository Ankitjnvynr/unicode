"use client"
import React, { useState } from 'react';

const images = [
    { src: '/pngtree-majestic-volcano-eruption-at-twilight-image_16213116.jpg', alt: 'Northern Lights 1' },
    { src: '/pexels-tahir-shaw-50609-205410.jpg', alt: 'Northern Lights 2' },
    // { src: '/path/to/image3.jpg', alt: 'Northern Lights 3' },
    // { src: '/path/to/image4.jpg', alt: 'Northern Lights 4' },
    // { src: '/path/to/image5.jpg', alt: 'Northern Lights 5' },
    // { src: '/path/to/image6.jpg', alt: 'Northern Lights 6' },
];

function Gallery() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
        setIsOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setIsOpen(false);
    };

    return (
        <div className="flex flex-col items-center w-full gap-4 p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl">
                {images.map((image, index) => (
                    <div key={index} className="relative w-full overflow-hidden rounded-lg">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                            onClick={() => openModal(image)}
                        />
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isOpen && selectedImage && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="relative p-4 bg-white rounded-lg shadow-lg max-w-lg w-full">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-white bg-black rounded-full w-8 h-8 flex items-center justify-center font-bold"
                        >
                            &times;
                        </button>
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="w-full h-auto object-contain rounded-lg"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Gallery;
