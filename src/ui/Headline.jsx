function Headline({ children }) {
  return (
    <h1 className="text-3xl mx-3 md:text-4xl font-extrabold tracking-tight uppercase text-gray-700 md:p-4 text-center">
      {children}
    </h1>
  );
}

export default Headline;
