function Headline({ color, className, children }) {
  return (
    <h1
      className={`text-3xl md:text-4xl font-extrabold tracking-tight uppercase ${
        color || "text-gray-700"
      }  ${className}`}
    >
      {children}
    </h1>
  );
}

export default Headline;
