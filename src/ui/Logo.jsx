function Logo({ size, className }) {
  let iconSize;
  switch (size) {
    case "small":
      iconSize = "w-10 h-10";
      break;
    case "med":
      iconSize = "w-[150px] h-[50px]";
      break;
    case "large":
      iconSize = "w-[250px] h-[100px]";
      break;
    default:
      iconSize = "w-10 h-10";

      break;
  }
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <img className={iconSize} src="/sunia-massage-logo-new.png" alt="title" />
    </div>
  );
}

export default Logo;
