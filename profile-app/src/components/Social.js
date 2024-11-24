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
    <section className="my-12 sm:my-14 lg:my-16 p-6 rounded-lg shadow-md transition-all duration-300 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 hover:from-gray-200 hover:via-gray-300 hover:to-gray-400 dark:hover:from-gray-700 dark:hover:via-gray-600 dark:hover:to-gray-500">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 dark:text-gray-100 mb-6 leading-tight tracking-wide">
        Social
      </h2>
      <ul className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-8">
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
