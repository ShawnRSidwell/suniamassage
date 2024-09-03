import Hero from "../../ui/Hero";
import SocialIcons from "../../ui/SocialIcons";

function AboutHero() {
  return (
    <div className=" w-full bg-cGreen-400 flex items-center ">
      <div className="relative max-w-sm mx-auto md:max-w-6xl  min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-32 md:mt-56 md:mb-12">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full flex justify-center">
              <div className="relative">
                <img
                  src="https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true"
                  className="shadow-xl rounded-full align-middle border-none absolute -m-[6.5em] -ml-[6.25rem] md:-m-[12em] md:-ml-[12.5rem] md:max-w-[400px] max-w-[200px]"
                />
              </div>
            </div>
            <div className="w-full text-center mt-24 md:mt-56"></div>
          </div>
          <div className="text-center md:mt-2">
            <h3 className="text-4xl text-slate-700 font-bold leading-normal mb-1">
              Megan Patten
            </h3>
            <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
              Portland, Oregon
            </div>
            <div className="flex justify-center lg:pt-4 md:pt-8 pb-0">
              <SocialIcons />
            </div>
          </div>
          <div className="mt-6 py-6 border-t border-slate-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4">
                <p className="font-light leading-relaxed text-slate-600 mb-4">
                  I graduated from East West College of the Healing Arts in 2023
                  with 800 hours of in depth learning of Anatomy, Physiology and
                  Pathology, Kinesiology, Western and Eastern massage
                  modalities. I learned Ayurvedic bodywork from Debbie Anne
                  Taylor. I enjoy offering my clients a reprieve from daily
                  stressors and being a key component of their wellness
                  management routine. I especially love offering the Ayurvedic
                  body treatment because of its unique ability to transform and
                  heal the body mind and spirit.
                </p>
                <p className="font-light leading-relaxed text-slate-600 mb-4">
                  The first time I experienced the healing quality of the
                  herb-infused oil penetrating my skin, I felt instantly
                  grounded in a way I had “forgotten” was possible. It was a
                  soul recognition and realization of a deep sense of calm I had
                  been longing for. I began to offer myself self massage
                  (Abhyanga) nearly daily and it made a noticeable shift in the
                  way I showed up in the world. Not only did I feel connected, I
                  felt the oil also offered me a protective layer from external
                  toxins (both physical and emotional) as I participated in my
                  daily activities. It also brought a suppleness and softness to
                  my skin through its hydrating effects. I simply cannot say
                  enough about the incredible ways Abhyanga has illuminated and
                  transformed my being.
                </p>
                <a
                  href="javascript:;"
                  className="font-normal text-slate-700 hover:text-slate-400"
                >
                  Follow Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
