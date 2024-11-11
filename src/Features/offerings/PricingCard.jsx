import Button from "../../ui/Button";

function PricingCard({ title, price, time, includes, excludes }) {
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg md:shadow sm:p-8 text-center   ">
      <h5 className="mb-4 text-xl font-medium text-gray-500 ">{title}</h5>
      <div className="flex items-baseline text-gray-900 justify-center">
        <span className="text-3xl font-semibold">$</span>
        <span className="text-5xl font-extrabold tracking-tight">{price}</span>
        <span className="ms-1 text-xl font-normal text-gray-500 ">
          /{time} minutes
        </span>
      </div>
      <div className="my-8">
        <Button to="https://app.acuityscheduling.com/schedule.php?owner=33772237">
          Click to Schedule
        </Button>
      </div>
    </div>
  );
}

export default PricingCard;
