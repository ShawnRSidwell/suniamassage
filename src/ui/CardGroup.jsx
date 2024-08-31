import cardData from "../data/CardData";
import Card from "./Card";

function CardGroup() {
  return (
    <div className="mx-3 md:my-9 md:flex md:gap-5 md:items-center md:justify-center">
      {cardData.map((card) => (
        <Card
          key={card.title}
          title={card.title}
          image={card.image}
          description={card.description}
          reverse={card?.reverse | false}
        />
      ))}
    </div>
  );
}

export default CardGroup;
