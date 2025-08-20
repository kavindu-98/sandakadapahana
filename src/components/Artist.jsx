/** @format */

import {
  Play,
  Pause,
  Volume2,
  Heart,
  Share2,
  Award,
  Music,
  Calendar,
  Users,
} from "lucide-react";
import ArtistImg from "../assets/images/sunil-edirisinghe.png";
import { useState, useRef, useEffect } from "react";
import { useSprings, animated, to } from "@react-spring/web";
import Artist1 from "../assets/images/sunil-edirisinghe.png";
import Artist2 from "../assets/images/img2.jpg";
import Artist3 from "../assets/images/img3.jpg";

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
];

// Carousel card positions
const toTransform = (i, activeIndex) => {
  const offset = i - activeIndex;
  return {
    x: offset * 300,
    scale: offset === 0 ? 1 : 0.8,
    zIndex: -Math.abs(offset),
    opacity: Math.abs(offset) > 2 ? 0 : 1,
  };
};

const Artist = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(243); // 4:03 in seconds
  const [volume, setVolume] = useState(0.7);
  const [isLiked, setIsLiked] = useState(false);

  // Audio visualizer bars
  const [audioLevels, setAudioLevels] = useState(Array(15).fill(0));

  const [activeIndex, setActiveIndex] = useState(0);

  const audioRef = useRef();

  const [springs, api] = useSprings(songs.length, (i) =>
    toTransform(i, activeIndex)
  );

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % songs.length);
    api.start((i) => toTransform(i, (activeIndex + 1) % songs.length));
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + songs.length) % songs.length);
    api.start((i) =>
      toTransform(i, (activeIndex - 1 + songs.length) % songs.length)
    );
  };

  const togglePlay = (song) => {
    if (isPlaying === song.id) {
      audioRef.current?.pause();
      setIsPlaying(null);
    } else {
      if (audioRef.current) {
        audioRef.current.src = song.audio;
        audioRef.current.play();
        setIsPlaying(song.id);
      }
    }
  };

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => (prev < duration ? prev + 1 : 0));
        // Simulate audio levels
        setAudioLevels(
          Array(15)
            .fill(0)
            .map(() => Math.random() * 80)
        );
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
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
          {/* Left Side - Artist Photo */}
          <div className="w-full flex flex-col items-center">
            <h2 className="text-3xl font-bold text-amber-800 mb-8">
              Music Carousel
            </h2>

            <div className="relative w-full flex justify-center items-center">
              {springs.map((style, i) => {
                const song = songs[i];
                return (
                  <animated.div
                    key={song.id}
                    className="absolute w-80 h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-300 bg-gradient-to-br from-amber-100 to-orange-100 group"
                    style={{
                      transform: to(
                        [style.x, style.scale],
                        (x, s) => `translate3d(${x}px,0,0) scale(${s})`
                      ),
                      zIndex: style.zIndex.to((z) => z),
                      opacity: style.opacity,
                    }}
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

                    {/* Visualizer */}
                    {isPlaying === song.id && (
                      <div className="absolute bottom-6 left-6 flex items-end space-x-1">
                        {Array.from({ length: 8 }).map((_, j) => (
                          <div
                            key={j}
                            className="w-1 bg-amber-200 rounded-full transition-all duration-200"
                            style={{
                              height: `${Math.random() * 40 + 8}px`,
                              opacity: 0.8,
                            }}
                          />
                        ))}
                      </div>
                    )}

                    {/* Song Info */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/40 p-4">
                      <h3 className="text-white font-bold text-lg">
                        {song.title}
                      </h3>
                      <p className="text-amber-200 text-sm">{song.artist}</p>
                    </div>
                  </animated.div>
                );
              })}
            </div>

            {/* Controls */}
            <div className="flex space-x-6 mt-80">
              <button
                onClick={prev}
                className="px-4 py-2 bg-amber-500 text-white rounded-xl shadow-md hover:bg-amber-600"
              >
                Prev
              </button>
              <button
                onClick={next}
                className="px-4 py-2 bg-amber-500 text-white rounded-xl shadow-md hover:bg-amber-600"
              >
                Next
              </button>
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

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(to right, #d97706, #ea580c);
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(to right, #d97706, #ea580c);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};

export default Artist;
