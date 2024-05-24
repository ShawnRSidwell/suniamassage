import Button from "./Button";

function Panel({ headline, buttonText, children }) {
  return (
    <section>
      <h className="text-xl uppercase font-bold tracking-wide text-[#60A76F] text-center py-3">
        {headline}
      </h>
      <div className="text-center text-gray-700">{children}</div>
      <Button className="font-semibold">{buttonText}</Button>
    </section>
  );
}

export default Panel;
