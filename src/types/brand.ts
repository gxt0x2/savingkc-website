export interface BrandInfo {
  name: string;
  shortName: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  domain: string;
  tagline: string;
  description: string;
  foundedYear: number;
  ownerName: string;
  serviceArea: string;
}
