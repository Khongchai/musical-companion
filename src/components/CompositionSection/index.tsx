import { Box, Flex, Heading, Link, Stack } from "@chakra-ui/react";
import Img from "next/image";
import React from "react";

interface indexProps {}

const CompositionSection: React.FC<indexProps> = ({}) => {
  const logosSrc = [
    {
      imgSrc: "/logos/amazon-music.png",
      link: "https://music.amazon.com/artists/B01M01GVQC/khongthefork",
    },
    {
      imgSrc: "/logos/itunes-logo.png",
      link: "https://music.apple.com/th/artist/khongthefork/1162677049",
    },
    {
      imgSrc: "/logos/spotify-logo.png",
      link: "https://open.spotify.com/artist/25znyDCY8EmPkMAT5g4oPw",
    },
    {
      imgSrc: "/logos/youtube-music-logo.png",
      link: "https://music.youtube.com/channel/UCBjQCNuNVbzkUpRqx9gp30A",
    },
  ];

  return (
    <Flex as={Stack} spacing="5rem" align="center" flexDir="column" m="10rem 0">
      <Box textAlign="center">
        <Heading
          fontWeight="normal"
          mb="1rem"
          fontSize={["24px", null, null, "36px"]}
        >
          Check out my compositions, if you have time
        </Heading>
        <Heading fontSize="24px" fontWeight="normal">
          Now available through major streaming services
        </Heading>
      </Box>
      <Flex justifyContent="space-evenly" width={["100%", null, null, "unset"]}>
        {logosSrc.map((platform) => (
          <Link
            href={platform.link}
            target="_blank"
            ml={["0", null, null, "5rem"]}
            key={platform.link}
          >
            <Img src={platform.imgSrc} alt="logo" width={80} height={80} />
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default CompositionSection;
