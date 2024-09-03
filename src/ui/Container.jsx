function Container({ className, children }) {
  return (
    <div
      className={`bg-cBeige-200 mx-3 md:w-4/5  rounded-3xl p-6 md:p-16 shadow-lg md:mx-0 ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;
