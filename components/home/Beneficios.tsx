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
          <Heading fontSize={{ base: '60px', xl: '100px' }}>BENEFICIOS</Heading>
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
            >
              <Box
                backgroundColor="green.200"
                borderRadius="full"
                w="70px"
                h="70px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mb="2"
              >
                <CheckIcon 
                  color="white" 
                  boxSize={9}
                />
              </Box>
              <Heading as="h2" size="md" mb="2" textAlign="center">
                {benefit.title}
              </Heading>
              <Text
                fontSize="sm"
                display={{ base: 'none', lg: 'block' }}
                textAlign="center"
              >
                {benefit.description}
              </Text>
            </Flex>
          </AspectRatio>
        ))}
      </Grid>
    </Container>
  );
};

export default Beneficios;