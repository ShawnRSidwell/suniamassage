import Button from "./Button";
import PricingListItem from "./PricingListItem";

function PricingCard({ title, price, time, includes, excludes }) {
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg md:shadow sm:p-8 text-center   ">
      <h5 className="mb-4 text-xl font-medium text-gray-500 ">{title}</h5>
      <div className="flex items-baseline text-gray-900e">
        <span className="text-3xl font-semibold">$</span>
        <span className="text-5xl font-extrabold tracking-tight">{price}</span>
        <span className="ms-1 text-xl font-normal text-gray-500 ">
          /{time} minutes
        </span>
      </div>
      <ul role="list" className="space-y-5 my-7">
        {includes.map((item, i) => (
          <PricingListItem key={i}> {item} </PricingListItem>
        ))}
        {excludes.map((item, i) => (
          <PricingListItem key={i} included={false}>
            {item}
          </PricingListItem>
        ))}
      </ul>
      <Button>Schedule Now</Button>
    </div>
  );
}

export default PricingCard;

// <li className="flex">
//           <svg
//             className="flex-shrink-0 w-4 h-4 text-[#756DAF]"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//           >
//             <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
//           </svg>
//           <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
//             Integration help
//           </span>
//         </li>
//         <li className="hidden md:flex line-through decoration-gray-500">
//           <svg
//             className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//           >
//             <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
//           </svg>
//           <span className="text-base font-normal leading-tight text-gray-500 ms-3">
//             Sketch Files
//           </span>
//         </li>
