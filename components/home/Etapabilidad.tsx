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
import Carousel from "../utils/SliderCarrousel";
import { Element } from "react-scroll";

const images = [
  { src: '/2024.png', alt: 'Estadio' },
  { src: '/2028.png', alt: 'Estadio' },
  { src: '/2030-2.png', alt: 'Estadio' },
  { src: '/2024.png', alt: 'Estadio' },
  { src: '/2028.png', alt: 'Estadio' },
  { src: '/2030-2.png', alt: 'Estadio' },
];


export default function Etapabilidad() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Element name="Etapabilidad">
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
            ETAPABILIDAD
          </Text>
          <Text
            flexDir={'row'}
            color={useColorModeValue("black", "white")}
            maxW={'100%'}
            fontSize={{ base: "20px", md: "22px", lg: "22px", xl: "24px" }}
          >
            Contemplando las posibilidades económico financieras del club, y con el objetivo de poder llegar a la concreción total de las obras, se definieron una serie de etapas que se detallan a continuación.
          </Text>
          <Stack
            direction="row"
            spacing={10}
            justifyContent={"center"}
          >
            <Link href="/etapas">
              <Button
                backgroundColor="red.100"
                color="white"
                borderColor="red.100"
                fontSize={{ base: "11px", md: "lg", lg: "xl", xl: "2xl" }}
                paddingX={{ base: "25px", md: "30px", lg: "30px", xl: "30px" }}
                paddingY={{ base: "20px", md: "25px", lg: "30px", xl: "35px" }}
                borderWidth={1}
                rounded={"md"}
                transition="all 0.2s ease"
                _hover={{
                  backgroundColor: "red.200",
                  borderColor: "red.200",
                }}
              >
                VER ETAPABILIDAD
              </Button>
            </Link>
          </Stack>
          <Stack spacing={2}>
            <Carousel images={images} />
          </Stack>
        </Stack>
      </Container>
    </Element>
  )
}