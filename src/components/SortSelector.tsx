import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        order by zbi
      </MenuButton>
      <MenuList>
        <MenuItem>axa</MenuItem>
        <MenuItem>xax</MenuItem>
        <MenuItem>axx</MenuItem>
        <MenuItem>aaa</MenuItem>
        <MenuItem>xxx</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
