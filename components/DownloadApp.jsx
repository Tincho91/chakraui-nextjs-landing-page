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
import SmartphoneCanvas from "../components/canvas/smartphone";

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
    "radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 60%)",
    "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 60%)"
  );

  return (
    <>
      <Container maxW={"95%"}>
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
          <Flex direction={{ base: "column", md: "row" }}>
            <Box
              ref={containerRef}
              minH={'300px'}
              width={{ base: "100%", md: "50%" }}
              bgImage={bgGradient}
            >
              <SmartphoneCanvas containerRef={containerRef}/>
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
                justifyContent={{ base: "space-between", md: "center" }}
              >
                <Image
                  src="/apple-app-store.png"
                  alt="Get it on the App Store"
                  mr={{ md: 4 }}
                />
                <Image
                  src="/google-play-badge.png"
                  alt="Get it on Google Play"
                  ml={{ md: 4 }}
                />
              </Flex>
            </Box>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}