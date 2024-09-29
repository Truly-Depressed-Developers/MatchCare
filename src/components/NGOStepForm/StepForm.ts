export type NGOFormData = {
  contact: NGOContactData;
  regAddress: NGORegAddressData;
  officeAddress: NGOOfficeAddressData;
  registrationData: NGORegistrationData;
  areas: NGOAreaData; // multi-select
  recipients: NGORecipientData; // multi-select
  description: NGODescriptionData;
};

export type NGOContactData = {
  name: string;
  location: string;
  email: string;
  phone: string;
  website?: string;
};
export type NGORegAddressData = {
  street: string;
  postalCode: string;
  city: string;
  province: string;
  county: string;
};
export type NGOOfficeAddressData = {
  street?: string;
  postalCode?: string;
  city?: string;
  province?: string;
  county?: string;
};
export type NGORegistrationData = {
  krs: string;
  regon: string;
  nip: string;
  year: string;
  legalForm: string;
};
export type NGOAreaData = string[];
export type NGORecipientData = string[];
export type NGODescriptionData = string;

export type NGOSubTypes =
  | NGOContactData
  | NGORegAddressData
  | NGOOfficeAddressData
  | NGORegistrationData
  | NGOAreaData
  | NGORecipientData
  | NGODescriptionData;
