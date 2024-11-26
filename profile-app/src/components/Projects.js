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
    <section
      className="my-12 sm:my-14 lg:my-16 p-8 bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] 
    rounded-lg shadow-lg border border-[var(--border-light)] dark:border-[var(--border-dark)]"
    >
      <header className="mb-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--text-light)] dark:text-[var(--text-dark)] leading-tight tracking-wide mb-8">
          Projects
        </h2>
      </header>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 leading-relaxed">
        {projects.map((project, index) => (
          <li key={index}>
            {project.description && (
              <Tooltip tooltipText={project.description}>
                <Card link={project.link}>
                  <div className="flex items-center space-x-4">
                    <span className="text-xl font-medium text-[var(--text-light)] dark:text-[var(--text-dark)]">
                      {project.name}
                    </span>
                  </div>
                </Card>
              </Tooltip>
            )}
            {!project.description && (
              <Card link={project.link}>
                <div className="flex items-center space-x-4">
                  <span className="text-xl font-medium text-[var(--text-light)] dark:text-[var(--text-dark)]">
                    {project.name}
                  </span>
                </div>
              </Card>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
