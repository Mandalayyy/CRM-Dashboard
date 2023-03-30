module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
      extend: {
        fontFamily: {
          'poppins':  ['Poppins', 'sans-serif']
        },
        colors: {
          'secondary': '#9197B3',
          'main': '#292D32',
          'list-bg': '#5932EA',
          'active-text': '#008767',
          'active': '#16C098',
          'active-bg': '#16C09861',
          'active-border': '#00B087',
          'inactive-text': '#DF0404',
          'inactive-bg': '#FFC5C5',
          'inactive-border': '#DF0404',
          'section-bg': '#F7F4FF',
          'search-bg': '#F9FBFF',
          'header-text': '#B5B7C0',
          'border': '#EEEEEE',
          'pagination': '#404B52',
          'pagination-bg': '#F5F5F5'
        },
        spacing: {
         '76.5': '19.125rem',
         '62.5': '15.625rem',
         '300': '75rem',
         '242': '60.5rem',
         '203': '50.75rem',
         '54': '13.5rem',
         '9.5': '2.375rem',
         '43': '10.75rem',
         '32.75': '8.1875rem',
         '39': '9.75rem',
         '51.75': '12.9375rem',
         '38': '9.5rem',
         '28': '7rem',
         '3.5': '0.875rem',
         '1.5': '0.375rem',
         '2.25': '0.5625rem',
         '10.5': '2.625rem',
         '4.5': '1.125rem'
        },
        backgroundImage:{
         'search': '../img/search.png'
        },
        borderRadius:{
          '2.5': '0.625rem'
        },
        backgroundSize: {
       
        },
        lineHeight:{
          '5.25': '1.3125rem',
          '4.5': '1.125rem'
        },
        letterSpacing:{
          '-0.1': '-.01em',
          '0.1': '.01em'
        },
        fontSize:{
          '5.5': '1.375rem'
        }
  
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  