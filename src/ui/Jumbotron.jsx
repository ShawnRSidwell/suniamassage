function Jumbotron({ image, color, children }) {
  return (
    <section
      className={`bg-cover bg-no-repeat bg-${image} bg-top flex flex-col `}
    >
      <div className="text-center w-full h-[75dvh] flex justify-center items-center">
        <div
          className={`${
            "bg-" + color || "bg-white"
          } w-3/4 rounded-3xl p-6 shadow-lg`}
        >
          <div className="bg-normal">{children}</div>
        </div>
      </div>
    </section>
  );
}

export default Jumbotron;
