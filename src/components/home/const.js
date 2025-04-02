import { ICON } from '../icon';
import { createI18n } from '@/utils/i18n';
export const strings = {
  en: {
    Variety: 'Variety of Designs',
    Protect: 'Timeless Craftsmanship',
    PM: 'Premium Materials',
    Delivery: 'Worldwide Delivery',
    VarietyDes: 'Explore a wide range of sculptures, from classical to modern styles, crafted to suit any space.',
    ProtectDes: 'Handcrafted by skilled artisans, each piece embodies tradition and precision.',
    PMDes: 'Using the finest stone and materials to ensure durability and elegance.',
    DeliveryDes: 'Safely delivering exquisite sculptures to your doorstep, anywhere in the world.',
    ClientSays: "What our clients say",
    HomeBlogs: "Our blogs",
    ViewAllTopStories: "View all top stories",
    ReadMore: "Read more",
  },
};

export const i18nHome = createI18n(strings);
export const FEATURES = [
  {
    icon: ICON.Variety,
    title: i18nHome.getText().Variety,
    description: i18nHome.getText().VarietyDes,
    width: 50,
  },
  {
    icon: ICON.Protect,
    title: i18nHome.getText().Protect,
    description: i18nHome.getText().ProtectDes,
    width: 40,
  },
  {
    icon: ICON.PremiumMaterials,
    title: i18nHome.getText().PM,
    description: i18nHome.getText().PMDes,
    width: 50,
  },
  {
    icon: ICON.Delivery,
    title: i18nHome.getText().Delivery,
    description: i18nHome.getText().DeliveryDes,
    width: 50,
  },
];


