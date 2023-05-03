import React from 'react';
import { Container, Box, Image, Text, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function Etapas() {
  const router = useRouter();

  return (
    <Container width={'100%'} maxW={"1200px"} marginTop="20px">
      <Link
        onClick={() => router.push('/')}
        color={'red'}
        fontWeight={'600'}
        fontSize={'30px'}
      >
        VOLVER ATRÁS
      </Link>
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
          fontSize="6xl"
          fontWeight="bold"
          color="white"
          textAlign="center"
        >
          ETAPAS DEL DESARROLLO
        </Text>
      </Box>
    </Container>
  );
}