// Certifications.js
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Card from "./Card";
import Tooltip from "./Tooltip";
import CEH_Badge from "../assets/CEH_Badge.png";
import PCEP_Badge from "../assets/PCEP_Badge.png";
import PSMI_Badge from "../assets/PSMI_Badge.png";
import Spinner from "./Spinner";

const certifications = [
  {
    name: "Professional Scrum Master™ I (PSM I)",
    link: "https://www.credly.com/badges/7d9cf6a4-46a3-4f70-a37f-f83a76e46e6a/public_url",
    image: PSMI_Badge,
    description: "A globally recognized certification for Scrum expertise.",
  },
  {
    name: "Certified Entry-Level Python Programmer (PCEP)",
    link: "https://www.credly.com/badges/3b565ecb-d926-4370-bf83-3ed9b7abdca0",
    image: PCEP_Badge,
    description: "Demonstrates foundational Python programming skills.",
  },
  {
    name: "Certified Ethical Hacker (CEH)",
    link: "https://aspen.eccouncil.org/VerifyBadge?type=certification&a=+ZMl1Ymtb/WdN6NmvEP5+KjdBwzidpg5dU3oo8qNQO0=",
    image: CEH_Badge,
    description:
      "Validates skills in identifying and preventing cybersecurity threats.",
  },
];

const Certifications = () => {
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Simulate loading delay for demonstration purposes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // simulate 1-second loading time
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />; // Display spinner while loading
  }

  return (
    <section
      className="my-12 sm:my-14 lg:my-16 p-8 bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] 
    rounded-lg shadow-lg border border-[var(--border-light)] dark:border-[var(--border-dark)]"
    >
      <header className="mb-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--text-light)] dark:text-[var(--text-dark)] leading-tight tracking-wide mb-8">
          Certifications
        </h2>
      </header>

      {/* Swiper */}
      <Swiper
        effect="cube"
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.9,
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 8000 }}
        loop={true}
        speed={1500}
        modules={[EffectCube, Navigation, Pagination]}
        className="swiper"
      >
        {certifications.map((cert, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <Tooltip tooltipText={cert.description}>
              <Card link={cert.link}>
                <div className="flex flex-col items-center text-center space-y-4">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-16 h-16 md:w-24 md:h-24 object-contain transition-transform duration-300 hover:scale-110"
                  />
                  <span className="text-lg font-medium text-[var(--text-light)] dark:text-[var(--text-dark)]">
                    {cert.name}
                  </span>
                </div>
              </Card>
            </Tooltip>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Certifications;
