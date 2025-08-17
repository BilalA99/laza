'use client';

import React, { useRef, useEffect, useState } from 'react';

interface AutoPlayVideoProps {
    src: string;
    className?: string;
    id?: string;
    showPlayButton?: boolean;
    playButtonText?: string;
}

// Add playing property to HTMLMediaElement prototype
if (typeof window !== 'undefined') {
    Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
        get: function () {
            return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
        }
    });
}

export default function AutoPlayVideo({
    src,
    className = "",
    id = "autoplay-video",
    showPlayButton = true,
    playButtonText = "Tap to Play"
}: AutoPlayVideoProps) {
    const [isPlayButtonVisible, setIsPlayButtonVisible] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const hasInteracted = useRef(false);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        const handleSuspend = () => {
            // Video was suspended (low power mode or browser restriction)
            if (showPlayButton) {
                setIsPlayButtonVisible(true);
            }
        };

        const handlePlay = () => {
            // Video started playing
            setIsPlayButtonVisible(false);
        };

        const handleUserInteraction = () => {
            if (!hasInteracted.current && videoElement && !videoElement.playing) {
                hasInteracted.current = true;
                videoElement.play().catch((error) => {
                    console.log('Video play failed:', error);
                });
            }
        };

        // Add event listeners
        videoElement.addEventListener('suspend', handleSuspend);
        videoElement.addEventListener('play', handlePlay);

        // Add global interaction listeners
        document.body.addEventListener('click', handleUserInteraction);
        document.body.addEventListener('touchstart', handleUserInteraction);

        // Check initial state
        if (!videoElement.playing && showPlayButton) {
            setIsPlayButtonVisible(true);
        }

        // Cleanup
        return () => {
            videoElement.removeEventListener('suspend', handleSuspend);
            videoElement.removeEventListener('play', handlePlay);
            document.body.removeEventListener('click', handleUserInteraction);
            document.body.removeEventListener('touchstart', handleUserInteraction);
        };
    }, [showPlayButton]);

    const playVideo = () => {
        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.log('Video play failed:', error);
            });
        }
    };

    return (
        <div className="relative w-full h-full">
            <video
                ref={videoRef}
                id={id}
                autoPlay
                muted
                loop
                playsInline
                className={className}
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Play Button Overlay */}
            {isPlayButtonVisible && showPlayButton && (
                <button
                    onClick={playVideo}
                    className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-all duration-300 hover:bg-black/40 active:scale-95"
                    aria-label="Play video"
                >
                    <div className="flex flex-col items-center space-y-4 text-white">
                        {/* Play Icon */}
                        <div className="relative">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                                <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
                            </div>
                        </div>

                        {/* Text */}
                        <div className="text-center">
                            <p className="text-sm font-semibold">{playButtonText}</p>
                        </div>
                    </div>
                </button>
            )}
        </div>
    );
}
