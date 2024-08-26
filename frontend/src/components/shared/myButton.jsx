import Link from "next/link";
import { Button } from "@nextui-org/button";

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
  ariaLabel,
}) => {
  return (
    <Button
      as={Link}
      color={color}
      href={href}
      variant={variant}
      aria-label={ariaLabel}
      className={`${className} ${buttonSize(size)} ${
        landscapeBlock ? "llg:self-end" : ""
      } text-xl llg:text-2xl`}
    >
      {label}
    </Button>
  );
};

export default MyButton;
