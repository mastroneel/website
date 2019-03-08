const theme = {
  color: {
    dark: '#180035',
    grey: '#554971',
    blue: '#312480',
    pink: '#FF328D',
    yellow: '#FFD53D',
  },
  header: {
    height: '8rem',
    background: '#FFF',
  },
  text: {
    headingSizes: ['4.8rem', '4rem', '3.2rem', '2.4rem', '1.8rem', '1.4rem'],
    baseSize: '1.8rem',
    fontFamily: 'Muli, sans-serif',
  },
  breakpoints: {
    sm: '580px',
    md: '860px',
    lg: '1140px',
    xl: '1348px',
  },
  spacing: {
    sm: '2em',
    md: '4.2em',
    lg: '6.5em',
    xl: '9.2em',
  },
}

const devices = {
  mobile: `max-width: ${ theme.breakpoints.sm }`,
  tablet: `max-width: ${ theme.breakpoints.md }`,
  desktopSm: `max-width: ${ theme.breakpoints.lg }`,
  desktop: `max-width: ${ theme.breakpoints.xl }`,
}

export { theme as default, devices }
