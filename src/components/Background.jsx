'use client';

import React, { forwardRef, useEffect, useRef, useState } from 'react';

function setRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    } else if (ref && 'current' in ref) {
        ref.current = value;
    }
}

const Background = forwardRef(
    (
        {
            position = 'fixed',
            gradient = {},
            dots = {},
            lines = {},
            mask = 'none',
            className,
            style,
        },
        forwardedRef
    ) => {
        const dotsColor = dots.color ?? 'bg-gray-500';
        const dotsSize = dots.size ?? '4';
        
        const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
        const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
        const maskSize = 1200;
        const backgroundRef = useRef(null);
        let lastCall = 0;

        useEffect(() => {
            setRef(forwardedRef, backgroundRef.current);
        }, [forwardedRef]);

        useEffect(() => {
            const handleMouseMove = (event) => {
                const now = Date.now();
                if (now - lastCall < 16) return;
                lastCall = now;

                if (backgroundRef.current) {
                    const rect = backgroundRef.current.getBoundingClientRect();
                    setCursorPosition({
                        x: event.clientX - rect.left,
                        y: event.clientY - rect.top,
                    });
                }
            };

            document.addEventListener('mousemove', handleMouseMove);

            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
            };
        }, []);

        useEffect(() => {
            let animationFrameId;

            const updateSmoothPosition = () => {
                setSmoothPosition((prev) => {
                    const dx = cursorPosition.x - prev.x;
                    const dy = cursorPosition.y - prev.y;
                    const easingFactor = 0.05;

                    return {
                        x: Math.round(prev.x + dx * easingFactor),
                        y: Math.round(prev.y + dy * easingFactor),
                    };
                });
                animationFrameId = requestAnimationFrame(updateSmoothPosition);
            };

            if (mask === 'cursor') {
                animationFrameId = requestAnimationFrame(updateSmoothPosition);
            }

            return () => {
                cancelAnimationFrame(animationFrameId);
            };
        }, [cursorPosition, mask]);

        const maskStyle = () => {
            const commonMask = 'radial-gradient(circle';
            const fadeOut = 'rgba(0, 0, 0, 0) 100%)';
            switch (mask) {
                case 'none':
                    return { maskImage: 'none' };
                case 'cursor':
                    return {
                        maskImage: `${commonMask} ${maskSize / 2}px at ${smoothPosition.x}px ${smoothPosition.y}px, rgba(0, 0, 0, 1) 20%, ${fadeOut}`,
                    };
                case 'topLeft':
                    return {
                        maskImage: `${commonMask} ${maskSize / 2}px at 0% 0%, rgba(0, 0, 0, 1) 20%, ${fadeOut}`,
                    };
                case 'topRight':
                    return {
                        maskImage: `${commonMask} ${maskSize / 2}px at 100% 0%, rgba(0, 0, 0, 1) 20%, ${fadeOut}`,
                    };
                case 'bottomLeft':
                    return {
                        maskImage: `${commonMask} ${maskSize / 2}px at 0% 100%, rgba(0, 0, 0, 1) 20%, ${fadeOut}`,
                    };
                case 'bottomRight':
                    return {
                        maskImage: `${commonMask} ${maskSize / 2}px at 100% 100%, rgba(0, 0, 0, 1) 20%, ${fadeOut}`,
                    };
                default:
                    return {};
            }
        };

        return (
            <>
                {gradient.display && (
                    <div
                        ref={backgroundRef}
                        className={`${className} absolute top-0 left-0 w-full h-full z-0 pointer-events-none`}
                        style={{
                            opacity: gradient.opacity,
                            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent 70%)',
                            ...maskStyle(),
                            ...style,
                        }}
                    />
                )}
                {dots.display && (
                    <div
                        className={`${className} absolute top-0 left-0 w-full h-full z-0 pointer-events-none ${dotsColor}`}
                        style={{
                            opacity: dots.opacity,
                            backgroundImage: `radial-gradient(circle, ${dotsColor} 0.5px, transparent 0.5px)`,
                            backgroundSize: `${dotsSize}px ${dotsSize}px`,
                            ...maskStyle(),
                            ...style,
                        }}
                    />
                )}
                {lines.display && (
                    <div
                        className={`${className} absolute top-0 left-0 w-full h-full z-0 pointer-events-none`}
                        style={{
                            opacity: lines.opacity,
                            backgroundImage: `repeating-linear-gradient(45deg, ${dotsColor} 0, ${dotsColor} 1px, transparent 1px, transparent ${dotsSize}px)`,
                            ...maskStyle(),
                            ...style,
                        }}
                    />
                )}
            </>
        );
    }
);

Background.displayName = 'Background';
export { Background };
