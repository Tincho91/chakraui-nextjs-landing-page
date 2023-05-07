import React from 'react';
import {
  Box,
  Heading,
  Container,
  Link,
  Stack,
  useColorMode,
  useDisclosure,
  useColorModeValue,
  useBreakpointValue
} from "@chakra-ui/react"
import FreeModeCarousel from '../utils/FreeModeCarousel';

const images = [
  { src: "/17.png", alt: "Estadio" },
  { src: "/2030.png", alt: "Estadio" },
  { src: "/21.png", alt: "Estadio" },
  { src: "/17.png", alt: "Estadio" },
  { src: "/2030.png", alt: "Estadio" },
  { src: "/21.png", alt: "Estadio" },
];

export default function AvancesDelProyecto() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Container width={"100%"} maxW={"1200px"}>
        <Link
          href='/'
          color={'red'}
          fontWeight={'600'}
          fontSize={'20px'}
        >
          VOLVER ATRÁS
        </Link>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 8 }}
          py={{ base: 10, md: 12 }}
          marginTop={'50px'}
        >
          <Heading
            fontFamily={"Acumin Bd Pro, sans-serif"}
            fontSize={{ base: "10vw", sm: "8vw", md: "65px", lg: "80px" }}
            fontWeight={700}
            lineHeight={"0.9em"}
            letterSpacing={"-0.01em"}
            textAlign={"center"}
          >
            AVANCES DEL PROYECTO
          </Heading>
        </Stack>
      </Container>
      <Box width={"100%"} overflowX="visible">
        <FreeModeCarousel images={images} />
      </Box>
    </>
  )
}