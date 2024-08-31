import Card from "./Card";

let cardData = [
  {
    title: "Meet Your Practictioner",
    image: "/green-massage-oil.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa facilis dolores quis inventore nostrum repellat eligendi.",
  },
  {
    title: "Explore Our Treatments",
    image: "/oil-flowers.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa facilis dolores quis inventore nostrum repellat eligendi.",
    reverse: true,
  },
  {
    title: "Learn Our Methods",
    image: "/massage-ingredients.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa facilis dolores quis inventore nostrum repellat eligendi.",
  },
];

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
