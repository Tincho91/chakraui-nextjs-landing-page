import {
  Box,
  Heading,
  Container,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  Flex,
  Link,
  ListItem,
  UnorderedList,
  Image,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useRef } from "react";
import { Element } from "react-scroll";

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
    <Element name="Sin3dDownloadApp">
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
            fontSize={{ base: "10vw", sm: "8vw", md: "65px", lg: "80px" }}
            fontWeight={700}
            lineHeight={"0.9em"}
            letterSpacing={"-0.01em"}
            textAlign={"center"}
          >
            DESCARGA LA APP
          </Heading>
          <Text
            flexDir={"row"}
            color={useColorModeValue("black", "white")}
            maxW={"100%"}
            fontSize={{ base: "20px", md: "22px", lg: "22px", xl: "24px" }}
          >
            Desde la app podrás comprar NFT’s de la cancha, comprar en la tienda virtual, acceder a tu credencial digital y mucho más!
          </Text>
          <Flex direction={{ base: "column", md: "row" }} gap={{ base: 'none', md: 20 }}>
            <Box
              display="flex" justifyContent="center" alignItems="center"
              width={{ base: "100%", md: "50%" }}
              transform={{ base: "translateX(-25%)", sm: "translateX(-15%)", md: "none"  }}
            >
              <Image 
                src="/downloadapp.png" 
                alt="Download App" 
                maxH={{base: "400px", md: "500px"}}
              />
            </Box>
            <Box width={{ base: "100%", md: "50%" }}>
              <UnorderedList textAlign="left" mt={4} spacing={2}>
                {listItems.map((item) => (
                  <ListItem
                    key={item}
                    display="flex"
                    alignItems="center"
                    fontSize={{
                      base: "15px",
                      sm: "4.6vw",
                      md: "2vw",
                      xl: "27px",
                    }}
                  >
                    <CheckIcon
                      boxSize={5}
                      p={1}
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
                flexDirection={{base:"row", lg:"row"}}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Link href={"/#"}>
                  <Image
                    src="/apple-app-store.png"
                    alt="Apple App Store Badge"
                    _hover={{
                      filter: "brightness(120%)",
                    }}
                    mr={2}
                  />
                </Link>
                <Link href={"/#"}>
                  <Image
                    src="/google-play-badge.png"
                    alt="Google Play Store Badge"
                    _hover={{
                      filter: "brightness(120%)",
                    }}
                    ml={2}
                  />
                </Link>
              </Flex>
            </Box>
          </Flex>
        </Stack>
      </Container>
    </Element>
  );
}
