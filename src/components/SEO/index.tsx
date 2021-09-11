import { Box } from "@chakra-ui/layout";
import Head from "next/head";
import React from "react";

interface SEOProps {
  title?: string;
  description?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Musical-Copmpanion",
  description = "An online collection of quality orchestral accompaniments",
}) => {
  return (
    <Box>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta
          name="description"
          property="og:description"
          content={description}
        />
        <meta property="og:type" content="article" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="image" content="banner.png" property="og:image" />
      </Head>
    </Box>
  );
};

export default SEO;
