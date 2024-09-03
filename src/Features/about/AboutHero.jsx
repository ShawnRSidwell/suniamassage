import SocialIcons from "../../ui/SocialIcons";

function AboutHero() {
  return (
    <div className=" w-full bg-gradient-to-b from-cPurple-600 via-purple-400 via-65% to-white from-30% to-95% flex justify-center items-center py-6 md:py-12">
      <div className="flex items-center bg-cBeige-200  rounded-xl px-4 md:px-20 shadow-lg">
        <div className="relative max-w-sm mx-auto md:max-w-6xl   min-w-0 break-words bg-white  mb-6 shadow-lg rounded-lg mt-28 md:mt-8 md:mb-12">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full flex justify-center md:hidden">
                <div className="relative">
                  <img
                    src="/center-megan-profile-pic.jpg"
                    className="shadow-xl rounded-full align-middle border-none absolute -m-[4.75em] -ml-[6.25rem]  max-w-[200px]"
                  />
                </div>
              </div>
              <div className="w-full text-center mt-20 md:mt-5"></div>
            </div>
            <div className="md:flex md:mx-auto md:items-center md:justify-center">
              <div>
                <img
                  src="/center-megan-profile-pic.jpg"
                  className="shadow-xl rounded-full align-middle border-none w-[400px] h-[350px]  hidden md:block md:my-6"
                />
              </div>
              <div className="text-center md:mt-2 md:flex md:flex-col md:items-start md:justify-center  md:ml-12 md:mb-16">
                <h3 className="text-4xl md:text-5xl text-slate-700 font-bold leading-normal tracking-wider">
                  Megan Patten
                </h3>
                <div className="font-bold uppercase text-xs opacity-75 text-cGreen-600 hover:text-slate-400 md:text-lg ">
                  PHD
                </div>
                <div className="text-xs mt-0 mb-2 text-cGreen-600 font-light tracking-wide uppercase md:text-lg">
                  Portland, Oregon
                </div>
                <div className="flex justify-center lg:pt-2 md:pt-8 pb-0">
                  <SocialIcons />
                </div>
              </div>
            </div>
            <div className="mt-6 py-6 border-t border-slate-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4">
                  <p className="font-light leading-relaxed text-slate-600 mb-4">
                    I graduated from East West College of the Healing Arts in
                    2023 with 800 hours of in depth learning of Anatomy,
                    Physiology and Pathology, Kinesiology, Western and Eastern
                    massage modalities. I learned Ayurvedic bodywork from Debbie
                    Anne Taylor. I enjoy offering my clients a reprieve from
                    daily stressors and being a key component of their wellness
                    management routine. I especially love offering the Ayurvedic
                    body treatment because of its unique ability to transform
                    and heal the body mind and spirit.
                  </p>
                  <p className="font-light leading-relaxed text-slate-600 mb-4">
                    The first time I experienced the healing quality of the
                    herb-infused oil penetrating my skin, I felt instantly
                    grounded in a way I had “forgotten” was possible. It was a
                    soul recognition and realization of a deep sense of calm I
                    had been longing for. I began to offer myself self massage
                    (Abhyanga) nearly daily and it made a noticeable shift in
                    the way I showed up in the world. Not only did I feel
                    connected, I felt the oil also offered me a protective layer
                    from external toxins (both physical and emotional) as I
                    participated in my daily activities. It also brought a
                    suppleness and softness to my skin through its hydrating
                    effects. I simply cannot say enough about the incredible
                    ways Abhyanga has illuminated and transformed my being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
