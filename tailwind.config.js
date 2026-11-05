module.exports = Object.assign({
      theme: {
        extend: {
          colors: {
            ink:   { DEFAULT: '#22262b', soft: '#4a5058', mute: '#767c84' }, // charcoal slate
            paper: { DEFAULT: '#faf7f1', deep: '#f2ede3' },                   // warm cream
            rule:  '#e2dccf',
            accent:{ DEFAULT: '#7a2131', dark: '#5c1824', tint: '#f5e9e8' }  // muted burgundy
          },
          fontFamily: {
            serif: ['Newsreader', 'Georgia', 'serif'],
            sans:  ['Inter', 'system-ui', 'sans-serif'],
          },
        },
      },
    },{content:['./index.html']});