import {
  Box,
  Heading,
  Container,
  Button,
  Stack,
  Image,
  useColorMode,
  useDisclosure,
  useColorModeValue
} from "@chakra-ui/react"


const HeroSection = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  return (
    <>
      <Container width={"100%"} maxW={"1200px"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 8 }}
          py={{ base: 10, md: 12 }}
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
            COMPRA MT2 DE LA CANCHA Y AYUDA AL CLUB
          </Heading>
          <Stack 
            direction="row" 
            spacing={10} 
            justifyContent={"center"}
          >
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
              COMO SER PARTE
            </Button>
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
              QUIERO SABER MAS
            </Button>
          </Stack>
        </Stack>
        <Image
          src="/hero-stadium.png"
          rounded='lg'
          width={"100%"}
          alt='Estadio'
        />
      </Container>
    </>
  )
}

export default HeroSection;