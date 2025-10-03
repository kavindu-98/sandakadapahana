/** @format */

import { Award, Music, Calendar, Users } from "lucide-react";
import sunilImg from "../assets/images/sunil-edirisinghe.webp";
import sankaImg from "../assets/images/sanka.webp";
import sankaniImg from "../assets/images/sankani.webp";

const Artist = () => {
  const achievements = [
    { icon: Award, label: "40+ Years Experience", desc: "Musical Journey" },
    { icon: Music, label: "500+ Songs", desc: "Original Compositions" },
    { icon: Calendar, label: "2000+ Concerts", desc: "Live Performances" },
    { icon: Users, label: "Millions of Fans", desc: "Worldwide Following" },
  ];

  return (
    <div
      id="artist"
      className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden"
    >
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
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

      {/* Sunil Edirisinghe Section - Image Left, Bio Right */}
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
              <p className="text-amber-900 leading-relaxed text-lg">
                Sunil Edirisinghe, born on 19 December 1949 in Kelaniya, is one
                of Sri Lanka's most admired classical and playback singers. With
                a career spanning over five decades, he is celebrated for his
                rich, soulful voice and mastery in blending classical traditions
                with the beauty of Sinhala music. His journey began with the
                iconic playback song Sandakada Pahana for the film Matara
                Achchi, which remains a timeless favorite. Over the years, Sunil
                has captivated audiences through numerous film songs, solo
                albums, and live performances, earning prestigious awards and
                recognition for his artistry.
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
                href="#contact"
                className="px-8 py-4 border-2 border-amber-600 text-amber-700 font-bold rounded-full hover:bg-amber-600 hover:text-white transition-all transform hover:scale-105 text-center inline-block"
              >
                More Details
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sanka Edirisinghe Section - Bio Left, Image Right */}
      <div className="relative z-10 container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Left Side - Bio Details */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-amber-800 leading-tight">
                Sanka Edirisinghe
                <span className="block text-amber-400 text-3xl lg:text-4xl font-semibold mt-1">
                  සංඛ එදිරිසිංහ
                </span>
              </h1>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-0.5 bg-gradient-to-r from-amber-600 to-orange-500"></div>
                <p className="text-amber-700 font-medium text-lg">
                  The Musical Heritage
                </p>
              </div>
            </div>

            {/* Biography */}
            <div className="space-y-4">
              <p className="text-amber-900 leading-relaxed text-lg">
                Sankha Chamindra Edirisinghe (born 1980) is the eldest child of
                the legendary Sri Lankan singer Sunil Edirisinghe and Nandani
                "Kumudu" Munasinghe. From a young age he has shared the stage
                with his father, contributing to performances and recordings
                such as "Kandulu Denna" and "Gangata Kapana Ini". While music
                remains close to his heart, Sankha also pursues a professional
                career outside the arts, including work in medical warehouse
                management in the UK, and is engaged in cultural and
                philanthropic pursuits as a co-founder of the RuRi Foundation.
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-amber-600 text-amber-700 font-bold rounded-full hover:bg-amber-600 hover:text-white transition-all transform hover:scale-105 text-center inline-block"
              >
                More Details
              </a>
            </div>
          </div>

          {/* Right Side - Artist Image */}
          <div className="w-full flex justify-center">
            <img
              src={sankaImg}
              alt="Sanka Edirisinghe"
              className="shadow-2xl w-[500px] h-[500px] object-cover"
              style={{ display: "block" }}
            />
          </div>
        </div>
      </div>

      {/* Sankani Edirisinghe Section - Image Left, Bio Right */}
      <div className="relative z-10 container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Left Side - Artist Image */}
          <div className="w-full flex justify-center">
            <img
              src={sankaniImg}
              alt="Sankani Edirisinghe"
              className="shadow-2xl w-[500px] h-[500px] object-cover"
              style={{ display: "block" }}
            />
          </div>

          {/* Right Side - Bio Details */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-amber-800 leading-tight">
                Sankani Edirisinghe
                <span className="block text-amber-400 text-3xl lg:text-4xl font-semibold mt-1">
                  සංඛනී එදිරිසිංහ
                </span>
              </h1>
              <div className="flex items-center space-x-2">
                <div className="w-12 h-0.5 bg-gradient-to-r from-amber-600 to-orange-500"></div>
                <p className="text-amber-700 font-medium text-lg">
                  The Rising Star
                </p>
              </div>
            </div>

            {/* Biography */}
            <div className="space-y-4">
              <p className="text-amber-900 leading-relaxed text-lg">
                Sankani Edirisinghe is the daughter of the
                celebrated Sri Lankan classical singer Sunil Edirisinghe and
                Nandani "Kumudu" Munasinghe. She has grown up immersed in music,
                and is recognized for her vocal talent, appearing in musical
                collaborations such as "Ahasai Oba Mata" (with her brother) and
                performing "Wiyo Wu Pasuwai" in televised concerts. Sankani is
                also listed as an artist on streaming platforms like Apple Music
                and Spotify.
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-amber-600 text-amber-700 font-bold rounded-full hover:bg-amber-600 hover:text-white transition-all transform hover:scale-105 text-center inline-block"
              >
                More Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artist;
