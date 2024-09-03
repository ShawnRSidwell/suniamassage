import { FaHeadSideVirus } from "react-icons/fa";
import { TbMoodSick } from "react-icons/tb";

function Icon({ icon: IconComponent, size, children }) {
  return (
    <div className="shadow-md border-[1px]  border-gray-100 w-32 h-24 md:h-32 md:w-48 flex  flex-col items-center justify-center">
      <IconComponent size={size} color="#756DAF" />
      <p className="font-semibold text-xl tracking-tight p-1">{children}</p>
    </div>
  );
}

export default Icon;
