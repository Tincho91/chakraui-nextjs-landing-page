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
        <Text
          fontSize={{ base: '50px', md: '8vw', xl: '100px', }}
          lineHeight={"0.9em"}
          letterSpacing={"-0.01em"}
          textAlign={"center"}
          css={{
            fontVariationSettings: "'wght' 600, 'wdth' 50, 'slnt' 0",
          }}
        >
          ETAPA ACTUAL
        </Text>
        <Flex direction={{ base: "column", md: "row" }}>
          <Box width={{ base: "100%", md: "50%" }}>
            <Text fontWeight="bold" mb={2} textAlign={"left"}>
              FONDEO ACTUAL
            </Text>
            <Text
              fontSize={{ base: '50px', md: '8vw', xl: '100px', }}
              lineHeight={"0.9em"}
              letterSpacing={"-0.01em"}
              css={{
                fontVariationSettings: "'wght' 600, 'wdth' 50, 'slnt' 0",
              }}
              textAlign={"left"}
            >
              FASE 1
            </Text>
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
                    p={1}
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
            mt={{base: "2vh", sm: "none"}}
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