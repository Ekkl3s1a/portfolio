// Profile.js
import Card from "./Card";

const Profile = () => {
  return (
    <section
      className="min-w-full my-12 sm:my-14 lg:my-16 p-8 bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] 
    rounded-lg shadow-lg border border-[var(--border-light)] dark:border-[var(--border-dark)]"
    >
      <header className="mb-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--text-light)] dark:text-[var(--text-dark)] leading-tight tracking-wide mb-8">
          Professional Profile
        </h2>
        <p className="text-lg text-[var(--text-light)] dark:text-[var(--text-dark)] mt-2">
          A concise summary of expertise, skills, and professional achievements.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-xl font-semibold text-[var(--text-light)] dark:text-[var(--text-dark)] mb-2">
            Technical Expertise
          </h3>
          <p className="text-sm text-[var(--text-light)] dark:text-[var(--text-dark)]">
            Proficient in full-stack development with expertise in Python, Java,
            JavaScript, and modern frameworks. Extensive experience in API
            design and integration for scalable solutions.
          </p>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold text-[var(--text-light)] dark:text-[var(--text-dark)] mb-2">
            Professional Achievements
          </h3>
          <p className="text-sm text-[var(--text-light)] dark:text-[var(--text-dark)]">
            Successfully delivered high-impact projects for global clients,
            leveraging problem-solving and innovative technical solutions. Adept
            at leading teams and fostering collaboration.
          </p>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold text-[var(--text-light)] dark:text-[var(--text-dark)] mb-2">
            Career Highlights
          </h3>
          <p className="text-sm text-[var(--text-light)] dark:text-[var(--text-dark)]">
            Consistently recognized for delivering projects on time and
            exceeding client expectations. Demonstrated ability to adapt and
            excel in dynamic environments.
          </p>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold text-[var(--text-light)] dark:text-[var(--text-dark)] mb-2">
            Passion and Vision
          </h3>
          <p className="text-sm text-[var(--text-light)] dark:text-[var(--text-dark)]">
            Passionate about technology and its transformative potential.
            Focused on continuous learning and contributing to innovative
            solutions that drive impactful results.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Profile;
