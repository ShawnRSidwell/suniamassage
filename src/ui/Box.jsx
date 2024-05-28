import Headline from "./Headline";

function Box({ headline, className, children }) {
  return (
    <div
      className={`mx-auto p-5 m-3 border-[#60A76F] border-4 max-w-xl ring-[#60A76F] ring-2 ring-offset-4 ${className}`}
    >
      <Headline>{headline}</Headline>
      {children}
    </div>
  );
}

export default Box;
