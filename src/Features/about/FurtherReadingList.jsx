import scienceArticles from "../../data/ScienceArticles";
import FurtherReadingItem from "./FurtherReadingItem";
import Headline from "../../ui/Headline";

function FurtherReadingList() {
  return (
    <section
      id="citation"
      className="mx-auto md:px-8 w-11/12 md:w-full flex flex-col items-center justify-start bg-white h-[60dvh] md:h-[50dvh] border-2 shadow md:shadow-lg md:max-w-screen-2xl"
    >
      <Headline className="md:mt-8 mt-6">Further Reading</Headline>
      <hr className="border-[#60A76F] w-1/4 border-2 my-3 mb-7 md:mb-12" />
      <ul className="text-left  flex flex-col gap-8 w-11/12 md:w-full">
        {scienceArticles.map((article) => (
          <FurtherReadingItem
            key={article.title}
            title={article.title}
            author={article.author}
            url={article.url}
          />
        ))}
      </ul>
    </section>
  );
}

export default FurtherReadingList;
