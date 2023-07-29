import { Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch></BsSearch>} />
      <Input
        backgroundColor="#2c313d;"
        borderRadius={20}
        variant="fill"
        placeholder="Search Games"
      />
    </InputGroup>
  );
};

export default SearchInput;
