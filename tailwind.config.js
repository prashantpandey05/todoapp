const theme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors:{
            "loadingBg" : "#e4f0f0"
        },

        backgroundImage: (theme) =>({
            'contactIMG' : "url('/src/Assets/Images/ContactUsBG.jpg')"
        }),
      maxWidth:
          {
              "8xl": '88rem',
              "9xl": '96rem',
              "10xl": '104rem',
              "11xl": '112rem',
              "12xl": '120rem'
          }

    },
  },
    plugins: [
        // ...
        require('@tailwindcss/forms'),
    ]
}