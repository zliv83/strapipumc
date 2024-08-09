import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

const buttonSize = (size) => {
  switch (size) {
    case "sm":
      return "h-button-sm w-button-sm";
    case "lg":
      return "h-button-md w-button-md text-xl";
    case "both":
      return "h-button-sm w-button-sm llg:h-button-md llg:w-button-md llg:text-xl";
    default:
      return "";
  }
};

const MyButton = ({
  color = "primary",
  href,
  variant = "shadow",
  label,
  className,
  size,
  landscapeBlock,
}) => {
  return (
    <Button
      as={Link}
      color={color}
      href={href}
      variant={variant}
      className={`${className} ${buttonSize(size)} ${
        landscapeBlock ? "llg:self-end" : ""
      }`}
    >
      {label}
    </Button>
  );
};

export default MyButton;
