import { chakra, Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const ClientsCard = ({ children }) => {
  return (
    <Flex
      boxShadow={"lg"}
      direction={{ base: "column-reverse", md: "row" }}
      width={"full"}
      rounded={"xl"}
      p={10}
      mt={1}
      // m={10}
      justifyContent={"space-between"}
      position={"relative"}
      bg={useColorModeValue("white", "gray.800")}
    >
      <Flex
        direction={"column"}
        textAlign={"left"}
        justifyContent={"space-between"}
      >
        <chakra.p
          fontFamily={"Inter"}
          fontWeight={"medium"}
          fontSize={"15px"}
          pb={4}
        >
          {children}
        </chakra.p>
      </Flex>
    </Flex>
  );
};

export default ClientsCard;
