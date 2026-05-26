import type { Person } from "../types/Person";

export const people: Person[] = [
  {
    id: 1,

    fullName: "Dhan Bahadur Thapa",

    generationLevel: 1,

    profession: "Farmer",

    address: {
      district: "Siraha",
      municipality: "Lahan",
      ward: 5,
    },

    dob: "1950-03-12",

    mobile: "9811111111",

    email: "dhan@example.com",

    isDeceased: true,
  },

  {
    id: 2,

    fatherId: 1,

    fullName: "Hari Kumar Thapa",

    generationLevel: 2,

    profession: "Teacher",

    address: {
      district: "Siraha",
      municipality: "Lahan",
      ward: 5,
    },

    dob: "1975-06-18",

    mobile: "9822222222",

    isDeceased: false,
  },

  {
    id: 3,

    fatherId: 2,

    fullName: "Ram Kumar Thapa",

    generationLevel: 3,

    profession: "Software Engineer",

    address: {
      district: "Kathmandu",
      municipality: "Kathmandu Metro",
      ward: 10,
    },

    dob: "2002-01-22",

    mobile: "9833333333",

    email: "ram@example.com",

    isDeceased: false,
  },

  {
    id: 4,

    fatherId: 2,

    fullName: "Sita Kumari Thapa",

    generationLevel: 3,

    profession: "Doctor",

    address: {
      district: "Bhaktapur",
      municipality: "Madhyapur Thimi",
      ward: 3,
    },

    dob: "2005-09-10",

    isDeceased: false,
  },
];