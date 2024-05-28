function LargeCard() {
  return (
    <div className="mx-auto grid grid-cols-12 max-w-screen-2xl h-[75dvh]">
      <div className="col-span-7 bg-red-500 flex justify-center">
        <h1 className="bold text-xl">Learn About Ayurveda</h1>
      </div>
      <div className="col-span-5 bg-blue-100"></div>
    </div>
  );
}

export default LargeCard;
