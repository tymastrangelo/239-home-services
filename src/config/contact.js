// Centralized contact information used across the site
export const CONTACT = {
  phones: [
    { raw: '+2395722025', display: '(239) 572-2025' },
    { raw: '+2395953269', display: '(239) 595-3269' },
  ],
  email: 'info@239homeservices.com',
};

export function tel(href) {
  return `tel:${href}`;
}

export function formatPhoneList(phones, separator = ' • ') {
  return phones.map(p => p.display).join(separator);
}
