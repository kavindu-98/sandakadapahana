/** @format */

import { useState, useEffect } from "react";

const CountdownBox = ({ value, label }) => (
  <div className="relative">
    <div className="bg-white p-6 rounded-lg border border-[#7D020E] shadow-sm text-center">
      <div className="text-4xl font-bold mb-2" style={{ color: "#7D020E" }}>
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-gray-700 font-medium">{label}</div>
    </div>
  </div>
);

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const concertDate = new Date("2025-12-25T19:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = concertDate - now;

      const days = Math.max(Math.floor(difference / (1000 * 60 * 60 * 24)), 0);
      const hours = Math.max(
        Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        0
      );
      const minutes = Math.max(
        Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        0
      );
      const seconds = Math.max(
        Math.floor((difference % (1000 * 60)) / 1000),
        0
      );

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#7D020E" }}>
            Event Countdown
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Join us for an unforgettable evening of timeless melodies
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <CountdownBox value={timeLeft.days} label="Days" />
          <CountdownBox value={timeLeft.hours} label="Hours" />
          <CountdownBox value={timeLeft.minutes} label="Minutes" />
          <CountdownBox value={timeLeft.seconds} label="Seconds" />
        </div>

        <div className="text-center bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div className="mb-6">
            <div
              className="text-2xl font-bold mb-2"
              style={{ color: "#7D020E" }}
            >
              December 25, 2025
            </div>
            <div className="text-gray-700">7:00 PM onwards</div>
            <div className="text-gray-700 mt-1">
              National Arts Center, Colombo
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#booking"
              className="px-6 py-3 text-white font-semibold rounded-lg transition-colors"
              style={{
                backgroundColor: "#7D020E",
                hover: { backgroundColor: "#6A0109" },
              }}
            >
              Reserve Your Seat
            </a>
            <a
              href="#venue"
              className="px-6 py-3 rounded-lg border transition-colors"
              style={{ color: "#7D020E", borderColor: "#7D020E" }}
            >
              View Venue Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
