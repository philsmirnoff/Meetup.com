import { Box, Image, Button } from "@chakra-ui/react";
import React from "react";
import brandLogo from "./assets/brand-logo.png";

const Banner = () => {
  return (
    <>
      <header>
        <Box
          d="flex"
          align-items="center"
          justify-content="center"
          ml={6}
          mr={6}
        >
          <Box>
            <Image boxSize="90px" src="{brandLogo}" />
          </Box>
          <Box>
            <Button pr={3} colorScheme="gray.600" fontSize="sm" variant="link">
              Login
            </Button>
            <Button colorScheme="gray.600" fontSize="sm" variant="link">
              Sign Up
            </Button>
          </Box>
        </Box>
      </header>
    </>
  );
};

export default Banner;
