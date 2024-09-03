function Jumbotron({ image, children }) {
  let backgroundImage = null;
  switch (image) {
    case "hand":
      backgroundImage =
        "bg-cover bg-no-repeat bg-[url('/hand-massage.jpg')] bg-top flex flex-col";
  }

  return (
    <section className={backgroundImage}>
      <div className="text-center w-full py-12 md:h-[75dvh] flex justify-center items-center">
        {children}
      </div>
    </section>
  );
}

export default Jumbotron;
