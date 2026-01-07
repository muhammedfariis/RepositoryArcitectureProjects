import bcrypt from "bcrypt";
let salt = 10;
export const hashingPassword = async (password) => {
  return await bcrypt.hash(password, salt);
};

export const comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};
