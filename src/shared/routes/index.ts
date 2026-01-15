export const ROUTES = {
  HOME: "/",
  GENDER_REVEAL: "/gender-reveal",
  NATIONALIZE: "/nationalize",
  COUNTER: "/counter",
  SPACE_MISSION: "/space-mission",
  IDEAL_WEIGHT: "/ideal-weight",
  PROFILE: "/profile",
  ABOUT: "/about",
  CONTACTS: "/contacts",
  PROFILE_DATA: "/profile/data",
  PROFILE_SETTINGS: "/profile/settings",
  
  NOT_FOUND: "*",
  PRODUCT: (id: string | number) => `/products/${id}`,
} as const;
