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
    image: "/17.png",
    listItems: [
      "POLIDEPORTIVO NORTE",
      "VESTUARIOS DEPORTIVOS SECTOR ESTE.",
    ],
  },
  {
    title: "FASE 3",
    image: "/2031.png",
    listItems: [
      "NUEVO INGRESO OESTE",
      "EDIFICIO OESTE. PB: HALL DE INGRESO, TIENDA NEWELL’S Y BAR TEMÁTICO. 1PISO: MUSEO DEPORTIVO Y SALÓN DE EVENTOS. 2 PISO: RESTAURANT.",
      "PALCOS OESTE.",
      "CUBIERTA DEL SECTOR OESTE.",
      "ESTACIONAMIENTO SUBTERRÁNEO.",
    ],
  },
  {
    title: "FASE 4",
    image: "/2030.png",
    listItems: [
      "COMPLETAMIENTO DE LA COBERTURA LIVIANA EN LA TOTALIDAD DEL PERÍMETRO.",
      "ILUMINACIÓN DEL ESTADIO.",
      "PISOS, SOLADOS Y EQUIPAMIENTOS EXTERIORES.",
    ],
  },
];

export default function ProximasEtapas() {
  return (
    <Container width={"100%"} maxW={"1200px"}>
      <Stack
        as={Box}
        textAlign="left"
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
          PROXIMAS ETAPAS
        </Heading>
        {fasesData.map((fase, index) => (
          <Flex
            as={Stack}
            key={fase.title}
            direction={{ base: "column", md: index % 2 === 0 ? "row-reverse" : "row" }}
            spacing={{base: "0", sm: "2", md:"20"}}
            gap={{ base: 5, md: 10 }}
            alignItems="center"
            pb={{base:"25px", md:"none"}}
          >
            {/* Listas */}
            <Box 
              width={{ base: "100%", md: "50%" }}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <Text fontWeight="bold" mb={2} textAlign={"left"}>
                PROXIMAMENTE
              </Text>
              <Heading
                fontFamily={"Acumin Bd Pro, sans-serif"}
                fontSize={{ base: "10vw", sm: "8vw", md: "65px", lg: "80px" }}
                fontWeight={700}
                lineHeight={"0.9em"}
                letterSpacing={"-0.01em"}
                textAlign={"left"}
              >
                {fase.title}
              </Heading>
              <UnorderedList textAlign="left" mt={4} spacing={2}>
                {fase.listItems.map((item) => (
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
            {/* Imagenes */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              width={{ base: "100%", md: "50%" }}
            >
              <Image
                src={fase.image}
                alt={`Estadio - ${fase.title}`}
                rounded={"3xl"}
                width={"100%"}
              />
            </Box>
          </Flex>
        ))}
      </Stack>
    </Container>
  );
}