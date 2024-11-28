// Projects.js
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Card from "./Card";
import Tooltip from "./Tooltip";
import Spinner from "./Spinner";

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        const response = await fetch("https://api.github.com/users/F13ND5/repos?visibility=public");
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setProjects(
          data.map((repo) => ({
            name: repo.name,
            link: repo.html_url,
            description: repo.description,
          }))
        );
        setLoading(false);
      } catch (error) {
        setError("Failed to load projects. Please try again later.");
        setLoading(false); // Set loading to false even in case of error
      }
    };

    fetchGitHubProjects();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div
        className="flex items-center justify-center bg-red-100 text-red-700 
        p-5 rounded-lg shadow-lg space-x-3 w-full max-w-xl mx-auto"
      >
        <i className="fa fa-exclamation-triangle text-3xl"></i>
        <span className="text-lg font-medium">{error}</span>
        <button
          onClick={() => window.location.reload()}
          className="ml-4 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 
          focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          aria-label="Retry"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <section
      className="my-12 sm:my-14 lg:my-16 p-8 bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] 
    rounded-lg shadow-lg border border-[var(--border-light)] dark:border-[var(--border-dark)]"
    >
      <header className="mb-8">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-[var(--text-light)] dark:text-[var(--text-dark)] 
          leading-tight tracking-wide mb-8"
        >
          Projects
        </h2>
      </header>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 8000 }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
        className="pb-8"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="py-8">
            <Tooltip tooltipText={project.description || "No description available"}>
              <Card link={project.link}>
                <div className="flex items-center space-x-4">
                  <span className="text-xl font-medium text-[var(--text-light)] dark:text-[var(--text-dark)]">
                    {project.name}
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

export default Projects;
