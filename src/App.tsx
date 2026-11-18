import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FAIRYTALE_CONFIG } from "./config/fairytaleConfig";
import { AmbientLayer } from "./components/AmbientLayer";
import { KingdomChrome } from "./components/KingdomChrome";
import { MusicPlayer } from "./components/MusicPlayer";
import { IntroLoader } from "./components/IntroLoader";
import { Page1Invitation } from "./components/pages/Page1Invitation";
import { Page2CastleGates } from "./components/pages/Page2CastleGates";
import { Page3MagicMirror } from "./components/pages/Page3MagicMirror";
import { Page4RoyalOrders } from "./components/pages/Page4RoyalOrders";
import { Page5PhotoGallery } from "./components/pages/Page5PhotoGallery";
import { Page6FinalReveal } from "./components/pages/Page6FinalReveal";

const TOTAL_CHAPTERS = 6;

export default function App() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [navDirection, setNavDirection] = useState<1 | -1>(1);
  const [crownTaps, setCrownTaps] = useState(0);
  const [showSecretNote, setShowSecretNote] = useState(false);

  // Persistent background audio state
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [audioMissing, setAudioMissing] = useState(false);
  const [volume, setVolume] = useState<number>(FAIRYTALE_CONFIG.music.defaultVolume);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const startMusicOnFirstGesture = useCallback(() => {
    if (hasInteracted) return;
    setHasInteracted(true);
    const audio = audioRef.current;
    if (!audio || audioMissing) return;

    audio.volume = volume;
    audio
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {
        // Ignore if file is absent or blocked until explicit play tap
        setIsPlaying(false);
      });
  }, [hasInteracted, audioMissing, volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio || audioMissing) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch(() => {
          setAudioMissing(true);
          setIsPlaying(false);
        });
    }
  };

  const goToPage = useCallback((nextPage: number) => {
    setCurrentPage((prev) => {
      setNavDirection(nextPage >= prev ? 1 : -1);
      return nextPage;
    });
  }, []);

  const handleBack = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const handleReplay = () => {
    setNavDirection(1);
    setCurrentPage(0);
  };

  const handleCrownClick = () => {
    startMusicOnFirstGesture();
    setCrownTaps((prev) => {
      const next = prev + 1;
      if (next >= FAIRYTALE_CONFIG.crownEasterEgg.tapsRequired) {
        setShowSecretNote(true);
        return 0;
      }
      return next;
    });
  };

  const isStarryPage = currentPage === 5;

  return (
    <div
      className="min-h-[100dvh] w-full flex items-center justify-center sm:p-4 md:p-6 select-none"
      style={{
        background:
          "radial-gradient(circle at 50% 25%, #F2E2EA 0%, #E6D2DC 60%, #DEC6D3 100%)",
      }}
      onPointerDown={() => {
        if (!hasInteracted && currentPage >= 1) {
          startMusicOnFirstGesture();
        }
      }}
    >
      {/* Persistent Audio Element */}
      <audio
        ref={audioRef}
        src={FAIRYTALE_CONFIG.music.src}
        loop
        preload="auto"
        onError={() => {
          setAudioMissing(true);
          setIsPlaying(false);
        }}
      />

      {/* Centered Mobile-Proportioned Royal Storybook Frame */}
      <main
        className={`relative w-full min-h-[100dvh] sm:min-h-[740px] sm:h-[88dvh] sm:max-h-[860px] sm:max-w-[430px] sm:rounded-[32px] sm:border sm:border-white/75 sm:shadow-[0_26px_64px_rgba(92,38,68,0.22)] flex flex-col overflow-hidden transition-colors duration-500 ${
          isStarryPage ? "bg-starry-plum" : "bg-blush-dots"
        }`}
      >
        {/* Subtle Ambient Hearts, Sparkles, Butterfly & Desktop Crown Cursor */}
        <AmbientLayer darkTheme={isStarryPage} />

        {/* Top Bar with Back, Progress, Days Counter, & Crown Easter Egg */}
        {currentPage >= 1 && (
          <KingdomChrome
            currentPage={currentPage}
            totalPages={TOTAL_CHAPTERS}
            darkTheme={isStarryPage}
            onBack={handleBack}
            onCrownClick={handleCrownClick}
            crownTaps={crownTaps}
            showSecretNote={showSecretNote}
            onCloseSecretNote={() => setShowSecretNote(false)}
          />
        )}

        {/* Active Chapter Viewport */}
        <div className="relative z-20 flex-1 flex flex-col overflow-y-auto royal-scroll pb-16">
          <AnimatePresence mode="wait" custom={navDirection}>
            {currentPage === 0 && (
              <motion.div
                key="intro"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="flex-1 flex flex-col"
              >
                <IntroLoader onComplete={() => goToPage(1)} />
              </motion.div>
            )}

            {currentPage === 1 && (
              <motion.div
                key="page1"
                initial={{ opacity: 0, x: navDirection * 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: navDirection * -24 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 flex flex-col"
              >
                <Page1Invitation
                  onFirstInteract={startMusicOnFirstGesture}
                  onNext={() => goToPage(2)}
                />
              </motion.div>
            )}

            {currentPage === 2 && (
              <motion.div
                key="page2"
                initial={{ opacity: 0, x: navDirection * 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: navDirection * -24 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 flex flex-col"
              >
                <Page2CastleGates onNext={() => goToPage(3)} />
              </motion.div>
            )}

            {currentPage === 3 && (
              <motion.div
                key="page3"
                initial={{ opacity: 0, x: navDirection * 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: navDirection * -24 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 flex flex-col"
              >
                <Page3MagicMirror onNext={() => goToPage(4)} />
              </motion.div>
            )}

            {currentPage === 4 && (
              <motion.div
                key="page4"
                initial={{ opacity: 0, x: navDirection * 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: navDirection * -24 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 flex flex-col"
              >
                <Page4RoyalOrders onNext={() => goToPage(5)} />
              </motion.div>
            )}

            {currentPage === 5 && (
              <motion.div
                key="page5"
                initial={{ opacity: 0, x: navDirection * 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: navDirection * -24 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 flex flex-col"
              >
                <Page5PhotoGallery onNext={() => goToPage(6)} />
              </motion.div>
            )}

            {currentPage === 6 && (
              <motion.div
                key="page6"
                initial={{ opacity: 0, x: navDirection * 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: navDirection * -24 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 flex flex-col"
              >
                <Page6FinalReveal onReplay={handleReplay} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom-Right Floating Music Player */}
        <MusicPlayer
          isPlaying={isPlaying}
          volume={volume}
          audioMissing={audioMissing}
          onTogglePlay={togglePlay}
          onVolumeChange={setVolume}
        />
      </main>
    </div>
  );
}
