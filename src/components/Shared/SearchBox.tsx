import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import React, { useRef } from "react";
import setActionWithDelay from "../../utils/setActionWithDelay";

interface SearchInputBoxProps {
  setSearchVal: React.Dispatch<React.SetStateAction<string>>;
  //For resetting the pagination everytime the user searches
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const SearchInputBox: React.FC<SearchInputBoxProps> = ({
  setSearchVal,
  setPage,
}) => {
  const inputRef = useRef(null);

  return (
    <InputGroup w="min(300px, 100%)" mr={["1rem", null, null, "2rem"]}>
      <Input
        placeholder="Search"
        onChange={(e) => {
          setPage(1);
          setActionWithDelay(() => setSearchVal(e.target.value), 0.3);
        }}
        ref={inputRef}
      />
      <InputRightAddon
        cursor="pointer"
        onClick={() => {
          inputRef.current &&
            (inputRef.current as unknown as HTMLElement).focus();
        }}
        children={<SearchIcon />}
      />
    </InputGroup>
  );
};

export default SearchInputBox;
