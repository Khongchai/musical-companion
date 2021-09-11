import { Box } from "@chakra-ui/layout";
import Head from "next/head";
import React from "react";

interface SEOProps {
  title: string;
  description: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Musical-Copmpanion",
  description = "An online collection of quality orchestral accompaniments",
}) => {
  return (
    <Box>
      <Head>
        <title>{title}</title>
      </Head>
    </Box>
  );
};

export default SEO;
