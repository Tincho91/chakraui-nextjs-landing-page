import {
  Box,
  Heading,
  Container,
  Button,
  Stack,
  Text,
  useColorMode,
  useDisclosure,
  useColorModeValue,
  useBreakpointValue
} from "@chakra-ui/react"
import Carousel from "../utils/ChakraCarousel"

const images = [
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
    <>
      <Container width={"100%"} maxW={"1200px"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 8 }}
          py={{ base: 10, md: 12 }}
          marginTop={'50px'}
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
            ETAPABILIDAD
          </Heading>
          <Text
            flexDir={'row'}
            color={useColorModeValue("black", "white")}
            maxW={'100%'}
            fontSize={{ base: "22px", md: "24px", lg: "28px", xl: "30px" }}
          >
            Contemplando las posibilidades económico financieras del club, y con el objetivo de poder llegar a la concreción total de las obras, se definieron una serie de etapas que se detallan a continuación.
          </Text>
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
              VER ETAPABILIDAD
            </Button>
          </Stack>
          <Stack spacing={2}>
            <Carousel images={images}/>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}