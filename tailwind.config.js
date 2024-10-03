// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      colors: {
        'discord-gray': '#36393f',
        'discord-dark': '#202225',
        'discord-light': '#2f3136',
        'discord-selected': '#393c43',
        'discord-hover': '#34373c',
        'discord-input': '#40444b',
        'discord-green': '#3ba55d',
      },
      animation: {
        'gradient-bg': 'gradient 15s ease infinite',
      },
    },
  },
  plugins: [],
}

