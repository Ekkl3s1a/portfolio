// Card.js
const Card = ({ children, link }) => {
  const content = (
    <div className="bg-[var(--card-light)] dark:bg-[var(--card-dark)] text-[var(--text-light)] dark:text-[var(--text-dark)] 
    p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 
    border border-[var(--border-light)] dark:border-[var(--border-dark)]">
        {children}
    </div>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
      >
        {content}
      </a>
    );
  }

  return content;
};

export default Card;
