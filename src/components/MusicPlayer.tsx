import React, { useEffect, useState } from "react";
import { Music, Pause, Play, Volume2, VolumeX } from "lucide-react";

interface MusicPlayerProps {
  isPlaying: boolean;
  volume: number;
  audioMissing: boolean;
  onTogglePlay: () => void;
  onVolumeChange: (val: number) => void;
}

export function MusicPlayer({
  isPlaying,
  volume,
  audioMissing,
  onTogglePlay,
  onVolumeChange,
}: MusicPlayerProps) {
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    if (!showControls) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowControls(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [showControls]);

  return (
    <div className="absolute bottom-4 right-4 z-40 flex flex-col items-end gap-2">
      {showControls && (
        <div className="rounded-2xl bg-white/95 backdrop-blur-md border border-[#E7C6D6] shadow-lg px-3.5 py-2.5 flex items-center gap-2.5 text-[#331B29]">
          <button
            type="button"
            onClick={onTogglePlay}
            disabled={audioMissing}
            aria-label={isPlaying ? "Pause music" : "Play music"}
            className="min-h-[36px] min-w-[36px] rounded-full bg-[#9E1B4F] text-white flex items-center justify-center hover:bg-[#7A123B] transition-colors disabled:opacity-45 cursor-pointer"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>

          <button
            type="button"
            onClick={() => onVolumeChange(volume > 0 ? 0 : 0.55)}
            aria-label={volume === 0 ? "Unmute music" : "Mute music"}
            className="text-[#765567] hover:text-[#9E1B4F] transition-colors cursor-pointer"
          >
            {volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={volume}
            onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
            aria-label="Music volume"
            className="w-20 accent-[#9E1B4F] cursor-pointer"
          />

          {audioMissing && (
            <span className="text-[11px] text-[#765567] whitespace-nowrap">
              Add background.mp3
            </span>
          )}
        </div>
      )}

      <div className="flex items-center gap-1.5">
        <button
          type="button"
          onClick={() => setShowControls((v) => !v)}
          aria-label="Toggle music controls"
          title={audioMissing ? "Add /public/assets/music/background.mp3" : "Music controls"}
          className="relative min-h-[44px] min-w-[44px] rounded-full bg-white/95 border border-[#E7C6D6] shadow-md flex items-center justify-center text-[#9E1B4F] hover:scale-105 active:scale-95 transition-transform cursor-pointer"
        >
          <Music
            className={`w-5 h-5 transition-transform ${isPlaying ? "animate-spin-slow" : ""}`}
          />
        </button>
      </div>
    </div>
  );
}
