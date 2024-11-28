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
    <section
      className="place-self-stretch my-12 sm:my-14 lg:my-16 p-8 bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] 
    rounded-lg shadow-lg border border-[var(--border-light)] dark:border-[var(--border-dark)]"
    >
      <header className="mb-8">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--text-light)] dark:text-[var(--text-dark)] leading-tight tracking-wide mb-8">
        Core Competencies
      </h2>
      </header>
      <ul className="space-y-8 leading-relaxed">
        {competencies.map((competency, index) => (
          <li key={index}>
            <Card>
              <div>
                <h3 className="text-xl font-semibold text-[var(--text-light)] dark:text-[var(--text-dark)] mb-2">
                  {competency.title}
                </h3>
                <p className="text-sm text-[var(--text-light)] dark:text-[var(--text-dark)]">
                  {competency.details}
                </p>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CoreCompetencies;
