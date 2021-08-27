import { Button, Flex } from "@chakra-ui/react";
import React, { useMemo } from "react";
import extractPagesFromTotalNumberOfPages from "../../utils/getArrayFromPageNum";

interface PageSelectorProps {
  totalPages: number;
  currentPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const PageSelector: React.FC<PageSelectorProps> = ({
  totalPages,
  currentPage,
  setPage,
}) => {
  const pageNumbersAsArray = useMemo(() => {
    return extractPagesFromTotalNumberOfPages(totalPages);
  }, [totalPages]);

  return (
    <Flex padding="2rem" w="100%" justify="center">
      {pageNumbersAsArray.map((pageNum) => (
        <Button
          key={pageNum}
          ml="1.5rem"
          boxShadow="base"
          value={pageNum}
          transform={pageNum === currentPage ? "scale(1.3)" : "scale(1)"}
          onClick={(e) => {
            const requestedPage = parseInt(
              (e.target as HTMLButtonElement).value
            );
            setPage(requestedPage);
          }}
        >
          {pageNum}
        </Button>
      ))}
    </Flex>
  );
};

export default PageSelector;
