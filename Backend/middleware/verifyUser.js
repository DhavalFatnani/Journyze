import jwt from "jsonwebtoken";

const verifyUser = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Auth Error" });

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Access Denied!" });
      }
      req.user = user;
      next();
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({ message: "Invalid Token" });
  }
};

export default verifyUser;
