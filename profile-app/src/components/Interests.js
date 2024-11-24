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
    <section className="my-12 sm:my-14 lg:my-16 p-6 rounded-lg shadow-md transition-all duration-300 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 hover:from-gray-200 hover:via-gray-300 hover:to-gray-400 dark:hover:from-gray-700 dark:hover:via-gray-600 dark:hover:to-gray-500">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 dark:text-gray-100 mb-6 leading-tight tracking-wide">
        Interests
      </h2>
      <ul className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-8">
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
