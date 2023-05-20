import { extendTheme } from "@chakra-ui/react";

const colors = {
  gray: {
    100: "#F7F7F7",
    200: "#F1F1F1",
    300: "#A1A1A1",
    400: "#131313",
    500: "#171717",
    600: "#1F1F1F",
  },
  red: {
    100: "#E20613",
    200: "#a4040e",
  },
  green: {
    100: "#1D9666",
    200: "#659A85",
    300: "#246F51",
  },
}

const theme = extendTheme({
  components: {
    Drawer: {
      baseStyle: {
        dialog: {
          bg: "transparent",
        },
      },
    },
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: 'Acumin Pro, sans-serif',
    body: 'Acumin Pro, sans-serif',
  },
  colors,
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? 
        `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='41' height='41' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform=''%3E%3Crect width='100%25' height='100%25' fill='rgba(0, 0, 0,1)'/%3E%3Ccircle cx='10' cy='20' r='1' stroke-width='0' fill='rgba(255, 245, 247,1)'/%3E%3Ccircle cx='30' cy='20' r='1' stroke-width='0' fill='rgba(255, 245, 247,1)'/%3E%3Ccircle cx='30' cy='20' r='1' stroke-width='0' fill='rgba(255, 245, 247,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ")` 
        : 
        `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='41' height='41' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform=''%3E%3Crect width='100%25' height='100%25' fill='rgba(255, 255, 255,1)'/%3E%3Ccircle cx='10' cy='20' r='1' stroke-width='0' fill='rgba(217, 217, 217,1)'/%3E%3Ccircle cx='30' cy='20' r='1' stroke-width='0' fill='rgba(217, 217, 217,1)'/%3E%3Ccircle cx='30' cy='20' r='1' stroke-width='0' fill='rgba(217, 217, 217,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ")`,
        bgRepeat: "repeat",
        minHeight: "100vh",
        width: "100%",
      },
    }),
  },
});

export default theme;