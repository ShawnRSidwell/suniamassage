function ElementCard() {
  return (
    <div className="flex flex-col items-center justify-center w-60 p-5">
      <img className="w-14 h-12" src="/air-element.png" alt="wind element" />
      <p className="text-gray-500 font-semibold tracking-wider text-2xl text-center py-2">
        Air
      </p>
      <p className="text-center text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at
        distinctio tenetur Lorem ipsum dolor sit amet consectetur adipisicing
        elit.
      </p>
    </div>
  );
}

export default ElementCard;
