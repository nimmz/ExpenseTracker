
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  //const token = req.headers.authorization;
//   if (!token) return res.status(401).json({ message: 'Unauthorized' });

//   try {
//     // const decoded = jwt.verify(token, 'secretkey');
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
// console.log("decoded:", decoded);
//     req.user = decoded;
//     next();
//   } catch {
//     res.status(401).json({ message: 'Invalid token' });
//   }

//   const tokenHeader = req.headers.authorization;
// if (!tokenHeader) {
//   return res.status(401).json({ message: 'Unauthorized' });
// }

try {
  // Expect header like: "Bearer <token>"
const authHeader = req.headers.authorization;

if (!authHeader || !authHeader.startsWith("Bearer ")) {
  return res.status(401).json({ message: "Unauthorized" });
}

const token = authHeader.split(" ")[1];  // 👈 THIS extracts the real JWT

console.log("ACTUAL TOKEN:", token);
  // const token = tokenHeader.startsWith('Bearer ')
  //   ? tokenHeader.slice(7) // remove "Bearer "
  //   : tokenHeader;
console.error('token', token);
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  console.log('decoded:', decoded);
  req.user = decoded;
  next();
} catch (err) {
  console.error('JWT error:', err.message);
  res.status(401).json({ message: 'Invalid token' });
}
};
