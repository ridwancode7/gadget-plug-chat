export const WHATSAPP_NUMBER = "2348000000000"; // placeholder
export const PHONE_DISPLAY = "+234 800 000 0000";
export const BUSINESS_NAME = "A 3 Prime Gadgets";
export const LOCATION = "Mowe, Ogun State, Nigeria";

export const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
