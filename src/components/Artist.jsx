/** @format */

import { Play, Pause, Award, Music, Calendar, Users } from "lucide-react";
import { useState, useRef, useEffect } from "react";

// Sample images - replace with your actual images
const Artist1 =
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=500&fit=crop";
const Artist2 =
  "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=500&fit=crop";
const Artist3 =
  "https://images.unsplash.com/photo-1445985543470-41fba5c3144a?w=400&h=500&fit=crop";
const Artist4 =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop";
const Artist5 =
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop";

const songs = [
  {
    id: 1,
    title: "Pem Sihine",
    artist: "Sunil Edirisinghe",
    img: Artist1,
    audio: "/audios/pem-sihine.mp3",
  },
  {
    id: 2,
    title: "Sandakada Pahana",
    artist: "Amarasiri Peiris",
    img: Artist2,
    audio: "/audios/sandakada.mp3",
  },
  {
    id: 3,
    title: "Oba Ma Hamuwu Dine",
    artist: "Victor Rathnayake",
    img: Artist3,
    audio: "/audios/oba-ma.mp3",
  },
  {
    id: 4,
    title: "Sihinayaki Re",
    artist: "H.R. Jothipala",
    img: Artist4,
    audio: "/audios/sihinayaki.mp3",
  },
  {
    id: 5,
    title: "Me Pathume",
    artist: "T.M. Jayaratne",
    img: Artist5,
    audio: "/audios/me-pathume.mp3",
  },
];

const Artist = () => {
  const [isPlaying, setIsPlaying] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const audioRef = useRef();
  const intervalRef = useRef();

  // Auto-scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        setIsTransitioning(true);
        setActiveIndex((prev) => (prev + 1) % songs.length);
      }, 3000); // Change slide every 3 seconds
    };

    startAutoScroll();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Reset transition state
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    intervalRef.current = setInterval(() => {
      setIsTransitioning(true);
      setActiveIndex((prev) => (prev + 1) % songs.length);
    }, 3000);
  };

  const togglePlay = (song) => {
    if (isPlaying === song.id) {
      audioRef.current?.pause();
      setIsPlaying(null);
    } else {
      if (audioRef.current) {
        audioRef.current.src = song.audio;
        audioRef.current.play().catch(() => {
          console.log("Audio play failed");
        });
        setIsPlaying(song.id);
      }
    }
  };

  const getCardStyle = (index) => {
    const offset = index - activeIndex;
    const distance = 350;

    let transform = `translateX(${offset * distance}px)`;
    let scale = 1;
    let zIndex = songs.length - Math.abs(offset);
    let opacity = 1;
    let blur = 0;
    let brightness = 1;
    let rotateY = 0;

    if (offset === 0) {
      // Active card
      scale = 1.1;
      zIndex = songs.length + 1;
    } else {
      // Side cards
      scale = Math.max(0.7, 1 - Math.abs(offset) * 0.15);
      opacity =
        Math.abs(offset) > 2 ? 0 : Math.max(0.3, 1 - Math.abs(offset) * 0.3);
      blur = Math.abs(offset) * 2;
      brightness = 1 - Math.abs(offset) * 0.2;
      rotateY = offset * -15;
    }

    transform += ` scale(${scale}) rotateY(${rotateY}deg) translateY(${
      Math.abs(offset) * 20
    }px)`;

    return {
      transform,
      zIndex,
      opacity,
      filter: `blur(${blur}px) brightness(${brightness})`,
      transition: isTransitioning
        ? "all 0.7s cubic-bezier(0.4, 0.0, 0.2, 1)"
        : "all 0.3s ease",
    };
  };

  const achievements = [
    { icon: Award, label: "40+ Years Experience", desc: "Musical Journey" },
    { icon: Music, label: "500+ Songs", desc: "Original Compositions" },
    { icon: Calendar, label: "2000+ Concerts", desc: "Live Performances" },
    { icon: Users, label: "Millions of Fans", desc: "Worldwide Following" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Ambient Background Elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-amber-200/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-300/20 to-orange-300/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-yellow-300/20 to-amber-300/20 rounded-full blur-xl"></div>

      <div className="relative z-10 container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Left Side - 3D Auto-Scroll Carousel */}
          <div className="w-full flex flex-col items-center">
            <h2 className="text-3xl font-bold text-amber-800 mb-8">
              Music Carousel
            </h2>

            {/* 3D Carousel Container */}
            <div
              className="relative w-full h-[500px] flex justify-center items-center overflow-hidden"
              style={{ perspective: "1200px" }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {songs.map((song, index) => {
                const isActive = index === activeIndex;

                return (
                  <div
                    key={song.id}
                    className={`absolute w-72 h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-300 bg-gradient-to-br from-amber-100 to-orange-100 group cursor-pointer ${
                      isActive ? "shadow-amber-400/50 shadow-2xl" : ""
                    }`}
                    style={getCardStyle(index)}
                  >
                    {/* Image */}
                    <img
                      src={song.img}
                      alt={song.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Overlay Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/20 backdrop-blur-[1px]">
                      <button
                        onClick={() => togglePlay(song)}
                        className="w-20 h-20 bg-amber-100/95 backdrop-blur-sm rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-200 shadow-xl border-2 border-amber-200"
                      >
                        {isPlaying === song.id ? (
                          <Pause size={32} className="text-amber-800" />
                        ) : (
                          <Play size={32} className="text-amber-800 ml-1" />
                        )}
                      </button>
                    </div>

                    {/* Audio Visualizer */}
                    {isPlaying === song.id && (
                      <div className="absolute bottom-20 left-6 flex items-end space-x-1">
                        {Array.from({ length: 8 }).map((_, j) => (
                          <div
                            key={j}
                            className="w-1.5 bg-amber-200 rounded-full animate-pulse transition-all duration-200"
                            style={{
                              height: `${Math.random() * 40 + 8}px`,
                              opacity: 0.9,
                              animationDelay: `${j * 0.1}s`,
                            }}
                          />
                        ))}
                      </div>
                    )}

                    {/* Song Info */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-white font-bold text-lg mb-1">
                        {song.title}
                      </h3>
                      <p className="text-amber-200 text-sm">{song.artist}</p>
                    </div>

                    {/* Active Indicator */}
                    {isActive && (
                      <div className="absolute top-4 right-4 w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Progress Indicators */}
            <div className="flex space-x-2 mt-8">
              {songs.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    index === activeIndex
                      ? "bg-amber-600 w-8"
                      : "bg-amber-300 w-2"
                  }`}
                />
              ))}
            </div>

            {/* Audio Element */}
            <audio ref={audioRef} />
          </div>

          {/* Right Side - Bio Details */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-amber-800 leading-tight">
                Sunil
                <span className="block text-4xl lg:text-5xl text-amber-600">
                  Edirisinghe
                </span>
              </h1>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-0.5 bg-gradient-to-r from-amber-600 to-orange-500"></div>
                <p className="text-amber-700 font-medium text-lg">
                  The Legendary Voice
                </p>
              </div>
            </div>

            {/* Biography */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-amber-800 mb-4">
                Biography
              </h2>
              <p className="text-amber-900 leading-relaxed text-lg">
                For over four decades, Sunil Edirisinghe has been the golden
                voice of Sri Lankan classical music. His extraordinary talent
                has transcended generations, creating timeless melodies that
                continue to resonate with music lovers worldwide.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-amber-200/50 hover:bg-white/80 transition-all duration-300 hover:scale-105"
                  >
                    <Icon size={24} className="text-amber-600 mb-2" />
                    <h3 className="font-bold text-amber-800 text-sm">
                      {achievement.label}
                    </h3>
                    <p className="text-amber-700 text-xs">{achievement.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-full hover:from-amber-700 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get Tickets
              </button>
              <button className="px-8 py-4 border-2 border-amber-600 text-amber-700 font-bold rounded-full hover:bg-amber-600 hover:text-white transition-all transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artist;
