import React from 'react';
import { Container, Box, Image, Text, Link } from '@chakra-ui/react';
import Tilt from 'react-parallax-tilt';


export default function Etapas() {

  return (
    <Container width={'100%'} maxW={"1200px"} marginTop="20px">
      <Link
        href='/'
        color={'red'}
        fontWeight={'600'}
        fontSize={'20px'}
      >
        VOLVER ATRÁS
      </Link>
        <Tilt
            tiltMaxAngleX={3}
            tiltMaxAngleY={3}
            scale={1}
            transitionSpeed={450}
            className="rounded-lg overflow-hidden"
          >
        <Box
          position="relative"
          width="100%"
          rounded="2xl"
          overflow="hidden"
          marginTop="20px"
        >
          <Image src="/hero-stadium.png" width="100%" alt="Estadio" />
          <Box
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            bg="blackAlpha.600" // Ajuste la opacidad aquí (0.6 es 60% de opacidad)
          />
          <Text
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            color="white"
            textAlign="center"
            fontSize={{ base: '50px', md: '8vw', xl: '110px', }}
            lineHeight={"0.9em"}
            letterSpacing={"-0.01em"}
            whiteSpace="nowrap"
            css={{
              fontVariationSettings: "'wght' 600, 'wdth' 50, 'slnt' 0",
            }}
          >
            ETAPAS DEL DESARROLLO
          </Text>
        </Box>
      </Tilt>
    </Container>
  );
}