// Projects.js
import React, { useState, useEffect } from "react";
import Card from "./Card";
import Tooltip from "./Tooltip";
import Spinner from "./Spinner";

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/F13ND5/repos?visibility=public"
        );
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
        console.error("Error fetching GitHub projects:", error);
      }
    };

    fetchGitHubProjects();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <section className="my-12 sm:my-14 lg:my-16 p-6 rounded-lg shadow-md transition-all duration-300 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 hover:from-gray-200 hover:via-gray-300 hover:to-gray-400 dark:hover:from-gray-700 dark:hover:via-gray-600 dark:hover:to-gray-500">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 dark:text-gray-100 mb-6 leading-tight tracking-wide">
        Projects
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        {projects.map((project, index) => (
          <li key={index}>
            {project.description && (
              <Tooltip tooltipText={project.description}>
                <Card link={project.link}>{project.name}</Card>
              </Tooltip>
            )}
            {!project.description && (
              <Card link={project.link}>{project.name}</Card>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
