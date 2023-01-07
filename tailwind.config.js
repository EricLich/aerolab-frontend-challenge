/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutral0": '#FFFFF',
        "neutral100": "#F5F9FF",
        "neutral200": "#E6EDF7",
        "neutral300": "#252F3D",
        "neutral500": "#8FA3BF",
        "neutral600": "#7C899C",
        "neutral900": "#252F3D",
        "bradDefault": "linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)",
        "bradHover": "linear-gradient(102.47deg, #1667D9 -5.34%, #F279F2 106.58%)",
        "bradLight": "#E5F0FF",
        "bradLight2": "#CCE1FF",
        "greenDefault": "#29CC74",
        "greenLight": "#CCFFE3",
        "redDefault": "#E07F4F",
        "redLight": "#FFDFD9",
        "specialIllustrationBg": "linear-gradient(102.47deg, #7296EB -5.34%, #EAC0E9 106.58%, #EAC0E9 106.58%)",
        "specialSectionBg50Opacity": "linear-gradient(102.47deg, rgba(23, 111, 235, 0.5) -5.34%, rgba(255, 128, 255, 0.5) 106.58%)",
        "specialAerolab": "linear-gradient(180deg, #FF8800 0%, #FF6600 100%)",
      },
      fontSize: {
        "lgHero": "200px",
        "lgTitleMid": "48px",
        "lgTitleSmall": "32px",
        "lgDefault": "18px",
        "lgDefaultCaps": "18px",
        "lgDefaultLight": "18px",
        "lgDefaultSmall": "14px",
        "lgDefaultSmallCaps": "14px",
        "mdHero": "120px",
        "mdTitleMid": "64px",
        "mdTitleSmall": "28px",
        "mdDefault": "16px",
        "mdDefaultCaps": "16px",
        "mdDefaultLight": "16px",
        "mdDefaultSmall": "14px",
        "mdDefaultSmallCaps": "14px",
        "smHero": "96px",
        "smTitleMid": "32px",
        "smTitleSmall": "24px",
        "smDefault": "16px",
        "smDefaultCaps": "16px",
        "smDefaultLight": "16px",
        "smDefaultSmall": "14px",
        "smDefaultSmallCaps": "14px",
      },
      fontWeight: {
        "weightHero": "900",
        "weightTitleMid": "900",
        "weightTitleSmall": "900",
        "weightDefault": "500",
        "weightDefaultCaps": "500",
        "weightDefaultLight": "400",
        "weightDefaultSmall": "500",
        "weightDefaultSmallCaps": "500",
      },
      lineHeight: {
        "hero": "80%",
        "titleMid": "80%",
        "titleSmall": "100%",
        "default": "150%",
        "defaultCaps": "150%",
        "defaultLight": "150%",
        "defaultSmall": "150%",
        "defaultSmallCaps": "150%",
      },
      letterSpacing: {
        "hero": "0%",
        "titleMid": "0%",
        "titleSmall": "0%",
        "default": "0%",
        "defaultCaps": "24%",
        "defaultLight": "0%",
        "defaultSmall": "0%",
        "defaultSmallCaps": "5%",
      }
    },
  },
  plugins: [],
}