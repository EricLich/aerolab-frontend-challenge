
const globalTheme = {
  colors: {
    neutrals: {
      "0": '#FFFFF',
      "100": "#F5F9FF",
      "200": "#E6EDF7",
      "300": "#252F3D",
      "500": "#8FA3BF",
      "600": "#7C899C",
      "900": "#252F3D",
    },
    brand: {
      default: "linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)",
      hover: "linear-gradient(102.47deg, #1667D9 -5.34%, #F279F2 106.58%)",
      light: "#E5F0FF",
      light2: "#CCE1FF",
    },
    green: {
      default: "#29CC74",
      light: "#CCFFE3",
    },
    red: {
      default: "#E07F4F",
      light: "#FFDFD9",
    },
    specials: {
      illustrationBg: "linear-gradient(102.47deg, #7296EB -5.34%, #EAC0E9 106.58%, #EAC0E9 106.58%)",
      sectionBg50Opacity: "linear-gradient(102.47deg, rgba(23, 111, 235, 0.5) -5.34%, rgba(255, 128, 255, 0.5) 106.58%)",
      aerolab: "linear-gradient(180deg, #FF8800 0%, #FF6600 100%)",
    }
  },
  fontSize: {
    desktop: {
      hero: "200px",
      titleMid: "48px",
      titleSmall: "32px",
      default: "18px",
      defaultCaps: "18px",
      defaultLight: "18px",
      defaultSmall: "14px",
      defaultSmallCaps: "14px",
    },
    tablet: {
      hero: "120px",
      titleMid: "64px",
      titleSmall: "28px",
      default: "16px",
      defaultCaps: "16px",
      defaultLight: "16px",
      defaultSmall: "14px",
      defaultSmallCaps: "14px",
    },
    mobile: {
      hero: "96px",
      titleMid: "32px",
      titleSmall: "24px",
      default: "16px",
      defaultCaps: "16px",
      defaultLight: "16px",
      defaultSmall: "14px",
      defaultSmallCaps: "14px",
    }
  },
  fontWeight: {
    hero: 900,
    titleMid: 900,
    titleSmall: 900,
    default: 500,
    defaultCaps: 500,
    defaultLight: 400,
    defaultSmall: 500,
    defaultSmallCaps: 500,
  },
  lineHeight: {
    hero: "80%",
    titleMid: "80%",
    titleSmall: "100%",
    default: "150%",
    defaultCaps: "150%",
    defaultLight: "150%",
    defaultSmall: "150%",
    defaultSmallCaps: "150%",
  },
  letterSpacing: {
    hero: "0%",
    titleMid: "0%",
    titleSmall: "0%",
    default: "0%",
    defaultCaps: "24%",
    defaultLight: "0%",
    defaultSmall: "0%",
    defaultSmallCaps: "5%",
  },
  breakpoints: {
    desktop: "1024px",
    tablet: "768px",
    mobile: "375px",
  }
}

export default globalTheme;