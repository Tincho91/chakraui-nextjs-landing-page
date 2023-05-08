import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Grid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorMode,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Element } from "react-scroll";

const Preguntas = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const textAlign = useBreakpointValue({ base: "center", md: "left" });
  const mx = useBreakpointValue({ base: "auto", md: "none" });

  const questions = [
    { id: 1, question: "¿Qué es Pesos Cuadrados?", answer: "Rta 1" },
    { id: 2, question: "¿Cómo funciona Pesos Cuadrados?", answer: "Rta 2" },
    {
      id: 3,
      question: "¿Para poder participar debo invertir un mínimo de dinero?",
      answer: "Rta 3",
    },
    {
      id: 4,
      question: "¿Debo pagar gastos de escrituración, boletos, etc?",
      answer: "Rta 4",
    },
  ];

  return (
    <Element name="Preguntas">
      <Box
        backgroundColor={isDark ? "black" : "gray.100"}
        p={8}
        borderRadius="md"
      >
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={4}
          width={"100%"}
          maxW={"1200px"}
          mx={"auto"}
        >
          <VStack alignItems="flex-start" spacing={4}>
            <Heading
              color={isDark ? "white" : "black"}
              textAlign={textAlign}
              mx={mx}
            >
              ¿Tenés alguna consulta? <br />
              Tenemos respuestas para vos
            </Heading>
            <Text color={isDark ? "white" : "black"}>SOBRE EL PROYECTO</Text>
            <Text color={isDark ? "white" : "black"}>
              SOBRE PESOS CUADRADOS
            </Text>
            <Text color={isDark ? "white" : "black"}>
              SOBRE LA COMPRA DE TOKENS
            </Text>
            <Text color={isDark ? "white" : "black"}>SOBRE LA APP</Text>
          </VStack>
          <VStack alignItems="flex-start" spacing={4}>
            <Accordion allowToggle width="100%" spacing={4}>
              {questions.map((q) => (
                <AccordionItem
                  key={q.id}
                  borderRadius="md"
                  overflow="hidden"
                  border={"2px"}
                  borderColor={isDark ? "gray.600" : "gray.200"}
                  mb={"10px"}
                >
                  <AccordionButton
                    width="100%"
                    backgroundColor={isDark ? "gray.600" : "gray.100"}
                    padding={4}
                  >
                    <Box
                      flex="1"
                      textAlign="left"
                      color={isDark ? "white" : "black"}
                    >
                      {q.question}
                    </Box>
                    <AccordionIcon color={isDark ? "white" : "black"} />
                  </AccordionButton>
                  <AccordionPanel
                    pb={4}
                    backgroundColor={isDark ? "gray.500" : "gray.200"}
                    color={isDark ? "white" : "black"}
                  >
                    {q.answer}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </VStack>
        </Grid>
      </Box>
    </Element>
  );
};

export default Preguntas;
