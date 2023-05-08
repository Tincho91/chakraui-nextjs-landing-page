import {
  Grid,
  Box,
  Heading,
  Container,
  Text,
  Flex,
  AspectRatio,
  useBreakpointValue,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { Element } from "react-scroll";

const benefits = [
  {
    title: 'SER PARTE DEL CLUB',
    description:
      'Con la compra de tokens de metros cuadrados de la cancha tendrás en tus manos una parte del club representado en un NFT para su colección.',
  },
  {
    title: 'NFTS',
    description:
      'Con la compra de tokens de metros cuadrados de la cancha tendrás en tus manos una parte del club representado en un NFT para su colección.',
  },
  {
    title: 'SER PARTE DEL MURAL',
    description:
      'A los efectos de brindar transparencia y seguridad jurídica, se seleccionará una administradora del fideicomiso absolutamente imparcial y con reconocida trayectoria.',
  },
  {
    title: 'HINCHA COLOSO',
    description:
      'A los efectos de brindar transparencia y seguridad jurídica, se seleccionará una administradora del fideicomiso absolutamente imparcial y con reconocida trayectoria.',
  },
  {
    title: 'CREDENCIAL DIGITAL',
    description:
      'A los efectos de brindar transparencia y seguridad jurídica, se seleccionará una administradora del fideicomiso absolutamente imparcial y con reconocida trayectoria.',
  },
  {
    title: 'DESCUENTOS',
    description:
      'A los efectos de brindar transparencia y seguridad jurídica, se seleccionará una administradora del fideicomiso absolutamente imparcial y con reconocida trayectoria.',
  },
];

const Beneficios = () => {
  const columns = useBreakpointValue({ base: 2, md: 4 });

  return (
    <Element name="Beneficios">
      <Container bg="green.100" py={9} px={5} maxWidth={"100%"}>
        <Grid
          templateColumns={`repeat(${columns}, 1fr)`}
          gridColumnGap={0}
          gridRowGap={0}
          maxW={"1200px"}
          mx={"auto"}
          color={"white"}
        >
          <Box gridColumn="span 2" textAlign={{ base: 'center', md: 'left' }} pl='4'>
            <Heading fontSize={{ base: '40px', md: '7vw', xl: '80px', }}>BENEFICIOS</Heading>
            <Text fontSize="2xl">
              Explora todos los beneficios de invertir en el club.
            </Text>
          </Box>
          {benefits.map((benefit, index) => (
            <AspectRatio key={index} ratio={358 / 276}>
              <Flex
                gridColumn="span 1"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                backgroundColor="green.300"
                border="1px"
                borderColor="green.100"
                padding={'3'}
                position={'relative'}
              >
                <Box
                  backgroundColor="green.200"
                  borderRadius="full"
                  minW="35px"
                  minH="35px"
                  width={{ base: '10vw', md: '7vw', lg: '5vw', xl: "50px" }}
                  height={{ base: '10vw', md: '7vw', lg: '5vw', xl: "50px" }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  top={'10px'}
                  position={'absolute'}
                >
                  <CheckIcon
                    fontSize={{ base: '6vw', md: '3.5vw', xl: "30px" }}
                    color="white"
                  />
                </Box>
                <Flex
                  flexDirection="column"
                  justifyContent="flex-start"
                  alignItems="center"
                  paddingTop={{ base: '30px', md: '60px', lg: "50px" }}
                  width="100%"
                >
                  <Heading
                    textAlign="center"
                    fontSize={{ base: '15px', sm: '5vw', md: '2.5vw', lg: "1.6vw" }}
                    fontWeight={"800"}
                  >
                    {benefit.title}
                  </Heading>
                  <Text
                    fontSize={{ base: "11px" }}
                    display={{ base: 'none', lg: 'block' }}
                    textAlign="center"
                    mt={2}
                  >
                    {benefit.description}
                  </Text>
                </Flex>
              </Flex>
            </AspectRatio>
          ))}
        </Grid>
      </Container>
    </Element>
  );
};

export default Beneficios;