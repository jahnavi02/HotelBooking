const jwt = require("jsonwebtoken");
const { createError } = require("../utils/error.js");
const User = require("../models/userModel")


// Function to generate JWT token
exports.generateToken = (userId, isAdmin = false) => {
    const payload = {
        userId: userId,
        isAdmin: isAdmin
    };

    // Sign the payload with a secret key and set expiration time
    const token = jwt.sign(payload, process.env.JWT, { expiresIn: '1h' });

    return token;
};


module.exports.verifyToken = (token) => {
  return new Promise((resolve, reject) => {
      jwt.verify(token.split(' ')[1], process.env.JWT, (err, decoded) => {
          if (err) {
              reject(err);
          } else {
              resolve(decoded);
          }
      });
  });
};

// module.exports.verifyToken = (req, res, next) => {
//   const token = req.headers.authorization;
//   if (!token) {
//     return next(createError(401, "You are not authenticated!"));
//   }

//   jwt.verify(token, process.env.JWT, (err, user) => {
//     if (err) return next(createError(403, "Token is not valid!"));
//     req.user = user;
//     next();
//   });
// };

exports.verifyUser = async (req, res, next) => {
  try {
      const token = req.headers.authorization;

      if (!token) {
          return res.status(401).json({ message: 'Token is missing' });
      }

      const decoded = await exports.verifyToken(token);
      // console.log(decoded);

      // Retrieve user from database using the user ID in the token
      const user = await User.findById(decoded.userId);

      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      req.user = user; // Attach user object to request
      next(); // Proceed to next middleware
  } catch (error) {
      console.error(error);
      return res.status(401).json({ message: 'Invalid token' });
  }
};



module.exports.verifyAdmin = (req, res, next) => {
  // verifyToken(req, res, next, () => {
  //   if (req.user.isAdmin) {
  //     next();
  //   } else {
  //     return next(createError(403, "You are not authorized!"));
  //   }
  // });

  const user = req.user; // Assuming the user object is attached to the request

    if (!user.isAdmin) {
        return res.status(403).json({ message: 'Admin access required' });
    }

    next();

};