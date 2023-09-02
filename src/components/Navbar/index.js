import React from "react";
import { Flex, Text, Box } from "@chakra-ui/core";
import pa from "pa.png";

function Navbar() {
  return (
    <Flex
      w="100%"
      h={50}
      justify="space-between"
      align="center"
      px={8}
      py={4}
      borderBottomWidth="1px"
    >
      <Box flex={2}>
        <Text fontWeight="bold" color="blue">
          Ritse Kaban Board
        </Text>
      </Box>
      <Flex flex={1} justify="flex-end">
        <img
          src={pa}
          alt="Parts Avatar"
          style={{ width: "100px", height: "auto" }}
        />
      </Flex>
    </Flex>
  );
}

export default Navbar;
