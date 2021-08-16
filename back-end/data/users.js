import bcrypt from 'bcryptjs';
const users = [
  {
    name: 'Admin User',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Akel hosni',
    email: 'akel@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Zahra gratti',
    email: 'zahra@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
