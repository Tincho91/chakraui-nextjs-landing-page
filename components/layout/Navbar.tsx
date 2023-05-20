import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Image,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useColorMode,
  Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  MoonIcon,
} from "@chakra-ui/icons";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import {
  scroller,
  Link as ScrollLink,
} from "react-scroll";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  const brandImageSrc = useBreakpointValue({
    base: "/brand-small.png",
    xl: useColorModeValue("/brand-light.png", "/brand-dark.png"),
  });

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "black")}
        color={useColorModeValue("black", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 2, xl: 20 }}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon w={3} h={3} />
              ) : (
                <HamburgerIcon w={5} h={5} />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          alignItems="center"
        >
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            <Button as="a" href="/" variant={"link"}>
              <Image
                src={brandImageSrc}
                alt="Brand logo"
                maxH="84px"
                maxW="268px"
              />
            </Button>
          </Text>

          <Flex display={{ base: "none", md: "flex" }} mx="auto">
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={2}
        >
          <IconButton
            aria-label="Toggle Dark Mode"
            icon={<MoonIcon />}
            fontSize='23px'
            onClick={toggleColorMode}
            border="none"
            background="none"
            color={useColorModeValue("blackAlpha.500", "red.600")}
            _hover={{
              color: useColorModeValue("red.600", "white"),
              transition: "color 0.3s",
            }}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Apple App Store"
            icon={<FaApple />}
            fontSize='23px'
            _hover={{
            }}
            color={useColorModeValue("blackAlpha.500", "white")}
            backgroundColor={useColorModeValue("white", "black")}
            border='1px'
            borderColor={useColorModeValue("backAlpha.300", "whiteAlpha.400")}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Google Play Store"
            icon={<FaGooglePlay />}
            fontSize="23px"
            _hover={{
            }}
            color={useColorModeValue("blackAlpha.500", "white")}
            backgroundColor={useColorModeValue("white", "black")}
            border="1px"
            borderColor={useColorModeValue("backAlpha.300", "whiteAlpha.400")}
          />
        </Stack>
      </Flex>

      <Drawer placement="top" onClose={onToggle} isOpen={isOpen} size="full">
        <DrawerOverlay bg="rgba(255, 255, 255, 0.95)">
          <DrawerContent >
            <DrawerHeader borderBottomWidth="1px">
              <DrawerCloseButton position="absolute" left={1} top={9} />
              <Text fontSize="7vw" fontWeight="bold" textAlign="center">MENU</Text>
            </DrawerHeader>
            <DrawerBody >
              <MobileNav onClose={onToggle} />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("blackAlpha.800", "white");
  const linkHoverColor = useColorModeValue("red.100", "red.100");
  const linkActiveColor = useColorModeValue("red.100", "red.100");
  const linkActiveUnderline = "2px";

  return (
    <Flex direction={"row"} width={'100%'} maxW={'1200px'}>
      {NAV_ITEMS.map((navItem) => (

        <ScrollLink
          key={navItem.label}
          to={navItem.to}
          smooth={true}
          duration={500}
        >
          <Box
            p={2}
            fontSize={"sm"}
            fontWeight={600}
            whiteSpace="nowrap"
            color={linkColor}
            fontFamily={"'Acumin Variable Concept', sans-serif"}
            borderBottom={navItem.active ? linkActiveUnderline : ""}
            borderColor={navItem.active ? linkActiveColor : ""}
            cursor="pointer"
            _hover={{
              cursor: "pointer",
              textDecoration: "none",
              color: linkHoverColor,
              borderBottom: linkActiveUnderline,
              borderColor: linkActiveColor,
            }}
          >
            {navItem.label}
          </Box>
        </ScrollLink>

      ))}
    </Flex>
  );
};

const MobileNav: React.FC<MobileNavProps> = ({ onClose }) => {
  return (
    <Stack
      p={4}
      display={{ md: "none" }}
      bg="transparent"
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} onClose={onClose} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, to, onClose }: NavItem & { onClose: () => void }) => {

  const closeAndScroll = () => {
    onClose();
    scroller.scrollTo(to, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        onClick={closeAndScroll}
        as={ScrollLink}
        to={to}
        smooth={true}
        duration={500}
        align={"center"}
        cursor="pointer"
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
          fontSize="6vw"
          _hover={{
            color: "red.100",
          }}
        >
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};

interface NavItem {
  label: string;
  active?: boolean;
  to: string;
}

interface MobileNavProps {
  onClose: () => void;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "EL PROYECTO",
    to: "ElProyecto",
  },
  {
    label: "BENEFICIOS",
    to: "Beneficios",
  },
  {
    label: "DESCARGA LA APP",
    to: "Sin3dDownloadApp",
  },
  {
    label: "PREGUNTAS FRECUENTES",
    to: "Preguntas",
  },
];
