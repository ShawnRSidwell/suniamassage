function Logo({ size, className, includeIcon = true }) {
  let iconSize;
  let textSize;
  switch (size) {
    case "small":
      iconSize = "w-10 h-10";
      textSize = "w-28 h-12 py-2";
      break;
    case "med":
      iconSize = "w-10 h-8";
      textSize = "w-32 h-12 py-2";
      break;
    case "large":
      iconSize = "w-100 h-10";
      textSize = "w-28 h-12 py-2";
      break;
    default:
      iconSize = "w-10 h-10";
      textSize = "w-28 h-12 py-2";
      break;
  }
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <img className={iconSize} src="/sunia-massage-logo-new.png" alt="title" />
    </div>
  );
}

export default Logo;
