import {
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { ArrowDown01Icon } from "hugeicons-react";

const DropDownMenu = ({ label, items, ariaLabel }) => {
  const itemsMap = items.map((item) => (
    <DropdownItem
      key={item.label}
      href={item.href}
      aria-label={`Link to ${item.label}`}
      textValue={item.label}
    >
      <span className="text-xl">{item.label}</span>
    </DropdownItem>
  ));
  return (
    <Dropdown aria-label={ariaLabel}>
      <DropdownTrigger>
        <Button
          disableRipple
          className="p-0 bg-transparent data-[hover=true]: bg-transparent text-xl"
          endContent={<ArrowDown01Icon />}
          color="foreground"
          variant="light"
          radius="sm"
        >
          {label}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label={label}
        className="w-[340px]"
        itemClasses={{ base: "gap-20" }}
        color="primary"
      >
        {itemsMap}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDownMenu;
