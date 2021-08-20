import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { ComposerType } from "../../generated/graphql";

interface ComposersNameProps {
  composers?: ComposerType[];
}

export const ComposersName: React.FC<ComposersNameProps> = ({ composers }) => {
  const length = composers?.length;
  return (
    <Text>
      <Flex>
        {length && length > 1 ? "Composers: " : "Composer: "}
        {composers?.map((composer) => composer.name)}
      </Flex>
    </Text>
  );
};
