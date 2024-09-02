import scienceArticles from "../../data/ScienceArticles";
import FurtherReadingItem from "./FurtherReadingItem";
import Headline from "../../ui/Headline";

function FurtherReadingList() {
  return (
    <div className="mx-auto my-5 md:px-0 w-11/12 md:w-full flex flex-col items-center justify-center bg-white h-[70dvh] md:h-[50dvh]  shadow md:shadow-none md:max-w-screen-2xl">
      <Headline className="">Further Reading</Headline>
      <hr className="border-[#60A76F] w-1/4 border-2 my-3 mb-7" />
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
    </div>
  );
}

export default FurtherReadingList;
