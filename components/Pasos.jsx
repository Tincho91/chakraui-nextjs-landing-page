import {
  Box,
  Heading,
  Container,
  Button,
  Stack,
  Grid,
  Text,
  useColorMode,
  useDisclosure,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";

const stepsData = [
  {
    title: "DESCARGA LA APP",
    description: "Descargá la app para tu dispositivo Android o iOS.",
  },
  {
    title: "REGISTRATE",
    description: "Registrate con tu email y activá tu cuenta en un solo paso.",
  },
  {
    title: "SELECCIONA EL MT2",
    description:
      "Marca en la cancha el mt2 que más te guste y descubrí su NFT.",
  },
  {
    title: "COMPRALO",
    description: "Hace tuyo de ese mt2 de la cancha! ",
  },
];

export default function Pasos() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg={useColorModeValue("lightgray", "gray.800")}>
      <Container maxW={"95%"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 8 }}
          py={{ base: 10, md: 12 }}
          marginTop={"50px"}
        >
          <Text
            fontFamily={"Acumin Bd Pro, sans-serif"}
            fontSize={{ base: "18px", md: "40px", lg: "40px", xl: "60px" }}
            fontWeight={700}
          >
          🤔 PASO A PASO
          </Text>
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
            EL PROYECTO
          </Heading>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            }}
            gap={6}
          >
            {stepsData.map((step, index) => (
              <Box
                key={index}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow="md"
                p={5}
                position="relative"
              >
                <Text
                  position="absolute"
                  top="-10px"
                  left="50%"
                  transform="translateX(-50%)"
                  bg={useColorModeValue("red.500", "red.400")}
                  borderRadius="full"
                  w="24px"
                  h="24px"
                  color="white"
                  fontSize="sm"
                  fontWeight="bold"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {index + 1}
                </Text>
                <Heading as="h3" size="md" mb="2" textAlign="center">
                  {step.title}
                </Heading>
                <Text fontSize="sm" textAlign="center">
                  {step.description}
                </Text>
              </Box>
            ))}
          </Grid>

          <Stack direction="row" spacing={10} justifyContent={"center"}>
            <Button
              backgroundColor={useColorModeValue("white", "transparent")}
              color={useColorModeValue("black", "white")}
              borderColor={useColorModeValue("black", "white")}
              fontSize={{ base: "13px", md: "lg", lg: "xl", xl: "2xl" }}
              paddingX={{ base: "25px", md: "30px", lg: "30px", xl: "30px" }}
              paddingY={{ base: "20px", md: "25px", lg: "30px", xl: "35px" }}
              borderWidth={1}
              rounded={"md"}
              _hover={{
                bg: "red",
                borderColor: "red",
                color: "white",
              }}
            >
              COMPRAR NFT DEL CLUB
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
