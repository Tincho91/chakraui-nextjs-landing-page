import {
  Box,
  Heading,
  Container,
  Stack,
  Image,
  Text,
  useColorModeValue,
  Flex,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const fasesData = [
  {
    title: "FASE 2",
    listItems: [
      "SECTOR NORTE.",
      "TRIBUNA ALTA NORTE.",
      "ACCESO INDEPENDIENTE A TRIBUNAS NORTE ALTA Y NORTE BAJA.",
      "POLIDEPORTIVO.",
    ],
  },
  {
    title: "FASE 3",
    listItems: [
      "EXAMPLE ITEM 1.",
      "EXAMPLE ITEM 2.",
      "EXAMPLE ITEM 3.",
      "EXAMPLE ITEM 4.",
    ],
  },
  {
    title: "FASE 4",
    listItems: [
      "EXAMPLE ITEM 1.",
      "EXAMPLE ITEM 2.",
      "EXAMPLE ITEM 3.",
      "EXAMPLE ITEM 4.",
    ],
  },
];

export default function ProximasEtapas() {
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
          fontSize={{ base: "34px", md: "80px", lg: "80px", xl: "120px" }}
          fontWeight={700}
          lineHeight={{ base: "36px", md: "70px", lg: "70px", xl: "110px" }}
          letterSpacing={"-0.01em"}
          textAlign={"center"}
          sx={{
            fontVariationSettings: "'wght' 700, 'wdth' 50, 'slnt' 0",
          }}
        >
          PROXIMAS ETAPAS
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
        {fasesData.map((fase, index) => (
          <Flex
            key={fase.title}
            direction={{ base: "column", md: index % 2 === 0 ? "row" : "row-reverse" }}
          >
            {/* List section */}
            <Box width={{ base: "100%", md: "50%" }}>
              <Text fontWeight="bold" mb={2}>
                PROXIMAMENTE
              </Text>
              <Heading
                fontFamily={"Acumin Bd Pro, sans-serif"}
                fontSize={{ base: "34px", md: "80px", lg: "80px", xl: "120px" }}
                fontWeight={700}
                lineHeight={{ base: "36px", md: "70px", lg: "70px", xl: "110px" }}
                letterSpacing={"-0.01em"}
                textAlign={"left"}
                sx={{
                  fontVariationSettings: "'wght' 700, 'wdth' 50, 'slnt' 0",
                }}
              >
                {fase.title}
              </Heading>
              <UnorderedList textAlign={"left"} mt={4} spacing={2}>
                {fase.listItems.map((item) => (
                  <ListItem
                    key={item}
                    display="flex"
                    alignItems="center"
                    fontSize={{
                      base: "25px",
                      md: "25px",
                      lg: "30px",
                      xl: "35px",
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
            {/* Image section */}
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
        ))}
      </Stack>
    </Container>
  );
}