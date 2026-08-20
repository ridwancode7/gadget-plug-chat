export const WHATSAPP_NUMBER = "2348132965636";
export const PHONE_DISPLAY = "+234 813 296 5636";
export const BUSINESS_NAME = "RGC Gadgets";
export const LOCATION = "Mowe, Ogun State, Nigeria";

export const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
