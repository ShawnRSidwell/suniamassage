function Button({ onClick, className, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-cPurple-600 text-white rounded-md focus:outline-none hover:bg-cPurple-300 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
