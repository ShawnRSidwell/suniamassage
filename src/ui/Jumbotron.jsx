function Jumbotron({ image, color, children }) {
  let backgroundImage = null;
  let boxColor = null;
  switch (image) {
    case "hand":
      backgroundImage =
        "bg-cover bg-no-repeat bg-[url('/hand-massage.jpg')] bg-top flex flex-col";
  }
  switch (color) {
    case "beige":
      boxColor = "bg-cBeige-300 w-4/5  rounded-3xl p-6 md:p-16 shadow-lg";
  }

  return (
    <section className={backgroundImage}>
      <div className="text-center w-full h-[65dvh] md:h-[75dvh] flex justify-center items-center">
        <div className={boxColor}>
          <div className="">{children}</div>
        </div>
      </div>
    </section>
  );
}

export default Jumbotron;
