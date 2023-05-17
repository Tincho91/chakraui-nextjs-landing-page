import {
  Box,
  Heading,
  Container,
  Button,
  Stack,
  Grid,
  Text,
  useColorMode,
  useDisclosure,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Element } from "react-scroll";
import { Link as ScrollLink } from "react-scroll";

interface StepData {
  title: string;
  description: string;
}

const stepsData: StepData[] = [
  {
    title: "DESCARGA LA APP",
    description: "Descargá la app para tu dispositivo Android o iOS.",
  },
  {
    title: "REGISTRATE",
    description: "Registrate con tu email y activá tu cuenta en un solo paso.",
  },
  {
    title: "SELECCIONA EL MT2",
    description:
      "Marca en la cancha el mt2 que más te guste y descubrí su NFT.",
  },
  {
    title: "COMPRALO",
    description: "Hace tuyo de ese mt2 de la cancha! ",
  },
];

interface StepBoxProps {
  step: StepData;
  index: number;
  stepNumberBgColor: string;
  bgColor: string;
}

const StepBox: React.FC<StepBoxProps> = ({ step, index, stepNumberBgColor, bgColor }) => {
  return (
    <Box key={index} bg={bgColor} p={5} position="relative" mb={{base: "20px", sm:"none"}}>
      <Text
        position="absolute"
        top="-35px"
        left="50%"
        transform="translateX(-50%)"
        bg={stepNumberBgColor}
        borderRadius="full"
        w="45px"
        h="45px"
        color="white"
        fontSize="30px"
        fontWeight="bold"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {index + 1}
      </Text>
      <Heading as="h3" size="md" mb="2" textAlign="center">
        {step.title}
      </Heading>
      <Text fontSize="sm" textAlign="center">
        {step.description}
      </Text>
    </Box>
  );
};

export default function Pasos() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  const isMobile = useBreakpointValue({ base: true, md: false });
  const stepNumberBgColor = useColorModeValue("red.500", "red.400");
  const bgColor = useColorModeValue("white", "gray.400");

  return (
    <Element name="Pasos">
      <Box bg={useColorModeValue("gray.100", "black")}>
        <Container width={"100%"} maxW={"1200px"}>
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 8 }}
            py={{ base: 10, md: 12 }}
            marginTop={"50px"}
          >
            <Text
              fontFamily={"Acumin Bd Pro, sans-serif"}
              fontSize={{ base: "18px", md: "23px", lg: "25px", xl: "30px" }}
              fontWeight={700}
            >
              🤔 PASO A PASO
            </Text>
            <Heading
              fontFamily={"Acumin Bd Pro, sans-serif"}
              fontSize={{ base: "10vw", sm: "8vw", md: "65px", lg: "80px" }}
              fontWeight={700}
              lineHeight={"0.9em"}
              letterSpacing={"-0.01em"}
              textAlign={"center"}
              pb={"5vh"}
            >
              EL PROYECTO
            </Heading>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              }}
              gap={6}
            >
              {stepsData.map((step, index) => (
                <StepBox
                  key={index}
                  step={step}
                  index={index}
                  stepNumberBgColor={stepNumberBgColor}
                  bgColor={bgColor}
                  
                />
              ))}
            </Grid>
            <Stack direction="row" spacing={10} justifyContent={"center"}>
              <ScrollLink
                to={"Sin3dDownloadApp"}
                smooth={true}
                duration={500}
              >
                <Button
                  backgroundColor="red.100"
                  color="white"
                  borderColor="red.100"
                  fontSize={{ base: "11px", md: "lg", lg: "xl", xl: "2xl" }}
                  paddingX={{ base: "25px", md: "30px", lg: "30px", xl: "30px" }}
                  paddingY={{ base: "20px", md: "25px", lg: "30px", xl: "35px" }}
                  borderWidth={1}
                  rounded={"md"}
                  transition="all 0.2s ease"
                  _hover={{
                    backgroundColor: "red.200",
                    borderColor: "red.200",
                  }}
                >
                  COMPRAR NFT DEL CLUB
                </Button>
              </ScrollLink>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Element>
  );
}
