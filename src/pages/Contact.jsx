import Email from "../ui/Email";
import Headline from "../ui/Headline";

const date = new Date().getFullYear();

function Contact() {
  return (
    <div
      id="contact"
      className="bg-gradient-to-r from-[#938ccf] to-[#b0a4e3] md:bg-[#938ccf] py-5 pb-8"
    >
      <section className="gradientbackground p-3 md:pt-10 flex flex-col justify-center items-center">
        <div
          id="contact"
          className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md bg-white rounded-md md:border-[1px]  shadow-xl"
        >
          <Headline className="text-center my-5">Contact Me</Headline>

          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl md:size-3/4 md:mx-auto">
            Feel free to reach out for any inquiries or potential opportunities!
            I&#39;m always open to connecting and discussing further. Whether
            you have questions, ideas to share, or opportunities to explore,
            I&#39;d love to hear from you. Let&#39;s connect and see how we can
            collaborate!
          </p>
          <div>
            <Email />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
