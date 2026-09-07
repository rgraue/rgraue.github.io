import { Box, Flex, Icon, Link, Text } from "@chakra-ui/react";
import React from "react";
import { LuExternalLink } from "react-icons/lu";

export const Footer = () => {
  return (
    <Box
      paddingTop={"1rem"}
      paddingBottom={"1rem"}
      paddingEnd={"5rem"}
      paddingStart={"5rem"}
      backgroundColor={'gray.subtle'}
      h={'5%'}
    >
      <Flex
        direction={'row'}
        justify={"center"}
        alignItems={'center'}
      >
        <Link href="https://github.com/rgraue/rgraue.github.io" target="_blank">github <LuExternalLink/></Link>
      </Flex>
    </Box>
  );
};