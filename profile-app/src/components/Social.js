// Social.js
import Card from "./Card";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    name: "LinkedIn Profile",
    link: "https://www.linkedin.com/in/bruno-mr-carvalho/",
    image: (
      <FontAwesomeIcon
        icon={faLinkedin}
        className="mr-2 text-3xl text-blue-600 hover:text-blue-800 focus:text-blue-800 transition-colors duration-300"
      />
    ),
  },
  {
    name: "GitHub Profile",
    link: "https://github.com/f13nd5",
    image: (
      <FontAwesomeIcon
        icon={faGithub}
        className="mr-2 text-3xl text-black-600 hover:text-gray-700 focus:text-gray-700 transition-colors duration-300"
      />
    ),
  },
];

const Social = () => {
  return (
    <section
      className="place-self-stretch my-12 sm:my-14 lg:my-16 p-8 bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] 
      rounded-lg shadow-lg border border-[var(--border-light)] dark:border-[var(--border-dark)]"
    >
      <header className="mb-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--text-light)] dark:text-[var(--text-dark)] leading-tight tracking-wide mb-8">
          Social
        </h2>
      </header>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 leading-relaxed">
        {socials.map((social, index) => (
          <li key={index}>
            <Card link={social.link} >
              <div className="flex items-center space-x-4">
                {social.image}
                <span className="text-xl font-medium text-[var(--text-light)] dark:text-[var(--text-dark)]">
                  {social.name}
                </span>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Social;
