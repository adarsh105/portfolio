module.exports = {
  siteTitle: 'Adarsh Singh Rana | Web Developer',
  siteDescription:
    'Adarsh Singh Rana is an incoming Web Developer, based in India, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Adarsh Singh Rana, Adarsh, rana, adarshrana, software engineer, web developer, javascript, script, delhi, new delhi, bit, Dwarka',
  siteUrl: 'https://adarsh105.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Adarsh Singh Rana',
  location: 'Dwarka, India',
  email: 'adarshrana105@gmail.com',
  github: 'https://github.com/adarsh105',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/adarsh105',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/adarsh-rana-518ab81b1/',
    },
  
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ad_arsh8706/?hl=en',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
