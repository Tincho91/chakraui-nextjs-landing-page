import {
  Box,
  Heading,
  Container,
  Button,
  Stack,
  Text,
  Link,
  useColorMode,
  useDisclosure,
  useColorModeValue,
  useBreakpointValue
} from "@chakra-ui/react"
import FreeModeCarousel from "../utils/FreeModeCarousel";
import { Element } from "react-scroll";


const images = [
  { src: "/17.png", alt: "Estadio" },
  { src: "/2030.png", alt: "Estadio" },
  { src: "/21.png", alt: "Estadio" },
  { src: "/17.png", alt: "Estadio" },
  { src: "/2030.png", alt: "Estadio" },
  { src: "/21.png", alt: "Estadio" },
];

export default function ElProyecto() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Element name="ElProyecto">
      <Container width={"100%"} maxW={"1200px"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 8 }}
          py={{ base: 10, md: 12 }}
          marginTop={'50px'}
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
            EL PROYECTO
          </Text>
          <Text
            flexDir={'row'}
            color={useColorModeValue("black", "white")}
            maxW={'100%'}
            fontSize={{ base: "20px", md: "22px", lg: "22px", xl: "24px" }}
          >
            El objetivo del proyecto es juntar fondos a través de la venta de metros cuadrados de la cancha para la actualización, refuncionalización y ampliación del estadio Coloso Marcelo Bielsa.
          </Text>
          <Stack
            direction="row"
            spacing={10}
            justifyContent={"center"}
          >
            <Link href="/avances" _hover={{ textDecoration: "none" }}>
              <Button
                backgroundColor={useColorModeValue("white", "transparent")}
                color={useColorModeValue("red.100", "white")}
                borderColor={useColorModeValue("red.100", "white")}
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
                VER AVANCES
              </Button>
            </Link>
            <Link href="/colecta" _hover={{ textDecoration: "none" }}>
              <Button
                backgroundColor={useColorModeValue("white", "transparent")}
                color={useColorModeValue("red.100", "white")}
                borderColor={useColorModeValue("red.100", "white")}
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
          </Stack>
        </Stack>
      </Container>
      <Box width={"100%"} overflowX="visible">
        <FreeModeCarousel images={images} />
      </Box>
    </Element>
  )
}