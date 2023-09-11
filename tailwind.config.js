/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      semi: "Barlow Semi Condensed",
      playfair: "Playfair Display",
    },
    transitionProperty: {
      width: "width",
    },
    fontSize: {
      sxs: "0.65rem",
      sm: "0.8rem",
      md: "0.85rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "6xl": "4rem",
      "11xl": "11rem",
    },
    letterSpacing: {
      1: "1px",
      2: "2px",
    },
    extend: {
      fontWeight: ["active"],
      backgroundImage: {
        "header-bg":
          "url(https://www.cherifaistesvalises.com/wp-content/uploads/2021/12/5-course-romantic-candlelight-dinner.jpg)",
        "header-bg-2":
          "url(https://media.cntraveler.com/photos/5c128e050cab234ddca6c7ae/16:9/w_2560,c_limit/The-St.-Regis-Bahia-Beach-Resort-Puerto-Rico__2018_Casa-Grande-2.jpg)",
        "suit-bg":
          "url(https://i0.wp.com/koloapp.in/magazine/wp-content/uploads/2022/07/10-Modern-Mediterranean-Style-Interior-Design-Ideas.png?resize=840%2C525&ssl=1)",
      },
      boxShadow: {
        "0xl": "0px 2px 24px rgba(0, 0, 0, 0.25)",
      },
      spacing: {
        700: "700px",
        600: "600px",
        500: "500px",
        1800: "1800px",
        120: "120px",
        "36%": "36%",
        "28%": "28%",
        1: "1px",
        0.5: "0.5px",
        "2px": "2px",
        "4px": "4px",
        "-20px": "-20px",
        "70%": "70%",
        "65%": "65%",
        "800px": "800px",
        "50%": "50%",
        "60%": "60%",
        "303.8px": "303.8px",
        "55-": "-55px",
      },
      lineHeight: {
        66: "66px",
        20: "20px",
        "10rem": "10rem",
      },
      borderWidth: {
        default: "1px",
        1: "1px",
      },
      colors: {
        "light-blue": "rgb(199, 224, 224)",
      },
    },
  },
  plugins: [],
};
