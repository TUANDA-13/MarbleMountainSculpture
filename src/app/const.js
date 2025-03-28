import { createI18n } from '@/utils/i18n';

export const strings = {
  en: {
    Title: 'marblemountainsculpture',
    Home: 'Home',
    Blog: 'Blogs',
    Product: 'Products',
    Help: 'Help',
    ContactUs: 'Contact Us',
  },
};

const i18n = createI18n(strings);

export const NAV_ITEMS = [
  {
    title: i18n.getText().Home,
    path: '/',
  },
  {
    title: i18n.getText().Blog,
    path: '/blog',
  },
  {
    title: i18n.getText().Product,
    path: '/product',
  },
  {
    title: i18n.getText().Help,
    path: '/help',
  },
  {
    title: i18n.getText().ContactUs,
    path: '/contact-us',
  },
];
