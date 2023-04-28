import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Text } from "@chakra-ui/react";

const animationDuration = 500;

const images = [
  // Agregar acá las imágenes
  "17.png",
  "21.png",
  "2024.png",
  "2028.png"
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

const getRandomPosition = () => {
  return {
    top: Math.floor(Math.random() * 100) + "%",
    left: Math.floor(Math.random() * 100) + "%",
  };
};

const getRandomImageCount = () => {
  return Math.floor(Math.random() * 4) + 1;
};

const calculateYear = (percentage: number) => {
  const minYear = 1903;
  const maxYear = 2023;
  return Math.floor(minYear + (maxYear - minYear) * percentage);
};

const LoadingScreen = () => {
  const [currentYear, setCurrentYear] = useState(1903);
  const [visible, setVisible] = useState(true);
  const [imageElements, setImageElements] = useState<any[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        const percentage = (Date.now() % animationDuration) / animationDuration;
        setCurrentYear(calculateYear(percentage));
        const newImageElements = Array.from(
          { length: getRandomImageCount() },
          () => ({
            image: getRandomImage(),
            animation: getRandomAnimation(),
            position: getRandomPosition(),
            opacity: getRandomOpacity(),
          })
        );
        setImageElements(newImageElements);
        setVisible(true);
      }, 1000);
    }, 3000);
    return () => clearInterval(interval);
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
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
          >
            <Text fontSize="6xl" fontWeight="bold" color={"black"}>
              {currentYear}
            </Text>
            {imageElements.map((imageElement, index) => (
              <motion.img
                key={index}
                src={imageElement.image}
                alt="Random image"
                initial={{ ...imageElement.position, opacity: 0, scale: 0, rotate: 0, x: 0, y: 0 }}
                animate={{
                  ...imageElement.position,
                  opacity: imageElement.opacity,
                  scale: imageElement.animation === "scale" ? 1.5 : 1,
                  rotate: imageElement.animation === "rotate" ? 360 : 0,
                  x: imageElement.animation === "translate" ? 100 : 0,
                  y: imageElement.animation === "translate" ? 100 : 0,
                }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default LoadingScreen;