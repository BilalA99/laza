import React from 'react';

interface VideoPlayButtonProps {
    onClick: () => void;
    className?: string;
}

export default function VideoPlayButton({ onClick, className = "" }: VideoPlayButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`
        absolute inset-0 z-20 flex items-center justify-center
        bg-black/30 backdrop-blur-sm transition-all duration-300
        hover:bg-black/40 active:scale-95
        ${className}
      `}
            aria-label="Play video"
        >
            <div className="flex flex-col items-center space-y-4 text-white">
                {/* Play Icon */}
                <div className="relative">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                        <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                    </div>
                </div>

                {/* Text */}
                <div className="text-center">
                    <p className="text-lg font-semibold mb-1">Tap to Play</p>
                    <p className="text-sm opacity-80">Experience Laza Cafe</p>
                </div>
            </div>
        </button>
    );
}
