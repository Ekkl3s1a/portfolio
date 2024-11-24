// CoreCompetencies.js
import Card from "./Card";

const competencies = [
  {
    title: "Programming & Frameworks",
    details:
      "Python, Java, JavaScript, ASP.NET, C/C++, HTML, CSS, AngularJS, JQuery, Node.js, React.js, Django.",
  },
  {
    title: "Tools & Platforms",
    details:
      "Mulesoft, Maven, Jenkins, Docker, Kubernetes, Salesforce, Google Cloud Platform, PostgreSQL, SQL Server, MySQL, MongoDB, Firebase, RabbitMQ, Coralogix, Kibana.",
  },
  {
    title: "Professional Skills",
    details:
      "Organization, Leadership, Time Management, Team Collaboration, Quick Learning, Proactivity.",
  },
];

const CoreCompetencies = () => {
  return (
    <section className="my-12 sm:my-14 lg:my-16 p-6 rounded-lg shadow-md transition-all duration-300 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 hover:from-gray-200 hover:via-gray-300 hover:to-gray-400 dark:hover:from-gray-700 dark:hover:via-gray-600 dark:hover:to-gray-500">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 dark:text-gray-100 mb-6 leading-tight tracking-wide">
        Core Competencies
      </h2>
      <ul className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-8">
        {competencies.map((competency, index) => (
          <li key={index}>
              <Card>
                <strong className="text-gray-700 dark:text-gray-100">
                  {competency.title}:
                </strong>
                {" "}
                {competency.details}
              </Card>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CoreCompetencies;
