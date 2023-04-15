import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Image,
  useBreakpointValue,

} from '@chakra-ui/react';


export default function Footer() {
  const brandImageSrc = useBreakpointValue({
    base: "/brand-dark.png"
  });

  return (
    <>
      <Box
          bg={'gray.900'}
          color={'gray.100'}
          marginTop={'20px'}
        >
        <Container as={Stack} maxW={'90%'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 5fr' }}
            spacing={9}
          >
            <Stack spacing={6} align={{base: 'center', md:'flex-start'}}>
              <Box>
                <Image
                  src={brandImageSrc}
                  alt="Brand logo"
                  maxH="84px"
                  maxW="268px"
                />
              </Box>
            </Stack>
            <Stack align={{base: 'center', md:'flex-start'}}>
              <Link href={'#'}>El proyecto</Link>
              <Link href={'#'}>Beneficios</Link>
              <Link href={'#'}>Descarga la app</Link>
              <Link href={'#'}>Preguntas frecuentes</Link>
            </Stack>
            <Stack align={{base: 'center', md:'flex-start'}}>
              <Link href={'#'}>Términos y condiciones</Link>
              <Link href={'#'}>Políticas de privacidad</Link>
            </Stack>
            <Stack align={{base: 'center', md:'flex-end'}}>
              <Stack direction={'column'} gap={'5'}>
              <Image
                src="/apple-app-store.png"
                alt="Apple App Store Badge"
                height="50px"
                _hover={{
                  filter: "brightness(120%)",
                }}
              />
              <Image
                src="/google-play-badge.png"
                alt="Google Play Store Badge"
                height="50px"
                _hover={{
                  filter: "brightness(120%)",
                }}
              />
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={'gray.600'}
        bg={'gray.900'}
        color={'gray.100'}
      >
      <Container
        as={Stack}
        maxW={'90%'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ md: 'space-between' }}
        justifyContent={'center'}
        align={{ md: 'center' }}
        textAlign={'center'}
      >
        <Text>Club Atlético Newell&apos;s Old Boys</Text>
        <Text>Copyright 2023. Todos los derechos reservados.</Text>
        <Text>contacto@newellsoldboys.com.ar</Text>
      </Container>
    </Box>
  </>
  );
}