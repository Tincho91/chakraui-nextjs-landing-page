import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Text } from "@chakra-ui/react";

const years = [1903, 2000, 2010, 2020];

const LoadingScreen = () => {
  const [currentYear, setCurrentYear] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentYear((prev) => (prev + 1) % years.length);
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
            <Text fontSize="6xl" fontWeight="bold" color={'black'}>
              {years[currentYear]}
            </Text>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Aca van las imagenes */}
    </Box>
  );
};

export default LoadingScreen;
