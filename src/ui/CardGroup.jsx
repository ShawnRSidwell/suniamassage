import cardData from "../data/CardData";
import Card from "./Card";

function CardGroup() {
  return (
    <div className="mx-5 md:my-9 md:flex-row md:gap-5 md:items-center md:justify-center flex flex-col gap-8 my-8">
      {cardData.map((card) => (
        <Card
          key={card.title}
          title={card.title}
          image={card.image}
          description={card.description}
          action={card.action}
          reverse={card?.reverse | false}
        />
      ))}
    </div>
  );
}

export default CardGroup;
