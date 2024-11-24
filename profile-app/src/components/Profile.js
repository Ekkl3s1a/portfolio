// Profile.js
import Card from "./Card";

const Profile = () => {
  return (
    <section className="my-12 sm:my-14 lg:my-16 p-6 rounded-lg shadow-md transition-all duration-300 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 hover:from-gray-200 hover:via-gray-300 hover:to-gray-400 dark:hover:from-gray-700 dark:hover:via-gray-600 dark:hover:to-gray-500">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 dark:text-gray-100 mb-6 leading-tight tracking-wide">
        Profile
      </h2>
      <ul className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-8">
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
