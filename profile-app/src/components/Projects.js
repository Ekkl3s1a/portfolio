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
    <section className="my-12 sm:my-14 lg:my-16 p-6 rounded-lg shadow-md transition-all duration-300 bg-[var(--gradient-light)] dark:bg-[var(--gradient-dark)] hover:bg-[var(--hover-light)] dark:hover:bg-[var(--hover-dark)]">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--text-light)] dark:text-[var(--text-dark)] mb-6 leading-tight tracking-wide">
        Projects
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-4 text-lg text-[var(--text-light)] dark:text-[var(--text-dark)] leading-relaxed">
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
