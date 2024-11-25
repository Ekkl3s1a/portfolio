// Card.js
const Card = ({ children, link, image }) => {
  const content = (
    <div className="bg-white dark:bg-[var(--card-dark)] text-gray-900 dark:text-gray-100 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 hover:-rotate-1 transition-transform duration-300 border border-gray-200 dark:border-gray-700 flex flex-col items-center md:flex-row space-y-4 md:space-y-0 md:space-x-4">
      {image && (
        <img
          src={image}
          alt="Card visual"
          className="w-16 h-16 md:w-32 md:h-32 object-cover transition-transform duration-300"
        />
      )}
      <div>{children}</div>
    </div>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md"
      >
        {content}
      </a>
    );
  }

  return content;
};

export default Card;
