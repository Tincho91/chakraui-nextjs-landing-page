import React from "react";
import {
  Container,
  Link,
  Heading,
  VStack,
  Grid,
  HStack,
  Button,
  Image,
  Flex,
  useColorModeValue,
  Text,
  Box,
} from "@chakra-ui/react";
import { FaTwitter, FaInstagram } from "react-icons/fa";

function ProgressBar({ percentage }) {
  return (
    <Box
      width="100%"
      height="30px"
      bg="gray.200"
      borderRadius="md"
      position="relative"
      zIndex={999}
    >
      <Box
        width={`${percentage}%`}
        height="100%"
        bg="red.500"
        borderRadius="md"
      >
        <Text
          fontSize="sm"
          color="white"
          fontWeight="bold"
          textAlign="center"
          position="absolute"
          width={`${percentage}%`}
          top="50%"
          transform="translateY(-50%)"
        >
          {percentage.toFixed(1)}%
        </Text>
      </Box>
    </Box>
  );
}

export default function NivelDeColecta() {
  const collectedAmount = 1000000;
  const goalAmount = 2000000;
  const participants = 600;

  const progressPercentage = (collectedAmount / goalAmount) * 100;

  return (
    <Container width={"100%"} maxW={"1200px"} marginTop="20px">
      <Link href="/" color={"red"} fontWeight={"600"} fontSize={"20px"}>
        VOLVER ATRÁS
      </Link>
      <Heading
        fontFamily={"Acumin Bd Pro, sans-serif"}
        fontSize={{ base: "10vw", sm: "8vw", md: "65px", lg: "80px" }}
        fontWeight={700}
        lineHeight={"0.9em"}
        letterSpacing={"-0.01em"}
        textAlign={"center"}
        marginTop="20px"
      >
        NIVEL DE COLECTA
      </Heading>
      <VStack spacing={10} mt={10}>
        <ProgressBar percentage={progressPercentage} />
        <Grid
          templateColumns={{ base: "1fr", md: "3fr 2fr" }}
          gap={10}
          width={"100%"}
        >
          <Image
            src="/2024.png"
            alt="Placeholder"
            width="100%"
            rounded={"3xl"}
          />
          <VStack 
            alignItems={{ base: "center", md: "flex-start" }}
            justifyContent={{ md: "space-between" }}
            spacing={6}
          >
            <Box textAlign={{ base: "center", md: "left" }} width="100%">
              <Flex direction={"column"} width="100%">
                <Box>
                  <Text
                    fontSize={{ base: "9vw", md: "4vw", xl: "5xl" }}
                    color={"red.100"}
                    fontWeight={"700"}
                  >
                    ${collectedAmount.toLocaleString()}
                  </Text>
                  <Text
                    fontSize={{ base: "5vw", md: "1.8vw", xl: "xl" }}
                    fontWeight={"600"}
                  >
                    OBJETIVO ${goalAmount.toLocaleString()}
                  </Text>
                </Box>
                <Box mt={{ base: "10px" }}>
                  <Text
                    fontSize={{ base: "9vw", md: "4vw", xl: "5xl" }}
                    color={"red.100"}
                    fontWeight={"700"}
                  >
                    {participants}
                  </Text>
                  <Text
                    fontSize={{ base: "5vw", md: "1.8vw", xl: "xl" }}
                    fontWeight={"600"}
                  >
                    PARTICIPANTES
                  </Text>
                </Box>
              </Flex>
              <Button
                backgroundColor={useColorModeValue("white", "transparent")}
                color={useColorModeValue("black", "white")}
                borderColor={useColorModeValue("black", "white")}
                fontSize={{ base: "13px", md: "lg", lg: "xl", xl: "2xl" }}
                paddingX={{ base: "25px", md: "30px", lg: "30px", xl: "30px" }}
                paddingY={{ base: "20px", md: "25px", lg: "30px", xl: "35px" }}
                borderWidth={1}
                rounded={"md"}
                width={{ base: "none", md: "100%" }}
                _hover={{
                  bg: "red",
                  borderColor: "red",
                  color: "white",
                }}
                mt={{ base: "10px" }}
              >
                PARTICIPAR
              </Button>
            </Box>
            <HStack spacing={4}>
              <Link href="https://twitter.com/" isExternal color={"red.100"}>
                <FaTwitter size="1.5em" />
              </Link>
              <Link href="https://instagram.com/" isExternal color={"red.100"}>
                <FaInstagram size="1.5em" />
              </Link>
            </HStack>
          </VStack>
        </Grid>
      </VStack>
    </Container>
  );
}
