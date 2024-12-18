export type Program = {
  programName: string;
  diploma: string;
  specializations: string[];
  duration: number;
  description: string;
};

export type RegistrationDates = {
  start: string;
  end: string;
};

export type FormValues = {
  name: string;
  abbreviation: string;
  location: string;
  establishmentYear: number;
  website: string;
  description: string;
  rating: number;
  registrationDates: RegistrationDates;
  fees: number;
  programs: Program[];
};
