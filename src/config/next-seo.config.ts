import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  title: 'Home',
  titleTemplate: 'Mehraaj | %s',
  defaultTitle: 'Mehraaj',
  description: 'Book Appointments for your health related queries and stay healthy with me',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://localhost:3000/',
    siteName: 'SiteName',
    profile: {
      firstName: 'Mehraaj',
      lastName: 'lastName',
      username: 'mehraaj',
    }
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default config;