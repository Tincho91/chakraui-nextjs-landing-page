import {
  Box,
  Text,
  Container,
  Button,
  Stack,
  Image,
  useColorMode,
  useDisclosure,
  useColorModeValue
} from "@chakra-ui/react"
import Tilt from 'react-parallax-tilt';
import { Element } from "react-scroll";
import { Link as ScrollLink } from "react-scroll";

const HeroSection = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  return (
    <Element name="HeroSection">
      <Container width={"100%"} maxW={"1200px"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 8 }}
          py={{ base: 10, md: 12 }}
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
            COMPRA MT2 DE LA CANCHA Y AYUDA AL CLUB
          </Text>
          <Stack
            direction="row"
            spacing={10}
            justifyContent={"center"}
          >
            <ScrollLink 
              to={"Pasos"}
              smooth={true}
              duration={500}>
              <Button
                backgroundColor="red.100"
                color="white"
                borderColor="red.100"
                fontSize={{ base: "11px", md: "lg", lg: "xl", xl: "2xl" }}
                paddingX={{ base: "15px", md: "30px", lg: "30px", xl: "30px" }}
                paddingY={{ base: "20px", md: "25px", lg: "30px", xl: "35px" }}
                borderWidth={1}
                rounded={"md"}
                transition= "all 0.2s ease"
                _hover={{
                  backgroundColor: "red.200",
                  borderColor: "red.200",
                }}
              >
                COMO SER PARTE
              </Button>
            </ScrollLink>
            <ScrollLink 
              to={"Preguntas"}
              smooth={true}
              duration={500}>
              <Button
                backgroundColor={useColorModeValue("white", "transparent")}
                color={useColorModeValue("black", "white")}
                borderColor={useColorModeValue("black", "white")}
                fontSize={{ base: "11px", md: "lg", lg: "xl", xl: "2xl" }}
                paddingX={{ base: "15px", md: "30px", lg: "30px", xl: "30px" }}
                paddingY={{ base: "20px", md: "25px", lg: "30px", xl: "35px" }}
                borderWidth={1}
                rounded={"md"}
                _hover={{
                  bg: "red",
                  borderColor: "red",
                  color: "white",
                }}
              >
                QUIERO SABER MÁS
              </Button>
            </ScrollLink>
          </Stack>
        </Stack>
        <Tilt
          tiltMaxAngleX={3}
          tiltMaxAngleY={3}
          scale={1}
          transitionSpeed={450}
          className="rounded-lg overflow-hidden"
        >
          <Image
            src="/hero-stadium.png"
            rounded="lg"
            width={"100%"}
            alt="Estadio"
          />
        </Tilt>
      </Container>
    </Element>
  )
}

export default HeroSection;