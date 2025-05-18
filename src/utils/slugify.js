// utils/slugify.js
export function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD') // Normalize Unicode (for accents)
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-z0-9 -]/g, '') // Remove special characters
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/-+/g, '-'); // Remove multiple -
}

export function unslugify(slug) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
