import {
  Box,
  Heading,
  Container,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  Flex,
  ListItem,
  UnorderedList,
  Image,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useRef } from "react";
import SmartphoneCanvas from "../canvas/smartphone"
import Link from "next/link";

const listItems = [
  "Accede a NFT exclusivos",
  "Tu credencial digital siempre actualizada",
  "Entérate de las últimas novedades",
  "Seguí al club desde tu celular",
  "BENEFICIOS EN LA TIENDA",
];

export default function DownloadApp() {
  const containerRef = useRef();
  const { colorMode } = useColorMode();

  const bgGradient = useColorModeValue(
    "radial-gradient(circle at 50% 45%, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 40%)",
    "radial-gradient(circle at 50% 45%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 40%)"
  );

  return (
    <>
      <Container width={"100%"} maxW={"1200px"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 8 }}
          py={{ base: 10, md: 12 }}
          marginTop={"50px"}
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
            DESCARGA LA APP
          </Heading>
          <Text
            flexDir={"row"}
            color={useColorModeValue("black", "white")}
            maxW={"100%"}
            fontSize={{ base: "22px", md: "24px", lg: "28px", xl: "30px" }}
          >
            Contemplando las posibilidades económico financieras del club, y con
            el objetivo de poder llegar a la concreción total de las obras, se
            definieron una serie de etapas que se detallan a continuación.
          </Text>
          <Flex direction={{ base: "column", md: "row" }} gap={20}>
            <Box
              minH={'300px'}
              width={{ base: "100%", md: "50%" }}
            >
              <Image src="/downloadapp.png" alt="Download App" />
            </Box>
            <Box width={{ base: "100%", md: "50%" }}>
              <UnorderedList textAlign="left" mt={4} spacing={2}>
                {listItems.map((item) => (
                  <ListItem
                    key={item}
                    display="flex"
                    alignItems="center"
                    fontSize={{
                      base: "25px",
                      md: "25px",
                      lg: "30px",
                      xl: "35px",
                    }}
                  >
                    <CheckIcon
                      boxSize={5}
                      color="white"
                      bg="green.500"
                      borderRadius="full"
                      mr={2}
                    />
                    {item}
                  </ListItem>
                ))}
              </UnorderedList>
              <Text mt={4} fontWeight="bold">
                ENCONTRALA EN
              </Text>
              <Flex
                mt={4}
                justifyContent="center"
              >
                <Link href={'/#'}>
                  <Image
                    src="/apple-app-store.png"
                    alt="Apple App Store Badge"
                    _hover={{
                      filter: "brightness(120%)",
                    }}
                  />
                </Link>
                <Link href={'/#'}>
                <Image
                  src="/google-play-badge.png"
                  alt="Google Play Store Badge"
                  _hover={{
                    filter: "brightness(120%)",
                  }}
                  marginLeft={5}
                />
                </Link>
              </Flex>
            </Box>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}