// Profile.js
import Card from "./Card";

const Profile = () => {
  return (
    <section className="my-12 sm:my-14 lg:my-16 p-6 rounded-lg shadow-md transition-all duration-300 bg-[var(--gradient-light)] dark:bg-[var(--gradient-dark)] hover:bg-[var(--hover-light)] dark:hover:bg-[var(--hover-dark)]">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--text-light)] dark:text-[var(--text-dark)] mb-6 leading-tight tracking-wide">
        Profile
      </h2>
      <ul className="mt-4 text-lg text-[var(--text-light)] dark:text-[var(--text-dark)] leading-relaxed space-y-8">
        <li>
          <Card>
            Solution-oriented programmer skilled in full-stack development and
            API engineering with robust experience in REST and SOAP integrations
            for high-profile clients. Passionate about technology, continuous
            learning, and teamwork, with a demonstrated record of successful
            collaboration on complex projects. Known for proactive
            problem-solving and strong technical proficiency in Python, Java,
            JavaScript, and API management tools.
          </Card>
        </li>
      </ul>
    </section>
  );
};

export default Profile;
