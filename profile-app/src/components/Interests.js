// Interests.js
import Card from "./Card";

const interests = [
  {
    title: "Sports Enthusiast",
    details:
      "Regularly engage in sports, which reinforce strategic thinking, discipline, and teamwork.",
  },
  {
    title: "Programming & Tech Exploration",
    details:
      "Enthusiastic about experimenting with new languages and technologies, focusing on self-improvement and staying current with tech trends.",
  },
];

const Interests = () => {
  return (
    <section className="my-12 sm:my-14 lg:my-16 p-6 rounded-lg shadow-md transition-all duration-300 bg-[var(--gradient-light)] dark:bg-[var(--gradient-dark)] hover:bg-[var(--hover-light)] dark:hover:bg-[var(--hover-dark)]">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--text-light)] dark:text-[var(--text-dark)] mb-6 leading-tight tracking-wide">
        Interests
      </h2>
      <ul className="mt-4 text-lg text-[var(--text-light)] dark:text-[var(--text-dark)] leading-relaxed space-y-8">
      {interests.map((interest, index) => (
          <li key={index}>
              <Card>
                <strong className="text-gray-700 dark:text-gray-100">
                  {interest.title}:
                </strong>
                {" "}
                {interest.details}
              </Card>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Interests;
