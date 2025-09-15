/** @format */

import { Award, Music, Calendar, Users } from "lucide-react";
import sunilImg from "../assets/images/sunil-edirisinghe.png";

const Artist = () => {
  const achievements = [
    { icon: Award, label: "40+ Years Experience", desc: "Musical Journey" },
    { icon: Music, label: "500+ Songs", desc: "Original Compositions" },
    { icon: Calendar, label: "2000+ Concerts", desc: "Live Performances" },
    { icon: Users, label: "Millions of Fans", desc: "Worldwide Following" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
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

      <div className="relative z-10 container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Left Side - Artist Image */}
          <div className="w-full flex justify-center">
            <img
              src={sunilImg}
              alt="Sunil Edirisinghe"
              className="shadow-2xl w-[500px] h-[500px] object-cover"
              style={{ display: "block" }}
            />
          </div>

          {/* Right Side - Bio Details */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-amber-800 leading-tight">
                Sunil Edirisinghe
                <span className="block text-amber-400 text-3xl lg:text-4xl font-semibold mt-1">
                  සුනිල් එදිරිසිංහ
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
              <a
                href="https://oneticket.lk/5YNA1190965E4FD352CB2"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold rounded-full hover:from-amber-700 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
              >
                Get Tickets
              </a>
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
