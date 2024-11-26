// Certifications.js
import Card from "./Card";
import Tooltip from "./Tooltip";
import CEH_Badge from "../assets/CEH_Badge.png";
import PCEP_Badge from "../assets/PCEP_Badge.png";
import PSMI_Badge from "../assets/PSMI_Badge.png";

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
    description: "Validates skills in identifying and preventing cybersecurity threats.",
  },
];

const Certifications = () => {
  return (
    <section className="my-12 sm:my-14 lg:my-16 p-6 rounded-lg shadow-md transition-all duration-300 bg-[var(--gradient-light)] dark:bg-[var(--gradient-dark)] hover:bg-[var(--hover-light)] dark:hover:bg-[var(--hover-dark)]">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--text-light)] dark:text-[var(--text-dark)] mb-6 leading-tight tracking-wide">
        Certifications
      </h2>
      <ul className="mt-4 text-lg text-[var(--text-light)] dark:text-[var(--text-dark)] leading-relaxed space-y-8">
        {certifications.map((cert, index) => (
          <li key={index}>
            <Tooltip tooltipText={cert.description}>
              <Card link={cert.link} image={cert.image}>
                {cert.name}
              </Card>
            </Tooltip>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
