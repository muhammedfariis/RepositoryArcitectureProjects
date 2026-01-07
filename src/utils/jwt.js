import jwtoken from "jsonwebtoken";

export const tokenCreation = (payload) => {
  return jwtoken.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });
};

export const tokenverify = (tokens) =>{
  return jwtoken.verify(tokens , process.env.JWT_SECRET)
}