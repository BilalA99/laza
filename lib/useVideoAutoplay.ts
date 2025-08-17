import { useEffect, useRef, useState } from 'react';

// Add playing property to HTMLMediaElement prototype
if (typeof window !== 'undefined') {
    Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
        get: function () {
            return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
        }
    });
}

export const useVideoAutoplay = (videoId: string) => {
    const [showPlayButton, setShowPlayButton] = useState(false);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const hasInteracted = useRef(false);

    useEffect(() => {
        const videoElement = document.getElementById(videoId) as HTMLVideoElement;
        if (!videoElement) return;

        videoRef.current = videoElement;

        const handleSuspend = () => {
            // Video was suspended (low power mode or browser restriction)
            setShowPlayButton(true);
            setIsVideoPlaying(false);
        };

        const handlePlay = () => {
            // Video started playing
            setShowPlayButton(false);
            setIsVideoPlaying(true);
        };

        const handlePause = () => {
            // Video was paused
            setIsVideoPlaying(false);
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
        videoElement.addEventListener('pause', handlePause);

        // Add global interaction listeners
        document.body.addEventListener('click', handleUserInteraction);
        document.body.addEventListener('touchstart', handleUserInteraction);

        // Check initial state
        if (videoElement.playing) {
            setIsVideoPlaying(true);
        } else {
            setShowPlayButton(true);
        }

        // Cleanup
        return () => {
            videoElement.removeEventListener('suspend', handleSuspend);
            videoElement.removeEventListener('play', handlePlay);
            videoElement.removeEventListener('pause', handlePause);
            document.body.removeEventListener('click', handleUserInteraction);
            document.body.removeEventListener('touchstart', handleUserInteraction);
        };
    }, [videoId]);

    const playVideo = () => {
        if (videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.log('Video play failed:', error);
            });
        }
    };

    return {
        showPlayButton,
        isVideoPlaying,
        playVideo
    };
};
