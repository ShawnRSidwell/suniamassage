import Hero from "../ui/Hero";
import Icon from "../ui/Icon";
import LargeCard from "../ui/LargeCard";

function About() {
  return (
    <section id="about">
      <Hero headline="Get to know me!" image="/LinkedInPhoto Final.jpg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
        dignissimos est amet vero, voluptatum placeat architecto inventore,
        eaque ipsa incidunt ipsam officiis tempore sunt necessitatibus autem
        laboriosam aspernatur? Dicta, distinctio. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quia, dignissimos est amet vero,
        voluptatum placeat architecto inventore, eaque ipsa incidunt ipsam
        officiis tempore sunt necessitatibus autem laboriosam aspernatur? Dicta,
        distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quia, dignissimos est amet vero, voluptatum placeat architecto
        inventore, eaque ipsa incidunt ipsam officiis tempore sunt
        necessitatibus autem laboriosam aspernatur? Dicta, distinctio.
      </Hero>
      <LargeCard
        headline="Benefits from Ayurveda"
        image="/massage-jumbo.jpg"
        alt="Large massage picture"
      >
        <p className="w-11/12 py-2 md:py-5 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          eligendi, animi esse suscipit libero ipsa impedit quod voluptatibus,
          eius tempora illum vero praesentium maiores aliquam vitae rem
          consequuntur explicabo velit. eligendi, animi esse suscipit libero
          ipsa impedit quod voluptatibus, eius tempora illum vero praesentium
          maiores aliquam vitae rem consequuntur explicabo velit. eligendi,
          animi esse suscipit libero ipsa impedit quod voluptatibus, eius
          tempora illum vero praesentium maiores aliquam vitae rem consequuntur
          explicabo velit.
        </p>
        <p className="w-11/12 py-3 md:py-7 text-2xl tracking-wider font-semibold text-gray-600">
          Relief from the following:
        </p>
        <div className="flex justify-around h-full  md:gap-3 md:mx-16 text-gray-800">
          <Icon size="3em"> Stress</Icon>
          <Icon size="3em"> Aches</Icon>
          <Icon size="3em">Anxiety</Icon>
        </div>
      </LargeCard>
    </section>
  );
}

export default About;
