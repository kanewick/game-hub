import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Sort } from "../hooks/useGames";

interface Props {
  onSelectSort: (sort: string) => void;
  selectedSort: string;
}

const SortSelector = ({ onSelectSort, selectedSort }: Props) => {
  const sortOrders = [
    { label: "Relevance", value: "" },
    { label: "Date Added", value: "-added" },
    { label: "Name", value: "name" },
    { label: "Release date", value: "-released" },
    { label: "Popularity", value: "-metacritic" },
    { label: "Average rating", value: "-rating" },
  ] as Sort[];

  const currentSortOrder = sortOrders.find(
    (sort) => sort.value === selectedSort
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSort(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
