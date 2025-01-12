/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        104: "26rem", // 104 = 26rem
        112: "28rem", // 112 = 28rem
        128: "32rem", // 128 = 32rem
        144: "36rem", // 144 = 36rem
        160: "40rem", // 160 = 40rem
        176: "44rem", // 176 = 44rem
        192: "48rem", // 192 = 48rem
        208: "52rem", // 208 = 52rem
        224: "56rem", // 224 = 56rem
        240: "60rem", // 240 = 60rem
        256: "64rem"
      },
      height: {
        104: "26rem", // 104 = 26rem
        112: "28rem", // 112 = 28rem
        128: "32rem", // 128 = 32rem
        144: "36rem", // 144 = 36rem
        160: "40rem", // 160 = 40rem
        176: "44rem", // 176 = 44rem
        192: "48rem", // 192 = 48rem
        208: "52rem", // 208 = 52rem
        224: "56rem", // 224 = 56rem
        240: "60rem", // 240 = 60rem
        256: "64rem"
      },
      colors: {
        "black-portfolio": "#010d1b",
        "blue-portfolio": "#002e64",
        "lightblue-portfolio": "#0075ff",
        "baby-blue": "#7cb8ff",
        "light-gray": "#b2b2b2"
      },
      fontFamily: {
        Poppins: "Poppins, sans-serif",
      },

      fontSize: {
        "5.5xl": "54px",
        "3.5xl": "34px",
      },
      letterSpacing: {
        4: "4px",
        6: "6px",
      },
    },
  },
  plugins: [],
};
