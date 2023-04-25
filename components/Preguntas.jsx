import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorMode,
  Icon,
} from "@chakra-ui/react";
import { ChevronDownIcon, CloseIcon } from "@chakra-ui/icons";

const Preguntas = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const questions = [
    { id: 1, question: "¿Qué es Pesos Cuadrados?", answer: "Rta 1" },
    { id: 2, question: "¿Cómo funciona Pesos Cuadrados?", answer: "Rta 2" },
    { id: 3, question: "¿Para poder participar debo invertir un mínimo de dinero?", answer: "Rta 3" },
    { id: 4, question: "¿Debo pagar gastos de escrituración, boletos, etc?", answer: "Rta 4" },
  ];

  return (
    <Box
      backgroundColor={isDark ? "black" : "lightgray"}
      p={8}
      borderRadius="md"
    >
      <Flex width={"100%"} maxW={"1200px"} mx={"auto"}>
        <VStack alignItems="flex-start" spacing={4} width="50%">
          <Heading color={isDark ? "white" : "black"}>¿Tenés alguna consulta? Tenemos respuestas para vos</Heading>
          <Text color={isDark ? "white" : "black"}>SOBRE EL PROYECTO</Text>
          <Text color={isDark ? "white" : "black"}>SOBRE PESOS CUADRADOS</Text>
          <Text color={isDark ? "white" : "black"}>SOBRE LA COMPRA DE TOKENS</Text>
          <Text color={isDark ? "white" : "black"}>SOBRE LA APP</Text>
        </VStack>
        <VStack alignItems="flex-start" spacing={4} width="50%">
          <Accordion allowToggle width="100%" spacing={4}>
            {questions.map((q) => (
              <AccordionItem key={q.id} borderRadius="md" overflow="hidden">
                <AccordionButton
                  width="100%"
                  border="1px solid"
                  borderColor={isDark ? "gray.700" : "gray.300"}
                  backgroundColor={isDark ? "gray.800" : "gray.200"}
                  padding={4}
                >
                  <Box
                    flex="1"
                    textAlign="left"
                    color={isDark ? "white" : "black"}
                  >
                    {q.question}
                  </Box>
                  <AccordionIcon
                    color={isDark ? "white" : "black"}
                  />
                </AccordionButton>
                <AccordionPanel
                  pb={4}
                  backgroundColor={isDark ? "gray.700" : "gray.100"}
                  color={isDark ? "white" : "black"}
                  borderBottom="1px solid"
                  borderColor={isDark ? "gray.700" : "gray.300"}
                >
                  {q.answer}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Preguntas;
