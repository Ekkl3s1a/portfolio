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
    <section
      className="my-12 sm:my-14 lg:my-16 p-8 bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] 
    rounded-lg shadow-lg border border-[var(--border-light)] dark:border-[var(--border-dark)]"
    >
      <header className="mb-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--text-light)] dark:text-[var(--text-dark)] leading-tight tracking-wide mb-8">
          Interests
        </h2>
      </header>
      <ul className="space-y-8 leading-relaxed">
        {interests.map((interest, index) => (
          <li key={index}>
            <Card>
            <div>
                <h3 className="text-xl font-semibold text-[var(--text-light)] dark:text-[var(--text-dark)] mb-2">
                  {interest.title}
                </h3>
                <p className="text-sm text-[var(--text-light)] dark:text-[var(--text-dark)]">
                  {interest.details}
                </p>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Interests;
