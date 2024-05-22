function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;