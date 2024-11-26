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
    <section className="my-12 sm:my-14 lg:my-16 p-6 rounded-lg shadow-md transition-all duration-300 bg-[var(--gradient-light)] dark:bg-[var(--gradient-dark)] hover:bg-[var(--hover-light)] dark:hover:bg-[var(--hover-dark)]">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--text-light)] dark:text-[var(--text-dark)] mb-6 leading-tight tracking-wide">
        Social
      </h2>
      <ul className="mt-4 text-lg text-[var(--text-light)] dark:text-[var(--text-dark)] leading-relaxed space-y-8">
        {socials.map((social, index) => (
          <li key={index}>
            <Card link={social.link}>
              {social.image}
              {social.name}
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Social;
