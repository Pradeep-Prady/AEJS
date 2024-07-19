/** @type {import('tailwindcss').Config} */
module.exports = {
  
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: { 
      extend: {
        colors: {
          primary: "#14286A",
          myBlue: "#2645AB",
          txtPrime: "#DFE2FB",
          myGreen: "#87AB26",
          myWhite: "#E3E3E5",
          myLW:"#DFE2FB",
          myLG: "#A8D532",
        },
      },
    },
    plugins: [],
  };
   