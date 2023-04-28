import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Text } from "@chakra-ui/react";

const loadingDuration = 8000;

const images = [
  // Agregar acá las imágenes
  "brand-small.png",
  "redstar.png",
];

const getRandomImage = () => {
  return images[Math.floor(Math.random() * images.length)];
};

const getRandomAnimation = () => {
  const animations = ["scale", "rotate", "translate"];
  return animations[Math.floor(Math.random() * animations.length)];
};

const getRandomOpacity = () => {
  return Math.random();
};

const getRandomImageCount = () => {
  return Math.floor(Math.random() * 15) + 2;
};

const calculateYear = (percentage: number) => {
  const minYear = 1903;
  const maxYear = 2023;
  return Math.floor(minYear + (maxYear - minYear) * percentage);
};

const getRandomPosition = () => {
  return {
    top: Math.random() * 100 + "vh",
    left: Math.random() * 100 + "vw",
  };
};

const LoadingScreen = () => {
  const [currentYear, setCurrentYear] = useState(1903);
  const [imageElements, setImageElements] = useState<any[]>([]);

  useEffect(() => {
    const startTime = Date.now();

    const updateYear = () => {
      const elapsed = Date.now() - startTime;
      const percentage = elapsed / loadingDuration; // Calcular el porcentaje en función del tiempo transcurrido y la duración de la pantalla de carga
      setCurrentYear(calculateYear(percentage));
      if (percentage < 1) {
        requestAnimationFrame(updateYear);
      }
    };

    const initialDelay = 700; // Retraso inicial de 0.7 segundos
    setTimeout(() => {
      updateYear();
    }, initialDelay);

    const updateImages = () => {
      const newImageElements = Array.from(
        { length: getRandomImageCount() },
        () => ({
          image: getRandomImage(),
          position: getRandomPosition(),
          opacity: getRandomOpacity(),
        })
      );
      setImageElements(newImageElements);
      setTimeout(updateImages, 3000);
    };

    updateImages();
  }, []);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100vh"
      position="fixed"
      top="0"
      left="0"
      zIndex="100"
      backgroundColor="rgba(255, 255, 255, 0.95)"
    >
      <Text
        fontSize="6xl"
        fontWeight="bold"
        color={"black"}
        position="absolute"
        zIndex="101"
      >
        {currentYear}
      </Text>
      <AnimatePresence>
        {imageElements.map((imageElement, index) => (
          <motion.img
            key={index}
            src={imageElement.image}
            alt="Random image"
            style={{ position: "absolute", ...imageElement.position }}
            initial={{ opacity: 0 }}
            animate={{ opacity: imageElement.opacity }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, repeat: 1, repeatType: "reverse" }}
          />
        ))}
      </AnimatePresence>
    </Box>
  );
};

export default LoadingScreen;