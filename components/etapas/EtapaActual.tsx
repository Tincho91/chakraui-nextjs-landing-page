import {
  Box,
  Heading,
  Container,
  Stack,
  Link,
  Image,
  Text,
  useColorModeValue,
  Flex,
  ListItem,
  UnorderedList,
  Button,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const listItems = [
  "SECTOR NORTE.",
  "TRIBUNA ALTA NORTE.",
  "ACCESO INDEPENDIENTE A TRIBUNAS NORTE ALTA Y NORTE BAJA.",
  "POLIDEPORTIVO.",
];

export default function EtapaActual() {
  return (
    <Container width={"100%"} maxW={"1200px"}>
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 8 }}
        py={{ base: 10, md: 12 }}
        marginTop={"50px"}
      >
        <Heading
          fontFamily={"Acumin Bd Pro, sans-serif"}
          fontSize={{ base: "10vw", sm: "8vw", md: "65px", lg: "80px" }}
          fontWeight={700}
          lineHeight={"0.9em"}
          letterSpacing={"-0.01em"}
          textAlign={"center"}
        >
          ETAPA ACTUAL
        </Heading>
        <Text
          flexDir={"row"}
          color={useColorModeValue("black", "white")}
          maxW={"100%"}
          fontSize={{ base: "22px", md: "24px", lg: "28px", xl: "30px" }}
        >
          Contemplando las posibilidades económico financieras del club, y con
          el objetivo de poder llegar a la concreción total de las obras, se
          definieron una serie de etapas que se detallan a continuación.
        </Text>
        <Flex direction={{ base: "column", md: "row" }}>
          <Box width={{ base: "100%", md: "50%" }}>
            <Text fontWeight="bold" mb={2} textAlign={"left"}>
              FONDEO ACTUAL
            </Text>
            <Heading
              fontFamily={"Acumin Bd Pro, sans-serif"}
              fontSize={{ base: "10vw", sm: "8vw", md: "65px", lg: "80px" }}
              fontWeight={700}
              lineHeight={"0.9em"}
              letterSpacing={"-0.01em"}
              textAlign={"left"}
            >
              FASE 1
            </Heading>
            <UnorderedList textAlign="left" mt={4} spacing={2}>
                {listItems.map((item) => (
                  <ListItem
                    key={item}
                    display="flex"
                    alignItems="center"
                    fontSize={{
                      base: "15px",
                      sm: "4.6vw",
                      md: "2vw",
                      xl: "27px",
                    }}
                  >
                  <CheckIcon
                    boxSize={5}
                    color="white"
                    bg="green.500"
                    borderRadius="full"
                    mr={2}
                  />
                  {item}
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width={{ base: "100%", md: "50%" }}
          >
            <Image
              src="/2024.png"
              alt="Estadio"
              rounded={"3xl"}
              height={"100%"}
              width={"100%"}
            />
          </Box>
        </Flex>
      </Stack>
      <Link href="/colecta">
        <Button
          mt={4}
          backgroundColor={useColorModeValue("white", "transparent")}
          color={useColorModeValue("black", "white")}
          borderColor={useColorModeValue("black", "white")}
          fontSize={{ base: "13px", md: "lg", lg: "xl", xl: "2xl" }}
          paddingX={{ base: "25px", md: "30px", lg: "30px", xl: "30px" }}
          paddingY={{ base: "20px", md: "25px", lg: "30px", xl: "35px" }}
          borderWidth={1}
          rounded={"md"}
          _hover={{
            textDecoration: "none",
            bg: "red",
            borderColor: "red",
            color: "white",
          }}
        >
          VER NIVEL DE COLECTA
        </Button>
      </Link>
    </Container>
  );
}