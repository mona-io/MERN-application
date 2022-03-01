import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },

  {
    name: "Mona Aziminia",
    email: "monaaziminia@example.com",
    password: bcrypt.hashSync("123456", 10),
  },

  {
    name: "Omid Rohani",
    email: "omidrohani@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];


export default users