import React from 'react';
import {
  Box,
  Heading,
  Container,
  Stack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

const newsData = [
  {
    id: 1,
    imgAlt: "Titulo de noticia",
    title: "NOMBRE DE LA PUBLICACIÓN CON DESCRIPCIÓN DEL AVANCE",
    imageUrl: "/hero-stadium.png",
    description:
      "Desde la app podrás comprar NFT’s de la cancha, comprar en la tienda virtual, acceder a tu credencial digital y mucho más!",
  },
  {
    id: 2,
    imgAlt: "Titulo de noticia",
    title: "NOMBRE DE LA PUBLICACIÓN CON DESCRIPCIÓN DEL AVANCE",
    imageUrl: "/hero-stadium.png",
    description:
      "Desde la app podrás comprar NFT’s de la cancha, comprar en la tienda virtual, acceder a tu credencial digital y mucho más!",
  },
  // Agregar más noticias de "prueba" acá
];

export default function Noticias({ news = newsData }) {
  return (
    <Container width={"100%"} maxW={"1200px"} mt={10}>
      <Stack as={Box} textAlign={"center"} spacing={8} py={10}>
        <Heading
          fontFamily={"Acumin Bd Pro, sans-serif"}
          fontSize={{ base: "10vw", sm: "8vw", md: "65px", lg: "80px" }}
          fontWeight={700}
          lineHeight={"0.9em"}
          letterSpacing={"-0.01em"}
          textAlign={"center"}
        >
          NOVEDADES
        </Heading>
        <VStack spacing={10}>
          {news.map((item) => (
            <Box key={item.id}>
              <Image
                src={item.imageUrl}
                alt={item.imgAlt}
                width="100%"
                height={{}}
                objectFit="cover"
                borderRadius="3xl"
              />
              <Text fontWeight="700" fontSize="xl" mt={2} textAlign={"left"}>
                {item.title}
              </Text>
              <Text textAlign={"left"}>{item.description}</Text>
            </Box>
          ))}
        </VStack>
      </Stack>
    </Container>
  );
}