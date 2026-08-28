import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const defaultDescription = 'Shop healthy indoor and outdoor plants, seeds, planters and plant-care fertilizers from GreenNest.';

const pages = {
  '/': ['GreenNest | Indoor Plants, Seeds, Pots & Plant Care', defaultDescription],
  '/indoor': ['Indoor Plants Online | GreenNest', 'Discover air-purifying, low-maintenance and decorative indoor plants for healthier, greener living spaces.'],
  '/outdoor': ['Outdoor Garden Plants | GreenNest', 'Shop flowering plants, ferns, succulents and garden-ready outdoor plants from GreenNest.'],
  '/seeds': ['Garden Seeds & Growing Kits | GreenNest', 'Grow vegetables, flowers and herbs with quality seeds and convenient starter kits.'],
  '/pots': ['Plant Pots & Planters | GreenNest', 'Find ceramic, tabletop, wall-mounted and outdoor planters for every plant and space.'],
  '/fertilizer': ['Plant Fertilizers & Soil Care | GreenNest', 'Support healthy plant growth with potting mix, compost, liquid feed and garden fertilizers.'],
  '/about': ['About GreenNest | Plants for Every Home', 'Learn how GreenNest helps make homes and gardens greener with quality plants and thoughtful care.'],
  '/contact': ['Contact GreenNest | Plant Support', 'Contact GreenNest for help choosing plants, plant-care products or assistance with your order.'],
  '/cart': ['Your Shopping Cart | GreenNest', 'Review the plants, seeds, pots and plant-care products saved in your GreenNest cart.'],
  '/wishlist': ['Your Plant Wishlist | GreenNest', 'Review your favourite GreenNest plants, seeds, pots and plant-care products.'],
  '/checkout': ['Secure Checkout | GreenNest', 'Complete your GreenNest order for plants, seeds, pots and plant-care products.'],
  '/search': ['Search Plants & Garden Products | GreenNest', 'Search the GreenNest catalog for plants, seeds, pots, fertilizer and plant-care products.'],
};

function setMeta(selector, attribute, value) {
  const element = document.head.querySelector(selector);
  if (element) element.setAttribute(attribute, value);
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const [title, description] = pages[pathname] || ['Page Not Found | GreenNest', defaultDescription];
    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
  }, [pathname]);

  return null;
}
