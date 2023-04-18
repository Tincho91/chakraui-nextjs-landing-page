import {
  Box,
  Heading,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Flex,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import SmartphoneCanvas from '../components/canvas/smartphone'

function Model() {
  const gltf = useGLTF("/3dmodels/smartphone1/scene.gltf", true);
  return <primitive object={gltf.scene} scale={0.5} />;
}

export default function DownloadApp() {
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
            ETAPABILIDAD
          </Heading>
          <Text
            flexDir={"row"}
            color={useColorModeValue("black", "white")}
            maxW={"100%"}
            fontSize={{ base: "22px", md: "24px", lg: "28px", xl: "30px" }}
          >
            Contemplando las posibilidades económico financieras del club, y
            con el objetivo de poder llegar a la concreción total de las obras,
            se definieron una serie de etapas que se detallan a continuación.
          </Text>
          <Flex direction={{ base: "column", md: "row" }}>
            <Box width={{ base: "100%", md: "50%" }}>
              <SmartphoneCanvas />
            </Box>
            <Box width={{ base: "100%", md: "50%" }}>
              <UnorderedList textAlign="left" mt={4} spacing={2}>
                <ListItem>Item 1</ListItem>
                <ListItem>Item 2</ListItem>
                <ListItem>Item 3</ListItem>
                <ListItem>Item 4</ListItem>
              </UnorderedList>
            </Box>
          </Flex>
        </Stack>
        </Container>
    </>
  );
}