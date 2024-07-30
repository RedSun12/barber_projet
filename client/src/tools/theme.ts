import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'url(/back2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        margin: 0,
        color: '#f8f9fb',
        minHeight: '100vh',
      },
      a: {
        color: '#f8f9fb',
        _hover: {
          textDecoration: 'underline',
        },
      },
      h1: {
        color: '#f8f9fb',
      },
      h2: {
        color: '#f8f9fb',
      },
      p: {
        color: '#f8f9fb',
      },
    },
  },
     fonts: {
        heading: `'Tektur', serif`,
        body: `'Tektur', serif`,
      },
});

export default theme;
