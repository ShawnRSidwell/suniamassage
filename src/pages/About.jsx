import CallToActionSection from "../ui/CallToActionSection";
import FurtherReadingList from "../ui/FurtherReadingList";
import Headline from "../ui/Headline";
import Hero from "../ui/Hero";
import Icon from "../ui/Icon";
import LargeCard from "../ui/LargeCard";
import Table from "../ui/Table";

function About() {
  return (
    <section id="about">
      <Hero headline="About Me" image="/LinkedInPhoto Final.jpg">
        <p className="leading-5 md:leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
          dignissimos est amet vero, voluptatum placeat architecto inventore,
          eaque ipsa incidunt ipsam officiis tempore sunt necessitatibus autem
          laboriosam aspernatur? Dicta, distinctio. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quia, dignissimos est amet vero,
          voluptatum placeat architecto inventore, eaque ipsa incidunt ipsam
          officiis tempore sunt necessitatibus autem laboriosam aspernatur?
          Dicta, distinctio. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quia, dignissimos est amet vero, voluptatum placeat architecto
          inventore, eaque ipsa incidunt ipsam officiis tempore sunt
          necessitatibus autem laboriosam aspernatur? Dicta, distinctio.
        </p>
      </Hero>
      <div className="md:py-9 max-w-screen-xl mx-auto">
        <Headline className="mx-3 text-center ">
          What Is Ayurveda Massage?
        </Headline>
        <hr className="border-[#60A76F] w-1/3 mx-auto border-2 my-3" />
        <p className=" md:max-w-screen-2xl mx-auto px-4 text-gray-600">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sed
          laborum similique ea, adipisci a odit saepe nesciunt iure repudiandae
          commodi labore suscipit distinctio! Nisi tempore blanditiis itaque
          eveniet. Ullam? Lorem ipsum dolor sit amet consectetur adipisicing.
          <img
            src="doshas.PNG"
            className="md:w-[500px] md:h-[400px] mx-auto "
          />
          Quia, dignissimos est amet vero, voluptatum placeat architecto
          inventore, eaque ipsa incidunt ipsam officiis tempore sunt
          necessitatibus autem laboriosam aspernatur Dicta, distinctio.
        </p>
        <Table />
      </div>
      <div className="md:bg-gradient-to-r from-[#938ccf] to-[#b0a4e3] md:bg-[#938ccf] my-9">
        <LargeCard
          headline="Benefits from Ayurveda Massage"
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
            tempora illum vero praesentium maiores aliquam vitae rem
            consequuntur explicabo velit.
          </p>
          <p className="w-11/12 py-3 md:py-7 text-2xl tracking-wider font-semibold text-gray-600">
            Relief from the following:
          </p>
          <div className="flex justify-around h-full md:gap-3 md:mx-16 text-gray-800">
            <Icon size="3em"> Stress</Icon>
            <Icon size="3em"> Aches</Icon>
            <Icon size="3em">Anxiety</Icon>
          </div>
        </LargeCard>
      </div>
      <FurtherReadingList />
      <CallToActionSection />
      <hr className="border-[#60A76F] w-5/6 md:hidden mx-auto" />
    </section>
  );
}

export default About;
