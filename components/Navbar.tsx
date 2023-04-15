import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Image,
  Link,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  SunIcon,
  MoonIcon,
} from "@chakra-ui/icons";
import { FaApple, FaGooglePlay } from "react-icons/fa";

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
            icon={isDarkMode ? <SunIcon /> : <MoonIcon />}
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

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("blackAlpha.800", "white");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const linkActiveColor = useColorModeValue("red.600", "red.600");
  const linkActiveUnderline = "2px";

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link
            p={2}
            href={navItem.href ?? "#"}
            fontSize={"sm"}
            fontWeight={600}
            whiteSpace='nowrap'
            color={linkColor}
            fontFamily={"'Acumin Variable Concept', sans-serif"}
            borderBottom={navItem.active ? linkActiveUnderline : ""}
            borderColor={navItem.active ? linkActiveColor : ""}
            _hover={{
              textDecoration: "none",
              color: linkHoverColor,
              borderBottom: linkActiveUnderline,
              borderColor: linkActiveColor,
            }}
          >
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }: NavItem) => {
  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
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
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "EL PROYECTO",
    href: "#",
  },
  {
    label: "BENEFICIOS",
    href: "#",
  },
  {
    label: "DESCARGA LA APP",
    href: "#",
  },
  {
    label: "PREGUNTAS FRECUENTES",
    href: "#",
  },
];
