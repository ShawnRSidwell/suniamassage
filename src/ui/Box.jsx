import Headline from "./Headline";

function Box({ headline, className, children }) {
  return (
    <div
      className={`mx-auto w-11/12 p-3 md:p-5 m-3 border-cGreen-500 border-4 max-w-xl ring-cGreen-500 ring-2 ring-offset-4 ${className}`}
    >
      <Headline>{headline}</Headline>
      {children}
    </div>
  );
}

export default Box;
