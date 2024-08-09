import {
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { ArrowDown01Icon } from "hugeicons-react";

const DropDownMenu = ({ label, items }) => {
  const itemsMap = items.map((item) => (
    <DropdownItem key={item.label} href={item.href}>
      <span className="text-xl">{item.label}</span>
    </DropdownItem>
  ));
  return (
    <Dropdown>
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
