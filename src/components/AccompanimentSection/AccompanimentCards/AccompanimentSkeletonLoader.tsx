import { Box } from "@chakra-ui/layout";
import React from "react";

interface AccompanimentSkeletonLoaderProps {}

const AccompanimentSkeletonLoader: React.FC<AccompanimentSkeletonLoaderProps> =
  ({}) => {
    const skeletonCount = 8;

    return (
      <>
        {new Array(skeletonCount).fill("").map((_, index) => (
          <UISkeleton key={index} />
        ))}
      </>
    );
  };

export default AccompanimentSkeletonLoader;

function UISkeleton() {
  return <Box className="accompaniment-loader" />;
}
