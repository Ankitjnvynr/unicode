"use client";

import React, { useEffect, useRef } from 'react';

const SpotlightBackground = () => {
    const spotlightRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            // Get bounding rect of the spotlight element
            const rect = spotlightRef.current.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            // Update the spotlight position
            spotlightRef.current.style.backgroundImage = `
                radial-gradient(circle 800px at ${x}px ${y}px, rgba(210, 180, 140, 0.1), transparent 90%)

            `;
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={spotlightRef}
            className="fixed w-full h-screen bg-black/10 top-0 left-0 z-[-10]"
            style={{
                backgroundSize: 'cover',
            }}
        />
    );
};

export default SpotlightBackground;
