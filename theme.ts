import { extendTheme } from '@chakra-ui/react';
import { theme as defaultTheme } from '@chakra-ui/theme';
import { mode, Styles } from '@chakra-ui/theme-tools';

const styles: Styles = {
  global: (props: any) => ({
    fontFamily: 'body',
    'html, body': {
      fontSize: 'md',
      color: 'gray.800',
      lineHeight: 'base',
      overflowX: 'hidden',
    },
    'h1, h2, h3, h4, h5, h6': {
      color: 'gray.700',
    },
    p: {
      color: 'gray.700',
      fontSize: '18px',
    },
    '*::placeholder': {
      color: mode('gray.400', 'whiteAlpha.400')(props),
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'whiteAlpha.300')(props),
      wordWrap: 'break-word',
    },
    fontFeatureSettings: `"pnum"`,
    fontVariantNumeric: 'proportional-nums',
  }),
};
//
const theme = extendTheme({
  ...defaultTheme,
  fonts: {
    ...defaultTheme.fonts,
    body: `"Source Sans Pro",${defaultTheme.fonts.body}`,
    heading: `"Source Sans Pro",${defaultTheme.fonts.heading}`,
  },

  // TODO - UPDATE COLORS
  colors: {
    ...defaultTheme.colors,
    black: '#131217',
    charcoal: '#263238',
    primaryButton: '#EB214E',
    brightBlue: '#2684FF',
    brand: {
      main: '#0B0B89',
      accent: '#EB214E',
    },
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles,
});

export default theme;
