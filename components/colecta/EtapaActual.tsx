import {
  Box,
  Heading,
  Container,
  Stack,
  Image,
  Text,
  Flex,
  ListItem,
  UnorderedList,
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
        <Flex direction={{ base: "column", md: "row" }} gap={{ base: "5", md: "none" }}>
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
    </Container>
  );
}