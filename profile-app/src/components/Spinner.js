// Spinner.js
const Spinner = () => {
  return (
    <div className="flex justify-center items-center space-x-4">
      <div className="w-16 h-16 border-4 border-t-transparent border-[var(--text-light)] dark:border-[var(--text-dark)] rounded-full animate-spin-slow"></div>
      <span className="text-lg text-[var(--text-light)] dark:text-[var(--text-dark)] font-medium">
        Loading...
      </span>
    </div>
  );
};

export default Spinner;
